// App for testing some simple npm packages
// catMe "https://www.npmjs.com/package/cat-me"
// knock "https://www.npmjs.com/package/knock"

var catMe = require("cat-me");
var knock = require('knock-knock-jokes');
console.log(catMe());
console.log(knock());