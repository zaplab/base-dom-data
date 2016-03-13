/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _zapBaseDomData = __webpack_require__(1);

	describe('zap-base-dom-data', function () {
	    var element = document.createElement('div');

	    beforeEach(function () {
	        (0, _zapBaseDomData.clear)(element);
	    });

	    afterEach(function () {});

	    describe('zap-base-dom-data should have the following methods', function () {
	        it('store', function () {
	            expect(_zapBaseDomData.store).toEqual(jasmine.any(Function));
	        });

	        it('retrieve', function () {
	            expect(_zapBaseDomData.retrieve).toEqual(jasmine.any(Function));
	        });

	        it('clear', function () {
	            expect(_zapBaseDomData.clear).toEqual(jasmine.any(Function));
	        });
	    });

	    describe('store', function () {
	        it('zapDataStore(Element, "key", "value") should store a string successful', function () {
	            (0, _zapBaseDomData.store)(element, 'key', 'value');

	            expect((0, _zapBaseDomData.retrieve)(element, 'key')).toEqual('value');
	        });

	        it('zapDataStore(Element, "key", 123) should store a number successful', function () {
	            (0, _zapBaseDomData.store)(element, 'key', 123);

	            expect((0, _zapBaseDomData.retrieve)(element, 'key')).toEqual(123);
	        });

	        it('zapDataStore(Element, "key", {lorem:"ipsum"}) should store an object successful', function () {
	            (0, _zapBaseDomData.store)(element, 'key', {
	                lorem: 'ipsum'
	            });

	            expect((0, _zapBaseDomData.retrieve)(element, 'key')).toEqual({
	                lorem: 'ipsum'
	            });
	        });
	    });

	    describe('retrieve', function () {
	        it('zapDataRetrieve(Element, "key", "fallback") should return the fallback value', function () {
	            expect((0, _zapBaseDomData.retrieve)(element, 'key')).toBeUndefined();
	            expect((0, _zapBaseDomData.retrieve)(element, 'key', 'fallback')).toEqual('fallback');
	        });
	    });

	    describe('clear', function () {
	        it('zapDataClear(Element, "key") should clear data with the name "key"', function () {
	            (0, _zapBaseDomData.clear)(element, 'key');

	            expect((0, _zapBaseDomData.retrieve)(element, 'key')).not.toBeDefined();
	        });

	        it('zapDataClear(Element) should clear all stored data on Element', function () {
	            (0, _zapBaseDomData.store)(element, 'key1', 'value1');
	            (0, _zapBaseDomData.store)(element, 'key2', 'value2');

	            (0, _zapBaseDomData.clear)(element);

	            expect((0, _zapBaseDomData.retrieve)(element, 'key1')).not.toBeDefined();
	        });
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.store = store;
	exports.retrieve = retrieve;
	exports.clear = clear;

	/**
	 * @param {Element} element
	 * @param {String} name
	 * @param {*} value
	 * @returns void
	 */
	function store(element, name, value) {
	    if (typeof element.zapData === 'undefined') {
	        element.zapData = {};
	    }

	    var storage = element.zapData;
	    storage[name] = value;
	}

	/**
	 * @param {Element} element
	 * @param {String} name
	 * @param {*} [defaultValue]
	 * @returns {*}
	 */
	function retrieve(element, name, defaultValue) {
	    if (typeof element.zapData === 'undefined') {
	        element.zapData = {};
	    }

	    var storage = element.zapData;
	    var value = storage[name];

	    if (typeof value === 'undefined' && typeof defaultValue !== 'undefined') {
	        value = defaultValue;
	    }

	    return value;
	}

	/**
	 * @param {Element} element
	 * @param {String} [name]
	 * @returns void
	 */
	function clear(element, name) {
	    if (typeof element.zapData !== 'undefined') {
	        var storage = element.zapData;

	        if (typeof name !== 'undefined') {
	            delete storage[name];
	        } else {
	            element.zapData = {};
	        }
	    }
	}

/***/ }
/******/ ]);