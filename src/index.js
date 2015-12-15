
/**
 * @param {Element} element
 * @param {String} name
 * @param {*} value
 * @returns void
 */
export function store(element, name, value) {
    if (typeof element.zapData === 'undefined') {
        element.zapData = {};
    }

    const storage = element.zapData;
    storage[name] = value;
}

/**
 * @param {Element} element
 * @param {String} name
 * @param {*} [defaultValue]
 * @returns {*}
 */
export function retrieve(element, name, defaultValue) {
    if (typeof element.zapData === 'undefined') {
        element.zapData = {};
    }

    const storage = element.zapData;
    let value = storage[name];

    if ((typeof value === 'undefined') && (typeof defaultValue !== 'undefined')) {
        value = defaultValue;
    }

    return value;
}

/**
 * @param {Element} element
 * @param {String} [name]
 * @returns void
 */
export function clear(element, name) {
    if (typeof element.zapData !== 'undefined') {
        const storage = element.zapData;

        if (typeof name !== 'undefined') {
            delete storage[name];
        } else {
            element.zapData = {};
        }
    }
}
