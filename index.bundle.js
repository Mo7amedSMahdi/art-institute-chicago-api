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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/main.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/main.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(http://fonts.cdnfonts.com/css/gotham);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(http://fonts.cdnfonts.com/css/poppins);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  /* font families */\\r\\n  --ff-gotham: 'Gotham', sans-serif;\\r\\n  --ff-poppins: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\n/* RESET */\\r\\n\\r\\n/* Box sizing rules */\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* Remove default link style */\\r\\na {\\r\\n  color: unset;\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* Remove default margin */\\r\\nbody,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\np,\\r\\nfigure,\\r\\nblockquote,\\r\\ndl,\\r\\ndd {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\\r\\nul,\\r\\nol {\\r\\n  list-style: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n/* Set core root defaults */\\r\\nhtml:focus-within {\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\n/* Set core body defaults */\\r\\nbody {\\r\\n  text-rendering: optimizeSpeed;\\r\\n  line-height: 1.5;\\r\\n  font-family: var(--ff-poppins);\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\n/* A elements that don't have a class get default styles */\\r\\na:not([class]) {\\r\\n  text-decoration-skip-ink: auto;\\r\\n}\\r\\n\\r\\n/* Make images easier to work with */\\r\\nimg,\\r\\npicture {\\r\\n  max-width: 100%;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/* Inherit fonts for inputs and buttons */\\r\\ninput,\\r\\nbutton,\\r\\ntextarea,\\r\\nselect {\\r\\n  font: inherit;\\r\\n}\\r\\n\\r\\ntextarea:focus,\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n/* Remove default button styles */\\r\\nbutton,\\r\\ninput[type='submit'],\\r\\ninput[type='reset'] {\\r\\n  background: none;\\r\\n  color: inherit;\\r\\n  border: none;\\r\\n  padding: 0;\\r\\n  font: inherit;\\r\\n  cursor: pointer;\\r\\n  outline: inherit;\\r\\n}\\r\\n\\r\\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\\r\\n@media (prefers-reduced-motion: reduce) {\\r\\n  html:focus-within {\\r\\n    scroll-behavior: auto;\\r\\n  }\\r\\n\\r\\n  *,\\r\\n  *::before,\\r\\n  *::after {\\r\\n    animation-duration: 0.01ms !important;\\r\\n    animation-iteration-count: 1 !important;\\r\\n    transition-duration: 0.01ms !important;\\r\\n    scroll-behavior: auto !important;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* Utility classes */\\r\\n\\r\\n.hidden {\\r\\n  display: none !important;\\r\\n}\\r\\n\\r\\n.no-scroll {\\r\\n  overflow: hidden !important;\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n  gap: var(--gap, 1rem);\\r\\n}\\r\\n\\r\\n.flex--column {\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.grid {\\r\\n  display: grid;\\r\\n  gap: var(--gap, 1rem);\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  padding-block: 0.5rem;\\r\\n  padding-inline: 1rem;\\r\\n}\\r\\n\\r\\n.btn--primary {\\r\\n  border: 2px solid black;\\r\\n}\\r\\n\\r\\n.btn--icon {\\r\\n  display: block;\\r\\n  width: 29px;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n/* Header Section */\\r\\n\\r\\nheader {\\r\\n  padding: 1.5rem 4rem;\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n\\r\\n  --gap: 2rem;\\r\\n}\\r\\n\\r\\n.header-nav span {\\r\\n  margin-left: 0.3rem;\\r\\n  font-size: 0.7rem;\\r\\n  font-family: var(--ff-gotham);\\r\\n}\\r\\n\\r\\n/* Artworks Section */\\r\\n\\r\\n.artworks {\\r\\n  padding: 1.5rem 4rem;\\r\\n}\\r\\n\\r\\n.artworks-list {\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  min-height: calc(100vh - 14rem);\\r\\n\\r\\n  --gap: 2rem;\\r\\n}\\r\\n\\r\\n.artwork {\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n\\r\\n  --gap: 1rem;\\r\\n\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.artwork-body {\\r\\n  justify-content: space-between;\\r\\n  align-items: baseline;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.artwork-body h2 {\\r\\n  flex: 1.8 0 0;\\r\\n}\\r\\n\\r\\n.body-likes {\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.body-likes p {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.artwork-body button {\\r\\n  flex: 0.2 0 0;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  padding: 3rem 4.8rem;\\r\\n  position: fixed;\\r\\n  z-index: 1000;\\r\\n  width: 100%;\\r\\n  top: 0;\\r\\n  height: 100%;\\r\\n  backdrop-filter: blur(8px);\\r\\n  background: rgba(255, 255, 255, 0.5);\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n.modal-dialog {\\r\\n  max-width: 60%;\\r\\n  margin-inline: auto;\\r\\n}\\r\\n\\r\\n.close-modal {\\r\\n  float: right;\\r\\n  margin: 0 1rem;\\r\\n}\\r\\n\\r\\n.header-content {\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.artwork-desc {\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.artwork-desc div {\\r\\n  justify-content: space-between;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.comment-list {\\r\\n  width: 100%;\\r\\n  justify-content: center;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.add-comment {\\r\\n  width: 100%;\\r\\n  justify-content: center;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.add-comment h2 {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.add-comment-form {\\r\\n  justify-content: center;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  padding: 2rem 3rem;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  background-color: rgb(88, 84, 84);\\r\\n  color: white;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://art-institute-chicago-api/./src/assets/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://art-institute-chicago-api/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://art-institute-chicago-api/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/css/main.css":
/*!*********************************!*\
  !*** ./src/assets/css/main.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/css/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://art-institute-chicago-api/./src/assets/css/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://art-institute-chicago-api/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://art-institute-chicago-api/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://art-institute-chicago-api/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://art-institute-chicago-api/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://art-institute-chicago-api/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://art-institute-chicago-api/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/main.css */ \"./src/assets/css/main.css\");\n/* harmony import */ var _modules_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/nav.js */ \"./src/js/modules/nav.js\");\n/* harmony import */ var _modules_artworks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/artworks.js */ \"./src/js/modules/artworks.js\");\n\n\n\n\nconst renderPage = () => {\n  (0,_modules_nav_js__WEBPACK_IMPORTED_MODULE_1__.renderNav)();\n  (0,_modules_artworks_js__WEBPACK_IMPORTED_MODULE_2__.renderArtworks)();\n};\n\nrenderPage();\n\n\n//# sourceURL=webpack://art-institute-chicago-api/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/ServiceCall.js":
/*!***************************************!*\
  !*** ./src/js/modules/ServiceCall.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"addNewComment\": () => (/* binding */ addNewComment),\n/* harmony export */   \"getArtWorks\": () => (/* binding */ getArtWorks),\n/* harmony export */   \"getArtwork\": () => (/* binding */ getArtwork),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nconst baseUrl = 'https://api.artic.edu/api/v1/';\nconst appID = 'Ea05s8iIppToZ9bgBQcY';\nconst involvmentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/`;\nconst fields = 'id,image_id,title,date_start,date_end,place_of_origin,artist_title';\n\nconst getArtWorks = async () => {\n  const result = await fetch(`${baseUrl}artworks?fields=${fields}`, {\n    method: 'GET',\n    headers: { 'Content-Type': 'application/json' },\n  });\n  return result.json();\n};\n\nconst addLike = async (artworkID) => {\n  const bodyData = {\n    item_id: artworkID,\n  };\n  await fetch(`${involvmentUrl}likes`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(bodyData),\n  });\n};\n\nconst getLikes = async () => {\n  const result = await fetch(`${involvmentUrl}likes`, {\n    method: 'GET',\n    headers: { 'Content-Type': 'application/json' },\n  });\n  return result.json();\n};\n\nconst getArtwork = async (artworkId) => {\n  const result = await fetch(\n    `${baseUrl}artworks/${artworkId}?fields=${fields}`,\n    {\n      method: 'GET',\n      headers: { 'Content-Type': 'application/json' },\n    },\n  );\n  return result.json();\n};\n\nconst getComments = async (itemId) => {\n  const result = await fetch(`${involvmentUrl}comments?item_id=${itemId}`, {\n    method: 'GET',\n    headers: { 'Content-Type': 'application/json' },\n  });\n  return result.json();\n};\n\nconst addNewComment = async (comment) => {\n  await fetch(`${involvmentUrl}comments?item_id=${comment.itemId}`, {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(comment),\n  });\n};\n\n\n\n\n//# sourceURL=webpack://art-institute-chicago-api/./src/js/modules/ServiceCall.js?");

/***/ }),

/***/ "./src/js/modules/artworks.js":
/*!************************************!*\
  !*** ./src/js/modules/artworks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderArtworks\": () => (/* binding */ renderArtworks)\n/* harmony export */ });\n/* harmony import */ var _ServiceCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceCall.js */ \"./src/js/modules/ServiceCall.js\");\n/* harmony import */ var _pupup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pupup.js */ \"./src/js/modules/pupup.js\");\n/* harmony import */ var _counters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counters.js */ \"./src/js/modules/counters.js\");\n\n\n\n\nconst container = document.querySelector('.artworks-list');\nlet likeButtons;\n\nconst renderArtworks = async () => {\n  let artworkElements = '';\n  container.innerHTML = 'fetching data...';\n  const artworkArray = await (0,_ServiceCall_js__WEBPACK_IMPORTED_MODULE_0__.getArtWorks)().then((result) => result);\n  const likesArray = await (0,_counters_js__WEBPACK_IMPORTED_MODULE_2__.getLikesCount)();\n\n  artworkArray.data.forEach((artwork) => {\n    let likesCount = 0;\n    let imageLink;\n    if (artwork.image_id !== null) {\n      imageLink = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;\n    } else {\n      imageLink = './art-institute-chicago-api/images/no-image.png';\n    }\n    const likes = likesArray.filter((e) => e.item_id === artwork.id.toString());\n    if (likes.length > 0) {\n      likesCount = likes[0].likes;\n    }\n    artworkElements += `<div data-id=\"${artwork.id}\" class=\"artwork flex flex--column\">\n                      <div class=\"artwork-header\">\n                          <div class=\"header-image\">\n                              <img src=\"${imageLink}\" alt=\"\">\n                          </div>\n                      </div>\n                      <div class=\"artwork-body flex\">\n                          <h2>${artwork.title}</h2>\n                          <div class=\"body-likes flex--column\">\n                          <button data-target=\"like\" data-id=\"${artwork.id}\" type=\"button\" class=\"btn btn--icon \">\n                          <img src=\"./art-institute-chicago-api/images/heart.svg\" alt=\"heart icon\"></button>\n                          <p>${likesCount}</p>\n                          </div>\n                      </div>\n                      <div class=\"artwork-buttons flex flex--column\">\n                          <button data-id=\"${artwork.id}\" data-target=\"comment\" type=\"button\" class=\"btn btn--primary\">Comments</button>\n                      </div>\n                  </div>`;\n  });\n  container.innerHTML = artworkElements;\n  likeButtons = document.querySelectorAll('[data-target=\"like\"]');\n  const commentButtons = document.querySelectorAll('[data-target=\"comment\"]');\n\n  commentButtons.forEach((btn) => {\n    btn.addEventListener('click', () => {\n      (0,_pupup_js__WEBPACK_IMPORTED_MODULE_1__.renderModal)(btn.dataset.id);\n    });\n  });\n\n  likeButtons.forEach((likeButton) => {\n    likeButton.addEventListener('click', async () => {\n      const body = likeButton.parentElement;\n      const artworkID = likeButton.dataset.id;\n      const likeCounter = body.querySelector('p');\n      likeCounter.innerText = parseInt(likeCounter.innerText, 10) + 1;\n      await (0,_ServiceCall_js__WEBPACK_IMPORTED_MODULE_0__.addLike)(artworkID);\n      const icon = likeButton.querySelector('img');\n      icon.src = './images/heart-filled.svg';\n    });\n  });\n};\n\n\n\n\n//# sourceURL=webpack://art-institute-chicago-api/./src/js/modules/artworks.js?");

/***/ }),

/***/ "./src/js/modules/counters.js":
/*!************************************!*\
  !*** ./src/js/modules/counters.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getArtWorksCount\": () => (/* binding */ getArtWorksCount),\n/* harmony export */   \"getLikesCount\": () => (/* binding */ getLikesCount),\n/* harmony export */   \"getNumberofComments\": () => (/* binding */ getNumberofComments)\n/* harmony export */ });\n/* harmony import */ var _ServiceCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceCall.js */ \"./src/js/modules/ServiceCall.js\");\n\n\nconst getArtWorksCount = async () => {\n  const result = await (0,_ServiceCall_js__WEBPACK_IMPORTED_MODULE_0__.getArtWorks)().then((result) => result);\n  return result.data.length;\n};\n\nconst getLikesCount = async () => {\n  const result = await (0,_ServiceCall_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)().then((result) => result);\n  return result;\n};\n\nconst getNumberofComments = async (artworkId) => {\n  const result = await (0,_ServiceCall_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(artworkId).then((result) => result);\n  if (result.error) return 0;\n  return result.length;\n};\n\n\n\n\n//# sourceURL=webpack://art-institute-chicago-api/./src/js/modules/counters.js?");

/***/ }),

/***/ "./src/js/modules/nav.js":
/*!*******************************!*\
  !*** ./src/js/modules/nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNav\": () => (/* binding */ renderNav)\n/* harmony export */ });\n/* harmony import */ var _counters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counters.js */ \"./src/js/modules/counters.js\");\n\n\nconst nav = document.querySelector('.header-nav');\n\nconst ArtWorksCount = async () => (0,_counters_js__WEBPACK_IMPORTED_MODULE_0__.getArtWorksCount)().then((result) => result);\n\nconst renderNavCounters = async () => {\n  const artworksCount = await ArtWorksCount();\n  const links = nav.querySelectorAll('a');\n\n  links.forEach((link) => {\n    if (link.textContent === 'Artworks') {\n      const span = link.querySelector('span');\n      span.textContent = `(${artworksCount})`;\n    }\n  });\n};\n\nconst renderNav = () => {\n  const htmlElement = `<ul class=\"nav nav--main\">\n                <li><a href=\"#\">Artworks<span></span></a></li>\n                <li><a href=\"#\">Artists</a></li>\n            </ul>`;\n  nav.innerHTML = htmlElement;\n\n  renderNavCounters();\n};\n\n\n\n\n//# sourceURL=webpack://art-institute-chicago-api/./src/js/modules/nav.js?");

/***/ }),

/***/ "./src/js/modules/pupup.js":
/*!*********************************!*\
  !*** ./src/js/modules/pupup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderModal\": () => (/* binding */ renderModal)\n/* harmony export */ });\n/* harmony import */ var _ServiceCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceCall.js */ \"./src/js/modules/ServiceCall.js\");\n/* harmony import */ var _counters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counters.js */ \"./src/js/modules/counters.js\");\n\n\n\nconst modal = document.querySelector('.modal');\nconst body = document.querySelector('body');\n\nconst hideModal = (btn) => {\n  btn.addEventListener('click', () => {\n    modal.classList.add('hidden');\n    body.classList.remove('no-scroll');\n    modal.innerHTML = '';\n  });\n};\n\nconst renderComment = async (artworkId) => {\n  const comments = await (0,_ServiceCall_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(artworkId).then((result) => result);\n  const numberOfComments = await (0,_counters_js__WEBPACK_IMPORTED_MODULE_1__.getNumberofComments)(artworkId);\n  const commentsContainer = modal.querySelector('.comments');\n  if (numberOfComments <= 0) {\n    commentsContainer.innerHTML = `<h2> Comments (0)</h2>\n                    <div class=\"comment-list flex flex--column\">\n                        <p>No Comments</p>\n                    </div>`;\n  } else {\n    commentsContainer.innerHTML = `<h2> Comments (${numberOfComments})</h2>\n                    <div class=\"comment-list flex flex--column\">\n                    \n                    </div>`;\n    const commentList = commentsContainer.querySelector('.comment-list');\n    comments.forEach((element) => {\n      commentList.innerHTML += `<div class=\"comment\">\n                        <p>${element.creation_date} ${element.username}: ${element.comment}</p>\n                    </div>`;\n    });\n  }\n};\n\nconst addComment = async (artworkId) => {\n  const form = document.querySelector('.add-comment-form');\n  form.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    const [username, comment] = form.elements;\n    if (username.value.trim() && comment.value.trim()) {\n      const commentJson = {\n        item_id: artworkId,\n        username: username.value.trim(),\n        comment: comment.value.trim(),\n      };\n      await (0,_ServiceCall_js__WEBPACK_IMPORTED_MODULE_0__.addNewComment)(commentJson);\n      renderComment(artworkId);\n      username.value = '';\n      comment.value = '';\n    }\n  });\n};\n\nconst renderModal = async (artworkId) => {\n  modal.classList.remove('hidden');\n  body.classList.add('no-scroll');\n  let imageLink;\n  const result = await (0,_ServiceCall_js__WEBPACK_IMPORTED_MODULE_0__.getArtwork)(artworkId).then((result) => {\n    if (result.data.image_id !== null) {\n      imageLink = `https://www.artic.edu/iiif/2/${result.data.image_id}/full/843,/0/default.jpg`;\n    } else {\n      imageLink = './art-institute-chicago-api/images/no-image.png';\n    }\n    return result;\n  });\n  modal.innerHTML = `<div class=\"modal-dialog flex flex--column\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close-modal\" aria-label=\"close modal\" data-close>\n                    ✕\n                </button>\n                <div class=\"header-content flex flex--column\">\n                    <div class=\"modal-image\">\n                        <img src=\"${imageLink}\" alt=\"no-image provided\">\n                    </div>\n                    <div class=\"modal-title\">\n                        <h2>${result.data.title}</h2>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-content flex flex--column\">\n                <div class=\"artwork-desc flex flex--column\">\n                    <div class=\"flex\">\n                        <p>Artist: ${result.data.artist_title}</p>\n                        <p>Place Of Origin: ${result.data.place_of_origin}</p>\n                    </div>\n                    <div class=\"flex\">\n                        <p>Start Date: ${result.data.date_start}</p>\n                        <p>End Date: ${result.data.date_end}</p>\n                    </div>\n                </div>\n                <div class=\"comments flex flex--column\">\n                    \n                </div>\n\n                <div class=\"add-comment flex flex--column\"\">\n            <h2>Add a Comment</h2>\n            <form class=\"add-comment-form flex flex--column\" action=\"/\">\n                <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"Your Name\" required/>\n                <textarea id=\"comment\" name=\"comment\" placeholder=\"Your Insights\" required></textarea>\n                <button type=\"submit\" class=\"btn btn--primary\">Comment</button>\n            </form>\n        </div>\n\n            </div>\n        </div>`;\n  renderComment(artworkId);\n  addComment(artworkId);\n  const closeBtn = modal.querySelector('.close-modal');\n  hideModal(closeBtn);\n};\n\n\n\n\n//# sourceURL=webpack://art-institute-chicago-api/./src/js/modules/pupup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;