webpackHotUpdate("main",{

/***/ "./src/components/Chat/Chat.jsx":
/*!**************************************!*\
  !*** ./src/components/Chat/Chat.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chat_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.module.css */ "./src/components/Chat/Chat.module.css");
/* harmony import */ var _Chat_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Chat_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MessagesBox_Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MessagesBox/Messages */ "./src/components/MessagesBox/Messages.jsx");
/* harmony import */ var _InputField_InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InputField/InputField */ "./src/components/InputField/InputField.jsx");
/* harmony import */ var _DisplayBar_Displaybar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DisplayBar/Displaybar */ "./src/components/DisplayBar/Displaybar.jsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ "../node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/coutinho/Documents/Node/local_share_2.0/client/src/components/Chat/Chat.jsx";








let socket; //id is the room name and room contains the members of that room

const Chat = ({
  id,
  room
}) => {
  const [username, setUsername] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    state
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useLocation"])();
  const [message, setMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [messages, setMessages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const ENDPOINT = "localhost:5000";
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(username);

    if (username) {
      //triggered only when username is not blank
      //handling socket io
      socket = socket_io_client__WEBPACK_IMPORTED_MODULE_7___default()(ENDPOINT);
      socket.emit('join', {
        username,
        room: id
      }, () => console.log('joined')); //join has error callback

      return () => {
        socket.emit('disconnect');
        socket.off();
      };
    }
  }, [ENDPOINT, username]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //handling passing username from link
    setUsername(state.username);
  }, [state]);

  const sendMessage = event => {
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }; //handle send file to input


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
    elevation: 3,
    className: _Chat_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.chatBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DisplayBar_Displaybar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    roomName: id,
    socket: socket,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagesBox_Messages__WEBPACK_IMPORTED_MODULE_2__["default"], {
    room: room,
    messages: messages,
    name: username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputField_InputField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleMessageChange: setMessage,
    handleSendMessage: sendMessage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ })

})
//# sourceMappingURL=main.7e1e98a6c2fd49da2902.hot-update.js.map