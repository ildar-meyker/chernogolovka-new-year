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
  calcPath: function calcPath(p1x, p1y, p2x, p2y, offset) {
    // mid-point of line:
    var mpx = (p2x + p1x) * 0.5;
    var mpy = (p2y + p1y) * 0.5; // angle of perpendicular to line:

    var theta = Math.atan2(p2y - p1y, p2x - p1x) - Math.PI / 2; // distance of control point from mid-point of line:

    var offset = offset || 200; // location of control point:

    var c1x = mpx + offset * Math.cos(theta);
    var c1y = mpy + offset * Math.sin(theta); // construct the command to draw a quadratic curve

    return "M" + p1x + " " + p1y + " Q " + c1x + " " + c1y + " " + p2x + " " + p2y;
  },
  drawControlPoints: function drawControlPoints(points) {
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
  getPointsToBox: function getPointsToBox() {
    var $img = $("#welcome__image");
    var p1X = -200;
    var p1Y = $(window).height() * 0.75;
    var p3X = $img.offset().left + 0.7561 * $img.width();
    var p3Y = $img.offset().top + 0.207 * $img.height();
    var p2X = p3X * 0.5;
    var p2Y = p1Y * 0.5;
    var points = [{
      x: p1X,
      y: p1Y
    }, {
      x: p2X,
      y: p2Y
    }, {
      x: p3X,
      y: p3Y
    }];
    return points;
  },
  flyAway: function flyAway() {
    console.log("flyAway");
  },
  flyToPresentBox: function flyToPresentBox() {
    var points = this.getPointsToBox();
    console.log(points);
    gsap.set("#bird__image", {
      xPercent: -50,
      yPercent: -75,
      x: points[0].x,
      y: points[0].y
    });
    gsap.to("#bird__image", {
      motionPath: {
        path: points
      },
      duration: 5,
      ease: "power1.inOut"
    });
  },
  setFastSpeed: function setFastSpeed() {
    $("#bird__image").addClass("speed-fast");
  },
  setUsualSpeed: function setUsualSpeed() {
    $("#bird__image").removeClass("speed-fast");
  }
};
window.Bird = Bird;
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
    }, 300);
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