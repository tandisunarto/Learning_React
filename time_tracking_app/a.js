var moduleMain = (function(){

    function foo() {
        console.log('function foo');
    }

    function bar() {
        console.log('function bar');
    }

    return {
        fnFoo: foo,
        fnBar: bar
    }

})();

var moduleMain = (function(module){

    function main() {
        console.log('function main');
    }

    return Object.assign(
        {},
        module,
        {
            fnMain: main
        }
    )

})(moduleMain || {});

moduleMain.fnFoo();
moduleMain.fnBar();
moduleMain.fnMain();
