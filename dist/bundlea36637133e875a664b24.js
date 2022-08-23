/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./my-font.woff2 */ "./src/my-font.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./my-font.woff */ "./src/my-font.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'GidolinyaRegular';\r\n  src:\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  background-color: rgb(236, 206, 172);\r\n  font-family: sans-serif, 'GidolinyaRegular';\r\n}\r\n\r\nh1 {\r\n  font-size: 30px;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  margin: 1rem;\r\n}\r\n\r\n#list-cont {\r\n  width: 50%;\r\n  margin: 1rem auto;\r\n  padding: 0;\r\n  border: solid 1px rgb(0, 0, 0);\r\n}\r\n\r\n#title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 97%;\r\n  padding: 0.5rem;\r\n  border-bottom: solid 1px rgb(32, 29, 29);\r\n  margin: auto;\r\n}\r\n\r\n.bi-arrow-counterclockwise {\r\n  font-size: 19px;\r\n  padding: 0.3rem;\r\n  color: rgb(103, 99, 99);\r\n  margin: 0.3rem;\r\n}\r\n\r\n#new-item {\r\n  width: 97%;\r\n  padding: 0.4rem;\r\n  margin: auto;\r\n  border-bottom: solid 1px rgb(32, 29, 29);\r\n  font-size: 18px;\r\n  align-items: baseline;\r\n}\r\n\r\n.insert {\r\n  float: right;\r\n  padding: 0.3rem;\r\n  align-items: center;\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n.bi-plus {\r\n  font-size: 18px;\r\n  padding: 0.1rem;\r\n}\r\n\r\n#add-new {\r\n  width: 70%;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n}\r\n\r\n#list-items {\r\n  width: 99%;\r\n  padding: 0.2rem;\r\n  margin: auto;\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding-bottom: 0;\r\n}\r\n\r\n#clear {\r\n  margin: auto;\r\n  width: 100%;\r\n  height: 3rem;\r\n  padding: 0.6rem;\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n.single-task {\r\n  width: 100%;\r\n  height: 3rem;\r\n  display: grid;\r\n  grid-template-columns: 0.1fr 0.5fr 8fr 1fr;\r\n  border-bottom: solid 1px rgb(32, 29, 29);\r\n  padding: 0.2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.options {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.05rem;\r\n  height: 1rem;\r\n}\r\n\r\n.bi-three-dots-vertical {\r\n  font-size: 15px;\r\n  padding: 0.1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.bi-trash {\r\n  position: absolute;\r\n  background: rgb(248, 234, 217);\r\n  padding: 0.2rem;\r\n  margin: 0;\r\n  z-index: 2;\r\n  top: -0.03rem;\r\n  right: 1.6rem;\r\n  height: 1.2rem;\r\n  font-size: 14px;\r\n  width: 3.5rem;\r\n  cursor: pointer;\r\n  transform: scale(0);\r\n  transform-origin: center left;\r\n  transition: transform 0.2s ease;\r\n}\r\n\r\n.bi-trash:hover {\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.options:hover .bi-trash {\r\n  transform: scale(1);\r\n}\r\n\r\nlabel {\r\n  font-size: 16px;\r\n  text-align: start;\r\n  padding: 0.1rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,+BAA+B;EAC/B;;0DAEsC;EACtC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,oCAAoC;EACpC,2CAA2C;AAC7C;;AAEA;EACE,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,UAAU;EACV,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,UAAU;EACV,eAAe;EACf,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,eAAe;EACf,eAAe;EACf,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,eAAe;EACf,YAAY;EACZ,wCAAwC;EACxC,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,UAAU;EACV,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,eAAe;EACf,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,0CAA0C;EAC1C,wCAAwC;EACxC,eAAe;EACf,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,8BAA8B;EAC9B,eAAe;EACf,SAAS;EACT,UAAU;EACV,aAAa;EACb,aAAa;EACb,cAAc;EACd,eAAe;EACf,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,6BAA6B;EAC7B,+BAA+B;AACjC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB","sourcesContent":["@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css\");\r\n\r\n@font-face {\r\n  font-family: 'GidolinyaRegular';\r\n  src:\r\n    url('./my-font.woff2') format('woff2'),\r\n    url('./my-font.woff') format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  background-color: rgb(236, 206, 172);\r\n  font-family: sans-serif, 'GidolinyaRegular';\r\n}\r\n\r\nh1 {\r\n  font-size: 30px;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  margin: 1rem;\r\n}\r\n\r\n#list-cont {\r\n  width: 50%;\r\n  margin: 1rem auto;\r\n  padding: 0;\r\n  border: solid 1px rgb(0, 0, 0);\r\n}\r\n\r\n#title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 97%;\r\n  padding: 0.5rem;\r\n  border-bottom: solid 1px rgb(32, 29, 29);\r\n  margin: auto;\r\n}\r\n\r\n.bi-arrow-counterclockwise {\r\n  font-size: 19px;\r\n  padding: 0.3rem;\r\n  color: rgb(103, 99, 99);\r\n  margin: 0.3rem;\r\n}\r\n\r\n#new-item {\r\n  width: 97%;\r\n  padding: 0.4rem;\r\n  margin: auto;\r\n  border-bottom: solid 1px rgb(32, 29, 29);\r\n  font-size: 18px;\r\n  align-items: baseline;\r\n}\r\n\r\n.insert {\r\n  float: right;\r\n  padding: 0.3rem;\r\n  align-items: center;\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n.bi-plus {\r\n  font-size: 18px;\r\n  padding: 0.1rem;\r\n}\r\n\r\n#add-new {\r\n  width: 70%;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n}\r\n\r\n#list-items {\r\n  width: 99%;\r\n  padding: 0.2rem;\r\n  margin: auto;\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding-bottom: 0;\r\n}\r\n\r\n#clear {\r\n  margin: auto;\r\n  width: 100%;\r\n  height: 3rem;\r\n  padding: 0.6rem;\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n.single-task {\r\n  width: 100%;\r\n  height: 3rem;\r\n  display: grid;\r\n  grid-template-columns: 0.1fr 0.5fr 8fr 1fr;\r\n  border-bottom: solid 1px rgb(32, 29, 29);\r\n  padding: 0.2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.options {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.05rem;\r\n  height: 1rem;\r\n}\r\n\r\n.bi-three-dots-vertical {\r\n  font-size: 15px;\r\n  padding: 0.1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.bi-trash {\r\n  position: absolute;\r\n  background: rgb(248, 234, 217);\r\n  padding: 0.2rem;\r\n  margin: 0;\r\n  z-index: 2;\r\n  top: -0.03rem;\r\n  right: 1.6rem;\r\n  height: 1.2rem;\r\n  font-size: 14px;\r\n  width: 3.5rem;\r\n  cursor: pointer;\r\n  transform: scale(0);\r\n  transform-origin: center left;\r\n  transition: transform 0.2s ease;\r\n}\r\n\r\n.bi-trash:hover {\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.options:hover .bi-trash {\r\n  transform: scale(1);\r\n}\r\n\r\nlabel {\r\n  font-size: 16px;\r\n  text-align: start;\r\n  padding: 0.1rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/create.js":
/*!******************************!*\
  !*** ./src/assets/create.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./src/assets/store.js");


class UI {
  static displayTasks() {
    const container = document.querySelector('#list-items');
    container.innerHTML = '';
    const listItems = _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].getList();
    listItems.forEach((todo) => {
      const listCont = document.createElement('div');
      listCont.className = 'single-task';
      listCont.setAttribute('data-index', todo.index);
      const label = document.createElement('label');
      label.setAttribute('for', 'id1');
      const inputcheck = document.createElement('input');
      inputcheck.setAttribute('class', 'check');
      inputcheck.setAttribute('type', 'checkbox');
      inputcheck.setAttribute('id', 'id1');
      inputcheck.setAttribute('autocomplete', 'on');
      inputcheck.checked = todo.completed;
      const spanText = document.createElement('span');
      spanText.setAttribute('class', 'name');
      spanText.setAttribute('contenteditable', 'true');
      const text = document.createTextNode(todo.description);
      spanText.appendChild(text);
      const divOp = document.createElement('div');
      divOp.setAttribute('class', 'options');
      const dots = document.createElement('i');
      dots.setAttribute('class', 'bi bi-three-dots-vertical');
      const trash = document.createElement('i');
      trash.setAttribute('class', 'bi bi-trash');
      trash.innerText = 'delete';
      divOp.append(dots, trash);
      listCont.append(label, inputcheck, spanText, divOp);
      container.appendChild(listCont);
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ }),

/***/ "./src/assets/store.js":
/*!*****************************!*\
  !*** ./src/assets/store.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Storage {
static getList = () => {
  let listItems;
  if (localStorage.getItem('listItems')) {
    listItems = JSON.parse(localStorage.getItem('listItems'));
  } else {
    listItems = [];
  }
  return listItems;
}

static addToList = (task) => {
  const listItems = this.getList();
  listItems.push(task);
  localStorage.setItem('listItems', JSON.stringify(listItems));
}

static deleteTask = (id) => {
  const listItems = this.getList();
  listItems.forEach((todo, i) => {
    if (id === todo.index) {
      listItems.splice(i, 1);
    }
  });
  localStorage.setItem('listItems', JSON.stringify(listItems));
}

static editTask = (id) => {
  const listItems = this.getList();
  listItems.forEach((todo, i) => {
    const span = document.querySelectorAll('span');
    if (id === todo.index) {
      listItems[i].description = span[i].innerHTML;
    }
  });
  localStorage.setItem('listItems', JSON.stringify(listItems));
}

static checkTask = (id) => {
  const listItems = this.getList();
  listItems.forEach((todo, i) => {
    const checkbox = document.querySelectorAll('.check');
    if (id === todo.index) {
      listItems[i].completed = checkbox[i].checked;
    }
  });
  localStorage.setItem('listItems', JSON.stringify(listItems));
}

static updateIndex = () => {
  const listItems = this.getList();
  listItems.forEach((todo, i) => {
    listItems[i].index = i + 1;
  });
  localStorage.setItem('listItems', JSON.stringify(listItems));
}

static updateList = () => {
  const listItems = this.getList();
  listItems.forEach((todo, i) => {
    const Wrapper = document.querySelectorAll('.single-task');
    Wrapper[i].setAttribute('data-index', todo.index);
  });
}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);


/***/ }),

/***/ "./src/my-font.woff":
/*!**************************!*\
  !*** ./src/my-font.woff ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "my-font.woff";

/***/ }),

/***/ "./src/my-font.woff2":
/*!***************************!*\
  !*** ./src/my-font.woff2 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "my-font.woff2";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/create.js */ "./src/assets/create.js");
/* harmony import */ var _assets_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/store.js */ "./src/assets/store.js");




class List {
  constructor(description, index) {
    this.description = description;
    this.index = index;
    this.completed = false;
  }
}

const container = document.querySelector('#list-items');
const addBtn = document.querySelector('.insert');

// Add to list
addBtn.addEventListener('click', () => {
  const listItems = _assets_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].getList();
  const input = document.querySelector('#add-new');
  const listIndex = listItems.length + 1;
  const task = new List(input.value, listIndex);
  _assets_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].addToList(task);
  _assets_create_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayTasks();
  input.value = '';
});

const input = document.querySelector('#add-new');
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const listItems = _assets_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].getList();
    const input = document.querySelector('#add-new');
    if (input.value !== '') {
      const listIndex = listItems.length + 1;
      const task = new List(input.value, listIndex);
      _assets_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].addToList(task);
      _assets_create_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayTasks();
      input.value = '';
    }
  }
});

// Delete from the list
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('bi-trash')) {
    _assets_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask(Number(e.target.parentElement.parentElement.dataset.index));
    _assets_create_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayTasks();
    _assets_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateIndex();
    _assets_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateList();
  }
});

// edit task
container.addEventListener('input', (e) => {
  if (e.target.classList.contains('name')) {
    _assets_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].editTask(Number(e.target.parentElement.dataset.index));
  }
});

// checkbox
container.addEventListener('change', (e) => {
  if (e.target.classList.contains('check')) {
    _assets_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkTask(Number(e.target.parentElement.dataset.index));
  }
});

// Clear all completed
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  let listItems = _assets_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].getList();
  listItems = listItems.filter((todo) => !todo.completed);
  localStorage.setItem('listItems', JSON.stringify(listItems));
  _assets_create_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayTasks();
});

document.addEventListener('DOMContentLoaded', _assets_create_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayTasks(), _assets_store_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateIndex());

})();

/******/ })()
;
//# sourceMappingURL=bundlea36637133e875a664b24.js.map