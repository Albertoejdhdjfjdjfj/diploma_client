'use strict';
exports.__esModule = true;
var react_1 = require('react');
var react_redux_1 = require('react-redux');
var react_router_dom_1 = require('react-router-dom');
var js_cookie_1 = require('js-cookie');
var triangle_png_1 = require('../../images/triangle.png');
require('./HeaderSelect.css');
var HeaderSelect = function () {
  var navigate = react_router_dom_1.useNavigate();
  var userInfo = react_redux_1.useSelector(function (state) {
    return state.user.userInfo;
  });
  var _a = react_1.useState(false),
    isActive = _a[0],
    changeActive = _a[1];
  var dropdownRef = react_1.useRef(null);
  var spanRef = react_1.useRef(null);
  var handleLogOut = function () {
    js_cookie_1['default'].remove('token');
  };
  var handleClick = function () {
    changeActive(function (state) {
      return !state;
    });
  };
  react_1.useEffect(
    function () {
      var handleClickOutside = function (event) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target) &&
          spanRef.current &&
          !spanRef.current.contains(event.target)
        ) {
          changeActive(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return function () {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    },
    [dropdownRef, spanRef]
  );
  return React.createElement(
    'div',
    { className: 'header_select' },
    React.createElement(
      'span',
      { onClick: handleClick, ref: spanRef },
      userInfo
        ? React.createElement(
            React.Fragment,
            null,
            React.createElement('p', null, userInfo.nickname),
            ' ',
            React.createElement('img', {
              className: isActive && userInfo ? 'rotated_triangle' : '',
              src: triangle_png_1['default'],
              alt: 'triangle'
            })
          )
        : React.createElement(
            'p',
            {
              onClick: function () {
                return navigate('/logIn');
              }
            },
            'Log In'
          )
    ),
    isActive &&
      userInfo &&
      React.createElement(
        'div',
        { ref: dropdownRef },
        React.createElement('p', null, 'Settings'),
        React.createElement(
          'p',
          {
            onClick: function () {
              return navigate('/create');
            }
          },
          'Create game room'
        ),
        React.createElement('p', { onClick: handleLogOut }, 'Log Out')
      )
  );
};
exports['default'] = HeaderSelect;
