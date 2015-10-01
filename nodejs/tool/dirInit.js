(function () {

    var Promise = require("../node_modules/bluebird");
    var fs = Promise.promisifyAll(require('fs'));
    var path = require('path');

    function initDir(dirName, index){
        var index = index || 0;
        
        var items = dirName.split(path.sep);
        if (index > items.length)
        {
            return true;
        }

        var dir = items.slice(0, index + 1).join(path.sep);

        return fs.lstatAsync(dir)
            .then(function(){
                index++;
                return initDir(dirName, index);
            })
            .catch(function(err) {
                console.log('mkdir : ' + dir);
                return fs.mkdirAsync(dir)
                    .then(function(){
                        index++;
                        return initDir(dirName, index);
                    });
            });
    }

    exports.initDir = initDir;
})()