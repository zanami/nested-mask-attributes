"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockMultipleAttrsMaskResultString = exports.mockMultipleAttrsMaskString = exports.mockMultipleAttrsHideResultString = exports.mockMultipleAttrsHideString = exports.mockResultMaskMultipleString = exports.mockResultHideMultipleString = exports.mockMultipleHideString = exports.mockMultipleMaskString = exports.mockResultString = exports.mockResultHideString = exports.mockString = exports.mockResultNull = exports.mockNull = exports.mockResultNumber = exports.mockNumber = exports.mockResultBoolean = exports.mockBoolean = exports.mockResultArray = exports.mockArray = void 0;
exports.mockArray = {
    name: "Test library",
    features: ["hide", "mask"],
};
exports.mockResultArray = {
    name: "Test library",
    features: "**",
};
exports.mockBoolean = {
    name: "Test library",
    features: true,
};
exports.mockResultBoolean = {
    name: "Test library",
    features: "****",
};
exports.mockNumber = {
    name: "Test library",
    features: 2,
};
exports.mockResultNumber = {
    name: "Test library",
    features: "*",
};
exports.mockNull = {
    name: "Test library",
    features: null,
};
exports.mockResultNull = {
    name: "Test library",
    features: "****",
};
exports.mockString = {
    name: "Test library",
    features: "mask",
};
exports.mockResultHideString = {
    name: "Test library",
};
exports.mockResultString = {
    name: "Test library",
    features: "****",
};
exports.mockMultipleMaskString = {
    name: "Test library",
    features: {
        name: "hide",
        enabled: true,
    },
};
exports.mockMultipleHideString = {
    name: "Test library",
    features: {
        name: "hide",
        enabled: true,
    },
};
exports.mockResultHideMultipleString = {
    features: {
        enabled: true,
    },
};
exports.mockResultMaskMultipleString = {
    name: "************",
    features: {
        name: "****",
        enabled: true,
    },
};
exports.mockMultipleAttrsHideString = {
    name: "Test library",
    features: {
        id: "hide",
        enabled: true,
    },
};
exports.mockMultipleAttrsHideResultString = {
    features: {
        enabled: true,
    },
};
exports.mockMultipleAttrsMaskString = {
    name: "Test",
    features: {
        id: "hide",
        enabled: true,
    },
};
exports.mockMultipleAttrsMaskResultString = {
    name: "****",
    features: {
        id: "****",
        enabled: true,
    },
};
