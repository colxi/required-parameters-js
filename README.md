## P_REQUIRED : Mandatory function parameters for JS

It allows to use a `P_REQUIRED` identifier (as a default parameter value) on those function parameters that you want to be mandatory. If the parameters are not provided, a `Missing required parameter` Error is thrown. 

Compatible with 
- Node
- Browsers

```javascript
  import './P_REQUIRED.js'; // require('P_REQUIRED.js'); 
  
  // declare a function wwith a mandatory parameter
  function myFunc( myParam = P_REQUIRED ){
    /* some code here */
  }

  // call the function without the parameters
  myFunc();
  
  // Error is thrown!
  /*
    Uncaught Error : Missing required parameter 
      at myFunc (https://localhost/main.js/:10:5)
  */
```
## How it works

P_REQUIRED is just a trick performed thanks to the ES6 function `default parameter values`.
The P_REQUIRED identifier is declared by this library in the corresponding global object (window | self | global). 

When you call a function that uses P_REQUIRED, and the required parameter is missing, the javascript interpreter tries to assign the value of P_REQUIRED to the argument, executing the the getter handler is this attempt. 

An Error is thrown by the P_REQUIRED getter handler, with details of the location of the missing parameter, and the execution is stopped.

