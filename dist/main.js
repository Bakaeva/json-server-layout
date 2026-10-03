/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/userService */ \"./src/modules/userService.js\");\n\r\n\r\n\r\nwindow.userService = new _modules_userService__WEBPACK_IMPORTED_MODULE_1__.UserService;\r\n\r\nuserService.getUsers()\r\n  .then(data => {\r\n    (0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(data);\r\n  });\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/render.js"
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nconst render = (users) => {\r\n  const tbody = document.getElementById('table-body');\r\n\r\n\r\n  users.forEach(user => {\r\n    tbody.insertAdjacentHTML('beforeend', `\r\n      <tr>\r\n          <th scope=\"row\">${user.id}</th>\r\n          <td>${user.name}</td>\r\n          <td>${user.email}</td>\r\n          <td>${user.children ? 'Есть' : 'Нет'}</td>\r\n          <td>\r\n              <div class=\"form-check form-switch\">\r\n                  <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\"\r\n                      id=\"form-children\" ${user.permissions ? 'checked' : ''}>\r\n              </div>\r\n          </td>\r\n          <td>\r\n              <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n                  <button type=\"button\" class=\"btn btn-warning\">\r\n                      <i class=\"bi-pencil-square\"></i>\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-danger\">\r\n                      <i class=\"bi-person-x\"></i>\r\n                  </button>\r\n              </div>\r\n          </td>\r\n      </tr>\r\n      `);\r\n  });\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?\n}");

/***/ },

/***/ "./src/modules/userService.js"
/*!************************************!*\
  !*** ./src/modules/userService.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\nclass UserService {\r\n  _users = [];\r\n\r\n  get users() {\r\n    return this._users;\r\n  };\r\n\r\n  set users(users) {\r\n    this._users = users;\r\n  };\r\n\r\n  logger() {\r\n    console.log(this.users);\r\n  };\r\n\r\n  getUsers() {\r\n    return fetch('http://localhost:4545/users')\r\n      .then(res => res.json());\r\n  };\r\n\r\n};\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/userService.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;