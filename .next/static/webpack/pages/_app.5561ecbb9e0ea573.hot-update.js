"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_sidecard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sidecard */ \"./components/sidecard.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_itemData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemData.js */ \"./itemData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [CartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [subtotal, setSubtotal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const items = _Users_ginoparages_Desktop_gino_dev_fun_gino_for_fun_itemData_js__WEBPACK_IMPORTED_MODULE_4__.itemJSON;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mainAppDiv\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"leftDiv\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"searchBar\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            class: \"searchInput\",\n                            placeholder: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidecard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        items: items,\n                        setCartItems: setCartItems,\n                        setSubtotal: setSubtotal\n                    }, void 0, false, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rightDiv\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cart\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cartHolder\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartAmount\",\n                                    children: [\n                                        \"Items \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: [\n                                                \"(\",\n                                                \"5\",\n                                                \")\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"wallet\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"coinage\",\n                                    children: [\n                                        \"Coin Bag \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: [\n                                                \"(\",\n                                                \"500\",\n                                                \")\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 24\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"itemPresentation\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cartControls\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/gino-for-fun/pages/_app.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"eQ2IvScHTXykkhKWwEpaI4sshAk=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ2Y7QUFDUztBQUNtRDtBQUU1RSxTQUFTSSxJQUFJLEtBQXdCLEVBQUU7UUFBMUIsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsR0FBeEI7O0lBQzFCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNUyxRQUFRUixzR0FBUUE7SUFFdEIscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBTUMsTUFBSzs0QkFBT0MsT0FBTTs0QkFBY0MsYUFBWTs7Ozs7Ozs7Ozs7a0NBRXJELDhEQUFDakIsNERBQVFBO3dCQUFDVyxPQUFPQTt3QkFBT0gsY0FBY0E7d0JBQWNFLGFBQWFBOzs7Ozs7Ozs7Ozs7MEJBRW5FLDhEQUFDTDtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ3hCLDhEQUFDTTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBUWIsNEVBQUNLO29DQUFFTCxXQUFVOzt3Q0FBYTtzREFDbEIsOERBQUNNOztnREFBRTtnREFBRztnREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUduQiw4REFBQ1A7Z0NBQUlDLFdBQVU7MENBRWIsNEVBQUNLO29DQUFFTCxXQUFVOzt3Q0FBVTtzREFDWiw4REFBQ007O2dEQUFFO2dEQUFHO2dEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSTFCLDhEQUFDUDt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZCLENBQUM7R0F4Q3VCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZGVjYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGVjYXJkXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaXRlbUpTT04gfSBmcm9tICcvVXNlcnMvZ2lub3BhcmFnZXMvRGVza3RvcC9naW5vLWRldi1mdW4vZ2luby1mb3ItZnVuL2l0ZW1EYXRhLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFtDYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3N1YnRvdGFsLCBzZXRTdWJ0b3RhbF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBpdGVtcyA9IGl0ZW1KU09OXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5BcHBEaXZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdERpdlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaEJhclwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwic2VhcmNoSW5wdXRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2lkZWNhcmQgaXRlbXM9e2l0ZW1zfSBzZXRDYXJ0SXRlbXM9e3NldENhcnRJdGVtc30gc2V0U3VidG90YWw9e3NldFN1YnRvdGFsfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHREaXZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0SG9sZGVyXCI+XG4gICAgICAgICAgICB7LyogPEltYWdlXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2hlc3RJbWcnXG4gICAgICAgICAgICAgIHNyYz17aW52b2ljZX1cbiAgICAgICAgICAgICAgYWx0PVwiaXRlbUJhY2tncm91bmRcIlxuICAgICAgICAgICAgICB3aWR0aD17MjV9XG4gICAgICAgICAgICAgIGhlaWdodD17MzV9XG4gICAgICAgICAgICA+PC9JbWFnZT4gKi99XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJ0QW1vdW50XCI+XG4gICAgICAgICAgICAgIEl0ZW1zIDxiPih7YDVgfSk8L2I+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRcIj5cbiAgICAgICAgICAgIHsvKiA+ICovfVxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29pbmFnZVwiPlxuICAgICAgICAgICAgICBDb2luIEJhZyA8Yj4oe2A1MDBgfSk8L2I+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1QcmVzZW50YXRpb25cIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0Q29udHJvbHNcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlNpZGVjYXJkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIml0ZW1KU09OIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiQ2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwic3VidG90YWwiLCJzZXRTdWJ0b3RhbCIsIml0ZW1zIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwiY2xhc3MiLCJwbGFjZWhvbGRlciIsInAiLCJiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});