"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
    var token = js_cookie_1["default"].get('token');
    var _a = client_1.useQuery(queries_1.GET_MESSAGES, {
        variables: { gameId: gameId },
        context: {
            headers: {
                Authorization: token
            }
        },
        fetchPolicy: 'no-cache'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    var newMessage = client_1.useSubscription(subscriptions_1.NEW_MESSAGE, {
        variables: { token: token, gameId: gameId }
    }).data;
    var _b = react_1.useState([]), messages = _b[0], setMessages = _b[1];
    react_1.useEffect(function () {
        if (data) {
            setMessages(data.getMessages);
        }
    }, [data]);
    react_1.useEffect(function () {
        if (newMessage) {
            setMessages(function (prevMessages) { return __spreadArrays(prevMessages, [newMessage]); });
        }
    }, [newMessage]);
    var isUserMessage = function (messageId) { return (userInfo === null || userInfo === void 0 ? void 0 : userInfo.id) === messageId; };
    return (React.createElement("div", { className: "game" },
        React.createElement(GameHeaderBar_1["default"], null),
        React.createElement("div", { className: "messages" },
            loading && React.createElement("div", null, "...Loading"),
            error && React.createElement("div", null,
                "Error! ",
                error.message),
            messages.map(function (message) { return (React.createElement("div", { key: message.id, className: isUserMessage(message.id) ? 'user_message' : '' }, message.content)); })),
        React.createElement("form", { className: "input_message", onSubmit: function (e) { return e.preventDefault(); } },
            React.createElement("input", { type: "text" }),
            React.createElement("button", { type: "submit" },
                React.createElement("img", { src: send_svg_1["default"], alt: "Send" })))));
};
exports["default"] = Game;
