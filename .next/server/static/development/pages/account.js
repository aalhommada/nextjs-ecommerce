module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Account/AccountHeader.js":
/*!*********************************************!*\
  !*** ./components/Account/AccountHeader.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatDate */ "./utils/formatDate.js");
var _jsxFileName = "C:\\Users\\Gebruiker\\Desktop\\e-commerce\\components\\Account\\AccountHeader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function AccountHeader({
  role,
  email,
  name,
  createdAt
}) {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    secondary: true,
    inverted: true,
    color: "violet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    color: "teal",
    size: "large",
    ribbon: true,
    icon: "privacy",
    style: {
      textTransform: "capitalize"
    },
    content: role,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    inverted: true,
    textAlign: "center",
    as: "h1",
    icon: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), name, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, email), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Subheader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Joined ", Object(_utils_formatDate__WEBPACK_IMPORTED_MODULE_2__["default"])(createdAt))));
}

/* harmony default export */ __webpack_exports__["default"] = (AccountHeader);

/***/ }),

/***/ "./components/Account/AccountOrders.js":
/*!*********************************************!*\
  !*** ./components/Account/AccountOrders.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatDate */ "./utils/formatDate.js");
var _jsxFileName = "C:\\Users\\Gebruiker\\Desktop\\e-commerce\\components\\Account\\AccountOrders.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function AccountOrders({
  orders
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  function mapOrdersToPanels(orders) {
    return orders.map(order => ({
      key: order._id,
      title: {
        content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          color: "blue",
          content: Object(_utils_formatDate__WEBPACK_IMPORTED_MODULE_3__["default"])(order.createdAt),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        })
      },
      content: {
        content: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, {
          as: "h3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, "Total: $", order.total, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          content: order.email,
          icon: "mail",
          basic: true,
          horizontal: true,
          style: {
            marginLeft: "1em"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, order.products.map(p => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
          key: p.product._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          avatar: true,
          src: p.product.mediaUrl,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, p.product.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, p.quantity, " \xB7 $", p.product.price)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Content, {
          floated: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
          tag: true,
          color: "red",
          size: "tiny",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, p.product.sku))))))
      }
    }));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "folder open",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), "Order History"), orders.length === 0 ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    inverted: true,
    tertiary: true,
    color: "grey",
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    icon: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "copy outline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), "No past orders."), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => router.push("/"),
    color: "orange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "View Products"))) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    fluid: true,
    styled: true,
    exclusive: false,
    panels: mapOrdersToPanels(orders),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (AccountOrders);

/***/ }),

/***/ "./components/Account/AccountPermissions.js":
/*!**************************************************!*\
  !*** ./components/Account/AccountPermissions.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/formatDate */ "./utils/formatDate.js");
var _jsxFileName = "C:\\Users\\Gebruiker\\Desktop\\e-commerce\\components\\Account\\AccountPermissions.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function AccountPermissions() {
  const [users, setUsers] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__["default"]}/api/users`;
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("token");
    const payload = {
      headers: {
        Authorization: token
      }
    };
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url, payload);
    setUsers(response.data);
  }

  return __jsx("div", {
    style: {
      margin: "2em 0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    as: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: "settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), "User Permissions"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    compact: true,
    celled: true,
    definition: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Name"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Email"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Joined"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Updated"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Role"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, users.map(user => __jsx(UserPermission, {
    key: user._id,
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })))));
}

function UserPermission({
  user
}) {
  const [admin, setAdmin] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(user.role === "admin");
  const isFirstRun = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(true);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    updatePermission();
  }, [admin]);

  function handleChangePermission() {
    setAdmin(prevState => !prevState);
  }

  async function updatePermission() {
    const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__["default"]}/api/account`;
    const payload = {
      _id: user._id,
      role: admin ? "admin" : "user"
    };
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(url, payload);
  }

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
    collapsing: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
    checked: admin,
    toggle: true,
    onChange: handleChangePermission,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, user.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, user.email), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, Object(_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__["default"])(user.createdAt)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, Object(_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__["default"])(user.updatedAt)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, admin ? "admin" : "user"));
}

/* harmony default export */ __webpack_exports__["default"] = (AccountPermissions);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Account_AccountHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Account/AccountHeader */ "./components/Account/AccountHeader.js");
/* harmony import */ var _components_Account_AccountOrders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Account/AccountOrders */ "./components/Account/AccountOrders.js");
/* harmony import */ var _components_Account_AccountPermissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Account/AccountPermissions */ "./components/Account/AccountPermissions.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\Gebruiker\\Desktop\\e-commerce\\pages\\account.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function Account({
  user,
  orders
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Account_AccountHeader__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, user, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), __jsx(_components_Account_AccountOrders__WEBPACK_IMPORTED_MODULE_3__["default"], {
    orders: orders,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), user.role === "root" && __jsx(_components_Account_AccountPermissions__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
}

Account.getInitialProps = async ctx => {
  const {
    token
  } = Object(nookies__WEBPACK_IMPORTED_MODULE_5__["parseCookies"])(ctx);

  if (!token) {
    return {
      orders: []
    };
  }

  const payload = {
    headers: {
      Authorization: token
    }
  };
  const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__["default"]}/api/orders`;
  const response = await axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(url, payload);
  return response.data;
};

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl =  false ? undefined : "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/formatDate.js":
/*!*****************************!*\
  !*** ./utils/formatDate.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US");
}

/* harmony default export */ __webpack_exports__["default"] = (formatDate);

/***/ }),

/***/ 9:
/*!********************************!*\
  !*** multi ./pages/account.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gebruiker\Desktop\e-commerce\pages\account.js */"./pages/account.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=account.js.map