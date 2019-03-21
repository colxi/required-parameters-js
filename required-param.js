(function(){
    // Stablish the root object, 
    // `window`in the browser,
    // 'self' in WebWorkers
    // `global` in Node
    let r = typeof window === 'object' && window.self === window && window ||
                typeof self === 'object' && self.self === self && self ||
                typeof global === 'object' && global.global === global && global;
        // set a global constnt, that behaves as a function (using a getter), to
    // handle missing required parameters, throwing errors
    Object.defineProperty( r , 'required'  , {
        get : ()=>{
            let err     = new Error('');
            let trace   = err.stack.split('\n');
            let msg     = '';
            for(let i=2;i<trace.length;i++){
                msg+=trace[i]+'\n';
            }
            throw 'Error : Missing required parameter ' + '\n'+msg; 
        },
        configurable : false
    });
})();
