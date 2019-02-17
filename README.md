# P_REQUIRED (Mandatory function Parameters for JS)

It allows to use the `P_REQUIRED` flag (as a default parameter value) on those function parameters that are mandatory. If the parameters are not provided (or `undefined` is provided), throws an Error with the full error stack, to trace it. 

Compatible with 
- Node
- Browsers

```javascript
  import './P_REQUIRED.js';
  // or in Node : 
  // require('P_REQUIRED.js'); 
  
  // declare a function wwith a required parameter
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

P_REQUIRED is simply a getter in the global object (window|self|global). When the function with P_REQUIRED parameters is called, without any of those parameter, the `default parameter value is assigned`, triggering the getter handler, which throws an Exception with the full stack trace.

