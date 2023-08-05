// const colors = require('colors');

// for(i=1;i<=5;i++)
// {
//     for(j=1;j<=5;j++)
//     {
//        if(i==1|| j==1||i==5||j==5)
//        {
//         process.stdout.write("  ".bgGreen)
//        }
//        else{
//            process.stdout.write("  ".bgYellow)
//        }

//     }
//     process.stdout.write("\n");

// }
///////////////////createing server

const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000; // or any port you prefer

// Set up multer for handling file uploads

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Save the uploaded files to the 'uploads/' directory
    },
    filename: function (req, file, cb) {
      const ext = file.mimetype.split('/')[1];
      cb(null, Date.now() + '.' + ext); // Set the filename with the current timestamp and original extension
    },
  });
  
  const upload = multer({ storage: storage });
// Define a route to handle file uploads
app.post('/upload', upload.single('image'), (req, res) => {
  // The uploaded image will be available in req.file
  console.log(req.file);
  res.send('File uploaded successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
