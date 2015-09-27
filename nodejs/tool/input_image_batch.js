
(function () {
    var Promise = require("../node_modules/bluebird");
    var fs = Promise.promisifyAll(require('fs'));
    var Path = require('path');

    var _inputRoot = 'step1/category';
    var _outputRoot = 'step2/category1';

    var linkFiles = function (filename) {
        var outPutImgPath = _outputRoot + '/' + filename.slice(_inputRoot.length + 1).split("\\").join('-');
        return fs.linkAsync(filename, outPutImgPath);
    }

    function readDir(dirName) {
        return fs.readdirAsync(dirName).map(function (fileName) {
            var path = Path.join(dirName, fileName);
            return fs.statAsync(path).then(function (stat) {
                return stat.isDirectory() ? readDir(path) : path;
            });
        }).reduce(function (initialValue, filename) {
            return linkFiles(filename);
            //return initialValue.concat(filename);
        }, []);
    }

    readDir(_inputRoot).then(function (v) {
        console.log("The following file has been copyed " + v.join("\n"));
    });
})();
