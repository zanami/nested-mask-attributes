import { MaskActions } from "../types";
import { maskAttribute } from "./mask-attribute";
import {
  mockArray,
  mockBoolean,
  mockMultipleAttrsHideResultString,
  mockMultipleAttrsHideString,
  mockMultipleAttrsMaskResultString,
  mockMultipleAttrsMaskString,
  mockMultipleHideString,
  mockMultipleMaskString,
  mockNull,
  mockNumber,
  mockResultArray,
  mockResultBoolean,
  mockResultHideMultipleString,
  mockResultHideString,
  mockResultMaskMultipleString,
  mockResultNull,
  mockResultNumber,
  mockResultString,
  mockString,
} from "./mocks";

const ID_FIELD = "id";
const NAME_FIELD = "name";
const FEATURES_FIELD = "features";
const MASK_OPTIONS = Object.freeze({
  action: MaskActions.MASK,
  useSameLength: true,
});

describe("maskAttribute functionality", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("When only 1 attribute and 1 occurrence, the attribute is hidden", () => {
    expect(maskAttribute(mockString, [FEATURES_FIELD])).toStrictEqual(
      mockResultHideString
    );
  });

  test("When only 1 attribute and 1 occurrence, the attribute is masked", () => {
    expect(
      maskAttribute(mockString, [FEATURES_FIELD], MASK_OPTIONS)
    ).toStrictEqual(mockResultString);
  });

  test("When only 1 attribute and multiple occurrence, the attribute is hidden", () => {
    expect(maskAttribute(mockMultipleHideString, [NAME_FIELD])).toStrictEqual(
      mockResultHideMultipleString
    );
  });

  test("When only 1 attribute and multiple occurrence, the attribute is masked", () => {
    expect(
      maskAttribute(mockMultipleMaskString, [NAME_FIELD], MASK_OPTIONS)
    ).toStrictEqual(mockResultMaskMultipleString);
  });

  test("When only 1 attribute and 1 occurrence, attribute is a number, the attribute is masked", () => {
    expect(
      maskAttribute(mockNumber, [FEATURES_FIELD], MASK_OPTIONS)
    ).toStrictEqual(mockResultNumber);
  });

  test("When only 1 attribute and 1 occurrence, attribute is a boolean, the attribute is masked", () => {
    expect(
      maskAttribute(mockBoolean, [FEATURES_FIELD], MASK_OPTIONS)
    ).toStrictEqual(mockResultBoolean);
  });

  test("When only 1 attribute and 1 occurrence, attribute is an array, the attribute is masked", () => {
    expect(
      maskAttribute(mockArray, [FEATURES_FIELD], MASK_OPTIONS)
    ).toStrictEqual(mockResultArray);
  });

  test("When only 1 attribute and 1 occurrence, attribute is null, the attribute is masked", () => {
    expect(
      maskAttribute(mockNull, [FEATURES_FIELD], MASK_OPTIONS)
    ).toStrictEqual(mockResultNull);
  });

  test("When multiple attributes, the attributes are hidden", () => {
    expect(
      maskAttribute(mockMultipleAttrsHideString, [NAME_FIELD, ID_FIELD])
    ).toStrictEqual(mockMultipleAttrsHideResultString);
  });

  test("When multiple attributes, the attributes are masked", () => {
    expect(
      maskAttribute(
        mockMultipleAttrsMaskString,
        [NAME_FIELD, ID_FIELD],
        MASK_OPTIONS
      )
    ).toStrictEqual(mockMultipleAttrsMaskResultString);
  });
});
