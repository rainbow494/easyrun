(function () {
    var inputRoot = 'step3/category';
    var outputRoot = 'step4/category';

    var fs = require('fs');
    var dirInit = require('./dirInit.js');
    var dirWalker = require('./dirWalker.js');

    dirInit.initDirectory(outputRoot, 0);

    fs.readdir(inputRoot, function (err, files) {
        if (err) {
            console.log('read dir error');
            return false;
        }

        files.forEach(function (item) {
            var inputFilePath = inputRoot + '/' + item;
            
            var fileSperatorIdx = item.lastIndexOf('-');
            var fileName = item.substring(fileSperatorIdx + 1);
            var directory = outputRoot + '/'  + item.substring(0, fileSperatorIdx).split('-').join('/');
        
            console.log(directory);   
            dirInit.initDirectory(directory, 0);

            var outputFilePath = directory + '/' + fileName;
            linkFile(inputFilePath, outputFilePath);
        });
    });
    
    function linkFile(inputFilePath, outputFilePath) {
        console.log(inputFilePath);
        console.log(outputFilePath);
        fs.link(inputFilePath, outputFilePath, function () {});
    }
})()
