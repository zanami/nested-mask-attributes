"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskAttribute = void 0;
const constants_1 = require("../constants");
const types_1 = require("../types");
const maskAttribute = (object, attributes, options = constants_1.DEFAULT_OPTIONS) => {
    const copyObject = { ...object };
    recursiveMask(copyObject, attributes, options);
    return copyObject;
};
exports.maskAttribute = maskAttribute;
const recursiveMask = (object, attributes, options) => {
    Object.keys(object).forEach((key) => {
        // Apply recursivity in child key
        if (object[key] &&
            typeof object[key] === "object" &&
            !Array.isArray(object[key])) {
            recursiveMask(object[key], attributes, options);
        }
        else {
            // Base case
            if (attributes.includes(key)) {
                executeAction(object, key, options);
            }
            return;
        }
    });
};
/* Executes the action indicated in the options,
by default the action is to hide */
const executeAction = (object, attrPath, options) => {
    switch (options.action) {
        case types_1.MaskActions.HIDE: {
            delete object[attrPath];
            break;
        }
        case types_1.MaskActions.MASK: {
            const length = options.useSameLength && object[attrPath]
                ? getLengthOfAttribute(object[attrPath])
                : constants_1.DEFAULT_LENGTH;
            object[attrPath] = generateString(length, options.substituteChar);
            break;
        }
    }
};
/* Gets the length of the given variable */
const getLengthOfAttribute = (attrValue) => {
    return Array.isArray(attrValue)
        ? attrValue.length + 1
        : attrValue.toString().length + 1;
};
/* In carge of generating a string with the
given length and compose of the char given */
const generateString = (length, char = "*") => {
    return Array.prototype.join.call({ length }, char);
};
