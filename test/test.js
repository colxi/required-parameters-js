/* global required */

require('../main.js');
        
const test= function(a=required){
    return true;
};

console.log('TESTING : test(1234)');
if( test(1234) !== true) console.warn('TEST FAILED');

console.log('TESTING : test()');
try{
    test(); 
    // execution should be interrupted here and handled by catch
    console.warn('TEST 2 failed!');
}catch(e){ /**/}

console.log('TESTING COMPLETE');