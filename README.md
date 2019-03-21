## required-parameters-js : Mandatory function parameters for JS

It allows to use the `required` identifier (as a default parameter value) on those function parameters that you want to be mandatory. If the parameters are not provided, a `Missing required parameter` Error is thrown. 

Compatible with **Node & Browsers**

##Example 
```javascript
  import './required-parameters.js'; 
  
  // declare a function wwith a required parameter
  function myFunc( myParam = required ){
    /* function code... */
  }

  myFunc();
  // Uncaught Error : Missing required parameter 
  // at myFunc (https://localhost/main.js/:10:5)
```

## Install 

Install with npm :
```
$ npm install required-parameters-js -s
```

Clone with git :
```
$ git clone https://github.com/colxi/required-parameters-js.git
```

Or use the CDN :
```
<script src="https://cdn.jsdelivr.net/gh/colxi/required-parameters-js/dist/required-parameters.min.js">
```



## How it works

Required-param is just a trick performed thanks to the ES6 function `default parameter values`.
The `required` identifier is declared by this library in the corresponding global object (window | self | global). 

When you call a function that uses `required`, and the required parameter is missing, the javascript interpreter tries to assign the value of `required` to the argument, executing the the getter handler is this attempt. 

An Error is thrown by the `required getter handler, with details of the location of the missing parameter, and the execution is stopped.

