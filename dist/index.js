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