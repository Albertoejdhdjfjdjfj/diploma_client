"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var js_cookie_1 = require("js-cookie");
var react_redux_1 = require("react-redux");
var react_router_dom_2 = require("react-router-dom");
var client_1 = require("@apollo/client");
var actions_1 = require("./redux/reducers/gameReducer/actions/actions");
var actions_2 = require("./redux/reducers/userReducer/actions/actions");
var subscriptions_1 = require("./assets/constants/graphql/subscriptions");
var queries_1 = require("./assets/constants/graphql/queries");
var CreateGameRoom_1 = require("./pages/CreateGameRoom/CreateGameRoom");
var Main_1 = require("./pages/Main/Main");
var SignUp_1 = require("./pages/SignUp/SignUp");
var LogIn_1 = require("./pages/LogIn/LogIn");
var PopUpWindow_1 = require("./assets/components/PopUpWindow/PopUpWindow");
var Game_1 = require("./pages/Game/Game");
require("./App.css");
var App = function () {
    var navigate = react_router_dom_2.useNavigate();
    var dispatch = react_redux_1.useDispatch();
    var token = js_cookie_1["default"].get('token');
    var content = react_redux_1.useSelector(function (state) { return state.notifications.content; });
    var getActiveGame = client_1.useLazyQuery(queries_1.GET_ACTIVE_GAME, {
        context: {
            headers: {
                Authorization: token
            }
        },
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'no-cache'
    })[0];
    var activeGame = client_1.useSubscription(subscriptions_1.ACTIVE_GAME, {
        variables: { token: token }
    }).data;
    var handleActiveGame = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getActiveGame()];
                case 1:
                    data = (_a.sent()).data;
                    if (data && data.getActiveGame.gameId) {
                        dispatch(actions_1.setActiveGameId(data.getActiveGame.gameId));
                        navigate('/game');
                        return [2 /*return*/];
                    }
                    dispatch(actions_1.setActiveGameId(null));
                    navigate('/');
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        handleActiveGame();
    }, [activeGame]);
    react_1.useEffect(function () {
        dispatch(actions_2.fetchUserInfo());
    }, []);
    return (React.createElement("div", { className: "App" },
        content ? React.createElement(PopUpWindow_1["default"], { content: content }) : '',
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Main_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/game", element: React.createElement(Game_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/logIn", element: React.createElement(LogIn_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/signUp", element: React.createElement(SignUp_1["default"], null) }),
            React.createElement(react_router_dom_1.Route, { path: "/create", element: React.createElement(CreateGameRoom_1["default"], null) }))));
};
exports["default"] = App;
