(function () {
    var fs = require('fs');

    function walk(path, floor, handleFile) {
        //handleFile(path, floor);
        floor++;
        fs.readdir(path, function (err, files) {
            if (err) {
                console.log('read dir error');
            } else {
                files.forEach(function (item) {
                    var tmpPath = path + '/' + item;
                    fs.stat(tmpPath, function (err, stats) {
                        if (err) {
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

    exports.walk = walk;
})()
