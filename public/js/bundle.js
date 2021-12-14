/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Welcome */ "./src/js/modules/Welcome.js");
/* harmony import */ var _modules_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Loader */ "./src/js/modules/Loader.js");



/***/ }),

/***/ "./src/js/modules/Bird.js":
/*!********************************!*\
  !*** ./src/js/modules/Bird.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Bird = {
  _state: {
    position: "initial"
  },
  _fly: function _fly(points, duration) {
    gsap.to("#bird__image", {
      motionPath: {
        path: points
      },
      duration: duration,
      ease: "power1.inOut"
    });
  },
  _drawPoints: function _drawPoints(points) {
    points.forEach(function (item) {
      $("<div></div>").css({
        position: "absolute",
        width: "10px",
        height: "10px",
        background: "#f00",
        left: item.x + "px",
        top: item.y + "px"
      }).appendTo($("body"));
    });
  },
  _getStartPoint: function _getStartPoint() {
    return {
      x: -120,
      y: $(window).height() * 0.75
    };
  },
  _getBasketPoint: function _getBasketPoint() {
    var $img = $("#welcome__image");
    return {
      x: $img.offset().left + 0.4 * 1.3 * $img.width(),
      y: $img.offset().top + 0.5 * 1.3 * $img.height()
    };
  },
  _getBoxPoint: function _getBoxPoint() {
    var $img = $("#welcome__image");
    return {
      x: $img.offset().left + 0.7561 * 1.3 * $img.width(),
      y: $img.offset().top + 0.207 * 1.3 * $img.height()
    };
  },
  _setToPoint: function _setToPoint(point) {
    gsap.set("#bird__image", {
      xPercent: -50,
      yPercent: -75,
      x: point.x,
      y: point.y
    });
  },
  _setFastSpeed: function _setFastSpeed() {
    $("#bird__image").addClass("speed-fast");
  },
  _setUsualSpeed: function _setUsualSpeed() {
    $("#bird__image").removeClass("speed-fast");
  },
  _handleWindowResize: function _handleWindowResize() {
    switch (this._state.position) {
      case "basket":
        this._setToPoint(this._getBasketPoint());

      case "box":
        this._setToPoint(this._getBoxPoint());

    }
  },
  flyToBasket: function flyToBasket() {
    var p1 = this._getStartPoint();

    var p2 = this._getBasketPoint();

    this._setFastSpeed();

    this._setToPoint(p1);

    this._fly([p1, p2], 5);

    this._state.position = "basket";
  },
  flyToBox: function flyToBox() {
    var p1 = this._getBasketPoint();

    var p2 = this._getBoxPoint();

    var p3 = {
      x: p1.x + 100,
      y: p2.y - 100
    };
    this._state.position = "box";

    this._fly([p1, p3, p2], 4);

    this._setUsualSpeed();
  },
  init: function init() {
    $(window).on("resize", $.throttle(250, this._handleWindowResize.bind(this)));
  }
};
window.Bird = Bird;
$(function () {
  Bird.init();
});
/* harmony default export */ __webpack_exports__["default"] = (Bird);

/***/ }),

/***/ "./src/js/modules/Loader.js":
/*!**********************************!*\
  !*** ./src/js/modules/Loader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Loader = {
  hideLoader: function hideLoader() {
    $("#loader__progress__level").css({
      width: "100%"
    });
    setTimeout(function () {
      $("#loader").removeClass("active");
    }, 300);
  },
  _handleWindowLoad: function _handleWindowLoad() {
    this.hideLoader();
  },
  init: function init() {
    window.onload = this._handleWindowLoad.bind(this);
  }
};
Loader.init();
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./src/js/modules/Welcome.js":
/*!***********************************!*\
  !*** ./src/js/modules/Welcome.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bird__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bird */ "./src/js/modules/Bird.js");

var Welcome = {
  _handleStartButton: function _handleStartButton(e) {
    e.preventDefault();
    this.hideText();
    setTimeout(function () {
      _Bird__WEBPACK_IMPORTED_MODULE_0__["default"].flyToBasket();
    }, 500);
    setTimeout(function () {
      _Bird__WEBPACK_IMPORTED_MODULE_0__["default"].flyToBox();
    }, 5500);
  },
  hideText: function hideText() {
    $("#welcome__image").addClass("scaled");
    $("#welcome__text").addClass("hidden");
  },
  showText: function showText() {
    $("#welcome__image").removeClass("scaled");
    $("#welcome__text").removeClass("hidden");
  },
  init: function init() {
    $(document).on("click", ".welcome__button", this._handleStartButton.bind(this));
  }
};
$(function () {
  Welcome.init();
});
/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map