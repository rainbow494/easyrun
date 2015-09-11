(function () {
    var inputRoot = 'step1/category';
    var outputRoot = 'step2/category';

    var fs = require('fs');
    
    fs.lstat(inputRoot, function (err, stats) {
        if (err) {
            console.log(inputRoot + ' not exist!');
            return;
        }
    });

    fs.lstat(outputRoot, function (err, stats) {
        if (err) {
            //console.warn(err);
            fs.mkdir(outputRoot);
        }
    });

    function walk(path, floor, handleFile) {
        //handleFile(path, floor);
        floor++;
        fs.readdir(path, function (err, files) {
            if (err) {
                console.log('read dir error');
            } else {
                files.forEach(function (item) {
                    var tmpPath = path + '/' + item;
                    fs.stat(tmpPath, function (err1, stats) {
                        if (err1) {
                            console.log('stat error');
                        } else {
                            if (stats.isDirectory()) {
                                walk(tmpPath, floor, handleFile);
                            } else {
                                handleFile(tmpPath, floor);
                            }
                        }
                    })
                });
            }
        });
    }
    
    function handleFile(imgPath, floor){
        var outPutImgPath = outputRoot + '/' + imgPath.slice(inputRoot.length + 1).split('/').join('-');
        //console.info(outPutImgPath);
        fs.link(imgPath, outPutImgPath, function () {});
    }
    
    walk(inputRoot, 0, handleFile)
    
})();
