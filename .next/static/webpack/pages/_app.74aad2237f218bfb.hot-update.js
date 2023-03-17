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

/***/ "./components/sidecard.js":
/*!********************************!*\
  !*** ./components/sidecard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../styles/sidecard.module.css */ \"./styles/sidecard.module.css\");\n/* harmony import */ var _styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction Sidecard(param) {\n    let { items , setcheckOutItems , setSubAmount  } = param;\n    _s();\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [subtotal, setSubtotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    console.log(cartItems);\n    const addToCart = (item)=>{\n        setCartItems([\n            ...cartItems,\n            item\n        ]);\n        setcheckOutItems([\n            ...cartItems,\n            item\n        ]);\n        setSubtotal(subtotal + Number(item.Cost));\n        setSubAmount(subtotal + Number(item.Cost));\n    };\n    const renderCards = ()=>{\n        return items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                item: item,\n                addToCart: addToCart\n            }, index, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/video-game-store/components/sidecard.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardMain),\n        children: renderCards()\n    }, void 0, false, {\n        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/video-game-store/components/sidecard.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidecard, \"Gd63U3raxYEucJtqPo9yxq5tRl0=\");\n_c = Sidecard;\nfunction Card(param) {\n    let { item , addToCart  } = param;\n    _s1();\n    const [isRotated, setIsRotated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleRotation = ()=>{\n        setIsRotated(!isRotated);\n    };\n    const handleDoubleClick = ()=>{\n        const confirmAdd = window.confirm(\"Do you want to add \".concat(item.ItemName, \" to your cart?\"));\n        if (confirmAdd) {\n            addToCart(item);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardInner), \" \").concat(isRotated && (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().rotate)),\n        onClick: handleRotation,\n        onDoubleClick: handleDoubleClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardFront),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardFrontContent),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardFrontTitle),\n                            children: item.ItemName\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/video-game-store/components/sidecard.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().itemImage),\n                            src: item.Path,\n                            alt: \"Item picture\",\n                            width: 80,\n                            height: 80\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/video-game-store/components/sidecard.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/video-game-store/components/sidecard.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/video-game-store/components/sidecard.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardBack),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardBackContent),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidecardBackTitle),\n                            children: item.ItemName\n                        }, void 0, false, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/video-game-store/components/sidecard.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().textBodyBack),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().bodyTextBack),\n                                    children: item.Description\n                                }, void 0, false, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/video-game-store/components/sidecard.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().statsCost),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().textBodyBackCost),\n                                            children: [\n                                                item.Cost,\n                                                \"g\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/video-game-store/components/sidecard.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: (_styles_sidecard_module_css__WEBPACK_IMPORTED_MODULE_3___default().textBodyStats),\n                                            children: item.Stat\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/video-game-store/components/sidecard.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/video-game-store/components/sidecard.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/video-game-store/components/sidecard.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/video-game-store/components/sidecard.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/video-game-store/components/sidecard.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ginoparages/Desktop/gino-dev-fun/video-game-store/components/sidecard.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s1(Card, \"KfaLCzQLvz0kbS+6ps+XZTNSey8=\");\n_c1 = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidecard);\nvar _c, _c1;\n$RefreshReg$(_c, \"Sidecard\");\n$RefreshReg$(_c1, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlY2FyZC5qcz9jNmMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnL3N0eWxlcy9zaWRlY2FyZC5tb2R1bGUuY3NzJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuZnVuY3Rpb24gU2lkZWNhcmQoeyBpdGVtcywgIHNldGNoZWNrT3V0SXRlbXMsIHNldFN1YkFtb3VudCB9KSB7XG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzdWJ0b3RhbCwgc2V0U3VidG90YWxdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnNvbGUubG9nKGNhcnRJdGVtcylcblxuICBjb25zdCBhZGRUb0NhcnQgPSAoaXRlbSkgPT4ge1xuICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLCBpdGVtXSk7XG4gICAgc2V0Y2hlY2tPdXRJdGVtcyhbLi4uY2FydEl0ZW1zLCBpdGVtXSk7XG4gICAgc2V0U3VidG90YWwoc3VidG90YWwgKyBOdW1iZXIoaXRlbS5Db3N0KSk7XG4gICAgc2V0U3ViQW1vdW50KHN1YnRvdGFsICsgTnVtYmVyKGl0ZW0uQ29zdCkpO1xuICB9O1xuICBcblxuICBjb25zdCByZW5kZXJDYXJkcyA9ICgpID0+IHtcbiAgICByZXR1cm4gaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPENhcmQga2V5PXtpbmRleH0gaXRlbT17aXRlbX0gYWRkVG9DYXJ0PXthZGRUb0NhcnR9IC8+XG4gICAgKSk7XG4gIH07XG4gXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlY2FyZE1haW59PlxuICAgICAge3JlbmRlckNhcmRzKCl9XG4gICAgICB7LyogUG9wLXVwIGRpYWxvZyAqL31cbiAgICAgIFxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBDYXJkKHsgaXRlbSwgYWRkVG9DYXJ0fSkge1xuICBjb25zdCBbaXNSb3RhdGVkLCBzZXRJc1JvdGF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVJvdGF0aW9uID0gKCkgPT4ge1xuICAgIHNldElzUm90YXRlZCghaXNSb3RhdGVkKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBjb25maXJtQWRkID0gd2luZG93LmNvbmZpcm0oYERvIHlvdSB3YW50IHRvIGFkZCAke2l0ZW0uSXRlbU5hbWV9IHRvIHlvdXIgY2FydD9gKTtcbiAgICBpZiAoY29uZmlybUFkZCkge1xuICAgICAgYWRkVG9DYXJ0KGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNpZGVjYXJkSW5uZXJ9ICR7aXNSb3RhdGVkICYmIHN0eWxlcy5yb3RhdGV9YH1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZVJvdGF0aW9ufVxuICAgICAgb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IC8vIEFkZGVkIGRvdWJsZSBjbGljayBldmVudFxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWNhcmRGcm9udH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWNhcmRGcm9udENvbnRlbnR9PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlY2FyZEZyb250VGl0bGV9PntpdGVtLkl0ZW1OYW1lfTwvaDI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pdGVtSW1hZ2V9XG4gICAgICAgICAgICBzcmM9e2l0ZW0uUGF0aH1cbiAgICAgICAgICAgIGFsdD1cIkl0ZW0gcGljdHVyZVwiXG4gICAgICAgICAgICB3aWR0aD17ODB9XG4gICAgICAgICAgICBoZWlnaHQ9ezgwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVjYXJkQmFja30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWNhcmRCYWNrQ29udGVudH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnNpZGVjYXJkQmFja1RpdGxlfT57aXRlbS5JdGVtTmFtZX08L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEJvZHlCYWNrfT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5VGV4dEJhY2t9PntpdGVtLkRlc2NyaXB0aW9ufTwvaDI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c0Nvc3R9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEJvZHlCYWNrQ29zdH0+e2l0ZW0uQ29zdH1nPC9oMj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRleHRCb2R5U3RhdHN9PntpdGVtLlN0YXR9PC9oMj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWNhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkltYWdlIiwiU2lkZWNhcmQiLCJpdGVtcyIsInNldGNoZWNrT3V0SXRlbXMiLCJzZXRTdWJBbW91bnQiLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJzdWJ0b3RhbCIsInNldFN1YnRvdGFsIiwiY29uc29sZSIsImxvZyIsImFkZFRvQ2FydCIsIml0ZW0iLCJOdW1iZXIiLCJDb3N0IiwicmVuZGVyQ2FyZHMiLCJtYXAiLCJpbmRleCIsIkNhcmQiLCJkaXYiLCJjbGFzc05hbWUiLCJzaWRlY2FyZE1haW4iLCJpc1JvdGF0ZWQiLCJzZXRJc1JvdGF0ZWQiLCJoYW5kbGVSb3RhdGlvbiIsImhhbmRsZURvdWJsZUNsaWNrIiwiY29uZmlybUFkZCIsIndpbmRvdyIsImNvbmZpcm0iLCJJdGVtTmFtZSIsInNpZGVjYXJkSW5uZXIiLCJyb3RhdGUiLCJvbkNsaWNrIiwib25Eb3VibGVDbGljayIsInNpZGVjYXJkRnJvbnQiLCJzaWRlY2FyZEZyb250Q29udGVudCIsImgyIiwic2lkZWNhcmRGcm9udFRpdGxlIiwiaXRlbUltYWdlIiwic3JjIiwiUGF0aCIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic2lkZWNhcmRCYWNrIiwic2lkZWNhcmRCYWNrQ29udGVudCIsInNpZGVjYXJkQmFja1RpdGxlIiwidGV4dEJvZHlCYWNrIiwiYm9keVRleHRCYWNrIiwiRGVzY3JpcHRpb24iLCJzcGFuIiwic3RhdHNDb3N0IiwidGV4dEJvZHlCYWNrQ29zdCIsInRleHRCb2R5U3RhdHMiLCJTdGF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sidecard.js\n"));

/***/ })

});