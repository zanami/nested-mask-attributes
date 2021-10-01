import { maskAttribute } from "./maskAttribute";
import { MaskActions } from "./types";

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

const modifiedObjectTest = maskAttribute(objectTest, ["city", "isEnabled"], {
  action: MaskActions.MASK,
  substituteChar: "-",
  useSameLength: true,
});

// console.log(JSON.stringify(modifiedObjectTest));

const test = maskAttribute(
  {
    id: "1",
    name: "test",
  },
  ["name"],
  {
    action: MaskActions.HIDE,
  }
);
console.log(test);
