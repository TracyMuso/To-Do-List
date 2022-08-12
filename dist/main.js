"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'GidolinyaRegular';\r\n  src:\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  background-color: rgb(248, 234, 217);\r\n  font-family: sans-serif, 'GidolinyaRegular';\r\n}\r\n\r\nh1 {\r\n  font-size: 30px;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  margin: 1rem;\r\n}\r\n\r\n#list-cont {\r\n  width: 50%;\r\n  margin: 1rem auto;\r\n  padding: 0;\r\n  border: solid 1px rgb(0, 0, 0);\r\n}\r\n\r\n#title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 97%;\r\n  padding: 0.5rem;\r\n  border-bottom: solid 1px rgb(32, 29, 29);\r\n  margin: auto;\r\n}\r\n\r\n.refresh {\r\n  width: 15px;\r\n  height: 15px;\r\n  padding: 0.3rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.bi-arrow-counterclockwise {\r\n  font-size: 15px;\r\n  color: rgb(0, 0, 0);\r\n}\r\n\r\n#new-item {\r\n  width: 97%;\r\n  padding: 0.4rem;\r\n  margin: auto;\r\n  border-bottom: solid 1px rgb(32, 29, 29);\r\n  font-size: 18px;\r\n  align-items: baseline;\r\n}\r\n\r\n.insert {\r\n  float: right;\r\n  padding: 0.3rem;\r\n  align-items: center;\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n.bi-plus {\r\n  font-size: 18px;\r\n  padding: 0.1rem;\r\n}\r\n\r\n#add-new {\r\n  width: 70%;\r\n  padding: 0.5rem;\r\n}\r\n\r\n#list-items {\r\n  width: 99%;\r\n  padding: 0.2rem;\r\n  margin: auto;\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding-bottom: 0;\r\n}\r\n\r\n#clear {\r\n  margin: auto;\r\n  width: 100%;\r\n  height: 3rem;\r\n  padding: 0.6rem;\r\n  opacity: 0.6;\r\n  pointer-events: none;\r\n}\r\n\r\n#clear.active {\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n.single-task {\r\n  width: 100%;\r\n  height: 3rem;\r\n  display: grid;\r\n  grid-template-columns: 0.01fr 1fr 8fr 1fr;\r\n  border-bottom: solid 1px rgb(32, 29, 29);\r\n  padding: 0.2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  padding: 0.2rem;\r\n  height: 1.2rem;\r\n  font-size: 14px;\r\n  width: 3.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\nli:hover {\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.options {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.05rem;\r\n  height: 1rem;\r\n}\r\n\r\n.bi-three-dots-vertical {\r\n  font-size: 15px;\r\n  padding: 0.1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.menu {\r\n  position: absolute;\r\n  background: rgb(248, 234, 217);\r\n  padding: 0 0.1rem;\r\n  margin: 0;\r\n  z-index: 2;\r\n  top: -1rem;\r\n  transform: scale(0);\r\n  transform-origin: top right;\r\n  transition: transform 0.2s ease;\r\n}\r\n\r\n.options:hover .menu {\r\n  transform: scale(1);\r\n}\r\n\r\nlabel {\r\n  font-size: 16px;\r\n  text-align: start;\r\n  padding: 0.1rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,+BAA+B;EAC/B;;0DAEsC;EACtC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,oCAAoC;EACpC,2CAA2C;AAC7C;;AAEA;EACE,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,UAAU;EACV,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,UAAU;EACV,eAAe;EACf,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,eAAe;EACf,YAAY;EACZ,wCAAwC;EACxC,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,yCAAyC;EACzC,wCAAwC;EACxC,eAAe;EACf,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,eAAe;EACf,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,8BAA8B;EAC9B,iBAAiB;EACjB,SAAS;EACT,UAAU;EACV,UAAU;EACV,mBAAmB;EACnB,2BAA2B;EAC3B,+BAA+B;AACjC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB","sourcesContent":["@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css\");\r\n\r\n@font-face {\r\n  font-family: 'GidolinyaRegular';\r\n  src:\r\n    url('./my-font.woff2') format('woff2'),\r\n    url('./my-font.woff') format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  background-color: rgb(248, 234, 217);\r\n  font-family: sans-serif, 'GidolinyaRegular';\r\n}\r\n\r\nh1 {\r\n  font-size: 30px;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  margin: 1rem;\r\n}\r\n\r\n#list-cont {\r\n  width: 50%;\r\n  margin: 1rem auto;\r\n  padding: 0;\r\n  border: solid 1px rgb(0, 0, 0);\r\n}\r\n\r\n#title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 97%;\r\n  padding: 0.5rem;\r\n  border-bottom: solid 1px rgb(32, 29, 29);\r\n  margin: auto;\r\n}\r\n\r\n.refresh {\r\n  width: 15px;\r\n  height: 15px;\r\n  padding: 0.3rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.bi-arrow-counterclockwise {\r\n  font-size: 15px;\r\n  color: rgb(0, 0, 0);\r\n}\r\n\r\n#new-item {\r\n  width: 97%;\r\n  padding: 0.4rem;\r\n  margin: auto;\r\n  border-bottom: solid 1px rgb(32, 29, 29);\r\n  font-size: 18px;\r\n  align-items: baseline;\r\n}\r\n\r\n.insert {\r\n  float: right;\r\n  padding: 0.3rem;\r\n  align-items: center;\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n.bi-plus {\r\n  font-size: 18px;\r\n  padding: 0.1rem;\r\n}\r\n\r\n#add-new {\r\n  width: 70%;\r\n  padding: 0.5rem;\r\n}\r\n\r\n#list-items {\r\n  width: 99%;\r\n  padding: 0.2rem;\r\n  margin: auto;\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding-bottom: 0;\r\n}\r\n\r\n#clear {\r\n  margin: auto;\r\n  width: 100%;\r\n  height: 3rem;\r\n  padding: 0.6rem;\r\n  opacity: 0.6;\r\n  pointer-events: none;\r\n}\r\n\r\n#clear.active {\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n.single-task {\r\n  width: 100%;\r\n  height: 3rem;\r\n  display: grid;\r\n  grid-template-columns: 0.01fr 1fr 8fr 1fr;\r\n  border-bottom: solid 1px rgb(32, 29, 29);\r\n  padding: 0.2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  padding: 0.2rem;\r\n  height: 1.2rem;\r\n  font-size: 14px;\r\n  width: 3.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\nli:hover {\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.options {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.05rem;\r\n  height: 1rem;\r\n}\r\n\r\n.bi-three-dots-vertical {\r\n  font-size: 15px;\r\n  padding: 0.1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.menu {\r\n  position: absolute;\r\n  background: rgb(248, 234, 217);\r\n  padding: 0 0.1rem;\r\n  margin: 0;\r\n  z-index: 2;\r\n  top: -1rem;\r\n  transform: scale(0);\r\n  transform-origin: top right;\r\n  transition: transform 0.2s ease;\r\n}\r\n\r\n.options:hover .menu {\r\n  transform: scale(1);\r\n}\r\n\r\nlabel {\r\n  font-size: 16px;\r\n  text-align: start;\r\n  padding: 0.1rem;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editTask.js */ "./src/assets/editTask.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.js */ "./src/assets/store.js");



class UI {
  static displayTasks() {
    const container = document.querySelector('#list-items');
    container.innerHTML = '';
    const listItems = _store_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItems();
    listItems.forEach((task) => {
      const listCont = document.createElement('div');
      listCont.className = 'single-task';
      listCont.setAttribute('data-index', task.index);
      listCont.innerHTML = `
      <label for"id1"></label>
      <input type="checkbox" id="id1"></input>
         <span>${task.description}</span>
          <div class="options">
           <i class="bi bi-three-dots-vertical"></i>
           <ul class="menu">
           <li><i class="bi bi-pencil">edit</i></li>
           <li><i class="bi bi-trash">delete</i></li>
           </ul>
         </div>
      `;
      container.appendChild(listCont);
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ }),

/***/ "./src/assets/editTask.js":
/*!********************************!*\
  !*** ./src/assets/editTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTask": () => (/* binding */ EditTask)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */
const EditTask = (taskindex, task) => {
    console.log(taskindex, task);
};



/***/ }),

/***/ "./src/assets/obj.js":
/*!***************************!*\
  !*** ./src/assets/obj.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class List {
  constructor(description, index) {
    this.description = description;
    this.index = index;
    this.completed = false;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

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
/* harmony import */ var _obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj.js */ "./src/assets/obj.js");


class Storage {
  static addTasks(task) {
    const listItems = this.getItems();
    listItems.push(task);
    localStorage.setItem('listItems', JSON.stringify(listItems));
  }

  static getItems() {
    let listItems;
    if (localStorage.getItem('listItems')) {
      listItems = JSON.parse(localStorage.getItem('listItems'));
    } else {
      listItems = [];
    }
    return listItems;
  }

  static deleteTask(el) {
    const listItems = this.getItems();
    listItems.forEach((task, i) => {
      if (el === task.index) {
        listItems.splice(i, 1);
      }
    });
    localStorage.setItem('listItems', JSON.stringify(listItems));
  }

  // updateList = (lists) => {
  //   localStorage.setItem(this.task, JSON.stringify(lists));
  // }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_obj_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/obj.js */ "./src/assets/obj.js");
/* harmony import */ var _assets_create_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/create.js */ "./src/assets/create.js");
/* harmony import */ var _assets_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/store.js */ "./src/assets/store.js");
/* harmony import */ var _assets_editTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/editTask.js */ "./src/assets/editTask.js");
/* harmony import */ var _assets_Refresh_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/Refresh_icon.png */ "./src/assets/Refresh_icon.png");







const myIcon = new Image();
myIcon.src = _assets_Refresh_icon_png__WEBPACK_IMPORTED_MODULE_5__;

(0,_assets_editTask_js__WEBPACK_IMPORTED_MODULE_4__.EditTask)();

const clearBtn = document.querySelector('#clear');
const empty = document.querySelector('#empty');

const listItems = [];
if (listItems.length > 0) {
  clearBtn.classList.add('active');
  empty.innerHTML = '';
} else {
  clearBtn.classList.remove('active');
  empty.innerHTML = 'No tasks for today';
}

const addBtn = document.querySelector('.insert');

const container = document.querySelector('#list-items');
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('bi-trash')) {
    // eslint-disable-next-line max-len
    _assets_store_js__WEBPACK_IMPORTED_MODULE_3__["default"].deleteTask(Number(e.target.parentElement.parentElement.parentElement.parentElement.dataset.index));
    _assets_create_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayTasks();
  }
});

addBtn.addEventListener('click', () => {
  const listItems = _assets_store_js__WEBPACK_IMPORTED_MODULE_3__["default"].getItems();
  const input = document.querySelector('#add-new');
  const task = new _assets_obj_js__WEBPACK_IMPORTED_MODULE_1__["default"](input.value, listItems.length + 1);
  _assets_store_js__WEBPACK_IMPORTED_MODULE_3__["default"].addTasks(task);
  _assets_create_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayTasks();
  input.value = '';
});

document.addEventListener('DOMContentLoaded', _assets_create_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayTasks());


/***/ }),

/***/ "./src/assets/Refresh_icon.png":
/*!*************************************!*\
  !*** ./src/assets/Refresh_icon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26fbf6351e01a1e739cb.png";

/***/ }),

/***/ "./src/my-font.woff":
/*!**************************!*\
  !*** ./src/my-font.woff ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31d6cfe0d16ae931b73c.woff";

/***/ }),

/***/ "./src/my-font.woff2":
/*!***************************!*\
  !*** ./src/my-font.woff2 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31d6cfe0d16ae931b73c.woff2";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsRUFBRSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3QmxCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDUlM7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDRjtBQUNjO0FBQ0M7QUFDSTtBQUNRO0FBQ0k7O0FBRXBEO0FBQ0EsYUFBYSxxREFBVzs7QUFFeEIsNkRBQVE7O0FBRVI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1FQUFrQjtBQUN0QixJQUFJLHNFQUFlO0FBQ25CO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLG9CQUFvQixpRUFBZ0I7QUFDcEM7QUFDQSxtQkFBbUIsc0RBQUk7QUFDdkIsRUFBRSxpRUFBZ0I7QUFDbEIsRUFBRSxzRUFBZTtBQUNqQjtBQUNBLENBQUM7O0FBRUQsOENBQThDLHNFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Fzc2V0cy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hc3NldHMvZWRpdFRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hc3NldHMvb2JqLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXNzZXRzL3N0b3JlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbXktZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vbXktZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXAtaWNvbnNAMS45LjEvZm9udC9ib290c3RyYXAtaWNvbnMuY3NzKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR2lkb2xpbnlhUmVndWxhcic7XFxyXFxuICBzcmM6XFxyXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcclxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDIzNCwgMjE3KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCAnR2lkb2xpbnlhUmVndWxhcic7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNsaXN0LWNvbnQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYigwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA5NyU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDMyLCAyOSwgMjkpO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaCB7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYmktYXJyb3ctY291bnRlcmNsb2Nrd2lzZSB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LWl0ZW0ge1xcclxcbiAgd2lkdGg6IDk3JTtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoMzIsIDI5LCAyOSk7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnNlcnQge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmJpLXBsdXMge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgcGFkZGluZzogMC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLW5ldyB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbGlzdC1pdGVtcyB7XFxyXFxuICB3aWR0aDogOTklO1xcclxcbiAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgcGFkZGluZzogMC42cmVtO1xcclxcbiAgb3BhY2l0eTogMC42O1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjbGVhci5hY3RpdmUge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXRhc2sge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjAxZnIgMWZyIDhmciAxZnI7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDMyLCAyOSwgMjkpO1xcclxcbiAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgaGVpZ2h0OiAxLjJyZW07XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB3aWR0aDogMy41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC4wNXJlbTtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJpLXRocmVlLWRvdHMtdmVydGljYWwge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgcGFkZGluZzogMC4xcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQ4LCAyMzQsIDIxNyk7XFxyXFxuICBwYWRkaW5nOiAwIDAuMXJlbTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICB0b3A6IC0xcmVtO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zOmhvdmVyIC5tZW51IHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgcGFkZGluZzogMC4xcmVtO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsK0JBQStCO0VBQy9COzswREFFc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHlDQUF5QztFQUN6Qyx3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcC1pY29uc0AxLjkuMS9mb250L2Jvb3RzdHJhcC1pY29ucy5jc3NcXFwiKTtcXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR2lkb2xpbnlhUmVndWxhcic7XFxyXFxuICBzcmM6XFxyXFxuICAgIHVybCgnLi9teS1mb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcclxcbiAgICB1cmwoJy4vbXktZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjM0LCAyMTcpO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsICdHaWRvbGlueWFSZWd1bGFyJztcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xpc3QtY29udCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDk3JTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoMzIsIDI5LCAyOSk7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoIHtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5iaS1hcnJvdy1jb3VudGVyY2xvY2t3aXNlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbiNuZXctaXRlbSB7XFxyXFxuICB3aWR0aDogOTclO1xcclxcbiAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYigzMiwgMjksIDI5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmluc2VydCB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYmktcGx1cyB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBwYWRkaW5nOiAwLjFyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtbmV3IHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNsaXN0LWl0ZW1zIHtcXHJcXG4gIHdpZHRoOiA5OSU7XFxyXFxuICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXIge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBwYWRkaW5nOiAwLjZyZW07XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyLmFjdGl2ZSB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtdGFzayB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMDFmciAxZnIgOGZyIDFmcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2IoMzIsIDI5LCAyOSk7XFxyXFxuICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwLjJyZW07XFxyXFxuICBoZWlnaHQ6IDEuMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIHdpZHRoOiAzLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmxpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbnMge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjA1cmVtO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYmktdGhyZWUtZG90cy12ZXJ0aWNhbCB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBwYWRkaW5nOiAwLjFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNDgsIDIzNCwgMjE3KTtcXHJcXG4gIHBhZGRpbmc6IDAgMC4xcmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIHRvcDogLTFyZW07XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbnM6aG92ZXIgLm1lbnUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAwLjFyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBFZGl0VGFzayB9IGZyb20gJy4vZWRpdFRhc2suanMnO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yZS5qcyc7XG5cbmNsYXNzIFVJIHtcbiAgc3RhdGljIGRpc3BsYXlUYXNrcygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1pdGVtcycpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBTdG9yYWdlLmdldEl0ZW1zKCk7XG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IGxpc3RDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBsaXN0Q29udC5jbGFzc05hbWUgPSAnc2luZ2xlLXRhc2snO1xuICAgICAgbGlzdENvbnQuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgdGFzay5pbmRleCk7XG4gICAgICBsaXN0Q29udC5pbm5lckhUTUwgPSBgXG4gICAgICA8bGFiZWwgZm9yXCJpZDFcIj48L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiaWQxXCI+PC9pbnB1dD5cbiAgICAgICAgIDxzcGFuPiR7dGFzay5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS10aHJlZS1kb3RzLXZlcnRpY2FsXCI+PC9pPlxuICAgICAgICAgICA8dWwgY2xhc3M9XCJtZW51XCI+XG4gICAgICAgICAgIDxsaT48aSBjbGFzcz1cImJpIGJpLXBlbmNpbFwiPmVkaXQ8L2k+PC9saT5cbiAgICAgICAgICAgPGxpPjxpIGNsYXNzPVwiYmkgYmktdHJhc2hcIj5kZWxldGU8L2k+PC9saT5cbiAgICAgICAgICAgPC91bD5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Q29udCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5jb25zdCBFZGl0VGFzayA9ICh0YXNraW5kZXgsIHRhc2spID0+IHtcbiAgICBjb25zb2xlLmxvZyh0YXNraW5kZXgsIHRhc2spO1xufTtcblxuZXhwb3J0IHsgRWRpdFRhc2sgfTsiLCJjbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGluZGV4KSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7IiwiaW1wb3J0IExpc3QgZnJvbSAnLi9vYmouanMnO1xuXG5jbGFzcyBTdG9yYWdlIHtcbiAgc3RhdGljIGFkZFRhc2tzKHRhc2spIHtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XG4gICAgbGlzdEl0ZW1zLnB1c2godGFzayk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RJdGVtcycsIEpTT04uc3RyaW5naWZ5KGxpc3RJdGVtcykpO1xuICB9XG5cbiAgc3RhdGljIGdldEl0ZW1zKCkge1xuICAgIGxldCBsaXN0SXRlbXM7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0SXRlbXMnKSkge1xuICAgICAgbGlzdEl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdEl0ZW1zJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0SXRlbXMgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RJdGVtcztcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGVUYXNrKGVsKSB7XG4gICAgY29uc3QgbGlzdEl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgIGxpc3RJdGVtcy5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgICBpZiAoZWwgPT09IHRhc2suaW5kZXgpIHtcbiAgICAgICAgbGlzdEl0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdEl0ZW1zJywgSlNPTi5zdHJpbmdpZnkobGlzdEl0ZW1zKSk7XG4gIH1cblxuICAvLyB1cGRhdGVMaXN0ID0gKGxpc3RzKSA9PiB7XG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50YXNrLCBKU09OLnN0cmluZ2lmeShsaXN0cykpO1xuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2U7XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBMaXN0IGZyb20gJy4vYXNzZXRzL29iai5qcyc7XG5pbXBvcnQgVUkgZnJvbSAnLi9hc3NldHMvY3JlYXRlLmpzJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vYXNzZXRzL3N0b3JlLmpzJztcbmltcG9ydCB7IEVkaXRUYXNrIH0gZnJvbSAnLi9hc3NldHMvZWRpdFRhc2suanMnO1xuaW1wb3J0IHJlZnJlc2hJY29uIGZyb20gJy4vYXNzZXRzL1JlZnJlc2hfaWNvbi5wbmcnO1xuXG5jb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbm15SWNvbi5zcmMgPSByZWZyZXNoSWNvbjtcblxuRWRpdFRhc2soKTtcblxuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXInKTtcbmNvbnN0IGVtcHR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtcHR5Jyk7XG5cbmNvbnN0IGxpc3RJdGVtcyA9IFtdO1xuaWYgKGxpc3RJdGVtcy5sZW5ndGggPiAwKSB7XG4gIGNsZWFyQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBlbXB0eS5pbm5lckhUTUwgPSAnJztcbn0gZWxzZSB7XG4gIGNsZWFyQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBlbXB0eS5pbm5lckhUTUwgPSAnTm8gdGFza3MgZm9yIHRvZGF5Jztcbn1cblxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc2VydCcpO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1pdGVtcycpO1xuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYmktdHJhc2gnKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgU3RvcmFnZS5kZWxldGVUYXNrKE51bWJlcihlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXgpKTtcbiAgICBVSS5kaXNwbGF5VGFza3MoKTtcbiAgfVxufSk7XG5cbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgbGlzdEl0ZW1zID0gU3RvcmFnZS5nZXRJdGVtcygpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtbmV3Jyk7XG4gIGNvbnN0IHRhc2sgPSBuZXcgTGlzdChpbnB1dC52YWx1ZSwgbGlzdEl0ZW1zLmxlbmd0aCArIDEpO1xuICBTdG9yYWdlLmFkZFRhc2tzKHRhc2spO1xuICBVSS5kaXNwbGF5VGFza3MoKTtcbiAgaW5wdXQudmFsdWUgPSAnJztcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkuZGlzcGxheVRhc2tzKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9