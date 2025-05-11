import { takeEvery, put, all, delay, call } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import { Action } from '../../assets/interfaces/redux/Action';
import { SEND_NOTIFICATION } from '../reducers/notificationsReducer/actions/actionsTypes';
import { FETCH_USER_INFO } from '../reducers/userReducer/actions/actionsTypes';
import { setNotification } from '../reducers/notificationsReducer/actions/actions';
import { fetchUserInfo } from '../../assets/funtions/reduxFunctions';
import { client } from '../../graphql/ApolloClient';
import { UserInfo } from '../../assets/interfaces/game/UserInfo';
import { setUserInfo } from '../reducers/userReducer/actions/actions';

export function* rootSaga() {
  yield all([watchSendingNotification(), watchGettingUserInfo()]);
}

function* watchSendingNotification() {
  yield takeEvery(SEND_NOTIFICATION, settingNotification);
}

function* watchGettingUserInfo() {
  yield takeEvery(FETCH_USER_INFO, gettingUserInfo);
}

function* settingNotification(action: Action<string>) {
  yield put(setNotification(action.payload));
  yield delay(4000);
  yield put(setNotification(''));
}

function* gettingUserInfo() {
  try {
    const userInfo: UserInfo = yield call(fetchUserInfo, client);
    yield put(setUserInfo(userInfo));
  } catch {
    yield put(setUserInfo(null));
    Cookies.remove('token');
  }
}
