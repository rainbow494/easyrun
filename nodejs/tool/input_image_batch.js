(function () {
    var inputRoot = 'input/category/wall hangings';
    var outputRoot = 'data/category/wall hangings';

    var fs = require('fs');

    fs.lstat(outputRoot, function (err, stats) {
        if (err) {
            //console.warn(err);
            fs.mkdir(outputRoot);
        }
    });

    fs.lstat(inputRoot, function (err, stats) {
        if (err) {
            console.log(inputRoot + ' not exist!');
            return;
        }
    });

    fs.readdir(inputRoot, function (err, folders) {
        for (var i = 0; i < folders.length; i++) {
            var folderName = folders[i];

            (function (folderName) {
                fs.readdir(inputRoot + '/' + folderName, function (err, imgs) {
                    for (var j = 0; j < imgs.length; j++) {
                        var inputFullPath = inputRoot + '/' + folderName + '/' + imgs[j];
                        var outPutFullPath = outputRoot + '/' + folderName + '_' + imgs[j];
                        fs.link(inputFullPath, outPutFullPath, function () {});
                    }
                });
            })(folderName)
        }
    });

    console.log('prepare data successful!')

})();
