
import {
    store as zapDataStore,
    retrieve as zapDataRetrieve,
    clear as zapDataClear,
} from 'zap-base-dom-data';

describe('zap-base-dom-data', () => {
    const element = document.createElement('div');

    beforeEach(() => {
        zapDataClear(element);
    });

    afterEach(() => {});

    describe('zap-base-dom-data should have the following methods', () => {
        it('store', () => {
            expect(zapDataStore).toEqual(jasmine.any(Function));
        });

        it('retrieve', () => {
            expect(zapDataRetrieve).toEqual(jasmine.any(Function));
        });

        it('clear', () => {
            expect(zapDataClear).toEqual(jasmine.any(Function));
        });
    });

    describe('store', () => {
        it('zapDataStore(Element, "key", "value") should store a string successful', () => {
            zapDataStore(element, 'key', 'value');

            expect(zapDataRetrieve(element, 'key')).toEqual('value');
        });

        it('zapDataStore(Element, "key", 123) should store a number successful', () => {
            zapDataStore(element, 'key', 123);

            expect(zapDataRetrieve(element, 'key')).toEqual(123);
        });

        it('zapDataStore(Element, "key", {lorem:"ipsum"}) should store an object successful', () => {
            zapDataStore(element, 'key', {
                lorem: 'ipsum',
            });

            expect(zapDataRetrieve(element, 'key')).toEqual({
                lorem: 'ipsum',
            });
        });
    });

    describe('retrieve', () => {
        it('zapDataRetrieve(Element, "key", "fallback") should return the fallback value', () => {
            expect(zapDataRetrieve(element, 'key')).toBeUndefined();
            expect(zapDataRetrieve(element, 'key', 'fallback')).toEqual('fallback');
        });
    });

    describe('clear', () => {
        it('zapDataClear(Element, "key") should clear data with the name "key"', () => {
            zapDataClear(element, 'key');

            expect(zapDataRetrieve(element, 'key')).not.toBeDefined();
        });

        it('zapDataClear(Element) should clear all stored data on Element', () => {
            zapDataStore(element, 'key1', 'value1');
            zapDataStore(element, 'key2', 'value2');

            zapDataClear(element);

            expect(zapDataRetrieve(element, 'key1')).not.toBeDefined();
        });
    });
});
