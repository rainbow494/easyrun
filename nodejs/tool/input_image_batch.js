;
(function () {

    var Promise = require("../node_modules/bluebird");
    var fs = Promise.promisifyAll(require('fs'));
    var Path = require('path');

    var _inputRoot = Path.normalize('step1/category');
    var _outputRoot = Path.normalize('step2/category');

    var dirInit = require('./dirInit.js');

    var dirRead = require('./dirRead.js');

    var convertI2OFun = function (inputFilename) {
        return Path.join(_outputRoot, inputFilename.slice(_inputRoot.length + 1).split(Path.sep).join('-'))
    }
    var fileCopy = require('./fileCopy.js').fileCopyModelInit(_inputRoot, _outputRoot, convertI2OFun);

    dirInit.initDir(_outputRoot)
    .then(function () {
        console.log('output dir inited.');
    })
    .then(function () {
        return dirRead.readDir(_inputRoot);
    })
    .map(fileCopy.copyFile)
    .then(fileCopy.logCopyResults);
})();
