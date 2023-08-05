// process is object which is used to take command line args
// process.argv return array 
const fs =require('fs');
const { clearScreenDown } = require('readline');
// console.log(process.argv);
var fileName =process.argv[2];
var data =process.argv[3];
var action = process.argv[4];
if(action == "add")
{
    fs.writeFileSync(fileName,data,(err)=>
    {
     if(err)
     {
        console.warn(err);
     }
     console.log("file created and data written.");
    })
}
else if(action == "remove")
{
    //it check file exist or not first
    fs.access(fileName, fs.constants.F_OK, (err) => {
  if (err) {
    console.error('File does not exist.');
  } else {
    fs.unlinkSync(fileName) // remove file 
  }
}
)}
else if(action == "read")
{
    //it check file exist or not first
    fs.access(fileName, fs.constants.F_OK, (err) => {
        if (err) {
          console.error('File does not exist.');
        } else {
           
            var d=fs.readFileSync(fileName,'utf-8')
            console.log(d)
        }
      }
      )
}
else{
    console.log("Invalid action");
}
