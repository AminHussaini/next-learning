/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Header() {\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSignin = (e)=>{\n        e.preventDefault();\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\");\n    };\n    const handleSignout = (e)=>{\n        e.preventDefault();\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(null, \"token\", {\n            path: \"/\"\n        });\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"header\",\n        children: session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"#\",\n            onClick: handleSignout,\n            className: \"btn-signin\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"F:\\\\New folder (1)\\\\src\\\\components\\\\Header.js\",\n                lineNumber: 25,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"F:\\\\New folder (1)\\\\src\\\\components\\\\Header.js\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\"),\n                    className: \"btn-signin\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \" Sign in Google\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\New folder (1)\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\New folder (1)\\\\src\\\\components\\\\Header.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"facebook\", {\n                            callbackUrl: router.query.callbackUrl\n                        }),\n                    className: \"btn-signin\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \" Sign in Facebook\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\New folder (1)\\\\src\\\\components\\\\Header.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\New folder (1)\\\\src\\\\components\\\\Header.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"F:\\\\New folder (1)\\\\src\\\\components\\\\Header.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUN0QjtBQUNBO0FBRXpCLFNBQVNLOztJQUN0QixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHUCwyREFBVUE7SUFFcEMsTUFBTVEsU0FBU0wsc0RBQVNBO0lBRXhCLE1BQU1NLGVBQWUsQ0FBQ0M7UUFDcEJBLEVBQUVDLGNBQWM7UUFDaEJWLHVEQUFNQSxDQUFDO0lBQ1Q7SUFFQSxNQUFNVyxnQkFBZ0IsQ0FBQ0Y7UUFDckJBLEVBQUVDLGNBQWM7UUFDaEJQLHNEQUFhQSxDQUFDLE1BQU0sU0FBUztZQUFFUyxNQUFNO1FBQUk7UUFDekNYLHdEQUFPQTtJQUNUO0lBRUEscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7a0JBQ1pSLHdCQUNDLDhEQUFDUztZQUFFQyxNQUFLO1lBQUlDLFNBQVNOO1lBQWVHLFdBQVU7c0JBQzVDLDRFQUFDSTswQkFBTzs7Ozs7Ozs7OztpQ0FFUDs7OEJBSUgsOERBQUNIO29CQUFFRSxTQUFTLElBQUlqQix1REFBTUEsQ0FBQztvQkFBV2MsV0FBVTs4QkFDMUMsNEVBQUNJO2tDQUFPOzs7Ozs7Ozs7Ozs4QkFHViw4REFBQ0g7b0JBQUVFLFNBQVMsSUFBTWpCLHVEQUFNQSxDQUFDLFlBQVk7NEJBQUVtQixhQUFhWixPQUFPYSxLQUFLLENBQUNELFdBQVc7d0JBQUM7b0JBQUlMLFdBQVU7OEJBQ3pGLDRFQUFDSTtrQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxCO0dBckN3QmQ7O1FBQ0lMLHVEQUFVQTtRQUVyQkcsa0RBQVNBOzs7S0FIRkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzPzMzMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZGVzdHJveUNvb2tpZSB9IGZyb20gJ25vb2tpZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBoYW5kbGVTaWduaW4gPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2lnbkluKCdnb29nbGUnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTaWdub3V0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRlc3Ryb3lDb29raWUobnVsbCwgJ3Rva2VuJywgeyBwYXRoOiAnLycgfSk7XHJcbiAgICBzaWduT3V0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgIHtzZXNzaW9uID8gKFxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17aGFuZGxlU2lnbm91dH0gY2xhc3NOYW1lPVwiYnRuLXNpZ25pblwiPlxyXG4gICAgICAgICAgPGJ1dHRvbj5TaWduIG91dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgKSA6ICg8PlxyXG4gICAgICAgIHsvKiA8YSBvbkNsaWNrPXsoKT0+c2lnbkluKCdnb29nbGUnKX0gY2xhc3NOYW1lPVwiYnRuLXNpZ25pblwiPiAqL31cclxuICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIDxhIG9uQ2xpY2s9eygpPT5zaWduSW4oJ2dvb2dsZScpfSBjbGFzc05hbWU9XCJidG4tc2lnbmluXCI+XHJcbiAgICAgICAgICA8YnV0dG9uPiBTaWduIGluIEdvb2dsZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7LyogPGEgb25DbGljaz17KCk9PnNpZ25JbignZmFjZWJvb2snKX0gY2xhc3NOYW1lPVwiYnRuLXNpZ25pblwiPiAqL31cclxuICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzaWduSW4oJ2ZhY2Vib29rJywgeyBjYWxsYmFja1VybDogcm91dGVyLnF1ZXJ5LmNhbGxiYWNrVXJsIH0pfSBjbGFzc05hbWU9XCJidG4tc2lnbmluXCI+XHJcbiAgICAgICAgICA8YnV0dG9uPiBTaWduIGluIEZhY2Vib29rPC9idXR0b24+XHJcbiAgICAgICAgPC9hPiAgXHJcbiAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VSb3V0ZXIiLCJkZXN0cm95Q29va2llIiwiSGVhZGVyIiwiZGF0YSIsInNlc3Npb24iLCJyb3V0ZXIiLCJoYW5kbGVTaWduaW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVTaWdub3V0IiwicGF0aCIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwib25DbGljayIsImJ1dHRvbiIsImNhbGxiYWNrVXJsIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.js\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

});