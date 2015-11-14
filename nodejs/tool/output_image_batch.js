;
(function () {
    
    var Promise = require("../node_modules/bluebird");
    var fs = Promise.promisifyAll(require('fs'));
    var Path = require('path');
    
    var _inputRoot = Path.normalize('step3/category');
    var _outputRoot = Path.normalize('step4/category');

    var dirInit = require('./dirInit.js');
    
    var dirRead = require('./dirRead.js');
    
    var convertI2OFun = function (inputFilename) {
        
        var _inputFilename = inputFilename.slice(_inputRoot.length + 1)
        var _fileSperatorIdx = _inputFilename.lastIndexOf('-');
        var fileName = _inputFilename.substring(_fileSperatorIdx + 1);
        var outPutDir = Path.join(_outputRoot, _inputFilename.substring(0, _fileSperatorIdx).split('-').join(Path.sep));
        
        fileName = fileName.substring(0,fileName.length-4) + '_thumb.jpg'
        
        return Path.join(outPutDir, fileName);
    }
    var fileCopy = require('./fileCopy.js').fileCopyModelInit(_inputRoot, _outputRoot, convertI2OFun);
    
    dirInit.initDir(_outputRoot)
    .then(function () {
        console.log('output dir inited.');
    })
    .then(function () {
        return dirRead.readDir(_inputRoot);
    })
    .map(fileCopy.initOutputDir)
    .map(fileCopy.copyFile)
    .then(fileCopy.logCopyResults);
})();
