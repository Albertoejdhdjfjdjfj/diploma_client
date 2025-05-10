import { GET_PROFILE_DATA } from '../constants/graphql/queries';
import Cookies from 'js-cookie';
import { ApolloClient, ApolloError, NormalizedCacheObject } from '@apollo/client';
import { UserInfo } from '../interfaces/game/UserInfo';

export async function fetchUserInfo(
  client: ApolloClient<NormalizedCacheObject>
): Promise<UserInfo> {
  try {
    const { data } = await client.query<{ getProfileData: UserInfo }>({
      query: GET_PROFILE_DATA,
      context: {
        headers: {
          Authorization: Cookies.get('token')
        }
      },
      fetchPolicy: 'no-cache'
    });

    return data.getProfileData;
  } catch (error) {
    const apolloError = error as ApolloError;
    throw new Error(apolloError.message);
  }
}
