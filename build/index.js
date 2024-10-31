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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl;
var InspectorControls = wp.blockEditor.InspectorControls;


var InstaIcon = function InstaIcon() {
  return wp.element.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    height: "512px",
    viewBox: "0 0 512 512",
    width: "512px"
  }, wp.element.createElement("linearGradient", {
    id: "a",
    gradientUnits: "userSpaceOnUse",
    x1: "42.966156268",
    x2: "469.0337477",
    y1: "469.0296477168",
    y2: "42.9620562848"
  }, wp.element.createElement("stop", {
    offset: "0",
    "stop-color": "#ffd600"
  }), wp.element.createElement("stop", {
    offset: ".5",
    "stop-color": "#ff0100"
  }), wp.element.createElement("stop", {
    offset: "1",
    "stop-color": "#d800b9"
  })), wp.element.createElement("linearGradient", {
    id: "b",
    gradientUnits: "userSpaceOnUse",
    x1: "163.0429956456",
    x2: "348.9539083464",
    y1: "348.9538083312",
    y2: "163.0428956304"
  }, wp.element.createElement("stop", {
    offset: "0",
    "stop-color": "#ff6400"
  }), wp.element.createElement("stop", {
    offset: ".5",
    "stop-color": "#ff0100"
  }), wp.element.createElement("stop", {
    offset: "1",
    "stop-color": "#fd0056"
  })), wp.element.createElement("linearGradient", {
    id: "c",
    gradientUnits: "userSpaceOnUse",
    x1: "370.9291325432",
    x2: "414.3727849912",
    y1: "141.0676714336",
    y2: "97.6240189856"
  }, wp.element.createElement("stop", {
    offset: "0",
    "stop-color": "#f30072"
  }), wp.element.createElement("stop", {
    offset: "1",
    "stop-color": "#e50097"
  })), wp.element.createElement("path", {
    d: "m510.460938 150.453125c-1.246094-27.25-5.574219-45.859375-11.902344-62.140625-6.425782-17.082031-16.503906-32.554688-29.527344-45.34375-12.785156-13.023438-28.261719-23.105469-45.34375-29.535156-16.285156-6.324219-34.890625-10.648438-62.140625-11.886719-27.300781-1.25-36.023437-1.546875-105.546875-1.546875s-78.246094.296875-105.546875 1.539062c-27.25 1.246094-45.855469 5.574219-62.140625 11.902344-17.082031 6.425782-32.554688 16.503906-45.34375 29.527344-13.023438 12.785156-23.105469 28.257812-29.535156 45.339844-6.324219 16.285156-10.648438 34.894531-11.886719 62.140625-1.25 27.304687-1.546875 36.023437-1.546875 105.546875 0 69.527344.296875 78.25 1.546875 105.550781 1.242187 27.246094 5.570313 45.855469 11.898437 62.140625 6.425782 17.078125 16.503907 32.554688 29.527344 45.339844 12.785156 13.023437 28.261719 23.101562 45.34375 29.527344 16.28125 6.332031 34.890625 10.65625 62.140625 11.902343 27.304688 1.246094 36.023438 1.539063 105.546875 1.539063 69.523438 0 78.246094-.292969 105.546875-1.539063 27.25-1.246093 45.855469-5.570312 62.140625-11.902343 34.386719-13.296876 61.570313-40.480469 74.867188-74.867188 6.332031-16.285156 10.65625-34.894531 11.902344-62.140625 1.242187-27.304687 1.539062-36.023437 1.539062-105.546875 0-69.527344-.296875-78.246094-1.539062-105.546875zm-46.082032 208.996094c-1.136718 24.960937-5.308594 38.515625-8.8125 47.535156-8.613281 22.328125-26.257812 39.972656-48.585937 48.585937-9.019531 3.503907-22.574219 7.675782-47.535157 8.8125-26.988281 1.234376-35.085937 1.492188-103.445312 1.492188-68.363281 0-76.457031-.257812-103.449219-1.492188-24.957031-1.136718-38.511719-5.308593-47.535156-8.8125-11.117187-4.105468-21.175781-10.648437-29.433594-19.152343-8.503906-8.257813-15.046875-18.3125-19.152343-29.433594-3.503907-9.019531-7.675782-22.574219-8.8125-47.535156-1.230469-26.992188-1.492188-35.089844-1.492188-103.445313 0-68.359375.261719-76.453125 1.492188-103.449218 1.140624-24.960938 5.308593-38.515626 8.8125-47.535157 4.105468-11.121093 10.652343-21.179687 19.152343-29.4375 8.257813-8.503906 18.316407-15.046875 29.4375-19.148437 9.019531-3.507813 22.574219-7.675782 47.535157-8.816406 26.992187-1.230469 35.089843-1.492188 103.445312-1.492188h-.003906c68.355468 0 76.453125.261719 103.449218 1.496094 24.960938 1.136718 38.511719 5.308594 47.535157 8.8125 11.117187 4.105468 21.175781 10.648437 29.433593 19.148437 8.503907 8.257813 15.046876 18.316407 19.148438 29.4375 3.507812 9.019531 7.679688 22.574219 8.816406 47.535157 1.230469 26.992187 1.492188 35.089843 1.492188 103.445312 0 68.359375-.257813 76.453125-1.492188 103.449219zm0 0",
    fill: "url(#a)"
  }), wp.element.createElement("path", {
    d: "m255.996094 124.539062c-72.601563 0-131.457032 58.859376-131.457032 131.460938s58.855469 131.457031 131.457032 131.457031c72.605468 0 131.460937-58.855469 131.460937-131.457031s-58.855469-131.460938-131.460937-131.460938zm0 216.792969c-47.125-.003906-85.332032-38.207031-85.328125-85.335937 0-47.125 38.203125-85.332032 85.332031-85.332032 47.128906.003907 85.332031 38.207032 85.332031 85.332032 0 47.128906-38.207031 85.335937-85.335937 85.335937zm0 0",
    fill: "url(#b)"
  }), wp.element.createElement("path", {
    d: "m423.371094 119.347656c0 16.964844-13.753906 30.71875-30.71875 30.71875-16.96875 0-30.722656-13.753906-30.722656-30.71875 0-16.96875 13.753906-30.722656 30.722656-30.722656 16.964844 0 30.71875 13.753906 30.71875 30.722656zm0 0",
    fill: "url(#c)"
  }));
};

var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  function Edit(props) {
    _classCallCheck(this, Edit);

    return _possibleConstructorReturn(this, _getPrototypeOf(Edit).call(this, props));
  }

  _createClass(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          setAttributes = _this$props.setAttributes,
          clientId = _this$props.clientId,
          uniqueId = _this$props.attributes.uniqueId;

      var _client = clientId.substr(0, 6);

      if (!uniqueId) {
        setAttributes({
          uniqueId: _client
        });
      } else if (uniqueId && uniqueId != _client) {
        setAttributes({
          uniqueId: _client
        });
      }

      jQuery('.ch-instagram-gallery').ch_instagram_photos();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      var uniqueId = attributes.uniqueId,
          username = attributes.username,
          displayProfile = attributes.displayProfile,
          items = attributes.items,
          itemsRow = attributes.itemsRow;
      return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: __('Settings'),
        opened: true
      }, wp.element.createElement(TextControl, {
        label: __('Username'),
        value: username,
        onChange: function onChange(username) {
          return setAttributes({
            username: username
          });
        },
        help: __('Changes effects on next reload.')
      }), wp.element.createElement(ToggleControl, {
        label: __('Display Profile'),
        checked: !!displayProfile,
        onChange: function onChange() {
          return setAttributes({
            displayProfile: !displayProfile
          });
        },
        help: __('Changes effects on next reload.')
      }), wp.element.createElement(RangeControl, {
        label: __('Items to load'),
        value: items,
        onChange: function onChange(items) {
          return setAttributes({
            items: items
          });
        },
        min: 2,
        max: 40,
        help: __('Changes effects on next reload.')
      }), wp.element.createElement(RangeControl, {
        label: __('Items per row'),
        value: itemsRow,
        onChange: function onChange(itemsRow) {
          return setAttributes({
            itemsRow: itemsRow
          });
        },
        min: 1,
        max: 12
      }))), wp.element.createElement("div", {
        className: "ch-instagram-gallery ch-instagram-gallery-editor ch-instagram-gallery-".concat(uniqueId, " ch-columns-").concat(itemsRow),
        "data-username": username,
        "data-items": items,
        "data-itemsrow": itemsRow,
        "data-displayprofile": displayProfile
      }, wp.element.createElement("span", {
        className: "ch-instagram-gallery-loading"
      }, wp.element.createElement(InstaIcon, null), wp.element.createElement("span", null, __('Loading', 'insta-feed-gallery')))));
    }
  }]);

  return Edit;
}(Component);

registerBlockType('block/insta-feed-gallery', {
  title: __('Photo Feed Gallery', 'insta-feed-gallery'),
  icon: InstaIcon,
  category: 'embed',
  keywords: [__('instagram', 'insta-feed-gallery'), __('gallery', 'insta-feed-gallery'), __('images', 'insta-feed-gallery')],
  attributes: {
    uniqueId: {
      type: 'string',
      "default": ''
    },
    username: {
      type: 'string',
      "default": 'instagram'
    },
    displayProfile: {
      type: 'boolean',
      "default": false
    },
    items: {
      type: 'number',
      "default": 12
    },
    itemsRow: {
      type: 'number',
      "default": 4
    }
  },
  edit: Edit,
  save: function save(props) {
    var _props$attributes = props.attributes,
        uniqueId = _props$attributes.uniqueId,
        username = _props$attributes.username,
        displayProfile = _props$attributes.displayProfile,
        items = _props$attributes.items,
        itemsRow = _props$attributes.itemsRow;
    return wp.element.createElement("div", {
      className: "ch-instagram-gallery ch-instagram-gallery-".concat(uniqueId, " ch-columns-").concat(itemsRow),
      "data-username": username,
      "data-items": items,
      "data-itemsrow": itemsRow,
      "data-displayprofile": displayProfile
    }, wp.element.createElement("span", {
      className: "ch-instagram-gallery-loading"
    }, wp.element.createElement(InstaIcon, null), wp.element.createElement("span", null, __('Loading', 'insta-feed-gallery'))));
  }
});

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbInJlZ2lzdGVyQmxvY2tUeXBlIiwid3AiLCJibG9ja3MiLCJfXyIsImkxOG4iLCJlbGVtZW50IiwiQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJjb21wb25lbnRzIiwiUGFuZWxCb2R5IiwiVGV4dENvbnRyb2wiLCJUb2dnbGVDb250cm9sIiwiUmFuZ2VDb250cm9sIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJibG9ja0VkaXRvciIsIkluc3RhSWNvbiIsIkVkaXQiLCJwcm9wcyIsInNldEF0dHJpYnV0ZXMiLCJjbGllbnRJZCIsInVuaXF1ZUlkIiwiYXR0cmlidXRlcyIsIl9jbGllbnQiLCJzdWJzdHIiLCJqUXVlcnkiLCJjaF9pbnN0YWdyYW1fcGhvdG9zIiwidXNlcm5hbWUiLCJkaXNwbGF5UHJvZmlsZSIsIml0ZW1zIiwiaXRlbXNSb3ciLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImtleXdvcmRzIiwidHlwZSIsImVkaXQiLCJzYXZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNy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QkMsUUFQdUIscUJBT3ZCQSxRQVB1QjtBQVV4QixXQUNBO0FBQ0MsZUFBUyxzREFBK0NULFFBQS9DLHlCQUFzRVMsUUFBdEUsQ0FEVjtBQUVDLHVCQUFlSCxRQUZoQjtBQUdDLG9CQUFZRSxLQUhiO0FBSUMsdUJBQWVDLFFBSmhCO0FBS0MsNkJBQXFCRjtBQUx0QixPQU1DO0FBQU0sZUFBUyxFQUFDO0FBQWhCLE9BQStDLHlCQUFDLFNBQUQsT0FBL0MsRUFBMkQsdUNBQU94QixFQUFFLENBQUMsU0FBRCxFQUFZLG9CQUFaLENBQVQsQ0FBM0QsQ0FORCxDQURBO0FBU0E7QUFwQzRDLENBQTdCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDekZBLHlDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmNvbnN0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBQYW5lbEJvZHksIFRleHRDb250cm9sLCBUb2dnbGVDb250cm9sLCBSYW5nZUNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XHJcbmNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5cclxuY29uc3QgSW5zdGFJY29uID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiBoZWlnaHQ9XCI1MTJweFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEycHhcIj48bGluZWFyR3JhZGllbnQgaWQ9XCJhXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgeDE9XCI0Mi45NjYxNTYyNjhcIiB4Mj1cIjQ2OS4wMzM3NDc3XCIgeTE9XCI0NjkuMDI5NjQ3NzE2OFwiIHkyPVwiNDIuOTYyMDU2Mjg0OFwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiI2ZmZDYwMFwiLz48c3RvcCBvZmZzZXQ9XCIuNVwiIHN0b3AtY29sb3I9XCIjZmYwMTAwXCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiI2Q4MDBiOVwiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD1cImJcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4MT1cIjE2My4wNDI5OTU2NDU2XCIgeDI9XCIzNDguOTUzOTA4MzQ2NFwiIHkxPVwiMzQ4Ljk1MzgwODMzMTJcIiB5Mj1cIjE2My4wNDI4OTU2MzA0XCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjZmY2NDAwXCIvPjxzdG9wIG9mZnNldD1cIi41XCIgc3RvcC1jb2xvcj1cIiNmZjAxMDBcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjZmQwMDU2XCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPVwiY1wiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHgxPVwiMzcwLjkyOTEzMjU0MzJcIiB4Mj1cIjQxNC4zNzI3ODQ5OTEyXCIgeTE9XCIxNDEuMDY3NjcxNDMzNlwiIHkyPVwiOTcuNjI0MDE4OTg1NlwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiI2YzMDA3MlwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiNlNTAwOTdcIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPVwibTUxMC40NjA5MzggMTUwLjQ1MzEyNWMtMS4yNDYwOTQtMjcuMjUtNS41NzQyMTktNDUuODU5Mzc1LTExLjkwMjM0NC02Mi4xNDA2MjUtNi40MjU3ODItMTcuMDgyMDMxLTE2LjUwMzkwNi0zMi41NTQ2ODgtMjkuNTI3MzQ0LTQ1LjM0Mzc1LTEyLjc4NTE1Ni0xMy4wMjM0MzgtMjguMjYxNzE5LTIzLjEwNTQ2OS00NS4zNDM3NS0yOS41MzUxNTYtMTYuMjg1MTU2LTYuMzI0MjE5LTM0Ljg5MDYyNS0xMC42NDg0MzgtNjIuMTQwNjI1LTExLjg4NjcxOS0yNy4zMDA3ODEtMS4yNS0zNi4wMjM0MzctMS41NDY4NzUtMTA1LjU0Njg3NS0xLjU0Njg3NXMtNzguMjQ2MDk0LjI5Njg3NS0xMDUuNTQ2ODc1IDEuNTM5MDYyYy0yNy4yNSAxLjI0NjA5NC00NS44NTU0NjkgNS41NzQyMTktNjIuMTQwNjI1IDExLjkwMjM0NC0xNy4wODIwMzEgNi40MjU3ODItMzIuNTU0Njg4IDE2LjUwMzkwNi00NS4zNDM3NSAyOS41MjczNDQtMTMuMDIzNDM4IDEyLjc4NTE1Ni0yMy4xMDU0NjkgMjguMjU3ODEyLTI5LjUzNTE1NiA0NS4zMzk4NDQtNi4zMjQyMTkgMTYuMjg1MTU2LTEwLjY0ODQzOCAzNC44OTQ1MzEtMTEuODg2NzE5IDYyLjE0MDYyNS0xLjI1IDI3LjMwNDY4Ny0xLjU0Njg3NSAzNi4wMjM0MzctMS41NDY4NzUgMTA1LjU0Njg3NSAwIDY5LjUyNzM0NC4yOTY4NzUgNzguMjUgMS41NDY4NzUgMTA1LjU1MDc4MSAxLjI0MjE4NyAyNy4yNDYwOTQgNS41NzAzMTMgNDUuODU1NDY5IDExLjg5ODQzNyA2Mi4xNDA2MjUgNi40MjU3ODIgMTcuMDc4MTI1IDE2LjUwMzkwNyAzMi41NTQ2ODggMjkuNTI3MzQ0IDQ1LjMzOTg0NCAxMi43ODUxNTYgMTMuMDIzNDM3IDI4LjI2MTcxOSAyMy4xMDE1NjIgNDUuMzQzNzUgMjkuNTI3MzQ0IDE2LjI4MTI1IDYuMzMyMDMxIDM0Ljg5MDYyNSAxMC42NTYyNSA2Mi4xNDA2MjUgMTEuOTAyMzQzIDI3LjMwNDY4OCAxLjI0NjA5NCAzNi4wMjM0MzggMS41MzkwNjMgMTA1LjU0Njg3NSAxLjUzOTA2MyA2OS41MjM0MzggMCA3OC4yNDYwOTQtLjI5Mjk2OSAxMDUuNTQ2ODc1LTEuNTM5MDYzIDI3LjI1LTEuMjQ2MDkzIDQ1Ljg1NTQ2OS01LjU3MDMxMiA2Mi4xNDA2MjUtMTEuOTAyMzQzIDM0LjM4NjcxOS0xMy4yOTY4NzYgNjEuNTcwMzEzLTQwLjQ4MDQ2OSA3NC44NjcxODgtNzQuODY3MTg4IDYuMzMyMDMxLTE2LjI4NTE1NiAxMC42NTYyNS0zNC44OTQ1MzEgMTEuOTAyMzQ0LTYyLjE0MDYyNSAxLjI0MjE4Ny0yNy4zMDQ2ODcgMS41MzkwNjItMzYuMDIzNDM3IDEuNTM5MDYyLTEwNS41NDY4NzUgMC02OS41MjczNDQtLjI5Njg3NS03OC4yNDYwOTQtMS41MzkwNjItMTA1LjU0Njg3NXptLTQ2LjA4MjAzMiAyMDguOTk2MDk0Yy0xLjEzNjcxOCAyNC45NjA5MzctNS4zMDg1OTQgMzguNTE1NjI1LTguODEyNSA0Ny41MzUxNTYtOC42MTMyODEgMjIuMzI4MTI1LTI2LjI1NzgxMiAzOS45NzI2NTYtNDguNTg1OTM3IDQ4LjU4NTkzNy05LjAxOTUzMSAzLjUwMzkwNy0yMi41NzQyMTkgNy42NzU3ODItNDcuNTM1MTU3IDguODEyNS0yNi45ODgyODEgMS4yMzQzNzYtMzUuMDg1OTM3IDEuNDkyMTg4LTEwMy40NDUzMTIgMS40OTIxODgtNjguMzYzMjgxIDAtNzYuNDU3MDMxLS4yNTc4MTItMTAzLjQ0OTIxOS0xLjQ5MjE4OC0yNC45NTcwMzEtMS4xMzY3MTgtMzguNTExNzE5LTUuMzA4NTkzLTQ3LjUzNTE1Ni04LjgxMjUtMTEuMTE3MTg3LTQuMTA1NDY4LTIxLjE3NTc4MS0xMC42NDg0MzctMjkuNDMzNTk0LTE5LjE1MjM0My04LjUwMzkwNi04LjI1NzgxMy0xNS4wNDY4NzUtMTguMzEyNS0xOS4xNTIzNDMtMjkuNDMzNTk0LTMuNTAzOTA3LTkuMDE5NTMxLTcuNjc1NzgyLTIyLjU3NDIxOS04LjgxMjUtNDcuNTM1MTU2LTEuMjMwNDY5LTI2Ljk5MjE4OC0xLjQ5MjE4OC0zNS4wODk4NDQtMS40OTIxODgtMTAzLjQ0NTMxMyAwLTY4LjM1OTM3NS4yNjE3MTktNzYuNDUzMTI1IDEuNDkyMTg4LTEwMy40NDkyMTggMS4xNDA2MjQtMjQuOTYwOTM4IDUuMzA4NTkzLTM4LjUxNTYyNiA4LjgxMjUtNDcuNTM1MTU3IDQuMTA1NDY4LTExLjEyMTA5MyAxMC42NTIzNDMtMjEuMTc5Njg3IDE5LjE1MjM0My0yOS40Mzc1IDguMjU3ODEzLTguNTAzOTA2IDE4LjMxNjQwNy0xNS4wNDY4NzUgMjkuNDM3NS0xOS4xNDg0MzcgOS4wMTk1MzEtMy41MDc4MTMgMjIuNTc0MjE5LTcuNjc1NzgyIDQ3LjUzNTE1Ny04LjgxNjQwNiAyNi45OTIxODctMS4yMzA0NjkgMzUuMDg5ODQzLTEuNDkyMTg4IDEwMy40NDUzMTItMS40OTIxODhoLS4wMDM5MDZjNjguMzU1NDY4IDAgNzYuNDUzMTI1LjI2MTcxOSAxMDMuNDQ5MjE4IDEuNDk2MDk0IDI0Ljk2MDkzOCAxLjEzNjcxOCAzOC41MTE3MTkgNS4zMDg1OTQgNDcuNTM1MTU3IDguODEyNSAxMS4xMTcxODcgNC4xMDU0NjggMjEuMTc1NzgxIDEwLjY0ODQzNyAyOS40MzM1OTMgMTkuMTQ4NDM3IDguNTAzOTA3IDguMjU3ODEzIDE1LjA0Njg3NiAxOC4zMTY0MDcgMTkuMTQ4NDM4IDI5LjQzNzUgMy41MDc4MTIgOS4wMTk1MzEgNy42Nzk2ODggMjIuNTc0MjE5IDguODE2NDA2IDQ3LjUzNTE1NyAxLjIzMDQ2OSAyNi45OTIxODcgMS40OTIxODggMzUuMDg5ODQzIDEuNDkyMTg4IDEwMy40NDUzMTIgMCA2OC4zNTkzNzUtLjI1NzgxMyA3Ni40NTMxMjUtMS40OTIxODggMTAzLjQ0OTIxOXptMCAwXCIgZmlsbD1cInVybCgjYSlcIi8+PHBhdGggZD1cIm0yNTUuOTk2MDk0IDEyNC41MzkwNjJjLTcyLjYwMTU2MyAwLTEzMS40NTcwMzIgNTguODU5Mzc2LTEzMS40NTcwMzIgMTMxLjQ2MDkzOHM1OC44NTU0NjkgMTMxLjQ1NzAzMSAxMzEuNDU3MDMyIDEzMS40NTcwMzFjNzIuNjA1NDY4IDAgMTMxLjQ2MDkzNy01OC44NTU0NjkgMTMxLjQ2MDkzNy0xMzEuNDU3MDMxcy01OC44NTU0NjktMTMxLjQ2MDkzOC0xMzEuNDYwOTM3LTEzMS40NjA5Mzh6bTAgMjE2Ljc5Mjk2OWMtNDcuMTI1LS4wMDM5MDYtODUuMzMyMDMyLTM4LjIwNzAzMS04NS4zMjgxMjUtODUuMzM1OTM3IDAtNDcuMTI1IDM4LjIwMzEyNS04NS4zMzIwMzIgODUuMzMyMDMxLTg1LjMzMjAzMiA0Ny4xMjg5MDYuMDAzOTA3IDg1LjMzMjAzMSAzOC4yMDcwMzIgODUuMzMyMDMxIDg1LjMzMjAzMiAwIDQ3LjEyODkwNi0zOC4yMDcwMzEgODUuMzM1OTM3LTg1LjMzNTkzNyA4NS4zMzU5Mzd6bTAgMFwiIGZpbGw9XCJ1cmwoI2IpXCIvPjxwYXRoIGQ9XCJtNDIzLjM3MTA5NCAxMTkuMzQ3NjU2YzAgMTYuOTY0ODQ0LTEzLjc1MzkwNiAzMC43MTg3NS0zMC43MTg3NSAzMC43MTg3NS0xNi45Njg3NSAwLTMwLjcyMjY1Ni0xMy43NTM5MDYtMzAuNzIyNjU2LTMwLjcxODc1IDAtMTYuOTY4NzUgMTMuNzUzOTA2LTMwLjcyMjY1NiAzMC43MjI2NTYtMzAuNzIyNjU2IDE2Ljk2NDg0NCAwIDMwLjcxODc1IDEzLjc1MzkwNiAzMC43MTg3NSAzMC43MjI2NTZ6bTAgMFwiIGZpbGw9XCJ1cmwoI2MpXCIvPjwvc3ZnPlxyXG5cdClcclxufVxyXG5cclxuY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIoIHByb3BzICk7XHJcblx0fVxyXG5cdFxyXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XHJcblx0XHRjb25zdCB7IHNldEF0dHJpYnV0ZXMsIGNsaWVudElkLCBhdHRyaWJ1dGVzOiB7IHVuaXF1ZUlkIH0gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCBfY2xpZW50ID0gY2xpZW50SWQuc3Vic3RyKDAsIDYpO1xyXG4gICAgICAgIGlmICghdW5pcXVlSWQpIHtcclxuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IHVuaXF1ZUlkOiBfY2xpZW50IH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodW5pcXVlSWQgJiYgdW5pcXVlSWQgIT0gX2NsaWVudCkge1xyXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgdW5pcXVlSWQ6IF9jbGllbnQgfSk7XHJcbiAgICAgICAgfVxyXG5cdFx0alF1ZXJ5KCcuY2gtaW5zdGFncmFtLWdhbGxlcnknKS5jaF9pbnN0YWdyYW1fcGhvdG9zKCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0YXR0cmlidXRlcyxcclxuXHRcdFx0c2V0QXR0cmlidXRlc1xyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHtcclxuXHRcdFx0dW5pcXVlSWQsXHJcblx0XHRcdHVzZXJuYW1lLFxyXG5cdFx0XHRkaXNwbGF5UHJvZmlsZSxcclxuXHRcdFx0aXRlbXMsXHJcblx0XHRcdGl0ZW1zUm93XHJcbiAgICAgICAgfSA9IGF0dHJpYnV0ZXM7XHJcblxyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8RnJhZ21lbnQ+XHJcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxyXG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oJ1NldHRpbmdzJyl9IG9wZW5lZD17dHJ1ZX0+XHJcblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnVXNlcm5hbWUnKX1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dXNlcm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3VzZXJuYW1lID0+IHNldEF0dHJpYnV0ZXMoeyB1c2VybmFtZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRoZWxwPXtfXygnQ2hhbmdlcyBlZmZlY3RzIG9uIG5leHQgcmVsb2FkLicpfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXygnRGlzcGxheSBQcm9maWxlJyl9XHJcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ICEhZGlzcGxheVByb2ZpbGUgfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4gc2V0QXR0cmlidXRlcyh7IGRpc3BsYXlQcm9maWxlOiAhZGlzcGxheVByb2ZpbGUgfSkgfVxyXG5cdFx0XHRcdFx0XHRcdGhlbHA9e19fKCdDaGFuZ2VzIGVmZmVjdHMgb24gbmV4dCByZWxvYWQuJyl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oJ0l0ZW1zIHRvIGxvYWQnKX1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGl0ZW1zIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggaXRlbXMgKSA9PiBzZXRBdHRyaWJ1dGVzKHsgaXRlbXMgfSkgfVxyXG5cdFx0XHRcdFx0XHRcdG1pbj17IDIgfVxyXG5cdFx0XHRcdFx0XHRcdG1heD17IDQwIH1cclxuXHRcdFx0XHRcdFx0XHRoZWxwPXtfXygnQ2hhbmdlcyBlZmZlY3RzIG9uIG5leHQgcmVsb2FkLicpfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCdJdGVtcyBwZXIgcm93Jyl9XHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBpdGVtc1JvdyB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIGl0ZW1zUm93ICkgPT4gc2V0QXR0cmlidXRlcyh7IGl0ZW1zUm93IH0pIH1cclxuXHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cclxuXHRcdFx0XHRcdFx0XHRtYXg9eyAxMiB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cclxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxyXG5cdFx0XHRcdDxkaXYgXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2BjaC1pbnN0YWdyYW0tZ2FsbGVyeSBjaC1pbnN0YWdyYW0tZ2FsbGVyeS1lZGl0b3IgY2gtaW5zdGFncmFtLWdhbGxlcnktJHt1bmlxdWVJZH0gY2gtY29sdW1ucy0ke2l0ZW1zUm93fWB9IFxyXG5cdFx0XHRcdFx0ZGF0YS11c2VybmFtZT17dXNlcm5hbWV9IFxyXG5cdFx0XHRcdFx0ZGF0YS1pdGVtcz17aXRlbXN9IFxyXG5cdFx0XHRcdFx0ZGF0YS1pdGVtc3Jvdz17aXRlbXNSb3d9IFxyXG5cdFx0XHRcdFx0ZGF0YS1kaXNwbGF5cHJvZmlsZT17ZGlzcGxheVByb2ZpbGV9XHJcblx0XHRcdFx0PjxzcGFuIGNsYXNzTmFtZT1cImNoLWluc3RhZ3JhbS1nYWxsZXJ5LWxvYWRpbmdcIj48SW5zdGFJY29uLz48c3Bhbj57X18oJ0xvYWRpbmcnLCAnaW5zdGEtZmVlZC1nYWxsZXJ5Jyl9PC9zcGFuPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSgnYmxvY2svaW5zdGEtZmVlZC1nYWxsZXJ5Jywge1xyXG4gIHRpdGxlOiBfXygnUGhvdG8gRmVlZCBHYWxsZXJ5JywgJ2luc3RhLWZlZWQtZ2FsbGVyeScpLFxyXG4gIGljb246IEluc3RhSWNvbixcclxuICBjYXRlZ29yeTogJ2VtYmVkJyxcclxuICBrZXl3b3JkczogW1xyXG5cdFx0X18oICdpbnN0YWdyYW0nLCAnaW5zdGEtZmVlZC1nYWxsZXJ5JyApLFxyXG5cdFx0X18oICdnYWxsZXJ5JywgJ2luc3RhLWZlZWQtZ2FsbGVyeScgKSxcclxuXHRcdF9fKCAnaW1hZ2VzJywgJ2luc3RhLWZlZWQtZ2FsbGVyeScgKVxyXG5cdF0sXHJcbiAgYXR0cmlidXRlczoge1xyXG4gICAgdW5pcXVlSWQ6IHsgdHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICcnfSxcclxuICAgIHVzZXJuYW1lOiB7IHR5cGU6ICdzdHJpbmcnLCBkZWZhdWx0OiAnaW5zdGFncmFtJ30sXHJcbiAgICBkaXNwbGF5UHJvZmlsZTogeyB0eXBlOiAnYm9vbGVhbicsIGRlZmF1bHQ6IGZhbHNlfSxcclxuICAgIGl0ZW1zOiB7IHR5cGU6ICdudW1iZXInLCBkZWZhdWx0OiAxMn0sXHJcbiAgICBpdGVtc1JvdzogeyB0eXBlOiAnbnVtYmVyJywgZGVmYXVsdDogNH0sXHJcbiAgfSxcclxuICBlZGl0OiBFZGl0LFxyXG4gIHNhdmU6IGZ1bmN0aW9uKCBwcm9wcyApIHtcclxuXHJcblx0XHRjb25zdCB7XHJcblx0XHRcdHVuaXF1ZUlkLFxyXG5cdFx0XHR1c2VybmFtZSxcclxuXHRcdFx0ZGlzcGxheVByb2ZpbGUsXHJcblx0XHRcdGl0ZW1zLFxyXG5cdFx0XHRpdGVtc1Jvd1xyXG5cdFx0fSA9IHByb3BzLmF0dHJpYnV0ZXM7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdDxkaXYgXHJcblx0XHRcdGNsYXNzTmFtZT17YGNoLWluc3RhZ3JhbS1nYWxsZXJ5IGNoLWluc3RhZ3JhbS1nYWxsZXJ5LSR7dW5pcXVlSWR9IGNoLWNvbHVtbnMtJHtpdGVtc1Jvd31gfSBcclxuXHRcdFx0ZGF0YS11c2VybmFtZT17dXNlcm5hbWV9IFxyXG5cdFx0XHRkYXRhLWl0ZW1zPXtpdGVtc30gXHJcblx0XHRcdGRhdGEtaXRlbXNyb3c9e2l0ZW1zUm93fSBcclxuXHRcdFx0ZGF0YS1kaXNwbGF5cHJvZmlsZT17ZGlzcGxheVByb2ZpbGV9XHJcblx0XHQ+PHNwYW4gY2xhc3NOYW1lPVwiY2gtaW5zdGFncmFtLWdhbGxlcnktbG9hZGluZ1wiPjxJbnN0YUljb24vPjxzcGFuPntfXygnTG9hZGluZycsICdpbnN0YS1mZWVkLWdhbGxlcnknKX08L3NwYW4+PC9zcGFuPjwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0pO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=