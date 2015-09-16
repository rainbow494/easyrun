(function(){
    var fs = require('fs');

    function initDirectory(path, floor, _directoryList) {
        
        var directoryList = _directoryList || path.split('/');
        if (floor == directoryList.length)
        {
            return false;
        }
        
        var preInitDirectoryList = [];
        var loopCnt = 0;
        while(loopCnt <= floor){
             preInitDirectoryList.push(directoryList[loopCnt]);
             loopCnt++;
        }
        preInitDirectory = preInitDirectoryList.join('/');
        
        fs.lstat(preInitDirectory, function(err, stats){
            if (err)
            {
                fs.mkdir(preInitDirectory, function(){})
            }
            
            floor++;
            initDirectory(path, floor, directoryList);
        });
    }
    
    exports.initDirectory = initDirectory; 
})()