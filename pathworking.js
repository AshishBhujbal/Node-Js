
const fs = require('fs');
const path = require('path');

// __dirname give current working directory
// path.join(take multiple path and join them)
const dirName = path.join(__dirname,'files');
console.log(dirName);

/// creating multiple file

// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(`${dirName}\\file${i}.txt`,`this is simple file ${i}`);
// }

// to read directory use fs.readdir(dirPath,callbackfunc(err,item-in-dir))

    fs.readdir(dirName,(err,files)=>
    {
        if(!err)
        {
            console.log(files);// o/p [ 'file0.txt', 'file1.txt', 'file2.txt', 'file3.txt', 'file4.txt' ]
        }
    })
