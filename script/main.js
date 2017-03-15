var contentful = require('./hello-contentful.js')

console.log('outside');


(function() {
    console.log('inside');
})();
