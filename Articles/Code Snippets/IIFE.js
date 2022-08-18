// IIFE stands for Immediately Invoked Function Expression
(function iifeExample(...numbers) {
    return Math.max.apply(null, numbers);
})(34, 1, 67, 9, 97);

// Another example of IIFE
(function() {
    const APP_VERSION = 12;

    function funcInsideIife() {
        return "Function inside IIFE function";
    }

    console.log(funcInsideIife() + ': ' + APP_VERSION);
})();
