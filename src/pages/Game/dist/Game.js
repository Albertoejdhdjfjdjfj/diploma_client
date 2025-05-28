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
var react_redux_1 = require("react-redux");
var client_1 = require("@apollo/client");
var queries_1 = require("../../assets/constants/graphql/queries");
var subscriptions_1 = require("../../assets/constants/graphql/subscriptions");
var GameHeaderBar_1 = require("../../assets/components/GameHeaderBar/GameHeaderBar");
var send_svg_1 = require("../../assets/images/send.svg");
require("./Game.css");
var js_cookie_1 = require("js-cookie");
var Game = function () {
    var userInfo = react_redux_1.useSelector(function (state) { return state.user.userInfo; });
    var gameId = react_redux_1.useSelector(function (state) { return state.game.activeGameId; });
    var _a = react_1.useState([]), messages = _a[0], setMessages = _a[1];
    var token = js_cookie_1["default"].get('token');
    var getMessages = client_1.useLazyQuery(queries_1.GET_MESSAGES, {
        variables: { gameId: gameId },
        context: {
            headers: {
                Authorization: token
            }
        },
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'no-cache'
    })[0];
    var newMessage = client_1.useSubscription(subscriptions_1.NEW_MESSAGE, {
        variables: { token: token, gameId: gameId }
    }).data;
    var isUserMessage = function (messageId) {
        if (userInfo && userInfo.id === messageId) {
            return true;
        }
        return false;
    };
    var handleGetMessages = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getMessages()];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    if (data) {
                        setMessages(data.getMessages);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        handleGetMessages();
    }, []);
    return (React.createElement("div", { className: "game" },
        React.createElement(GameHeaderBar_1["default"], null),
        React.createElement("div", { className: "messages" }, messages.map(function (message) { return (React.createElement("div", { key: message.id, className: isUserMessage(message.id) ? 'user_message' : '' }, message.content)); })),
        React.createElement("form", { className: "input_message" },
            React.createElement("input", { type: "text" }),
            React.createElement("button", { type: "submit" },
                React.createElement("img", { src: send_svg_1["default"], alt: "Send" })))));
};
exports["default"] = Game;
