// const fs = require("fs");
// const path = require("path");

// function emptyUploadFolder(uploadFolderPath) {
//     uploadFolderPath = "uploads"; 
//   fs.readdir(uploadFolderPath, (err, files) => {
//     if (err) {
//       console.error("Error reading upload folder:", err);
//       return;
//     }

    
//     // Delete each file in the folder
//     files.forEach(file => {
//       fs.unlink(path.join(uploadFolderPath, file), err => {
//         if (err) {
//           console.error("Error deleting file:", err);
//           // Handle error if necessary
//         }
//       });
//     });
//   });
// }

// module.exports = function checkUploadFolder(uploadFolderPath) {
//   // Empty the upload folder
//   emptyUploadFolder(uploadFolderPath);

//   // Return a middleware function
//   return function(req, res, next) {
//     // Proceed to the next middleware
//     next();
//   };
// };



// const fs = require("fs");
// const path = require("path");

// function emptyUploadFolder(uploadFolderPath) {
//   fs.readdir(uploadFolderPath, (err, files) => {
//     if (err) {
//       console.error(`Error reading ${uploadFolderPath} folder:`, err);
//       return;
//     }
    
//     // Delete each file in the folder
//     files.forEach(file => {
//       fs.unlink(path.join(uploadFolderPath, file), err => {
//         if (err) {
//           console.error(`Error deleting file ${file} in ${uploadFolderPath}:`, err);
//           // Handle error if necessary
//         }
//       });
//     });
//   });
// }

// module.exports = function(uploadFolderName) {
//   return function(req, res, next) {
//     const uploadFolderPath = path.join(__dirname, '..', uploadFolderName); // Specify the upload folder path
//     emptyUploadFolder(uploadFolderPath); // Empty the upload folder before each request
//     next(); // Proceed to the next middleware
//   };
// };


const fs = require("fs");
const path = require("path");

function emptyUploadFolder(uploadFolderPath, next) {
  fs.readdir(uploadFolderPath, (err, files) => {
    if (err) {
      console.error(`Error reading ${uploadFolderPath} folder:`, err);
      return;
    }
    
    // Delete each file in the folder
    files.forEach(file => {
      fs.unlink(path.join(uploadFolderPath, file), err => {
        if (err) {
          console.error(`Error deleting file ${file} in ${uploadFolderPath}:`, err);
          // Handle error if necessary
        }
      });
    });

    // Add a delay of 1000 milliseconds (1 second) before proceeding
    setTimeout(() => {
      next(); // Proceed to the next middleware
    }, 500); // Delay in milliseconds
  });
}

module.exports = function(uploadFolderName) {
  return function(req, res, next) {
    const uploadFolderPath = path.join(__dirname, '..', uploadFolderName); // Specify the upload folder path
    emptyUploadFolder(uploadFolderPath, next); // Empty the upload folder before each request and proceed with delay
  };
};
