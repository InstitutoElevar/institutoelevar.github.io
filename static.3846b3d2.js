(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "http://institutoelevar.github.io/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YoutubeIcon = exports.USAIcon = exports.SchoolIcon = exports.ScholarshipIcon = exports.PlayIcon = exports.PersonIcon = exports.MoneyIcon = exports.MenuIcon = exports.LinkedInIcon = exports.InstagramIcon = exports.HandIcon = exports.FacebookIcon = exports.CloseIcon = exports.CheckIcon = exports.BrazilIcon = undefined;

var _brazil = __webpack_require__(32);

var _brazil2 = _interopRequireDefault(_brazil);

var _check = __webpack_require__(33);

var _check2 = _interopRequireDefault(_check);

var _close = __webpack_require__(34);

var _close2 = _interopRequireDefault(_close);

var _facebook = __webpack_require__(35);

var _facebook2 = _interopRequireDefault(_facebook);

var _hand = __webpack_require__(36);

var _hand2 = _interopRequireDefault(_hand);

var _instagram = __webpack_require__(37);

var _instagram2 = _interopRequireDefault(_instagram);

var _linkedin = __webpack_require__(38);

var _linkedin2 = _interopRequireDefault(_linkedin);

var _menu = __webpack_require__(39);

var _menu2 = _interopRequireDefault(_menu);

var _money = __webpack_require__(40);

var _money2 = _interopRequireDefault(_money);

var _person = __webpack_require__(41);

var _person2 = _interopRequireDefault(_person);

var _play = __webpack_require__(42);

var _play2 = _interopRequireDefault(_play);

var _school = __webpack_require__(43);

var _school2 = _interopRequireDefault(_school);

var _scholarship = __webpack_require__(44);

var _scholarship2 = _interopRequireDefault(_scholarship);

var _usa = __webpack_require__(45);

var _usa2 = _interopRequireDefault(_usa);

var _youtube = __webpack_require__(46);

var _youtube2 = _interopRequireDefault(_youtube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BrazilIcon = _brazil2.default;
exports.CheckIcon = _check2.default;
exports.CloseIcon = _close2.default;
exports.FacebookIcon = _facebook2.default;
exports.HandIcon = _hand2.default;
exports.InstagramIcon = _instagram2.default;
exports.LinkedInIcon = _linkedin2.default;
exports.MenuIcon = _menu2.default;
exports.MoneyIcon = _money2.default;
exports.PersonIcon = _person2.default;
exports.PlayIcon = _play2.default;
exports.ScholarshipIcon = _scholarship2.default;
exports.SchoolIcon = _school2.default;
exports.USAIcon = _usa2.default;
exports.YoutubeIcon = _youtube2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var scrollTo = exports.scrollTo = function scrollTo(element) {
  if (window) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: document.getElementById(element).offsetTop
    });
  }
};

var setLocalStorage = exports.setLocalStorage = function setLocalStorage(key, value) {
  if (typeof localStorage !== 'undefined' && localStorage) {
    localStorage.setItem(key, value);
  }
};

var getLocalStorage = exports.getLocalStorage = function getLocalStorage(key) {
  if (typeof localStorage !== 'undefined' && localStorage) {
    return localStorage.getItem(key);
  }

  return null;
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoShort = exports.Logo = undefined;

var _logo = __webpack_require__(62);

var _logo2 = _interopRequireDefault(_logo);

var _logo_short = __webpack_require__(63);

var _logo_short2 = _interopRequireDefault(_logo_short);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Logo = _logo2.default;
exports.LogoShort = _logo_short2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(5);

var _reactI18next = __webpack_require__(1);

var _home_hoc = __webpack_require__(30);

var _home_hoc2 = _interopRequireDefault(_home_hoc);

var _main_section = __webpack_require__(61);

var _main_section2 = _interopRequireDefault(_main_section);

var _about_section = __webpack_require__(66);

var _about_section2 = _interopRequireDefault(_about_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Home = (0, _reactStatic.withSiteData)(function (_ref) {
  var sections = _ref.sections,
      props = _objectWithoutProperties(_ref, ['sections']);

  return _react2.default.createElement(
    'div',
    { className: 'home' },
    _react2.default.createElement(_main_section2.default, props),
    _react2.default.createElement(_about_section2.default, props),
    sections
  );
});

exports.default = (0, _reactI18next.translate)('home')((0, _home_hoc2.default)(Home));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _icons = __webpack_require__(2);

__webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var t = _ref.t;
  return _react2.default.createElement(
    'div',
    { className: 'home-ss', id: 'about' },
    _react2.default.createElement(
      'div',
      { className: 'home-ss__wrapper' },
      _react2.default.createElement(
        'div',
        { className: 'home-ss__content-wrapper' },
        _react2.default.createElement(
          'h1',
          { className: 'home-ss__title' },
          t('scholarship.title')
        ),
        _react2.default.createElement(
          'p',
          { className: 'home-ss__description' },
          t('scholarship.description.part1')
        ),
        _react2.default.createElement(
          'p',
          { className: 'home-ss__description' },
          t('scholarship.description.part2')
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'home-ss__image' },
        _react2.default.createElement(_icons.ScholarshipIcon, { size: 300 })
      )
    )
  );
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _icons = __webpack_require__(2);

var _utils = __webpack_require__(3);

__webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var t = _ref.t;

  var items = [{
    title: 'modalities.m1.title',
    description: 'modalities.m1.description',
    button: 'modalities.m1.button',
    link: 'applyScholar',
    className: '--school',
    Icon: _icons.SchoolIcon
  }, {
    title: 'modalities.m2.title',
    description: 'modalities.m2.description',
    button: 'modalities.m2.button',
    link: 'contact',
    className: '--hand',
    Icon: _icons.HandIcon
  }, {
    title: 'modalities.m3.title',
    description: 'modalities.m3.description',
    button: 'modalities.m3.button',
    link: 'contact',
    className: '--money',
    Icon: _icons.MoneyIcon
  }, {
    title: 'modalities.m4.title',
    description: 'modalities.m4.description',
    button: 'modalities.m4.button',
    link: 'contact',
    className: '--person',
    Icon: _icons.PersonIcon
  }];

  var itemComponetns = items.map(function (_ref2) {
    var title = _ref2.title,
        description = _ref2.description,
        button = _ref2.button,
        link = _ref2.link,
        className = _ref2.className,
        Icon = _ref2.Icon;
    return _react2.default.createElement(
      'div',
      { className: 'home-mds__item ' + className, key: title },
      _react2.default.createElement(
        'div',
        { className: 'home-mds__item--icon-wrapper ' + className },
        _react2.default.createElement(
          'span',
          { className: 'home-mds__item--icon' },
          _react2.default.createElement(Icon, { size: 48, fill: '#144fb8' })
        )
      ),
      _react2.default.createElement(
        'h2',
        { className: 'home-mds__item--title' },
        t(title),
        _react2.default.createElement('hr', { className: 'home-mds__item--line' })
      ),
      _react2.default.createElement(
        'p',
        { className: 'home-mds__item--description' },
        t(description)
      ),
      _react2.default.createElement(
        'div',
        { className: 'home-mds__item--button-wrapper' },
        _react2.default.createElement(
          'button',
          {
            onClick: function onClick() {
              return (0, _utils.scrollTo)(link);
            },
            className: 'home-mds__item--button button --primary'
          },
          t(button)
        )
      )
    );
  });

  return _react2.default.createElement(
    'div',
    { className: 'home-mds', id: 'apply' },
    _react2.default.createElement(
      'div',
      { className: 'home-mds__wrapper' },
      _react2.default.createElement(
        'h1',
        { className: 'home-mds__title' },
        t('modalities.title')
      ),
      _react2.default.createElement(
        'div',
        { className: 'home-mds__content-wrapper' },
        itemComponetns
      )
    )
  );
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var t = _ref.t;
  return _react2.default.createElement(
    'div',
    { className: 'home-ass', id: 'applyScholar' },
    _react2.default.createElement(
      'div',
      { className: 'home-ass__wrapper' },
      _react2.default.createElement(
        'h1',
        { className: 'home-ass__title' },
        t('scholar.title')
      ),
      _react2.default.createElement(
        'p',
        { className: 'home-ass__description' },
        t('scholar.description')
      ),
      _react2.default.createElement(
        'div',
        { className: 'home-ass__process' },
        _react2.default.createElement(
          'p',
          { className: 'home-ass__process--text' },
          t('scholar.selection.text'),
          _react2.default.createElement(
            'span',
            { className: 'home-ass__process--status' },
            t('scholar.selection.status')
          )
        ),
        _react2.default.createElement(
          'p',
          { className: 'home-ass__process--result' },
          t('scholar.selection.result')
        ),
        _react2.default.createElement(
          'ul',
          { className: 'home-ass__process--result-classified' },
          _react2.default.createElement(
            'li',
            null,
            'Erica Bianca Bravim'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Isaque Castelo Coutinho'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Yan Victor Ribeiro Marim'
          )
        ),
        _react2.default.createElement(
          'p',
          { className: 'home-ass__process--facebook' },
          t('scholar.selection.facebook.text'),
          _react2.default.createElement(
            'a',
            {
              className: 'home-ass__process--facebook-link',
              href: 'https://www.facebook.com/institutoelevar/',
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            t('scholar.selection.facebook.link')
          )
        )
      )
    )
  );
};
// import { StairsLoader } from '../../common'

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(3);

__webpack_require__(50);

var _stairs = __webpack_require__(51);

var _stairs2 = _interopRequireDefault(_stairs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var t = _ref.t;
  return _react2.default.createElement(
    'div',
    {
      id: 'sponsors',
      className: 'home-sps',
      style: { backgroundImage: 'url("' + _stairs2.default + '")' }
    },
    _react2.default.createElement(
      'div',
      { className: 'home-sps__wrapper' },
      _react2.default.createElement(
        'p',
        { className: 'home-sps__description' },
        t('sponsorships.description')
      ),
      _react2.default.createElement(
        'button',
        {
          onClick: function onClick() {
            return (0, _utils.scrollTo)('contact');
          },
          className: 'home-sps__button button --primary'
        },
        t('sponsorships.button')
      )
    )
  );
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _icons = __webpack_require__(2);

__webpack_require__(52);

var _andre = __webpack_require__(53);

var _andre2 = _interopRequireDefault(_andre);

var _eduarda = __webpack_require__(54);

var _eduarda2 = _interopRequireDefault(_eduarda);

var _lucas_bassetti = __webpack_require__(55);

var _lucas_bassetti2 = _interopRequireDefault(_lucas_bassetti);

var _lucas = __webpack_require__(56);

var _lucas2 = _interopRequireDefault(_lucas);

var _rachel = __webpack_require__(57);

var _rachel2 = _interopRequireDefault(_rachel);

var _talles = __webpack_require__(58);

var _talles2 = _interopRequireDefault(_talles);

var _thais = __webpack_require__(59);

var _thais2 = _interopRequireDefault(_thais);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var t = _ref.t;

  var contributors = [{
    name: 'Talles Souza',
    position: 'contributors.positions.coFounder',
    image: _talles2.default,
    links: {
      facebook: 'https://www.facebook.com/tallestms',
      linkedin: 'https://www.linkedin.com/in/tallestms/'
    }
  }, {
    name: 'Thaís Souza',
    position: 'contributors.positions.coFounder2',
    image: _thais2.default,
    links: {
      facebook: 'https://www.facebook.com/thais.tatagiba',
      linkedin: 'https://www.linkedin.com/in/thaistatagiba/'
    }
  }, {
    name: 'Lucas Raggi',
    position: 'contributors.positions.legalAdivisor',
    image: _lucas2.default,
    links: {
      linkedin: 'https://www.linkedin.com/in/lucas-raggi-tatagiba-cordeiro-a0713410a'
    }
  }, {
    name: 'Rachel Boerboon',
    position: 'contributors.positions.volunteer2',
    image: _rachel2.default,
    links: {}
  }, {
    name: 'Eduarda Lira',
    position: 'contributors.positions.volunteer2',
    image: _eduarda2.default,
    links: {}
  }, {
    name: 'Andre Passamani',
    position: 'contributors.positions.volunteer',
    image: _andre2.default,
    links: {
      linkedin: 'https://www.linkedin.com/in/andre-passamani-castelo-branco-51213867/'
    }
  }, {
    name: 'Lucas Bassetti',
    position: 'contributors.positions.volunteer',
    image: _lucas_bassetti2.default,
    links: {
      facebook: 'https://www.facebook.com/lucasbr.dafonseca',
      linkedin: 'https://www.linkedin.com/in/lucas-bassetti-67909836/'
    }
  }];

  var contributorComponents = contributors.map(function (_ref2) {
    var name = _ref2.name,
        position = _ref2.position,
        image = _ref2.image,
        links = _ref2.links;
    return _react2.default.createElement(
      'div',
      { key: name, className: 'home-cs__contributor' },
      _react2.default.createElement(
        'div',
        {
          className: 'home-cs__contributor--image-wrapper',
          style: { backgroundImage: 'url("' + image + '")' },
          title: name
        },
        Object.keys(links).length > 0 && _react2.default.createElement(
          'div',
          { className: 'home-cs__contributor--links' },
          links.facebook && _react2.default.createElement(
            'a',
            {
              className: 'home-cs__contributor--link',
              href: links.facebook,
              target: '_blank'
            },
            _react2.default.createElement(_icons.FacebookIcon, { size: 24, fill: '#ffffff' })
          ),
          links.linkedin && _react2.default.createElement(
            'a',
            {
              className: 'home-cs__contributor--link',
              href: links.linkedin,
              target: '_blank'
            },
            _react2.default.createElement(_icons.LinkedInIcon, { size: 24, fill: '#ffffff' })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'home-cs__contributor--details' },
        _react2.default.createElement(
          'span',
          { className: 'home-cs__contributor--name' },
          name
        ),
        _react2.default.createElement(
          'span',
          { className: 'home-cs__contributor--position' },
          t(position)
        )
      )
    );
  });

  return _react2.default.createElement(
    'div',
    { className: 'home-cs', id: 'contributors' },
    _react2.default.createElement(
      'div',
      { className: 'home-cs__wrapper' },
      _react2.default.createElement(
        'h1',
        { className: 'home-cs__title' },
        t('contributors.title')
      ),
      _react2.default.createElement(
        'div',
        { className: 'home-cs__contributors' },
        contributorComponents
      )
    )
  );
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactSection = function ContactSection(_ref) {
  var t = _ref.t;
  return _react2.default.createElement(
    'div',
    { className: 'home-cts', id: 'contact' },
    _react2.default.createElement(
      'div',
      { className: 'home-cts__wrapper' },
      _react2.default.createElement(
        'h1',
        { className: 'home-cts__title' },
        t('contact.title')
      ),
      _react2.default.createElement(
        'p',
        { className: 'home-cts__contact' },
        t('contact.description'),
        _react2.default.createElement(
          'a',
          {
            className: 'home-cts__contact--email',
            href: 'mailto:contato@institutoelevar.com.br'
          },
          'contato@institutoelevar.com.br'
        )
      )
    )
  );
};
// import ContactHOC from './contact_section_hoc'

exports.default = ContactSection;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    "div",
    { className: "page404" },
    _react2.default.createElement(
      "h1",
      null,
      "404 - Oh no's! We couldn't find that page :("
    )
  );
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(22);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var render = function render(Comp) {
    _reactDom2.default.render(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(5);

var _reactHotLoader = __webpack_require__(23);

var _reactStaticRoutes = __webpack_require__(24);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _reactGa = __webpack_require__(73);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _layout = __webpack_require__(74);

__webpack_require__(80);

__webpack_require__(91);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function scrollHandler() {
  var header = document.getElementById('header');
  var scrolledContent = window.scrollY;
  var windowSize = window.innerHeight - 100;

  if (scrolledContent >= windowSize) {
    header.classList.add('--fixed');
  } else {
    header.classList.remove('--fixed');
  }
}

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', scrollHandler);

      if (true) {
        _reactGa2.default.initialize('UA-116315345-1');
        _reactGa2.default.pageview(window.location.pathname + window.location.search);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_layout.Header, null),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(_reactStaticRoutes2.default, null)
          ),
          _react2.default.createElement(_layout.Footer, null)
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(7);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(8);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(9);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(25);

var _reactUniversalComponent = __webpack_require__(26);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/home/home',
  file: '/Users/lucas/Documents/InstitutoElevar/institutoelevar-site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/components/home/home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/home/home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/components/home/home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/404',
  file: '/Users/lucas/Documents/InstitutoElevar/institutoelevar-site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)), (0, _importCss3.default)('src/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return 'src/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 1

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          return _react2.default.createElement(Comp, _extends({ key: props.location.pathname }, props));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(27);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(28);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(29);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        if (Component) return Promise.resolve(Component);

        return requireAsync(props, context);
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(10);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(7);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(8);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(9);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeHOCWrapper = function HomeHOCWrapper(InnerComponent) {
  var HomeHOC = function (_Component) {
    _inherits(HomeHOC, _Component);

    function HomeHOC() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, HomeHOC);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HomeHOC.__proto__ || Object.getPrototypeOf(HomeHOC)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        modules: []
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(HomeHOC, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        Promise.all([(0, _universalImport3.default)({
          id: './scholarship_section/scholarship_section',
          file: '/Users/lucas/Documents/InstitutoElevar/institutoelevar-site/src/components/home/home_hoc.js',
          load: function load() {
            return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('scholarship_section/scholarship_section', {
              disableWarnings: true
            })]).then(function (proms) {
              return proms[0];
            });
          },
          path: function path() {
            return _path3.default.join(__dirname, './scholarship_section/scholarship_section');
          },
          resolve: function resolve() {
            return /*require.resolve*/(13);
          },
          chunkName: function chunkName() {
            return 'scholarship_section/scholarship_section';
          }
        }), (0, _universalImport3.default)({
          id: './modalities_section/modalities_section',
          file: '/Users/lucas/Documents/InstitutoElevar/institutoelevar-site/src/components/home/home_hoc.js',
          load: function load() {
            return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('modalities_section/modalities_section', {
              disableWarnings: true
            })]).then(function (proms) {
              return proms[0];
            });
          },
          path: function path() {
            return _path3.default.join(__dirname, './modalities_section/modalities_section');
          },
          resolve: function resolve() {
            return /*require.resolve*/(14);
          },
          chunkName: function chunkName() {
            return 'modalities_section/modalities_section';
          }
        }), (0, _universalImport3.default)({
          id: './apply_scholar_section/apply_scholar_section',
          file: '/Users/lucas/Documents/InstitutoElevar/institutoelevar-site/src/components/home/home_hoc.js',
          load: function load() {
            return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 15)), (0, _importCss3.default)('apply_scholar_section/apply_scholar_section', {
              disableWarnings: true
            })]).then(function (proms) {
              return proms[0];
            });
          },
          path: function path() {
            return _path3.default.join(__dirname, './apply_scholar_section/apply_scholar_section');
          },
          resolve: function resolve() {
            return /*require.resolve*/(15);
          },
          chunkName: function chunkName() {
            return 'apply_scholar_section/apply_scholar_section';
          }
        }), (0, _universalImport3.default)({
          id: './sponsorships_section/sponsorships_section',
          file: '/Users/lucas/Documents/InstitutoElevar/institutoelevar-site/src/components/home/home_hoc.js',
          load: function load() {
            return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 16)), (0, _importCss3.default)('sponsorships_section/sponsorships_section', {
              disableWarnings: true
            })]).then(function (proms) {
              return proms[0];
            });
          },
          path: function path() {
            return _path3.default.join(__dirname, './sponsorships_section/sponsorships_section');
          },
          resolve: function resolve() {
            return /*require.resolve*/(16);
          },
          chunkName: function chunkName() {
            return 'sponsorships_section/sponsorships_section';
          }
        }), (0, _universalImport3.default)({
          id: './contributors_section/contributors_section',
          file: '/Users/lucas/Documents/InstitutoElevar/institutoelevar-site/src/components/home/home_hoc.js',
          load: function load() {
            return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('contributors_section/contributors_section', {
              disableWarnings: true
            })]).then(function (proms) {
              return proms[0];
            });
          },
          path: function path() {
            return _path3.default.join(__dirname, './contributors_section/contributors_section');
          },
          resolve: function resolve() {
            return /*require.resolve*/(17);
          },
          chunkName: function chunkName() {
            return 'contributors_section/contributors_section';
          }
        }), (0, _universalImport3.default)({
          id: './contact_section/contact_section',
          file: '/Users/lucas/Documents/InstitutoElevar/institutoelevar-site/src/components/home/home_hoc.js',
          load: function load() {
            return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('contact_section/contact_section', {
              disableWarnings: true
            })]).then(function (proms) {
              return proms[0];
            });
          },
          path: function path() {
            return _path3.default.join(__dirname, './contact_section/contact_section');
          },
          resolve: function resolve() {
            return /*require.resolve*/(18);
          },
          chunkName: function chunkName() {
            return 'contact_section/contact_section';
          }
        })]).then(function (modules) {
          _this2.setState({ modules: modules.map(function (m) {
              return m.default;
            }) });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var modules = this.state.modules;

        var sections = modules.map(function (Module, index) {
          return _react2.default.createElement(Module, _extends({}, _this3.props, { key: index }));
        });

        return _react2.default.createElement(InnerComponent, _extends({}, this.state, this.props, {
          sections: sections
        }));
      }
    }]);

    return HomeHOC;
  }(_react.Component);

  return (0, _reactRouter.withRouter)(HomeHOC);
};

exports.default = HomeHOCWrapper;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Brazil = function Brazil(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return _react2.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: width || 640,
      height: height || 480,
      viewBox: "0 0 640 480"
    },
    _react2.default.createElement(
      "g",
      { strokeWidth: "1pt" },
      _react2.default.createElement("path", { fill: "#229e45", fillRule: "evenodd", d: "M0 0h640v480H0z" }),
      _react2.default.createElement("path", { fill: "#f8e509", fillRule: "evenodd", d: "M321.4 436l301.5-195.7L319.6 44 17.1 240.7 321.4 436z" }),
      _react2.default.createElement("path", { fill: "#2b49a3", fillRule: "evenodd", d: "M452.8 240c0 70.3-57.1 127.3-127.6 127.3A127.4 127.4 0 1 1 452.8 240z" }),
      _react2.default.createElement("path", { fill: "#ffffef", fillRule: "evenodd", d: "M283.3 316.3l-4-2.3-4 2 .9-4.5-3.2-3.4 4.5-.5 2.2-4 1.9 4.2 4.4.8-3.3 3m86 26.3l-3.9-2.3-4 2 .8-4.5-3.1-3.3 4.5-.5 2.1-4.1 2 4.2 4.4.8-3.4 3.1m-36.2-30l-3.4-2-3.5 1.8.8-3.9-2.8-2.9 4-.4 1.8-3.6 1.6 3.7 3.9.7-3 2.7m87-8.5l-3.4-2-3.5 1.8.8-3.9-2.7-2.8 3.9-.4 1.8-3.5 1.6 3.6 3.8.7-2.9 2.6m-87.3-22l-4-2.2-4 2 .8-4.6-3.1-3.3 4.5-.5 2.1-4.1 2 4.2 4.4.8-3.4 3.2m-104.6-35l-4-2.2-4 2 1-4.6-3.3-3.3 4.6-.5 2-4.1 2 4.2 4.4.8-3.3 3.1m13.3 57.2l-4-2.3-4 2 .9-4.5-3.2-3.3 4.5-.6 2.1-4 2 4.2 4.4.8-3.3 3.1m132-67.3l-3.6-2-3.6 1.8.8-4-2.8-3 4-.5 1.9-3.6 1.7 3.8 4 .7-3 2.7m-6.7 38.3l-2.7-1.6-2.9 1.4.6-3.2-2.2-2.3 3.2-.4 1.5-2.8 1.3 3 3 .5-2.2 2.2m-142.2 50.4l-2.7-1.5-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2M419 299.8l-2.2-1.1-2.2 1 .5-2.3-1.7-1.6 2.4-.3 1.2-2 1 2 2.5.5-1.9 1.5" }),
      _react2.default.createElement("path", { fill: "#ffffef", fillRule: "evenodd", d: "M219.3 287.6l-2.7-1.5-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2" }),
      _react2.default.createElement("path", { fill: "#ffffef", fillRule: "evenodd", d: "M219.3 287.6l-2.7-1.5-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2m42.3 3l-2.6-1.4-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .5-2.3 2.1m-4.8 17l-2.6-1.5-2.7 1.4.6-3-2.1-2.3 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2m87.4-22.2l-2.6-1.6-2.8 1.4.6-3-2-2.3 3-.3 1.4-2.7 1.2 2.8 3 .5-2.2 2.1m-25.1 3l-2.7-1.5-2.7 1.4.6-3-2-2.3 3-.3 1.4-2.8 1.2 2.9 3 .5-2.2 2.1m-68.8-5.8l-1.7-1-1.7.8.4-1.9-1.3-1.4 1.9-.2.8-1.7.8 1.8 1.9.3-1.4 1.3m167.8 45.4l-2.6-1.5-2.7 1.4.6-3-2.1-2.3 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2m-20.8 6l-2.2-1.4-2.3 1.2.5-2.6-1.7-1.8 2.5-.3 1.2-2.3 1 2.4 2.5.4-1.9 1.8m10.4 2.3l-2-1.2-2.1 1 .4-2.3-1.6-1.7 2.3-.3 1.1-2 1 2 2.3.5-1.7 1.6m29.1-22.8l-2-1-2 1 .5-2.3-1.6-1.7 2.3-.3 1-2 1 2.1 2.1.4-1.6 1.6m-38.8 41.8l-2.5-1.4-2.7 1.2.6-2.8-2-2 3-.3 1.3-2.5 1.2 2.6 3 .5-2.3 1.9m.6 14.2l-2.4-1.4-2.4 1.3.6-2.8-1.9-2 2.7-.4 1.2-2.5 1.1 2.6 2.7.5-2 2m-19-23.1l-1.9-1.2-2 1 .4-2.2-1.5-1.7 2.2-.2 1-2 1 2 2.2.4-1.6 1.6m-17.8 2.3l-2-1.2-2 1 .5-2.2-1.6-1.7 2.3-.2 1-2 1 2 2.1.4-1.6 1.6m-30.4-24.6l-2-1.1-2 1 .5-2.3-1.6-1.6 2.2-.3 1-2 1 2 2.2.5-1.6 1.5m3.7 57l-1.6-.9-1.8.9.4-2-1.3-1.4 1.9-.2.9-1.7.8 1.8 1.9.3-1.4 1.3m-46.2-86.6l-4-2.3-4 2 .9-4.5-3.2-3.3 4.5-.6 2.2-4 1.9 4.2 4.4.8-3.3 3.1" }),
      _react2.default.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M444.4 285.8a124.6 124.6 0 0 0 5.8-19.8c-67.8-59.5-143.3-90-238.7-83.7a124.5 124.5 0 0 0-8.5 20.9c113-10.8 196 39.2 241.4 82.6z" }),
      _react2.default.createElement("path", { fill: "#309e3a", d: "M414 252.4l2.3 1.3a3.4 3.4 0 0 0-.3 2.2 3 3 0 0 0 1.4 1.7c.7.5 1.4.8 2 .7.6 0 1-.3 1.3-.7a1.3 1.3 0 0 0 .2-.9 2.3 2.3 0 0 0-.5-1c-.2-.3-.7-1-1.5-1.8a7.7 7.7 0 0 1-1.8-3 3.7 3.7 0 0 1 2-4.4 3.8 3.8 0 0 1 2.3-.2 7 7 0 0 1 2.6 1.2c1.4 1 2.3 2 2.6 3.2a4.1 4.1 0 0 1-.6 3.3l-2.4-1.5c.3-.6.4-1.2.2-1.7-.1-.5-.5-1-1.2-1.4a3.2 3.2 0 0 0-1.8-.7 1 1 0 0 0-.9.5c-.2.3-.2.6-.1 1s.6 1.2 1.6 2.2c1 1 1.6 1.9 2 2.5a3.9 3.9 0 0 1-.3 4.2 4.1 4.1 0 0 1-1.9 1.5 4 4 0 0 1-2.4.3c-.9-.2-1.8-.6-2.8-1.3-1.5-1-2.4-2.1-2.7-3.3a5.4 5.4 0 0 1 .6-4zm-11.6-7.6l2.5 1.3a3.4 3.4 0 0 0-.2 2.2 3 3 0 0 0 1.4 1.6c.8.5 1.4.7 2 .6.6 0 1-.3 1.3-.8a1.3 1.3 0 0 0 .2-.8c0-.3-.2-.7-.5-1a34.6 34.6 0 0 0-1.6-1.8c-1.1-1.1-1.8-2-2-2.8a3.7 3.7 0 0 1 .4-3.1 3.6 3.6 0 0 1 1.6-1.4 3.8 3.8 0 0 1 2.2-.3 7 7 0 0 1 2.6 1c1.5 1 2.4 2 2.7 3.1a4.1 4.1 0 0 1-.4 3.4l-2.5-1.4c.3-.7.4-1.2.2-1.7s-.6-1-1.3-1.4a3.2 3.2 0 0 0-1.9-.6 1 1 0 0 0-.8.5c-.2.3-.2.6-.1 1s.7 1.2 1.7 2.2c1 1 1.7 1.8 2 2.4a3.9 3.9 0 0 1 0 4.2 4.2 4.2 0 0 1-1.8 1.6 4 4 0 0 1-2.4.3 8 8 0 0 1-2.9-1.1 6 6 0 0 1-2.8-3.2 5.4 5.4 0 0 1 .4-4zm-14.2-3.8l7.3-12 8.8 5.5-1.2 2-6.4-4-1.6 2.7 6 3.7-1.3 2-6-3.7-2 3.3 6.7 4-1.2 2-9-5.5zm-20.7-17l1.1-2 5.4 2.7-2.5 5c-.8.2-1.8.3-3 .2a9.4 9.4 0 0 1-3.3-1 7.7 7.7 0 0 1-3-2.6 6 6 0 0 1-1-3.5 8.6 8.6 0 0 1 1-3.7 8 8 0 0 1 2.6-3 6.2 6.2 0 0 1 3.6-1.1c1 0 2 .3 3.2 1 1.6.7 2.6 1.7 3.1 2.8a5 5 0 0 1 .3 3.5l-2.7-.8a3 3 0 0 0-.2-2c-.3-.6-.8-1-1.6-1.4a3.8 3.8 0 0 0-3.1-.3c-1 .3-1.9 1.2-2.6 2.6-.7 1.4-1 2.7-.7 3.8a3.7 3.7 0 0 0 2 2.4c.5.3 1.1.5 1.7.5a6 6 0 0 0 1.8 0l.8-1.6-2.9-1.5zm-90.2-22.3l2-14 4.2.7 1.1 9.8 3.9-9 4.2.6-2 13.8-2.7-.4 1.7-10.9-4.4 10.5-2.7-.4-1.1-11.3-1.6 11-2.6-.4zm-14.1-1.7l1.3-14 10.3 1-.2 2.4-7.5-.7-.3 3 7 .7-.3 2.4-7-.7-.3 3.8 7.8.7-.2 2.4-10.6-1z" }),
      _react2.default.createElement(
        "g",
        { strokeOpacity: ".5" },
        _react2.default.createElement("path", { fill: "#309e3a", d: "M216.5 191.3c0-1.5.3-2.6.7-3.6a6.7 6.7 0 0 1 1.4-1.9 5.4 5.4 0 0 1 1.8-1.2c1-.3 2-.5 3-.5 2.1 0 3.7.8 5 2a7.4 7.4 0 0 1 1.6 5.5c0 2.2-.7 4-2 5.3a6.5 6.5 0 0 1-5 1.7 6.6 6.6 0 0 1-4.8-2 7.3 7.3 0 0 1-1.7-5.3z" }),
        _react2.default.createElement("path", { fill: "#f7ffff", d: "M219.4 191.3c0 1.5.3 2.7 1 3.6.7.8 1.6 1.3 2.8 1.3a3.5 3.5 0 0 0 2.8-1.1c.7-.8 1-2 1.1-3.7 0-1.6-.2-2.8-1-3.6a3.5 3.5 0 0 0-2.7-1.3 3.6 3.6 0 0 0-2.8 1.2c-.8.8-1.1 2-1.2 3.6z" })
      ),
      _react2.default.createElement(
        "g",
        { strokeOpacity: ".5" },
        _react2.default.createElement("path", { fill: "#309e3a", d: "M233 198.5l.2-14h6c1.5 0 2.5.2 3.2.5.7.2 1.2.7 1.6 1.3s.6 1.4.6 2.3a3.8 3.8 0 0 1-1 2.6 4.5 4.5 0 0 1-2.7 1.2l1.5 1.2c.4.4.9 1.2 1.5 2.3l1.7 2.8h-3.4l-2-3.2-1.4-2a2.1 2.1 0 0 0-.9-.6 5 5 0 0 0-1.4-.2h-.6v5.8H233z" }),
        _react2.default.createElement("path", { fill: "#fff", d: "M236 190.5h2c1.4 0 2.3 0 2.6-.2.3 0 .6-.3.8-.5s.3-.7.3-1c0-.6-.1-1-.4-1.2-.2-.3-.6-.5-1-.6h-2l-2.3-.1v3.5z" })
      ),
      _react2.default.createElement(
        "g",
        { strokeOpacity: ".5" },
        _react2.default.createElement("path", { fill: "#309e3a", d: "M249 185.2l5.2.3c1.1 0 2 .1 2.6.3a4.7 4.7 0 0 1 2 1.4 6 6 0 0 1 1.2 2.4c.3.9.4 2 .3 3.3a9.3 9.3 0 0 1-.5 3c-.4 1-1 1.8-1.7 2.4a5 5 0 0 1-2 1c-.6.2-1.5.2-2.5.2l-5.3-.3.7-14z" }),
        _react2.default.createElement("path", { fill: "#fff", d: "M251.7 187.7l-.5 9.3h3.8c.5 0 .9-.2 1.2-.5.3-.3.6-.7.8-1.3.2-.6.4-1.5.4-2.6s0-1.9-.1-2.5a3.2 3.2 0 0 0-.8-1.4 2.7 2.7 0 0 0-1.2-.7 13 13 0 0 0-2.3-.3h-1.3z" })
      ),
      _react2.default.createElement(
        "g",
        { strokeOpacity: ".5" },
        _react2.default.createElement("path", { fill: "#309e3a", d: "M317.6 210.2l3.3-13.6 4.4 1 3.2 1c.7.4 1.3 1 1.6 1.9.4.8.4 1.7.2 2.8-.2.8-.5 1.5-1 2a3.9 3.9 0 0 1-3 1.4c-.7 0-1.7-.2-3-.5l-1.7-.5-1.2 5.2-2.8-.7z" }),
        _react2.default.createElement("path", { fill: "#fff", d: "M323 199.6l-.8 3.8 1.5.4c1 .2 1.8.4 2.2.3a1.9 1.9 0 0 0 1.6-1.5c0-.5 0-.9-.2-1.3a2 2 0 0 0-1-.9l-1.9-.5-1.3-.3z" })
      ),
      _react2.default.createElement(
        "g",
        { strokeOpacity: ".5" },
        _react2.default.createElement("path", { fill: "#309e3a", d: "M330.6 214.1l4.7-13.2 5.5 2c1.5.5 2.4 1 3 1.4.5.5.9 1 1 1.8s.2 1.5 0 2.3c-.4 1-1 1.7-1.8 2.2-.8.4-1.8.5-3 .3.4.5.8 1 1 1.6l.8 2.7.6 3.1-3.1-1.1-1-3.6a19.5 19.5 0 0 0-.7-2.4 2.1 2.1 0 0 0-.6-.8c-.2-.3-.6-.5-1.3-.7l-.5-.2-2 5.6-2.6-1z" }),
        _react2.default.createElement("path", { fill: "#fff", d: "M336 207.4l1.9.7c1.3.5 2.1.7 2.5.7.3 0 .6 0 .9-.3.3-.2.5-.5.6-.9.2-.4.2-.8 0-1.2a1.7 1.7 0 0 0-.8-.9l-2-.7-2-.7-1.2 3.3z" })
      ),
      _react2.default.createElement(
        "g",
        { strokeOpacity: ".5" },
        _react2.default.createElement("path", { fill: "#309e3a", d: "M347 213.6a9 9 0 0 1 1.7-3.2 6.6 6.6 0 0 1 1.8-1.5c.7-.4 1.4-.6 2-.7 1 0 2 0 3.1.4a6.5 6.5 0 0 1 4.2 3.3c.8 1.6.8 3.5.2 5.7a7.4 7.4 0 0 1-3.4 4.5c-1.5.9-3.3 1-5.2.4a6.6 6.6 0 0 1-4.2-3.3 7.3 7.3 0 0 1-.2-5.6z" }),
        _react2.default.createElement("path", { fill: "#fff", d: "M349.8 214.4c-.4 1.5-.5 2.8 0 3.8s1.2 1.6 2.3 2c1 .3 2 .2 3-.4 1-.5 1.6-1.6 2.1-3.2.5-1.5.5-2.7 0-3.7a3.5 3.5 0 0 0-2.2-2 3.6 3.6 0 0 0-3 .3c-1 .6-1.7 1.6-2.2 3.2z" })
      ),
      _react2.default.createElement(
        "g",
        { strokeOpacity: ".5" },
        _react2.default.createElement("path", { fill: "#309e3a", d: "M374.3 233.1l6.4-12.4 5.3 2.7a10 10 0 0 1 2.7 1.9c.5.5.8 1.1.8 1.9s0 1.5-.4 2.2a3.8 3.8 0 0 1-2 2c-1 .2-2 .2-3.1-.2.4.6.6 1.2.8 1.7.2.6.3 1.5.4 2.8l.2 3.2-3-1.5-.4-3.7a20 20 0 0 0-.3-2.5 2 2 0 0 0-.5-1l-1.2-.7-.5-.3-2.7 5.2-2.5-1.3z" }),
        _react2.default.createElement("path", { fill: "#fff", d: "M380.5 227.2l1.9 1c1.2.6 2 1 2.3 1 .3 0 .7 0 1-.2.3-.1.5-.4.7-.8.2-.4.3-.8.2-1.2-.1-.3-.3-.7-.7-1a23.7 23.7 0 0 0-1.8-1l-2-1-1.6 3.2z" })
      ),
      _react2.default.createElement(
        "g",
        { strokeOpacity: ".5" },
        _react2.default.createElement("path", { fill: "#309e3a", d: "M426.1 258.7a8.9 8.9 0 0 1 2.5-2.6 6.6 6.6 0 0 1 2.2-.9 5.5 5.5 0 0 1 2.2 0c1 .2 1.9.6 2.8 1.2a6.6 6.6 0 0 1 3 4.4c.3 1.7-.2 3.6-1.4 5.5a7.3 7.3 0 0 1-4.5 3.3 6.5 6.5 0 0 1-5.2-1.1 6.6 6.6 0 0 1-3-4.4c-.3-1.8.2-3.6 1.4-5.4z" }),
        _react2.default.createElement("path", { fill: "#fff", d: "M428.6 260.3c-1 1.3-1.3 2.5-1.1 3.6a3.6 3.6 0 0 0 1.6 2.5c1 .7 2 .9 3 .6 1-.3 2-1 2.9-2.4.9-1.4 1.3-2.6 1.1-3.6-.1-1-.7-1.9-1.6-2.6s-2-.8-3-.5c-1 .2-2 1-3 2.4z" })
      ),
      _react2.default.createElement("path", { fill: "#309e3a", d: "M301.8 204.5l2.3-9.8 7.2 1.7-.3 1.6-5.3-1.2-.5 2.2 4.9 1.1-.4 1.7-4.9-1.2-.6 2.7 5.5 1.3-.4 1.6-7.5-1.7z" })
    )
  );
};

exports.default = Brazil;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Check = function Check(_ref) {
  var fill = _ref.fill,
      size = _ref.size;
  return _react2.default.createElement(
    "svg",
    {
      height: size,
      width: size,
      fill: fill,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    },
    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    _react2.default.createElement("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" })
  );
};

exports.default = Check;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Close = function Close(_ref) {
  var fill = _ref.fill,
      size = _ref.size;
  return _react2.default.createElement(
    "svg",
    {
      height: size,
      width: size,
      fill: fill,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    },
    _react2.default.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }),
    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
  );
};

exports.default = Close;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Facebook = function Facebook(_ref) {
  var fill = _ref.fill,
      size = _ref.size;
  return _react2.default.createElement(
    "svg",
    {
      height: size,
      width: size,
      fill: fill,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    },
    _react2.default.createElement("path", { d: "M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" })
  );
};

exports.default = Facebook;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hand = function Hand(_ref) {
  var fill = _ref.fill,
      size = _ref.size;
  return _react2.default.createElement(
    "svg",
    {
      height: size,
      width: size,
      fill: fill,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    },
    _react2.default.createElement("path", { d: "M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z" })
  );
};

exports.default = Hand;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Instagram = function Instagram(_ref) {
  var fill = _ref.fill,
      size = _ref.size;
  return _react2.default.createElement(
    "svg",
    {
      height: size,
      width: size,
      fill: fill,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    },
    _react2.default.createElement("path", { d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" })
  );
};

exports.default = Instagram;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkedIn = function LinkedIn(_ref) {
  var fill = _ref.fill,
      size = _ref.size;
  return _react2.default.createElement(
    "svg",
    {
      height: size,
      width: size,
      fill: fill,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    },
    _react2.default.createElement("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
  );
};

exports.default = LinkedIn;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var fill = _ref.fill,
      size = _ref.size;
  return _react2.default.createElement(
    "svg",
    {
      height: size,
      width: size,
      fill: fill,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    },
    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    _react2.default.createElement("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" })
  );
};

exports.default = Menu;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Money = function Money(_ref) {
  var fill = _ref.fill,
      size = _ref.size;
  return _react2.default.createElement(
    "svg",
    {
      height: size,
      width: size,
      fill: fill,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    },
    _react2.default.createElement("path", { d: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" }),
    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
  );
};

exports.default = Money;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Person = function Person(_ref) {
  var fill = _ref.fill,
      size = _ref.size;
  return _react2.default.createElement(
    "svg",
    {
      height: size,
      width: size,
      fill: fill,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    },
    _react2.default.createElement("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }),
    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
  );
};

exports.default = Person;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Play = function Play(_ref) {
  var fill = _ref.fill,
      size = _ref.size;
  return _react2.default.createElement(
    "svg",
    {
      height: size,
      width: size,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "436.5 8170.186 191.748 191.748"
    },
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("path", { d: "M532.374 8170.186a95.874 95.874 0 1 1-95.874 95.874 95.874 95.874 0 0 1 95.874-95.874z" }),
      _react2.default.createElement("path", { d: "M532.374 8354.934c49.005 0 88.874-39.869 88.874-88.874 0-49.005-39.869-88.874-88.874-88.874-49.005 0-88.874 39.869-88.874 88.874 0 49.005 39.869 88.874 88.874 88.874m0 7c-52.95 0-95.874-42.924-95.874-95.874 0-52.95 42.924-95.874 95.874-95.874 52.95 0 95.874 42.924 95.874 95.874 0 52.95-42.924 95.874-95.874 95.874z", fill: fill }),
      _react2.default.createElement("path", { d: "M509.65 8232.33v68.04l55.488-30.134z", stroke: fill, strokeWidth: "7" })
    )
  );
};

exports.default = Play;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var School = function School(_ref) {
  var fill = _ref.fill,
      size = _ref.size;
  return _react2.default.createElement(
    "svg",
    {
      height: size,
      width: size,
      fill: fill,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    },
    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
    _react2.default.createElement("path", { d: "M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" })
  );
};

exports.default = School;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Scholarship = function Scholarship(_ref) {
  var fill = _ref.fill,
      size = _ref.size;
  return _react2.default.createElement(
    "svg",
    {
      height: size || 78,
      width: size || 78,
      fill: fill,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "14.5 35.499 78.334 77.333"
    },
    _react2.default.createElement("path", { fill: "#F1F5FC", d: "M62.467 101.733h-33c-1.133 0-2.2-.467-2.934-1.2s-1.2-1.733-1.2-2.867V47.934c0-1.134.466-2.134 1.2-2.867.733-.733 1.8-1.2 2.934-1.2h33c1.133 0 2.199.467 2.934 1.2a4.032 4.032 0 0 1 1.199 2.867v49.732a4.032 4.032 0 0 1-1.199 2.867 4.19 4.19 0 0 1-2.934 1.2z" }),
    _react2.default.createElement("path", { fill: "#999", d: "M45.533 56.934H31.6a.506.506 0 0 1-.333-.134.51.51 0 0 1-.133-.333v-2a.51.51 0 0 1 .133-.333A.506.506 0 0 1 31.6 54h13.867c.133 0 .267.066.333.133.067.067.2.2.2.333v2a.51.51 0 0 1-.133.333c-.134.068-.2.135-.334.135zM60.267 64.4H31.6a.506.506 0 0 1-.333-.133.51.51 0 0 1-.133-.333V62a.51.51 0 0 1 .133-.333.513.513 0 0 1 .333-.133h28.666c.134 0 .267.067.333.133.066.067.134.2.134.333v2a.506.506 0 0 1-.134.333c-.066.067-.199.067-.332.067zM60.267 71.934H31.6a.506.506 0 0 1-.333-.134.51.51 0 0 1-.133-.333v-2a.51.51 0 0 1 .133-.333A.506.506 0 0 1 31.6 69h28.666c.134 0 .267.067.333.133.066.067.134.2.134.333v2a.506.506 0 0 1-.134.333.5.5 0 0 1-.332.135zM60.267 79.467H31.6a.506.506 0 0 1-.333-.133.511.511 0 0 1-.134-.334v-2c0-.133.067-.267.133-.334a.513.513 0 0 1 .333-.133h28.666c.134 0 .267.066.333.133a.516.516 0 0 1 .134.334v2a.511.511 0 0 1-.134.334.503.503 0 0 1-.331.133zM60.267 86.934H31.6a.501.501 0 0 1-.333-.134.51.51 0 0 1-.133-.333V84.6c0-.133.067-.266.133-.333a.514.514 0 0 1 .333-.134h28.666c.134 0 .267.067.333.134s.134.2.134.333v1.868a.506.506 0 0 1-.134.333c-.132.066-.199.133-.332.133zM60.267 94.334H31.6a.506.506 0 0 1-.333-.134.513.513 0 0 1-.133-.333v-1.734c0-.133.067-.266.133-.333a.514.514 0 0 1 .333-.134h28.666c.134 0 .267.067.333.134s.134.2.134.333v1.734a.508.508 0 0 1-.134.333.504.504 0 0 1-.332.134z" }),
    _react2.default.createElement("circle", { fill: "#FFF", className: "magnifier", cx: "61.867", cy: "68.533", r: "13.267" }),
    _react2.default.createElement("path", { fill: "#333", className: "magnifier", d: "M69.915 86.158l-1.507-2.822 2.47-1.319 1.507 2.822z" }),
    _react2.default.createElement("path", { fill: "#E2A926", className: "magnifier", d: "M76.467 59.667c1.8 3.733-3.6 21.534-13.867 22.067-4.467.2-14.2-2.333-16.266-5.934 2 4.134 5.667 7.467 10.4 8.866 9.066 2.734 18.6-2.332 21.332-11.399a16.881 16.881 0 0 0-1.599-13.6z" }),
    _react2.default.createElement("path", { fill: "#FFC81A", className: "magnifier", d: "M76.467 59.667c-2.066-3.6-5.533-6.466-9.801-7.8-9.066-2.733-18.599 2.333-21.333 11.4-1.333 4.333-.866 8.733 1 12.466 2.066 3.601 5.534 6.467 9.799 7.8 9.067 2.733 18.601-2.333 21.334-11.4a16.726 16.726 0 0 0-.999-12.466zM58.267 79.6A11.692 11.692 0 0 1 51 73.267c-1.2-2.533-1.467-5.533-.6-8.467 1.934-6.267 8.534-9.8 14.8-7.866 2.933.866 5.2 2.8 6.667 5.2 1.666 2.8 2.199 6.2 1.199 9.533-1.933 6.333-8.533 9.8-14.799 7.933z" }),
    _react2.default.createElement("path", { fill: "#454545", className: "magnifier", d: "M75.133 85.934l-.666-1.2c-.4-.8-1.4-1.067-2.2-.667L69.2 85.733c-.8.399-1.067 1.399-.667 2.2l.667 1.199c-.4-.798 5.533-3.999 5.933-3.198z" }),
    _react2.default.createElement("path", { fill: "#333", className: "magnifier", d: "M72.934 85.267l-3.066 1.667c-.801.4-1.067 1.4-.667 2.199l7.399 13.934c.4.801 1.4 1.066 2.2.667l3.067-1.667c.799-.4 1.066-1.4.666-2.199l-7.4-13.934c-.4-.801-1.4-1.067-2.199-.667z" }),
    _react2.default.createElement("path", { fill: "#999", className: "magnifier", d: "M65.4 68.4a5.246 5.246 0 0 0-1.2-.733c-.4-.2-.866-.4-1.467-.6v-3.133c.2.066.333.2.533.333.333.333.467.8.467 1.467H66.4c0-1.067-.334-1.867-.934-2.533-.6-.667-1.467-1.067-2.6-1.2v-1.733H61.4V62c-1.134.066-2 .4-2.667 1s-1 1.333-1 2.2c0 .533.066 1 .333 1.333.2.4.467.733.801 1 .333.267.799.533 1.266.733.4.2.801.333 1.334.533v3.267c-.4-.067-.733-.2-1-.467-.334-.333-.533-.8-.533-1.467h-2.667c0 1.067.333 2 1.067 2.667.666.667 1.666 1.067 3 1.134v1.6H62.8v-1.6c1.134-.067 2.067-.4 2.733-1 .667-.6 1-1.333 1-2.2 0-.467-.066-.934-.267-1.267C66 69 65.733 68.667 65.4 68.4zm-4.533-2.267c-.268-.267-.4-.6-.4-1 0-.467.133-.8.4-1 .133-.133.333-.266.6-.333v2.667a1.012 1.012 0 0 1-.6-.334zm2.4 5.534c-.134.133-.333.2-.533.267v-2.667c.266.133.399.266.533.333.267.267.399.6.399 1.066.067.4-.066.734-.399 1.001z" })
  );
};

exports.default = Scholarship;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var USA = function USA(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return _react2.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: width || 640,
      height: height || 480,
      viewBox: "0 0 640 480"
    },
    _react2.default.createElement(
      "g",
      { fillRule: "evenodd" },
      _react2.default.createElement(
        "g",
        { strokeWidth: "1pt" },
        _react2.default.createElement("path", { fill: "#bd3d44", d: "M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z", transform: "scale(.9375)" }),
        _react2.default.createElement("path", { fill: "#fff", d: "M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z", transform: "scale(.9375)" })
      ),
      _react2.default.createElement("path", { fill: "#192f5d", d: "M0 0h389.1v275.7H0z", transform: "scale(.9375)" }),
      _react2.default.createElement("path", { fill: "#fff", d: "M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9 65 61.2l-9.3 6.7L59 57 50 50.3h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177L168 250l3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z", transform: "scale(.9375)" })
    )
  );
};

exports.default = USA;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Youtube = function Youtube(_ref) {
  var fill = _ref.fill,
      size = _ref.size;
  return _react2.default.createElement(
    "svg",
    {
      height: size,
      width: size,
      fill: fill,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    },
    _react2.default.createElement("path", { d: "M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" })
  );
};

exports.default = Youtube;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/stairs.955b0fa0.png";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/andre.ef1353c9.jpg";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/eduarda.492451bc.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/lucas_bassetti.8c4160e9.jpg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/lucas.2b120850.jpg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/rachel.083edb19.jpg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/talles.cff523ab.jpg";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/thais.527380eb.jpg";

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _logo = __webpack_require__(6);

var _utils = __webpack_require__(3);

__webpack_require__(64);

var _video = __webpack_require__(65);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var t = _ref.t;
  return _react2.default.createElement(
    'div',
    { className: 'home-ms' },
    _react2.default.createElement(
      'div',
      { className: 'video-container' },
      _react2.default.createElement('div', { className: 'filter' }),
      _react2.default.createElement(
        'video',
        { autoPlay: true, loop: true, className: 'fillWidth' },
        _react2.default.createElement('source', {
          src: _video2.default,
          type: 'video/mp4'
        }),
        'Your browser does not support the video tag. I suggest you upgrade your browser.'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'home-ms__wrapper' },
      _react2.default.createElement(
        'div',
        { className: 'home-ms__logo' },
        _react2.default.createElement(_logo.Logo, null)
      ),
      _react2.default.createElement(
        'p',
        { className: 'home-ms__description' },
        t('main.description')
      ),
      _react2.default.createElement(
        'button',
        {
          onClick: function onClick() {
            return (0, _utils.scrollTo)('apply');
          },
          className: 'home-ms__button'
        },
        t('main.button')
      )
    )
  );
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var height = _ref.height,
      width = _ref.width;
  return _react2.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: width || 200,
      height: height || 280,
      viewBox: "140 0 200 280"
    },
    _react2.default.createElement(
      "g",
      { fillRule: "evenodd" },
      _react2.default.createElement("path", { d: "M262.8 130.102l9.802-.801-1.903-5.102-7.898 5.903m0 2.75l11 5.648 1.3-6.7-12.3 1.052m12.3 10.046L269.149 149l-7.648-13.398 13.602 7.296", fill: "#ffffff" }),
      _react2.default.createElement("path", { d: "M258.8 137.398l-.8 19.25 10.352-2.546-9.551-16.704m-3.852.551l-13.8 19.75L253.75 162l1.2-24.05m-20.348 23.35l-10.5-12.902 27.699-11.796-17.2 24.699", fill: "#ffffff" }),
      _react2.default.createElement("path", { d: "M249.648 133.25l-36.796-6.05 2.449 20.448 34.347-14.398m-.5-5l-34.5-30.648-11.046 23 45.546 7.648m-40.597-42.148l26.699-16.903 16.05 54.903-42.75-38M256.75 30.8c-2.367.067-4.316.884-5.852 2.45-1.566 1.535-2.382 3.484-2.449 5.852.067 2.332.883 4.28 2.45 5.847 1.535 1.567 3.484 2.367 5.851 2.403 2.332-.036 4.285-.836 5.852-2.403 1.566-1.566 2.363-3.515 2.398-5.847-.035-2.368-.832-4.317-2.398-5.852-1.567-1.566-3.52-2.383-5.852-2.45m-19.602 23.348h39.153L256.75 122.2l-19.602-68.05", fill: "#ffffff" })
    ),
    _react2.default.createElement(
      "text",
      { fontFamily: "Futura", fontWeight: "100", fontSize: "50", transform: "translate(152.45 217.7)", fill: "#ffffff" },
      "Instituto"
    ),
    _react2.default.createElement(
      "text",
      { fontFamily: "Futura", fontWeight: "100", fontSize: "35", transform: "translate(192.85 264.8)", fill: "#ffffff" },
      "Elevar"
    )
  );
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var height = _ref.height,
      width = _ref.width;
  return _react2.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: width || 42,
      height: height || 56,
      viewBox: "190 20 100 160"
    },
    _react2.default.createElement(
      "g",
      { fillRule: "evenodd" },
      _react2.default.createElement("path", { d: "M262.8 130.102l9.802-.801-1.903-5.102-7.898 5.903m0 2.75l11 5.648 1.3-6.7-12.3 1.052m12.3 10.046L269.149 149l-7.648-13.398 13.602 7.296", fill: "#ffffff" }),
      _react2.default.createElement("path", { d: "M258.8 137.398l-.8 19.25 10.352-2.546-9.551-16.704m-3.852.551l-13.8 19.75L253.75 162l1.2-24.05m-20.348 23.35l-10.5-12.902 27.699-11.796-17.2 24.699", fill: "#ffffff" }),
      _react2.default.createElement("path", { d: "M249.648 133.25l-36.796-6.05 2.449 20.448 34.347-14.398m-.5-5l-34.5-30.648-11.046 23 45.546 7.648m-40.597-42.148l26.699-16.903 16.05 54.903-42.75-38M256.75 30.8c-2.367.067-4.316.884-5.852 2.45-1.566 1.535-2.382 3.484-2.449 5.852.067 2.332.883 4.28 2.45 5.847 1.535 1.567 3.484 2.367 5.851 2.403 2.332-.036 4.285-.836 5.852-2.403 1.566-1.566 2.363-3.515 2.398-5.847-.035-2.368-.832-4.317-2.398-5.852-1.567-1.566-3.52-2.383-5.852-2.45m-19.602 23.348h39.153L256.75 122.2l-19.602-68.05", fill: "#ffffff" })
    )
  );
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/video.72ed52de.mp4";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _common = __webpack_require__(67);

__webpack_require__(72);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var t = _ref.t;
  return _react2.default.createElement(
    'div',
    { className: 'home-as', id: 'about' },
    _react2.default.createElement(
      'div',
      { className: 'home-as__wrapper' },
      _react2.default.createElement(
        'div',
        { className: 'home-as__image' },
        _react2.default.createElement(_common.LogoPerson, null)
      ),
      _react2.default.createElement(
        'div',
        { className: 'home-as__content-wrapper' },
        _react2.default.createElement(
          'h1',
          { className: 'home-as__title' },
          t('about.title')
        ),
        _react2.default.createElement(
          'p',
          { className: 'home-as__description' },
          t('about.description.part1')
        ),
        _react2.default.createElement(
          'p',
          { className: 'home-as__description' },
          t('about.description.part2')
        )
      )
    )
  );
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StairsLoader = exports.LogoPerson = undefined;

var _logo_person = __webpack_require__(68);

var _logo_person2 = _interopRequireDefault(_logo_person);

var _stairs_loader = __webpack_require__(70);

var _stairs_loader2 = _interopRequireDefault(_stairs_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.LogoPerson = _logo_person2.default;
exports.StairsLoader = _stairs_loader2.default;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'logo-person' },
    _react2.default.createElement(
      'div',
      { className: 'logo-person__head-wrapper' },
      _react2.default.createElement('span', { className: 'logo-person__head' })
    ),
    _react2.default.createElement(
      'span',
      { className: 'logo-person__body' },
      '\u25BC'
    )
  );
};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'stairs_loader' },
    _react2.default.createElement('div', { className: 'stairs_loader__bar' }),
    _react2.default.createElement('div', { className: 'stairs_loader__bar' }),
    _react2.default.createElement('div', { className: 'stairs_loader__bar' }),
    _react2.default.createElement('div', { className: 'stairs_loader__bar' }),
    _react2.default.createElement('div', { className: 'stairs_loader__bar' }),
    _react2.default.createElement('div', { className: 'stairs_loader__ball' })
  );
};

/***/ }),
/* 71 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 72 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = exports.Footer = undefined;

var _footer = __webpack_require__(75);

var _footer2 = _interopRequireDefault(_footer);

var _header = __webpack_require__(77);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Footer = _footer2.default;
exports.Header = _header2.default;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactI18next = __webpack_require__(1);

var _logo = __webpack_require__(6);

__webpack_require__(76);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
  var t = _ref.t;
  return _react2.default.createElement(
    'section',
    { className: 'footer', id: 'footer' },
    _react2.default.createElement(
      'div',
      { className: 'footer__wrapper' },
      _react2.default.createElement(
        'div',
        { className: 'footer__logo' },
        _react2.default.createElement(_logo.LogoShort, null)
      ),
      _react2.default.createElement(
        'div',
        { className: 'footer__copyright' },
        t('copyright')
      )
    )
  );
};
// import { Logo } from '../../components/logo'

exports.default = (0, _reactI18next.translate)('footer')(Footer);

/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactI18next = __webpack_require__(1);

var _header_hoc = __webpack_require__(78);

var _header_hoc2 = _interopRequireDefault(_header_hoc);

var _logo = __webpack_require__(6);

var _icons = __webpack_require__(2);

__webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var t = _ref.t,
      language = _ref.language,
      opened = _ref.opened,
      onToggleMenu = _ref.onToggleMenu,
      onAnchorClick = _ref.onAnchorClick,
      onChangeLanguage = _ref.onChangeLanguage;
  return _react2.default.createElement(
    'nav',
    { className: 'header', id: 'header' },
    _react2.default.createElement(
      'div',
      { className: 'header__wrapper' },
      _react2.default.createElement(
        'div',
        { className: 'header__logo' },
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return onAnchorClick('header');
            } },
          _react2.default.createElement(_logo.LogoShort, null)
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'header__mobile' },
        _react2.default.createElement(
          'button',
          {
            onClick: function onClick() {
              return onToggleMenu();
            }
          },
          _react2.default.createElement(_icons.MenuIcon, { fill: '#ffffff', size: 36 })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'header__links ' + (opened ? '--opened' : '') },
        _react2.default.createElement(
          'div',
          { className: 'header__links--close-menu' },
          _react2.default.createElement(
            'button',
            {
              className: 'header__links--close-button',
              onClick: function onClick() {
                return onToggleMenu();
              }
            },
            _react2.default.createElement(_icons.CloseIcon, { fill: '#144fb8', size: 36 })
          )
        ),
        _react2.default.createElement(
          'a',
          {
            className: 'header__link',
            onClick: function onClick() {
              return onAnchorClick('about');
            }
          },
          t('about')
        ),
        _react2.default.createElement(
          'a',
          {
            className: 'header__link',
            onClick: function onClick() {
              return onAnchorClick('apply');
            }
          },
          t('apply')
        ),
        _react2.default.createElement(
          'a',
          {
            className: 'header__link',
            onClick: function onClick() {
              return onAnchorClick('sponsors');
            }
          },
          t('sponsors')
        ),
        _react2.default.createElement(
          'a',
          {
            className: 'header__link',
            onClick: function onClick() {
              return onAnchorClick('contributors');
            }
          },
          t('contributors')
        ),
        _react2.default.createElement(
          'a',
          {
            className: 'header__link --contact',
            onClick: function onClick() {
              return onAnchorClick('contact');
            }
          },
          t('contact')
        ),
        _react2.default.createElement(
          'a',
          {
            className: 'header__language',
            onClick: function onClick() {
              return onChangeLanguage(language === 'pt-BR' ? 'en' : 'pt-BR');
            }
          },
          language === 'pt-BR' ? _react2.default.createElement(_icons.USAIcon, {
            height: 12,
            width: 16
          }) : _react2.default.createElement(_icons.BrazilIcon, {
            height: 12,
            width: 16
          })
        )
      )
    )
  );
};

exports.default = (0, _reactI18next.translate)('header')((0, _header_hoc2.default)(Header));

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderHOCWrapper = function HeaderHOCWrapper(InnerComponent) {
  var HeaderHOC = function (_Component) {
    _inherits(HeaderHOC, _Component);

    function HeaderHOC() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, HeaderHOC);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeaderHOC.__proto__ || Object.getPrototypeOf(HeaderHOC)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        opened: false,
        language: _this.props.i18n.language[0]
      }, _this.handleToggleMenu = function () {
        _this.setState({ opened: !_this.state.opened });
      }, _this.handleAnchorClick = function (anchor) {
        _this.setState({ opened: false });
        (0, _utils.scrollTo)(anchor);
      }, _this.handleChangeLanguage = function (language) {
        var i18n = _this.props.i18n;

        i18n.changeLanguage(language);
        (0, _utils.setLocalStorage)('language', language);
        _this.setState({ language: language });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(HeaderHOC, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        if ((0, _utils.getLocalStorage)('language')) {
          var language = (0, _utils.getLocalStorage)('language');
          this.handleChangeLanguage(language);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(InnerComponent, _extends({}, this.state, this.props, {
          onToggleMenu: this.handleToggleMenu,
          onAnchorClick: this.handleAnchorClick,
          onChangeLanguage: this.handleChangeLanguage
        }));
      }
    }]);

    return HeaderHOC;
  }(_react.Component);

  return HeaderHOC;
};

exports.default = HeaderHOCWrapper;

/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18next = __webpack_require__(81);

var _i18next2 = _interopRequireDefault(_i18next);

var _i18nextBrowserLanguagedetector = __webpack_require__(82);

var _i18nextBrowserLanguagedetector2 = _interopRequireDefault(_i18nextBrowserLanguagedetector);

var _reactI18next = __webpack_require__(1);

var _en = __webpack_require__(83);

var en = _interopRequireWildcard(_en);

var _ptBR = __webpack_require__(87);

var ptBR = _interopRequireWildcard(_ptBR);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_i18next2.default.use(_i18nextBrowserLanguagedetector2.default).use(_reactI18next.reactI18nextModule).init({
  resources: {
    en: en,
    'pt-BR': ptBR
  },
  detection: {
    order: ['navigator']
  },
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  debug: false,

  interpolation: {
    escapeValue: false // not needed for react!!
  },

  react: {
    wait: true,
    bindI18n: 'languageChanged loaded'
  }
});

exports.default = _i18next2.default;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.home = exports.header = exports.footer = undefined;

var _footer = __webpack_require__(84);

var _footer2 = _interopRequireDefault(_footer);

var _header = __webpack_require__(85);

var _header2 = _interopRequireDefault(_header);

var _home = __webpack_require__(86);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.footer = _footer2.default;
exports.header = _header2.default;
exports.home = _home2.default;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  copyright: '© 2018 Instituto Elevar - All rights reserved'
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  about: 'About Us',
  apply: 'Apply',
  contact: 'Contact',
  contributors: 'Contributors',
  sponsors: 'Sponsors'
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  main: {
    description: 'Instituto Elevar is an NGO located in the state of Espirito Santo, Brazil. Our main goal is to promote and foster the dream of college students who are full of talent and potential, through educational policies and individualized mentorship from global professionals.',
    button: 'Check our modalities'
  },
  about: {
    title: 'Who we are?',
    description: {
      part1: 'Instituto Elevar is an NGO founded by young Capixabas with a big dream. The volunteers at the Institute share a passion for inspiring stories, constant dedication to study and work.',
      part2: 'Our objective is to provide financial assistance and mentoring assistance to university students living in Espírito Santo. Each student of the Institute has specialized mentoring of differentiated professionals in the global job market as well as sponsorship of education initiatives.'
    }
  },
  scholarship: {
    title: 'How the scholarship works?',
    description: {
      part1: 'The financial assistance will be based on monthly payments, administered directly by Instituto Elevar and exclusively for academic-educational purposes.',
      part2: 'The scholarship will be variable, according to the necessity of each student. The Institute also does not establish a precise scope of activities to receive the financial aid, so it is up to the candidate, together with the Institute, to define the exact destination of the value, if the candidate is approved.'
    }
  },
  modalities: {
    title: 'Modalities',
    m1: {
      title: 'Scholar',
      description: 'The selection of candidates for the Instituto Elevar occurs in the months of January and February of each year. The profile of our scholars consists of young dreamers with inspiring stories.',
      button: 'How to be a scholar'
    },
    m2: {
      title: 'Volunteer',
      description: 'Our team of people willing to help university students reach big dreams is open to growth. If you believe that you can contribute to the Instituto Elevar in any way, please contact us.',
      button: 'Contact us'
    },
    m3: {
      title: 'Sponsor',
      description: 'By sponsoring the students at the Instituto Elevar, we help young people raise their skills and dreams. In addition, we provide access to opportunities that can change the lives of a graduate. If you would like to sponsor a student, contact us.',
      button: 'Contact us'
    },
    m4: {
      title: 'Mentor',
      description: 'The mentors of the Elevar Institute have a history of challenges and achievements. They assist the scholars at the Instituto Elevar with guidance and suggestions on opportunities throughout graduation. If you would like to mentor a young man with a lot of sparkle in your eyes, contact us.',
      button: 'Contact us'
    }
  },
  scholar: {
    title: 'Be a scholar',
    description: 'We are looking for students of great talent and high potential to be part of Instituto Elevar!',
    selection: {
      text: 'The 2018 selection process is ',
      status: 'closed',
      result: 'After an extensive selection process with exceptional candidates, it was really hard to select but we reached our first three scholars:',
      facebook: {
        text: 'If you want to follow the latest news on our scholars and how the Institute is impacting their lives, please follow our',
        link: 'Facebook Page'
      }
    }
  },
  sponsorships: {
    description: 'Sponsorships that change the world, starting with Vitória, Brasil!',
    button: 'Sponsor a student!'
  },
  contributors: {
    title: 'Contributors',
    positions: {
      coFounder: 'Co-founder',
      coFounder2: 'Co-founder',
      legalAdivisor: 'Legal Advisor',
      volunteer: 'Volunteer',
      volunteer2: 'Volunteer'
    }
  },
  contact: {
    title: 'Contact',
    description: 'Please use the contact below:'
  }
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.home = exports.header = exports.footer = undefined;

var _footer = __webpack_require__(88);

var _footer2 = _interopRequireDefault(_footer);

var _header = __webpack_require__(89);

var _header2 = _interopRequireDefault(_header);

var _home = __webpack_require__(90);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.footer = _footer2.default;
exports.header = _header2.default;
exports.home = _home2.default;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  copyright: '© 2018 Instituto Elevar - Todos direitos reservados'
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  about: 'Quem Somos',
  apply: 'Como Participar',
  contact: 'Contato',
  contributors: 'Idealizadores',
  sponsors: 'Patrocinadores'
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  main: {
    description: 'O Instituto Elevar é uma ONG situada no Espírito Santo que tem por finalidade fomentar e impulsionar o sonho de jovens universitários, repletos de talento e potencial, por meio de políticas educacionais e mentoria individualizada de profissionais globais.',
    button: 'Veja nossas modalidades'
  },
  about: {
    title: 'Quem somos?',
    description: {
      part1: 'O Instituto Elevar é uma ONG fundada por jovens capixabas com sonho grande. Os voluntários do Instituto compartilham a paixão por histórias inspiradoras, pela dedicação constante ao estudo e pelo trabalho.',
      part2: 'Nosso objetivo é possibilitar auxílio financeiro e assistência de mentoria a jovens universitários residentes no Espírito Santo. Cada aluno do Instituto possui mentoria especializada de profissionais diferenciados no mercado de trabalho global e financiamento mensal de um valor, que será decidido a partir das necessidades individuais de cada graduando.'
    }
  },
  scholarship: {
    title: 'Como funciona a bolsa?',
    description: {
      part1: 'O auxílio financeiro ocorrerá na forma de pagamentos mensais, administrados diretamente pelo Instituto Elevar e voltado exclusivamente aos fins acadêmico-educacionais. O valor base do auxílio será definido conforme a necessidade de cada aluno.',
      part2: 'O Instituto também não estabelece um escopo taxativo de atividades para recebimento do auxílio financeiro, portanto, cabe ao candidato, junto ao Instituto, definir a exata destinação do valor, caso sua candidatura seja aprovada.'
    }
  },
  modalities: {
    title: 'Modalidades',
    m1: {
      title: 'Bolsista',
      description: 'A seleção de candidatos ao Instituto Elevar ocorre no mês de janeiro e fevereiro de cada ano. O perfil do bolsista do Instituto consiste em jovens sonhadores e com histórias inspiradoras.',
      button: 'Como participar'
    },
    m2: {
      title: 'Voluntário',
      description: 'Nosso time de pessoas dispostas a auxiliar jovens universitário a alcançarem novos patamares está aberto a crescimento. Se você acredita que pode, de alguma forma, contribuir para o Instituto Elevar, contate-nos.',
      button: 'Contate-nos'
    },
    m3: {
      title: 'Patrocinador',
      description: 'Ao patrocinar os alunos do Instituto Elevar, ajudamos jovens a elevar suas habilidades e sonhos. Além disso, possibilitamos o acesso a oportunidades que podem mudar a vida de um graduando. Se você gostaria de patrocinar um aluno, contate-nos.',
      button: 'Contate-nos'
    },
    m4: {
      title: 'Mentor',
      description: 'Os mentores do Instituto Elevar possuem trajetória de desafios, conquistas e superações. Auxiliarão os bolsistas do Instituto Elevar com orientações e sugestões sobre as oportunidades ao longo da graduação. Se você gostaria de ser mentor de um jovem com muito brilho nos olhos, contate-nos.',
      button: 'Contate-nos'
    }
  },
  scholar: {
    title: 'Como participar',
    description: 'Estamos buscando graduandos com histórias inspiradoras, brilho nos olhos e muitos sonhos a serem concretizados.',
    selection: {
      text: 'O processo seletivo para 2018 está ',
      status: 'fechado',
      result: 'Após um processo seletivo com excelentes candidatos, chegamos aos três primeiros alunos do Instituto Elevar:',
      facebook: {
        text: 'Se quiser seguir as atualizações do Instituto Elevar e conhecer um pouco mais os nossos primeiros alunos, favor seguir a nossa',
        link: 'Página no Facebook'
      }
    }
  },
  sponsorships: {
    description: 'Patrocínios que mudam o mundo, começando por Vitória - ES!',
    button: 'Patrocine um aluno!'
  },
  contributors: {
    title: 'Idealizadores',
    positions: {
      coFounder: 'co-fundador',
      coFounder2: 'co-fundadora',
      legalAdivisor: 'Assessor Legal',
      volunteer: 'Voluntário',
      volunteer2: 'Voluntária'
    }
  },
  contact: {
    title: 'Contato',
    description: 'Favor utilizar o contato abaixo:'
  }
};

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.3846b3d2.js.map