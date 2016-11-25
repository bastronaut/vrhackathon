let originalOpen = XMLHttpRequest.prototype.open;

XMLHttpRequest.prototype.open = function(){
    console.info(arguments);
    if( arguments[1] === 'https://storage.googleapis.com/cardboard-dpdb/dpdb.json'){
        arguments[1] = 'config/dpdb.json'
    }
    originalOpen.apply(this, arguments);
}

module.exports = {};
