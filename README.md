## required-parameters-js : Mandatory function parameters for JS

This tiny package allows you to use the `required` identifier (as a default parameter value) on those function parameters that you want to be mandatory. If any of those parameters are not provided, a `Missing required parameter` Error is thrown. 
s
Compatible with **Node & Browsers**

## Usage Example 
```javascript
  /* global require */
  
  import './required-parameters.js'; 
  // or in Node...
  // require('required-parameters');
  
  // declare a function with a required parameter
  function myFunc( myParam = required ){
    /* function code... */
  }

  myFunc();
  // Uncaught Error : Missing required parameter 
  // at myFunc (https://localhost/main.js/:10:5)
```

## Distribution & installation 
You can use any of the following alternatives:

**- NPM :**  Install with npm :
```bash
$ npm install required-parameters-js -s
```

**- GIT :** Clone with git :
```bash
$ git clone https://github.com/colxi/required-parameters-js.git
```

**-ZIP :**  Download the package in a ZIP file from :
> [GITHUB LATEST PACKAGE RELEASE PAGE](https://github.com/colxi/required-parameters-js/releases/latest) 

**- CDN:** Use the CDN to include the latest version of the library in your document head :
> Warning: Not recommended in production enviroments :
```html
<script src="http://colxi.info/required-parameters-js/required-parameters.js">
```

## Importing

This package is shipped with support to Node CommonJS and ES6 Modules. Use the appropiate method accoordintg to your enviroment.
```javascript
  // ES6 Module Import : 
  import './required-parameters.js'; 

  // CommonJS Node Import :
  require('required-parameters');
```

## Code Linters
Because the `required` keyword is declared by the library in the global scope your linter will complain when detecting that `required` is used without previous explicit declaration in your specific namespace. To disable the warning set the `require` keyword in your linter config file or inlined in your code use :

```javascript
/* global require */
```

## How it works

**- Short story short :**

Because a line of code is worth a thousand words...

```javascript
const required = ()=>{ throw new Error('Required Parameter!') };

function myFunc( myParamater = required() ){ /**/ }
```
Involve a getter for `required` and you have it... your own implementation of required parameters ;) 

**- Short story long :**

Required-param performs its magic using the ES6 function `default parameter values`.

First the `required` identifier is declared by this library in the corresponding global object (window | self | global), to ensure it can be used anywhere (Browser main thread, Modules, Workers or Node).

When you call a function that uses `required` in any of its parameters, and the required parameter is missing, the javascript interpreter tries to assign the value of `required` to the argument.

Because the `required` variable value retrieval attemps, are handled internally by a `getter`, the `getter function` only needs to throw an Error.