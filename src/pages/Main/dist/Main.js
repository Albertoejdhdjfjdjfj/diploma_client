"use strict";
exports.__esModule = true;
var GameRooms_1 = require("../../assets/components/GameRooms/GameRooms");
var HeaderBar_1 = require("../../assets/components/HeaderBar/HeaderBar");
require("./Main.css");
var Main = function () {
    return (React.createElement("div", { className: "main" },
        React.createElement(HeaderBar_1["default"], null),
        React.createElement(GameRooms_1["default"], null)));
};
exports["default"] = Main;
