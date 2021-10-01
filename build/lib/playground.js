"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maskAttribute_1 = require("./maskAttribute");
const types_1 = require("./types");
const objectTest = {
    name: "test",
    attrs: {
        options: {
            simulator: true,
            author: "Rodrigo",
            city: 1,
            test: {
                city: null,
            },
            attrs: {
                options: {
                    simulator: true,
                    author: "Rodrigo",
                    city: "Madrid",
                    test: {
                        city: ["Madrid"],
                    },
                },
                isEnabled: "true",
                city: "Madrid",
                attrs: {
                    options: {
                        simulator: true,
                        author: "Rodrigo",
                        city: "Madrid",
                        test: {
                            city: "Madrid",
                        },
                    },
                    isEnabled: "true",
                    city: "Madrid",
                    attrs: {
                        options: {
                            simulator: true,
                            author: "Rodrigo",
                            city: "Madrid",
                            test: {
                                city: "Madrid",
                            },
                        },
                        isEnabled: "true",
                        city: "Madrid",
                        attrs: {
                            options: {
                                simulator: true,
                                author: "Rodrigo",
                                city: "Madrid",
                                test: {
                                    city: "Madrid",
                                },
                            },
                            isEnabled: "true",
                            city: "Madrid",
                            attrs: {
                                options: {
                                    simulator: true,
                                    author: "Rodrigo",
                                    city: "Madrid",
                                    test: {
                                        city: "Madrid",
                                    },
                                },
                                isEnabled: "true",
                                city: "Madrid",
                            },
                        },
                    },
                },
            },
        },
        isEnabled: null,
        city: "Madrid",
    },
};
const modifiedObjectTest = (0, maskAttribute_1.maskAttribute)(objectTest, ["city", "isEnabled"], {
    action: types_1.MaskActions.MASK,
    substituteChar: "-",
    useSameLength: true,
});
// console.log(JSON.stringify(modifiedObjectTest));
const test = (0, maskAttribute_1.maskAttribute)({
    id: "1",
    name: "test",
}, ["name"], {
    action: types_1.MaskActions.HIDE,
});
console.log(test);
