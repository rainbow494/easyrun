;
(function () {

    var Promise = require("../node_modules/bluebird");
    var fs = Promise.promisifyAll(require('fs'));
    var Path = require('path');

    var dirInit = require('./dirInit.js');

    function fileCopy(inputRoot, outputRoot, convertI2OFun) {
        var _inputRoot = inputRoot || '.';
        var _outputRoot = outputRoot || '.';

        var _convertI2OFun = convertI2OFun || function (inputFilename) {
            return Path.join(_outputRoot, inputFilename.slice(_inputRoot.length + 1));
        }

        function initOutputDir(inputFilename) {
            var _outPutFilename = _convertI2OFun(inputFilename);

            var _fileSperatorIdx = _outPutFilename.lastIndexOf(Path.sep);
            var _outputDir = _outPutFilename.substring(0, _fileSperatorIdx);

            return fs.statAsync(_outputDir)
            .then(function(){
                console.log('dir exist');
                return inputFilename;
            })
            .catch (function () {
                return dirInit.initDir(_outputDir)
                    .then(function(){
                        console.log('dir not exist and mkdir : ' + _outputDir);
                        return inputFilename;
                    })
                    .catch(function(){
                        //console.log('catch 2 : ' + err);
                        return inputFilename;
                    })
            })
        }

        function copyFile(inputFilename) {
            var _outPutFilename = _convertI2OFun(inputFilename);

            return fs.linkAsync(inputFilename, _outPutFilename)
            .then(function () {
                return _outPutFilename;
            })
            .catch (function (ex) {
                return ex;
            })
        }

        function logCopyResults(results) {
            return results.forEach(function (item, idx, array) {
                if (item && item.cause)
                    console.log('Failed: ' + '\033[91m' + item.cause.message + '\033[0m');
                else
                    console.log('Succeed: ' + item);
            })
        }

        this.copyFile = copyFile;
        this.logCopyResults = logCopyResults;
        this.initOutputDir = initOutputDir;

        return this;
    }

    exports.fileCopyModelInit = fileCopy;
})();
