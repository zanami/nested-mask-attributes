<br />
<p align="center">
  <img src="assets/logo.png" alt="Logo" height="80">
</p>

<h3 align="center">

[![npm version](https://badge.fury.io/js/nested-mask-attributes.svg)](https://badge.fury.io/js/nested-mask-attributes)



  The easiest library to use for masking or deleting one or multiple nested attributes from a Javascript object.
</h3>
<br />

## Table of Contents


- [Table of Contents](#table-of-contents)
- [Install](#install)
- [Usage](#usage)
- [Methods](#methods)
- [Notes](#notes)
- [License](#license)
- [Author](#author)


## Install


```
npm install nested-mask-attributes
```

## Usage


### Example of masking attributes:

<br/>

```ts
import {
  MaskActions,
  maskAttribute,
} from 'nested-mask-attributes';

// The object that has the attribute(s) to hide or mask
const testObject = {
  name: "nested-mask-attributes",
  features: {
    id: "nm123456",
    date: "2021-10-01T14:36:06.265Z",
    isEnabled: true,
    author: {
      country: "Spain",
      name: "Rodrigo",
    }
  }
}

const testObjectMask = maskAttribute(testObject, ["name", "isEnabled"], {
  action: MaskActions.MASK,
});

// RESULT
/*
  {
    name: "*****",
    features: {
      id: "nm123456",
      date: "2021-10-01T14:36:06.265Z",
      isEnabled: "****",
      author: {
        country: "Spain",
        name: "*****",
      }
    }
  }
*/
```

<br/>

### Example of hiding attributes:

<br/>


```ts
import {
  MaskActions,
  maskAttribute,
} from 'nested-mask-attributes';

// The object that has the attribute(s) to hide or mask
const testObject = {
  name: "nested-mask-attributes",
  features: {
    id: "nm123456",
    date: "2021-10-01T14:36:06.265Z",
    isEnabled: true,
    author: {
      country: "Spain",
      name: "Rodrigo",
    }
  }
}


const testObjectHide = maskAttribute(testObject, ["name", "isEnabled"], {
  action: MaskActions.HIDE,
});
// or
/* 
  const testObjectHide = maskAttribute(testObject, ["name", "isEnabled"], {
    action: MaskActions.HIDE,
  });
*/

// RESULT
/*
  {
    features: {
      id: "nm123456",
      date: "2021-10-01T14:36:06.265Z",
      author: {
        country: "Spain",
      }
    }
  }
*/

```

<br/>

## Notes


<br/>

If the attribute is contained in the object but it is of type "object" then it will not work. Admitted data types:
 - string
 - number
 - boolean
 - array

 <br/>

## Methods


<br/>

<h3>

```maskAttribute(object, attributes, options);```

</h3>

<br/>

- **object(any)**: The input object that you want to get the attribute(s) from. Any Javascript object is valid.

- **attributes(string[])**: Array of attributes from which you want to mask or hide.

- **options(Options)**: There are different options:

<br/>

|      OPTIONS     |           TYPE          |                                                                                         DESCRIPTION                                                                                        |
|:--------------:|:-----------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|     action     | MaskAction  (HIDE/MASK) |                                                                       Action to execute when the attribute is found.                                                                       |
| substituteChar |    string (optional)    |                                     Default is "*". Char or string to substitute current value. __[It is only applied if the action is MaskActions.MASK]__                                     |
|  useSameLength |    boolean (optional)   | Default is false. Flag to indicate if the length of the string that will replace the original value of the attribute will keep the same length. If set to false, by default the length used is 5. __[It is only applied if the action is MaskActions.MASK]__ |

<br/>

<br/>

## License

<h3> MIT</h3>


<br/>


## Author

<h3>
  <a href="https://github.com/rluque8">Rodrigo Luque</a>
</h3>