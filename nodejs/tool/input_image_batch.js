
(function () {
    var Promise = require("../node_modules/bluebird");
    var fs = Promise.promisifyAll(require('fs'));
    var path = require('path');

    var _inputRoot = 'step1/category';
    var _outputRoot = 'step2/category1';

    // var linkFiles = function (filename) {
    // var outPutImgPath = _outputRoot + '/' + filename.slice(_inputRoot.length + 1).split(path.sep).join('-');
    // return fs.linkAsync(filename, outPutImgPath);
    // }

    function readDir(dirName) {
        return fs.readdirAsync(dirName)
        .map(
            function (fileName) {
            var currentPath = path.join(dirName, fileName);
            return fs.statAsync(currentPath)
            .then(
                function (stat) {
                return stat.isDirectory() ? readDir(currentPath) : currentPath;
            })
        })
        .map(
            function (filename) {
            //linkFiles(filename);
            if (typeof filename === "string") {
                var a = filename.slice(_inputRoot.length + 1);
                console.log(a);
                var b = a.split(path.sep);
                var c = b.join('-');
                var outPutImgPath = _outputRoot + '/' + c;
                //console.log(outPutImgPath);
                
                //fs.linkAsync(filename, outPutImgPath);
            }
            return filename;
        })
        // .reduce(function (initialValue, filename) {
            // //return initialValue.concat(filename);
        // }, []);
    }

    readDir(_inputRoot)
    //.then(function (v) {
        //console.log("The following file has been copyed " + v.join("\n"));
    //});
})();
