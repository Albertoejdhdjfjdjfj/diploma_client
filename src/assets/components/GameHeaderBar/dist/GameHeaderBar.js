'use strict';
exports.__esModule = true;
var react_router_dom_1 = require('react-router-dom');
var logo_png_1 = require('../../images/logo.png');
require('./GameHeaderBar.css');
var GameHeaderBar = function () {
  var navigate = react_router_dom_1.useNavigate();
  var handleLeaveGame = function () {
    navigate('/');
  };
  return React.createElement(
    'div',
    { className: 'game_header_bar' },
    React.createElement(
      'a',
      null,
      'Mafia',
      React.createElement('img', { alt: 'logo', src: logo_png_1['default'] })
    ),
    React.createElement('p', { onClick: handleLeaveGame }, 'Leave Game')
  );
};
exports['default'] = GameHeaderBar;
