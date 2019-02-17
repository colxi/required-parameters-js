# required-function-parameters

It allows set a FLAG on those function parameters that are mandatory. If the parameters are not provided, throws an Error with the full error stack, to trace it. 

Compatible with 
- Node
- Browsers

`
function myFunc(myParam = P_REQUIRED ){
	console.log('The value of myVar is :', myParam);
}

myFunc();
/*
Output :
Uncaught Error : Missing required parameter 
    at myFunc (<anonymous>:29:38)
    at <anonymous>:33:1
*/
`
