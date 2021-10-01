"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const mask_attribute_1 = require("./mask-attribute");
const mocks_1 = require("./mocks");
const ID_FIELD = "id";
const NAME_FIELD = "name";
const FEATURES_FIELD = "features";
const MASK_OPTIONS = Object.freeze({
    action: types_1.MaskActions.MASK,
    useSameLength: true,
});
describe("maskAttribute functionality", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    test("When only 1 attribute and 1 occurrence, the attribute is hidden", () => {
        expect((0, mask_attribute_1.maskAttribute)(mocks_1.mockString, [FEATURES_FIELD])).toStrictEqual(mocks_1.mockResultHideString);
    });
    test("When only 1 attribute and 1 occurrence, the attribute is masked", () => {
        expect((0, mask_attribute_1.maskAttribute)(mocks_1.mockString, [FEATURES_FIELD], MASK_OPTIONS)).toStrictEqual(mocks_1.mockResultString);
    });
    test("When only 1 attribute and multiple occurrence, the attribute is hidden", () => {
        expect((0, mask_attribute_1.maskAttribute)(mocks_1.mockMultipleHideString, [NAME_FIELD])).toStrictEqual(mocks_1.mockResultHideMultipleString);
    });
    test("When only 1 attribute and multiple occurrence, the attribute is masked", () => {
        expect((0, mask_attribute_1.maskAttribute)(mocks_1.mockMultipleMaskString, [NAME_FIELD], MASK_OPTIONS)).toStrictEqual(mocks_1.mockResultMaskMultipleString);
    });
    test("When only 1 attribute and 1 occurrence, attribute is a number, the attribute is masked", () => {
        expect((0, mask_attribute_1.maskAttribute)(mocks_1.mockNumber, [FEATURES_FIELD], MASK_OPTIONS)).toStrictEqual(mocks_1.mockResultNumber);
    });
    test("When only 1 attribute and 1 occurrence, attribute is a boolean, the attribute is masked", () => {
        expect((0, mask_attribute_1.maskAttribute)(mocks_1.mockBoolean, [FEATURES_FIELD], MASK_OPTIONS)).toStrictEqual(mocks_1.mockResultBoolean);
    });
    test("When only 1 attribute and 1 occurrence, attribute is an array, the attribute is masked", () => {
        expect((0, mask_attribute_1.maskAttribute)(mocks_1.mockArray, [FEATURES_FIELD], MASK_OPTIONS)).toStrictEqual(mocks_1.mockResultArray);
    });
    test("When only 1 attribute and 1 occurrence, attribute is null, the attribute is masked", () => {
        expect((0, mask_attribute_1.maskAttribute)(mocks_1.mockNull, [FEATURES_FIELD], MASK_OPTIONS)).toStrictEqual(mocks_1.mockResultNull);
    });
    test("When multiple attributes, the attributes are hidden", () => {
        expect((0, mask_attribute_1.maskAttribute)(mocks_1.mockMultipleAttrsHideString, [NAME_FIELD, ID_FIELD])).toStrictEqual(mocks_1.mockMultipleAttrsHideResultString);
    });
    test("When multiple attributes, the attributes are masked", () => {
        expect((0, mask_attribute_1.maskAttribute)(mocks_1.mockMultipleAttrsMaskString, [NAME_FIELD, ID_FIELD], MASK_OPTIONS)).toStrictEqual(mocks_1.mockMultipleAttrsMaskResultString);
    });
});
