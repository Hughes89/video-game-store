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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  height: 100%;\\n  width: 100%;\\n  background: linear-gradient(to bottom, #000000 70%, #2c0145);\\n  font-family: \\\"Usual\\\", sans-serif;\\n  overflow: hidden;\\n}\\n\\n#__next {\\n  height: 100%;\\n  width: 100%;\\n  overflow: hidden;\\n}\\n\\n.mainAppDiv {\\n  height: 100%;\\n  width: 100%; /* adjust as needed */\\n  display: flex;\\n  transition: margin-left 0.25s ease; /* added transition */\\n  /*align-items: center;*/\\n  overflow: hidden;\\n}\\n\\n.leftDiv {\\n  display: flex;\\n  height: 100%;\\n  overflow: auto;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\n.rightDiv {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1 1;\\n  height: 100%;\\n  overflow: auto;\\n}\\n\\n\\n\\n.searchBar {\\n  /* outline: 1px solid red; */\\n  /*width: 705px;*/\\n  height: 40px;\\n  /*margin-top: -91px;*/\\n  /*margin-bottom: 10px;*/\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /*margin-left: 20px;*/\\n}\\n\\n.dblClickTitle {\\n  color: rgb(165, 164, 164);\\n  margin-left: 90px;\\n  margin-top: 27px;\\n  white-space: nowrap;\\n  font-size: 12px;\\n}\\n\\n.searchInput {\\n  width: 300px;\\n  height: 30px;\\n  border-radius: 10px;\\n  border: transparent;\\n  border-bottom: 1px solid #ff416c;\\n  background-color: transparent;\\n  color: #ffffff;\\n  padding-left: 20px;\\n  font-size: 16px;\\n  letter-spacing: 2px;\\n}\\n\\n\\n.cart {\\n  display: flex;\\n  /* outline: 1px solid red; */\\n  justify-content: flex-end;\\n  height: 75px;\\n  /*width: 500px;*/\\n  margin-top: 25px;\\n  /*margin-left: -110px;*/\\n  margin-bottom: 3px;\\n}\\n\\n.cartHolder {\\n  display: flex;\\n  flex-direction: row;\\n  cursor: crosshair;\\n}\\n\\n.cartAmount {\\n  color: #826c9b;\\n  margin-top: 27.5px;\\n  font-size: 14px;\\n}\\n\\n.cartAmount:hover {\\n  color: #06d560;\\n  height: 20px;\\n}\\n\\n.wallet {\\n  display: flex;\\n}\\n.coinImage {\\n  margin-top: 18px;\\n}\\n\\n.coinage {\\n  color: #83699f;\\n  margin-top: 27.5px;\\n  margin-left: 12px;\\n  font-size: 14px;\\n  cursor: crosshair;\\n}\\n\\n.coinage:hover {\\n  color: #d5af06;\\n  height: 20px;\\n}\\n\\n.itemPresentation {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /* outline: 1px solid red; */\\n  height: 625px;\\n  width: 500px;\\n}\\n\\n.cartControls {\\n  display: flex;\\n  flex-direction: column;\\n  /* outline: 1px solid red; */\\n  height: 255px;\\n  width: 500px;\\n}\\n\\n.cartTable {\\n  /*margin-top: -900px;*/\\n  /*margin-left: -105px;*/\\n  /*width: 500px;*/\\n  /*height: 725px;*/\\n  /*overflow: scroll;*/\\n  height: 100%;\\n  border-bottom: 12px solid yellow;\\n  border-top: 12px solid rgb(223, 223, 0);\\n  border-right: 12px solid rgb(149, 149, 0);\\n  border-left: 12px solid rgb(149, 149, 0);\\n}\\n\\n.itemTableMain {\\n}\\n\\n.subtotalAmt {\\n  font-size: 20px;\\n  color: white;\\n  margin-left: 10px;\\n}\\n\\n.subGold {\\n  font-weight: 550;\\n  background: linear-gradient(to bottom, #fffb00, #ffdd00, #ffa600);\\n  -webkit-background-clip: text;\\n  background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n} /* Hide scrollbar when not scrolling */\\n::-webkit-scrollbar {\\n  width: 8px;\\n  height: 8px;\\n  background: rgba(255, 255, 255, 0);\\n}\\n\\n/* Show scrollbar when scrolling */\\n::-webkit-scrollbar-thumb:vertical {\\n  background: rgba(84, 80, 80, 0.3);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n  -webkit-transition: background 0.3s ease-out;\\n  transition: background 0.3s ease-out;\\n}\\n\\n/* Darken scrollbar thumb on hover */\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  background: rgba(71, 67, 67, 0.5);\\n}\\n\\n/* Rounded corners for scrollbar track */\\n::-webkit-scrollbar-track:vertical {\\n  background: rgba(0, 0, 0, 0);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n}\\n\\n/* Hide scrollbar thumb when not hovering */\\n::-webkit-scrollbar-thumb:vertical {\\n  opacity: 0;\\n  -webkit-transition: opacity 0.3s ease-out;\\n  transition: opacity 0.3s ease-out;\\n}\\n\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  opacity: 1;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,YAAY;EACZ,WAAW;EACX,4DAA4D;EAC5D,gCAAgC;EAChC,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW,EAAE,qBAAqB;EAClC,aAAa;EACb,kCAAkC,EAAE,qBAAqB;EACzD,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,cAAc;EACd,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAO;EACP,YAAY;EACZ,cAAc;AAChB;;;;AAIA;EACE,4BAA4B;EAC5B,gBAAgB;EAChB,YAAY;EACZ,qBAAqB;EACrB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,gCAAgC;EAChC,6BAA6B;EAC7B,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;;AAGA;EACE,aAAa;EACb,4BAA4B;EAC5B,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;AACf;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,4BAA4B;EAC5B,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,4BAA4B;EAC5B,aAAa;EACb,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,gCAAgC;EAChC,uCAAuC;EACvC,yCAAyC;EACzC,wCAAwC;AAC1C;;AAEA;AACA;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iEAAiE;EACjE,6BAA6B;EAC7B,qBAAqB;EACrB,oCAAoC;AACtC,EAAE,sCAAsC;AACxC;EACE,UAAU;EACV,WAAW;EACX,kCAAkC;AACpC;;AAEA,kCAAkC;AAClC;EACE,iCAAiC;EACjC,mBAAmB;EACnB,kCAAkC;EAClC,4CAAoC;EAApC,oCAAoC;AACtC;;AAEA,oCAAoC;AACpC;EACE,iCAAiC;AACnC;;AAEA,wCAAwC;AACxC;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,kCAAkC;AACpC;;AAEA,2CAA2C;AAC3C;EACE,UAAU;EACV,yCAAiC;EAAjC,iCAAiC;AACnC;;AAEA;EACE,UAAU;AACZ\",\"sourcesContent\":[\"html,\\nbody {\\n  height: 100%;\\n  width: 100%;\\n  background: linear-gradient(to bottom, #000000 70%, #2c0145);\\n  font-family: \\\"Usual\\\", sans-serif;\\n  overflow: hidden;\\n}\\n\\n#__next {\\n  height: 100%;\\n  width: 100%;\\n  overflow: hidden;\\n}\\n\\n.mainAppDiv {\\n  height: 100%;\\n  width: 100%; /* adjust as needed */\\n  display: flex;\\n  transition: margin-left 0.25s ease; /* added transition */\\n  /*align-items: center;*/\\n  overflow: hidden;\\n}\\n\\n.leftDiv {\\n  display: flex;\\n  height: 100%;\\n  overflow: auto;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\n.rightDiv {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1;\\n  height: 100%;\\n  overflow: auto;\\n}\\n\\n\\n\\n.searchBar {\\n  /* outline: 1px solid red; */\\n  /*width: 705px;*/\\n  height: 40px;\\n  /*margin-top: -91px;*/\\n  /*margin-bottom: 10px;*/\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /*margin-left: 20px;*/\\n}\\n\\n.dblClickTitle {\\n  color: rgb(165, 164, 164);\\n  margin-left: 90px;\\n  margin-top: 27px;\\n  white-space: nowrap;\\n  font-size: 12px;\\n}\\n\\n.searchInput {\\n  width: 300px;\\n  height: 30px;\\n  border-radius: 10px;\\n  border: transparent;\\n  border-bottom: 1px solid #ff416c;\\n  background-color: transparent;\\n  color: #ffffff;\\n  padding-left: 20px;\\n  font-size: 16px;\\n  letter-spacing: 2px;\\n}\\n\\n\\n.cart {\\n  display: flex;\\n  /* outline: 1px solid red; */\\n  justify-content: flex-end;\\n  height: 75px;\\n  /*width: 500px;*/\\n  margin-top: 25px;\\n  /*margin-left: -110px;*/\\n  margin-bottom: 3px;\\n}\\n\\n.cartHolder {\\n  display: flex;\\n  flex-direction: row;\\n  cursor: crosshair;\\n}\\n\\n.cartAmount {\\n  color: #826c9b;\\n  margin-top: 27.5px;\\n  font-size: 14px;\\n}\\n\\n.cartAmount:hover {\\n  color: #06d560;\\n  height: 20px;\\n}\\n\\n.wallet {\\n  display: flex;\\n}\\n.coinImage {\\n  margin-top: 18px;\\n}\\n\\n.coinage {\\n  color: #83699f;\\n  margin-top: 27.5px;\\n  margin-left: 12px;\\n  font-size: 14px;\\n  cursor: crosshair;\\n}\\n\\n.coinage:hover {\\n  color: #d5af06;\\n  height: 20px;\\n}\\n\\n.itemPresentation {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  /* outline: 1px solid red; */\\n  height: 625px;\\n  width: 500px;\\n}\\n\\n.cartControls {\\n  display: flex;\\n  flex-direction: column;\\n  /* outline: 1px solid red; */\\n  height: 255px;\\n  width: 500px;\\n}\\n\\n.cartTable {\\n  /*margin-top: -900px;*/\\n  /*margin-left: -105px;*/\\n  /*width: 500px;*/\\n  /*height: 725px;*/\\n  /*overflow: scroll;*/\\n  height: 100%;\\n  border-bottom: 12px solid yellow;\\n  border-top: 12px solid rgb(223, 223, 0);\\n  border-right: 12px solid rgb(149, 149, 0);\\n  border-left: 12px solid rgb(149, 149, 0);\\n}\\n\\n.itemTableMain {\\n}\\n\\n.subtotalAmt {\\n  font-size: 20px;\\n  color: white;\\n  margin-left: 10px;\\n}\\n\\n.subGold {\\n  font-weight: 550;\\n  background: linear-gradient(to bottom, #fffb00, #ffdd00, #ffa600);\\n  -webkit-background-clip: text;\\n  background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n} /* Hide scrollbar when not scrolling */\\n::-webkit-scrollbar {\\n  width: 8px;\\n  height: 8px;\\n  background: rgba(255, 255, 255, 0);\\n}\\n\\n/* Show scrollbar when scrolling */\\n::-webkit-scrollbar-thumb:vertical {\\n  background: rgba(84, 80, 80, 0.3);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n  transition: background 0.3s ease-out;\\n}\\n\\n/* Darken scrollbar thumb on hover */\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  background: rgba(71, 67, 67, 0.5);\\n}\\n\\n/* Rounded corners for scrollbar track */\\n::-webkit-scrollbar-track:vertical {\\n  background: rgba(0, 0, 0, 0);\\n  border-radius: 10px;\\n  border: 2px solid rgba(0, 0, 0, 0);\\n}\\n\\n/* Hide scrollbar thumb when not hovering */\\n::-webkit-scrollbar-thumb:vertical {\\n  opacity: 0;\\n  transition: opacity 0.3s ease-out;\\n}\\n\\n::-webkit-scrollbar-thumb:vertical:hover {\\n  opacity: 1;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHVEQUF1RCxpQkFBaUIsZ0JBQWdCLGlFQUFpRSx1Q0FBdUMscUJBQXFCLEdBQUcsYUFBYSxpQkFBaUIsZ0JBQWdCLHFCQUFxQixHQUFHLGlCQUFpQixpQkFBaUIsaUJBQWlCLHdDQUF3Qyx3Q0FBd0MsZ0RBQWdELHVCQUF1QixHQUFHLGNBQWMsa0JBQWtCLGlCQUFpQixtQkFBbUIsMkJBQTJCLGNBQWMsR0FBRyxlQUFlLGtCQUFrQiwyQkFBMkIsY0FBYyxpQkFBaUIsbUJBQW1CLEdBQUcsb0JBQW9CLCtCQUErQixxQkFBcUIsbUJBQW1CLHdCQUF3Qiw0QkFBNEIsb0JBQW9CLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLHdCQUF3QixLQUFLLG9CQUFvQiw4QkFBOEIsc0JBQXNCLHFCQUFxQix3QkFBd0Isb0JBQW9CLEdBQUcsa0JBQWtCLGlCQUFpQixpQkFBaUIsd0JBQXdCLHdCQUF3QixxQ0FBcUMsa0NBQWtDLG1CQUFtQix1QkFBdUIsb0JBQW9CLHdCQUF3QixHQUFHLGFBQWEsa0JBQWtCLCtCQUErQixnQ0FBZ0MsaUJBQWlCLG1CQUFtQix1QkFBdUIsMEJBQTBCLHlCQUF5QixHQUFHLGlCQUFpQixrQkFBa0Isd0JBQXdCLHNCQUFzQixHQUFHLGlCQUFpQixtQkFBbUIsdUJBQXVCLG9CQUFvQixHQUFHLHVCQUF1QixtQkFBbUIs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LmNzcz8wNGRkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAwMDAwIDcwJSwgIzJjMDE0NSk7XFxuICBmb250LWZhbWlseTogXFxcIlVzdWFsXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNfX25leHQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWFpbkFwcERpdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgLyogYWRqdXN0IGFzIG5lZWRlZCAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMjVzIGVhc2U7IC8qIGFkZGVkIHRyYW5zaXRpb24gKi9cXG4gIC8qYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmxlZnREaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnJpZ2h0RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMSAxO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcblxcblxcbi5zZWFyY2hCYXIge1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIC8qd2lkdGg6IDcwNXB4OyovXFxuICBoZWlnaHQ6IDQwcHg7XFxuICAvKm1hcmdpbi10b3A6IC05MXB4OyovXFxuICAvKm1hcmdpbi1ib3R0b206IDEwcHg7Ki9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyptYXJnaW4tbGVmdDogMjBweDsqL1xcbn1cXG5cXG4uZGJsQ2xpY2tUaXRsZSB7XFxuICBjb2xvcjogcmdiKDE2NSwgMTY0LCAxNjQpO1xcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XFxuICBtYXJnaW4tdG9wOiAyN3B4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnNlYXJjaElucHV0IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjQxNmM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuXFxuLmNhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgLyp3aWR0aDogNTAwcHg7Ki9cXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxuICAvKm1hcmdpbi1sZWZ0OiAtMTEwcHg7Ki9cXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXG59XFxuXFxuLmNhcnRIb2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmNhcnRBbW91bnQge1xcbiAgY29sb3I6ICM4MjZjOWI7XFxuICBtYXJnaW4tdG9wOiAyNy41cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5jYXJ0QW1vdW50OmhvdmVyIHtcXG4gIGNvbG9yOiAjMDZkNTYwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ud2FsbGV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jb2luSW1hZ2Uge1xcbiAgbWFyZ2luLXRvcDogMThweDtcXG59XFxuXFxuLmNvaW5hZ2Uge1xcbiAgY29sb3I6ICM4MzY5OWY7XFxuICBtYXJnaW4tdG9wOiAyNy41cHg7XFxuICBtYXJnaW4tbGVmdDogMTJweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uY29pbmFnZTpob3ZlciB7XFxuICBjb2xvcjogI2Q1YWYwNjtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLml0ZW1QcmVzZW50YXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbiAgaGVpZ2h0OiA2MjVweDtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmNhcnRDb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxuICBoZWlnaHQ6IDI1NXB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uY2FydFRhYmxlIHtcXG4gIC8qbWFyZ2luLXRvcDogLTkwMHB4OyovXFxuICAvKm1hcmdpbi1sZWZ0OiAtMTA1cHg7Ki9cXG4gIC8qd2lkdGg6IDUwMHB4OyovXFxuICAvKmhlaWdodDogNzI1cHg7Ki9cXG4gIC8qb3ZlcmZsb3c6IHNjcm9sbDsqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMTJweCBzb2xpZCB5ZWxsb3c7XFxuICBib3JkZXItdG9wOiAxMnB4IHNvbGlkIHJnYigyMjMsIDIyMywgMCk7XFxuICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgcmdiKDE0OSwgMTQ5LCAwKTtcXG4gIGJvcmRlci1sZWZ0OiAxMnB4IHNvbGlkIHJnYigxNDksIDE0OSwgMCk7XFxufVxcblxcbi5pdGVtVGFibGVNYWluIHtcXG59XFxuXFxuLnN1YnRvdGFsQW10IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uc3ViR29sZCB7XFxuICBmb250LXdlaWdodDogNTUwO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmIwMCwgI2ZmZGQwMCwgI2ZmYTYwMCk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59IC8qIEhpZGUgc2Nyb2xsYmFyIHdoZW4gbm90IHNjcm9sbGluZyAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuXFxuLyogU2hvdyBzY3JvbGxiYXIgd2hlbiBzY3JvbGxpbmcgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoODQsIDgwLCA4MCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1vdXQ7XFxufVxcblxcbi8qIERhcmtlbiBzY3JvbGxiYXIgdGh1bWIgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNzEsIDY3LCA2NywgMC41KTtcXG59XFxuXFxuLyogUm91bmRlZCBjb3JuZXJzIGZvciBzY3JvbGxiYXIgdHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOnZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXFxuLyogSGlkZSBzY3JvbGxiYXIgdGh1bWIgd2hlbiBub3QgaG92ZXJpbmcgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsIHtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLW91dDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbDpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gsNERBQTREO0VBQzVELGdDQUFnQztFQUNoQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUUscUJBQXFCO0VBQ2xDLGFBQWE7RUFDYixrQ0FBa0MsRUFBRSxxQkFBcUI7RUFDekQsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQU87RUFDUCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7OztBQUlBO0VBQ0UsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLHVDQUF1QztFQUN2Qyx5Q0FBeUM7RUFDekMsd0NBQXdDO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpRUFBaUU7RUFDakUsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixvQ0FBb0M7QUFDdEMsRUFBRSxzQ0FBc0M7QUFDeEM7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtDQUFrQztBQUNwQzs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyw0Q0FBb0M7RUFBcEMsb0NBQW9DO0FBQ3RDOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGlDQUFpQztBQUNuQzs7QUFFQSx3Q0FBd0M7QUFDeEM7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGtDQUFrQztBQUNwQzs7QUFFQSwyQ0FBMkM7QUFDM0M7RUFDRSxVQUFVO0VBQ1YseUNBQWlDO0VBQWpDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAwMDAwIDcwJSwgIzJjMDE0NSk7XFxuICBmb250LWZhbWlseTogXFxcIlVzdWFsXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNfX25leHQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWFpbkFwcERpdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgLyogYWRqdXN0IGFzIG5lZWRlZCAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMjVzIGVhc2U7IC8qIGFkZGVkIHRyYW5zaXRpb24gKi9cXG4gIC8qYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmxlZnREaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnJpZ2h0RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5cXG5cXG4uc2VhcmNoQmFyIHtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7ICovXFxuICAvKndpZHRoOiA3MDVweDsqL1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgLyptYXJnaW4tdG9wOiAtOTFweDsqL1xcbiAgLyptYXJnaW4tYm90dG9tOiAxMHB4OyovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qbWFyZ2luLWxlZnQ6IDIwcHg7Ki9cXG59XFxuXFxuLmRibENsaWNrVGl0bGUge1xcbiAgY29sb3I6IHJnYigxNjUsIDE2NCwgMTY0KTtcXG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xcbiAgbWFyZ2luLXRvcDogMjdweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5zZWFyY2hJbnB1dCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY0MTZjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcblxcbi5jYXJ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGhlaWdodDogNzVweDtcXG4gIC8qd2lkdGg6IDUwMHB4OyovXFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgLyptYXJnaW4tbGVmdDogLTExMHB4OyovXFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxufVxcblxcbi5jYXJ0SG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5jYXJ0QW1vdW50IHtcXG4gIGNvbG9yOiAjODI2YzliO1xcbiAgbWFyZ2luLXRvcDogMjcuNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uY2FydEFtb3VudDpob3ZlciB7XFxuICBjb2xvcjogIzA2ZDU2MDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLndhbGxldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29pbkltYWdlIHtcXG4gIG1hcmdpbi10b3A6IDE4cHg7XFxufVxcblxcbi5jb2luYWdlIHtcXG4gIGNvbG9yOiAjODM2OTlmO1xcbiAgbWFyZ2luLXRvcDogMjcuNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmNvaW5hZ2U6aG92ZXIge1xcbiAgY29sb3I6ICNkNWFmMDY7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5pdGVtUHJlc2VudGF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGhlaWdodDogNjI1cHg7XFxuICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi5jYXJ0Q29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgcmVkOyAqL1xcbiAgaGVpZ2h0OiAyNTVweDtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmNhcnRUYWJsZSB7XFxuICAvKm1hcmdpbi10b3A6IC05MDBweDsqL1xcbiAgLyptYXJnaW4tbGVmdDogLTEwNXB4OyovXFxuICAvKndpZHRoOiA1MDBweDsqL1xcbiAgLypoZWlnaHQ6IDcyNXB4OyovXFxuICAvKm92ZXJmbG93OiBzY3JvbGw7Ki9cXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDEycHggc29saWQgeWVsbG93O1xcbiAgYm9yZGVyLXRvcDogMTJweCBzb2xpZCByZ2IoMjIzLCAyMjMsIDApO1xcbiAgYm9yZGVyLXJpZ2h0OiAxMnB4IHNvbGlkIHJnYigxNDksIDE0OSwgMCk7XFxuICBib3JkZXItbGVmdDogMTJweCBzb2xpZCByZ2IoMTQ5LCAxNDksIDApO1xcbn1cXG5cXG4uaXRlbVRhYmxlTWFpbiB7XFxufVxcblxcbi5zdWJ0b3RhbEFtdCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnN1YkdvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZiMDAsICNmZmRkMDAsICNmZmE2MDApO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufSAvKiBIaWRlIHNjcm9sbGJhciB3aGVuIG5vdCBzY3JvbGxpbmcgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxufVxcblxcbi8qIFNob3cgc2Nyb2xsYmFyIHdoZW4gc2Nyb2xsaW5nICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDg0LCA4MCwgODAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLW91dDtcXG59XFxuXFxuLyogRGFya2VuIHNjcm9sbGJhciB0aHVtYiBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSg3MSwgNjcsIDY3LCAwLjUpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIGNvcm5lcnMgZm9yIHNjcm9sbGJhciB0cmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6dmVydGljYWwge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcbn1cXG5cXG4vKiBIaWRlIHNjcm9sbGJhciB0aHVtYiB3aGVuIG5vdCBob3ZlcmluZyAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWwge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLW91dDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbDpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css\n"));

/***/ })

});