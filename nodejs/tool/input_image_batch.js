(function () {
    var inputRoot = 'step1/category';
    var outputRoot = 'step2/category1';

    var fs = require('fs');
    var dirInit = require('./dirInit.js');
    var dirWalker = require('./dirWalker.js');

    fs.lstat(inputRoot, function (err, stats) {
        if (err) {
            console.log(inputRoot + ' not exist!');
            return;
        }
    });
    
    dirInit.initDirectory(outputRoot, 0);

    function handleFile(imgPath, floor) {
        var outPutImgPath = outputRoot + '/' + imgPath.slice(inputRoot.length + 1).split('/').join('-');
        //console.info(outPutImgPath);
        fs.link(imgPath, outPutImgPath, function () {});
    }

    dirWalker.walk(inputRoot, 0, handleFile);
})();
