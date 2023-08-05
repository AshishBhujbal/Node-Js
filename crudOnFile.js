/*
1 create file and write some data
2 read file data
3 update file (append data)
4 rename file name
5 delete file 

all this operation performed in 'crudFiles' folder
#to do that we need 2 module to import 
1 fs(file syastem)
2 path -to access current working directory and use some their function to join folders path

lets get started...
*/

const fs =require('fs');
const path =require('path');

const dirPath = path.join(__dirname,'crudFiles');
const filePath = dirPath+"/apple.txt";

// create and write some data
        // fs.writeFileSync(filePath,"This is simple text file ");
//read file
        // fs.readFile(filePath,'utf8',(err,data)=>
        // {
        //     if(!err)
        //     {
        //         console.log(data);
        //     }
        // });

// append data to file
        // fs.appendFile(filePath,"this text is appended",(err)=>
        // {
        //     if(!err)
        //     {
        //         console.log("File Updated.");
        //     }
        // });

//rename file name
const newFileName =dirPath+"/grapes.txt";

        // fs.rename(filePath,newFileName,(err)=>
        // {
        //     if(!err)
        //     {
        //         console.log("File Renamed new File name is "+newFileName);
        //     }
        // })

// delet file 
// it throw error if file not exists
//sync deleting file
        // try{
        //     fs.unlinkSync(newFileName)
        // }
        // catch(err)
        // {
        //     console.log("No Such File exists");
        // }

// async deleteing
        // fs.unlink(newFileName,(err)=>
        // {
        //     if(err)
        //     {
        //         console.log("No file exists with given path: "+newFileName);
        //     }
        // })