//http://stackoverflow.com/questions/32546765/iterate-directories-recursively-with-bluebird
(function () {
    var Promise = require("../node_modules/bluebird");
    var fs = Promise.promisifyAll(require('fs'));
    
    var _inputRoot = 'step1/category';
    var outputRoot = 'step2/category1';
    
    var getFiles = function(){
        return fs.readdirAsync(_inputRoot);
    }
    var getlstatAsync = function(filename){
        return fs.lstatAsync(filename).then(stat => !stat.isDirectory());
    }
    var linkFiles = function(filename){
        var outPutImgPath = outputRoot + '/' + imgPath.slice(inputRoot.length + 1).split('/').join('-');
        return fs.linkAsync(filename, outPutImgPath);
    }
    
    getFiles()
    .map(function(item){
        filename = _inputRoot + '/' + item;
        return getlstatAsync(filename);
    })
     .then(function(filestat){
        return linkFiles(filename);
    })
    .then(function(){
        console.log('init imgs success');
    })

    // var dirInit = require('./dirInit.js');
    // var dirWalker = require('./dirWalker.js');

    // function checkDirectory(path) {
        // return fs.lstatAsync(path)
        // .then(function (fileData) {
            // //console.info('exist : ' + path);
            // return;
        // })
        // .catch (function (error) {
            // //console.error('\x1b[36m', 'not exist : ' + error.path, '\x1b[0m');
            // return error.path;
        // });
    // }

    // function handleFile(imgPath, floor) {
        // var outPutImgPath = outputRoot + '/' + imgPath.slice(inputRoot.length + 1).split('/').join('-');
        // fs.link(imgPath, outPutImgPath, function () {});
    // }

    // checkDirectory(inputRoot)
        // .then(function (data) {
            // if (data) {
                // throw (data);
            // }
        // })
        // .then(function (data) {
            // return checkDirectory(outputRoot);
        // })
        // .then(function (data) {
            // if (data) {
                // dirInit.initDirectory(outputRoot, 0);
            // }
            // dirWalker.walk(inputRoot, 0, handleFile);
        // })
        // .catch (function (error) {
            // console.error('\x1b[36m', 'not exist : ' + error, '\x1b[0m');
        // })

})();
