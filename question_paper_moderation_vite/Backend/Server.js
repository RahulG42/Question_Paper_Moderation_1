// const express = require('express');
// const multer = require('multer');
// const fs = require('fs');
// const app = express();
// const port = 5731;

// // Set up multer middleware to handle file uploads with disk storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Specify the destination folder for storing uploaded files
//     cb(null, './uploads');
//   },
//   filename: function (req, file, cb) {
//     // Generate a unique filename for the uploaded file
//     cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//   }
// });

// // Create a multer instance with the defined storage configuration
// const upload = multer({ storage: storage });

// // POST route to handle file uploads
// app.post('/api/upload', upload.array('pdf', 5), (req, res) => {
//   // Access the uploaded files via req.files
//   const files = req.files;

//   // If no files are uploaded, send an error response
//   if (!files || files.length === 0) {
//     return res.status(400).json({ error: 'No files uploaded' });
//   }

//   // Process the uploaded files as needed (e.g., move them to a different directory)
//   // In this example, we'll simply respond with a success message

//   // Respond with a success message and list of filenames
//   const filenames = files.map(file => file.filename);
//   res.json({ message: 'Files uploaded successfully', filenames: filenames });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

//RRRRRRRRRRRRRRRRRRRRRRRRRRR
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// app.use(express.json());
// const cors = require("cors");
// app.use(cors());

// const mongoUrl =
//   "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.0";

// mongoose
//   .connect(mongoUrl, { useNewUrlParser: true })
//   .then(() => {
//     console.log("COnnected To database");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./files");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix+file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/upload-files", upload.single("file"), async (req, res) => {
//   console.log(req.file);
//   res.send("Hi");
// });

// app.get("/", async (req, res) => {
//   res.send("success!!!");
// });

// app.listen(5000, () => {
//   console.log("server is started");
// });
///RRRRRRRRRRRRRRRRRRRRRRRRRRRRR

// RRRR
//const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const multer = require("multer"); // Require multer here
// const cors = require("cors");
// const path = require("path"); // Import path module

// app.use(express.json());
// app.use(cors());

// const mongoUrl =
//   "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.0";

// mongoose
//   .connect(mongoUrl, { useNewUrlParser: true })
//   .then(() => {
//     console.log("Connected To database");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// // Set up multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./files");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// // Set up multer upload
// const upload = multer({ storage: storage });

// // Route to handle file upload
// app.post("/upload-files", upload.array("file", 5), async (req, res) => {
//   const files = req.files;
//   if (!files || files.length === 0) {
//     return res.status(400).json({ error: "No files uploaded" });
//   }

//   // Process each file here as needed

//   res.json({ message: "Files uploaded successfully" });
// });

// // Serve static files
// app.use(express.static(path.join(__dirname, 'files')));

// // Route for homepage
// app.get("/", async (req, res) => {
//   res.send("success!!!");
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
//rrrrrrrrrrrrrrr

// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");

// const port = 4000;
// const app = express();

// var corsOptions = {
//   origin: "http://localhost:5173",
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

// app.get("/", (req, res) => {
//   res.send("Welcome to Express App test");
// });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// // app.post("/file", upload.single("file"), (req, res) => {
// //   const file = req.file;

// //   if (file) {
// //     res.json(file);
// //   } else {
// //     throw new Error("File upload unsuccessful");
// //   }
// // });

// app.post("/multifiles", upload.array("files"), (req, res) => {
//   const files = req.files;
//   const name = req.body.name; // Access name from form data
//   const subject = req.body.type; // Access subject from form data

//   // Do something with the files, name, and subject
//   console.log("Name:", name);
//   console.log("Subject:", subject);

//   if (Array.isArray(files) && files.length > 0) {
//     res.json(files);
//   } else {
//     throw new Error("File upload unsuccessful");
//   }
// });

// app.listen(port, () => {
//   console.log("Express App is running on localhost :" + port);
// });

// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");

// const port = 4000;
// const app = express();

// var corsOptions = {
//   origin: "http://localhost:5173",
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

// app.get("/", (req, res) => {
//   res.send("Welcome to Express App test");
// });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const folderPath = path.join("uploads", req.body.name); // Create folder path
//     createFolderIfNotExists(folderPath); // Create folder if not exists
//     cb(null, folderPath); // Set destination to the created folder
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// // Function to create the destination folder if it doesn't exist
// const createFolderIfNotExists = (folderPath) => {
//   if (!fs.existsSync(folderPath)) {
//     fs.mkdirSync(folderPath, { recursive: true });
//   }
// };

// app.post("/multifiles", upload.array("files"), (req, res) => {
//   const files = req.files;
//   const name = req.body.name; // Access name from form data
//   const subject = req.body.type; // Access subject from form data

//   // Do something with the files, name, and subject
//   console.log("Name:", name);
//   console.log("Subject:", subject);

//   if (Array.isArray(files) && files.length > 0) {
//     res.json(files);
//   } else {
//     throw new Error("File upload unsuccessful");
//   }
// });
// app.listen(port, () => {
//   console.log("Express App is running on localhost :" + port);
// });

///this code is genrate 10 subfolder each folder having sepearate 2 pdf
// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");

// const port = 4000;
// const app = express();

// var corsOptions = {
//   origin: "http://localhost:5173",
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

// app.get("/", (req, res) => {
//   res.send("Welcome to Express App test");
// });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const outerFolder = path.join("uploads", req.body.name); // Outer folder name from input name
//     createFolderIfNotExists(outerFolder); // Create outer folder if not exists
//     const innerFolders = Array.from({ length: 10 }, (_, index) => String(index + 1)); // 10 inner folders
//     innerFolders.forEach((folder) => {
//       const innerFolderPath = path.join(outerFolder, folder); // Inner folder path
//       createFolderIfNotExists(innerFolderPath); // Create inner folder if not exists
//     });
//     cb(null, outerFolder); // Set destination to the outer folder
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// // Function to create the destination folder if it doesn't exist
// const createFolderIfNotExists = (folderPath) => {
//   if (!fs.existsSync(folderPath)) {
//     fs.mkdirSync(folderPath, { recursive: true });
//   }
// };

// app.post("/multifiles", upload.array("files"), (req, res) => {
//   const files = req.files;
//   const name = req.body.name; // Access name from form data
//   const outerFolder = path.join("uploads", name); // Outer folder name from input name
//   const innerFolders = Array.from({ length: 10 }, (_, index) => String(index + 1)); // 10 inner folders
//   const fileCount = files.length;
//   const pairs = [];

//   // Generate pairs of files to be stored in each folder
//   for (let i = 0; i < fileCount - 1; i++) {
//     for (let j = i + 1; j < fileCount; j++) {
//       pairs.push([files[i], files[j]]);
//     }
//   }

//   // Move files into each inner folder
//   innerFolders.forEach((folder, index) => {
//     const folderPath = path.join(outerFolder, folder); // Inner folder path
//     createFolderIfNotExists(folderPath); // Create inner folder if not exists
//     const pair = pairs[index];
//     if (pair) {
//       pair.forEach((file) => {
//         const filePath = path.join(folderPath, file.originalname);
//         fs.copyFileSync(file.path, filePath);
//       });
//     }
//   });

//   // Remove files from outer folder
//   files.forEach((file) => {
//     fs.unlinkSync(file.path);
//   });

//   res.json({ message: "Files uploaded successfully" });
// });

// app.listen(port, () => {
//   console.log("Express App is running on localhost :" + port);
// });

////last one

// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");
// const { spawn } = require("child_process");

// const port = 4000;
// const app = express();

// app.use(cors());

// // Set up multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Define destination folder
//     const destinationFolder = path.join("uploads", req.body.name);
//     if (!fs.existsSync(destinationFolder)) {
//       fs.mkdirSync(destinationFolder, { recursive: true });
//     }
//     cb(null, destinationFolder);
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });
// const upload = multer({ storage });

// // Upload endpoint
// app.post("/upload", upload.array("files"), (req, res) => {
//   // Call Python script after 5 seconds
//   setTimeout(() => {
//     sendDataToPython();
//   }, 5000);

//   res.json({ message: "Files uploaded successfully" });
// });

// // Function to send data to Python script
// const sendDataToPython = () => {
//   const pythonProcess = spawn("python", ["script.py"]);

//   pythonProcess.stdout.on("data", (data) => {
//     console.log(`Data from Python: ${data}`);
//   });

//   pythonProcess.stderr.on("data", (data) => {
//     console.error(`Error from Python: ${data}`);
//   });

//   pythonProcess.on("close", (code) => {
//     console.log(`Python script exited with code ${code}`);
//     // After Python script execution, read the generated PDFs and send them back to the client
//     // Implement this part based on your requirement
//   });
// };

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");
// const { spawn } = require("child_process");

// const port = 4000;
// const app = express();

// app.use(cors());

// // Set up multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Define destination folder with subfolders
//     const subfolderNumber = Math.ceil(req.files.length / 2); // Each subfolder contains 2 files
//     const destinationFolder = path.join("uploads", `subfolder_${subfolderNumber}`);
//     if (!fs.existsSync(destinationFolder)) {
//       fs.mkdirSync(destinationFolder, { recursive: true });
//     }
//     cb(null, destinationFolder);
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });
// const upload = multer({ storage });

// // Upload endpoint
// app.post("/upload", upload.array("files"), (req, res) => {
//   // Get the paths of uploaded files
//   const pdfPaths = req.files.map((file) => file.path);

//   // Call Python script with the paths of the uploaded files
//   sendDataToPython(pdfPaths);

//   res.json({ message: "Files uploaded successfully" });
// });

// // Function to send data to Python script
// const sendDataToPython = (pdfPaths) => {

//   const pythonScriptPath = "D:/path/to/your/python/script/Final Major.ipynb";

//   const pythonProcess = spawn("python", [pythonScriptPath, ...pdfPaths]);

//   pythonProcess.stdout.on("data", (data) => {
//     console.log(`Data from Python: ${data}`);
//   });

//   pythonProcess.stderr.on("data", (data) => {
//     console.error(`Error from Python: ${data}`);
//   });

//   pythonProcess.on("close", (code) => {
//     console.log(`Python script exited with code ${code}`);
//     // After Python script execution, read the generated PDFs and send them back to the client
//     // Implement this part based on your requirement
//   });
// };

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

///////////////Lets Doit
// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");
// const { spawn } = require("child_process");

// const port = 4000;
// const app = express();

// app.use(cors());

// // Set up multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Define destination folder with subfolders
//     const subfolderNumber = Math.ceil(req.files.length / 2); // Each subfolder contains 2 files
//     const destinationFolder = path.join("uploads", `subfolder_${subfolderNumber}`);
//     if (!fs.existsSync(destinationFolder)) {
//       fs.mkdirSync(destinationFolder, { recursive: true });
//     }
//     cb(null, destinationFolder);
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });
// const upload = multer({ storage });

// // Function to send data to Python script for each subfolder
// const sendDataToPythonForSubfolders = (subfolderPaths) => {
//   subfolderPaths.forEach((subfolderPath) => {
//     const pythonScriptPath = "C:\\Users\\Rahul\\LastYearProject\\FinalMajor.ipynb";
//     const pdfPaths = fs.readdirSync(subfolderPath).map((filename) => path.join(subfolderPath, filename));

//     const pythonProcess = spawn("python", [pythonScriptPath, ...pdfPaths]);

//     pythonProcess.stdout.on("data", (data) => {
//       console.log(`Data from Python: ${data}`);
//     });

//     pythonProcess.stderr.on("data", (data) => {
//       console.error(`Error from Python: ${data}`);
//     });

//     pythonProcess.on("close", (code) => {
//       console.log(`Python script for ${subfolderPath} exited with code ${code}`);
//       // After Python script execution, read the generated PDFs and send them back to the client
//       // Implement this part based on your requirement
//     });
//   });
// };

// // Upload endpoint
// app.post("/multifiles", upload.array("files"), (req, res) => {
//   // Ensure exactly 10 subfolders are created
//   const subfolderPaths = Array.from({ length: 10 }, (_, i) => {
//     const subfolderNumber = i + 1;
//     const destinationFolder = path.join("uploads", `subfolder_${subfolderNumber}`);
//     if (!fs.existsSync(destinationFolder)) {
//       fs.mkdirSync(destinationFolder, { recursive: true });
//     }
//     return destinationFolder;
//   });

//   // Distribute the uploaded PDFs evenly into the subfolders
//   let subfolderIndex = 0;
//   req.files.forEach((file) => {
//     const destinationFolder = subfolderPaths[subfolderIndex];
//     const destinationPath = path.join(destinationFolder, file.filename);
//     fs.renameSync(file.path, destinationPath);
//     subfolderIndex = (subfolderIndex + 1) % 10; // Move to the next subfolder (circular)
//   });

//   // Call Python script for each subfolder
//   sendDataToPythonForSubfolders(subfolderPaths);

//   res.json({ message: "Files uploaded successfully" });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");
// const { spawn } = require("child_process");

// const app = express();
// const port = 4000;

// app.use(cors());

// // Set up multer storage for file upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },

// });
// const upload = multer({ storage });

// // Route for handling file upload from React
// app.post("/multifiles", upload.array("files", 5), (req, res) => {
//   const uploadedFiles = req.files.map((file) => file.path);

//   // Select two random PDF files
//   const selectedFiles = [];
//   while (selectedFiles.length < 2) {
//     const randomIndex = Math.floor(Math.random() * uploadedFiles.length);
//     selectedFiles.push(uploadedFiles.splice(randomIndex, 1)[0]);
//   }

//   // Call Python script with selected PDF files
//   callPythonScript(selectedFiles);

//   res.json({ message: "Files uploaded and processed successfully." });
// });

// // Function to call Python script with selected PDF files
// function callPythonScript(selectedFiles) {
//  // const pythonScriptPath = "path/to/your/python/script.py";
//  const pythonScriptPath = "C:\\Users\\Rahul\\LastYearProject\\FinalMajor.ipynb";

//   const pythonProcess = spawn("python", [pythonScriptPath, ...selectedFiles]);

//   pythonProcess.stdout.on("data", (data) => {
//     console.log(`Data from Python: ${data}`);
//   });

//   pythonProcess.stderr.on("data", (data) => {
//     console.error(`Error from Python: ${data}`);
//   });

//   pythonProcess.on("close", (code) => {
//     console.log(`Python script exited with code ${code}`);
//   });
// }

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

















////this below code get pdf from save into upload folder and select random two of them and send to
////python script and excute it and output.pdf file generate below the .env file
/////IMP IMP IMP IMP 
// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const { spawn } = require("child_process");
// const path = require("path");

// const app = express();
// const port = 4000;

// app.use(cors());

// // Set up multer storage for file upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });


// const upload = multer({ storage });

// // Route for handling file upload from React
// app.post("/multifiles", upload.array("files", 5), (req, res) => {
//   const uploadedFiles = req.files.map((file) => file.path);

//   // Call Python script with selected PDF files
//   callPythonScript(uploadedFiles);

//   res.json({ message: "Files uploaded and processed successfully." });
// });


// // Function to call Python script with selected PDF files
// function callPythonScript(selectedFiles) {
//   const pythonScriptPath = "C:\\Users\\Rahul\\LastYearProject\\FinalMajor.py";

//   const pythonProcess = spawn("python", [pythonScriptPath,]);

//   pythonProcess.stdout.on("data", (data) => {
//     console.log(`Data from Python: ${data}`);
//   });


//   pythonProcess.stderr.on("data", (data) => {
//     console.error(`Error from Python: ${data}`);
//   });

//   pythonProcess.on("close", (code) => {
//     console.log(`Python script exited with code ${code}`);
//     console.log("Python script execution completed.");
//   });
// }

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




















/////hrer new code code send 5 pdf and store them into called python script and all 5 to that script
// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const { spawn } = require("child_process");
// const path = require("path");
// const fs = require("fs");

// const app = express();
// const port = 4000;

// app.use(cors());

// // Set up multer storage for file upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const subfolder = path.join("uploads", req.body.name); // Subfolder based on input field name
//     fs.mkdirSync(subfolder, { recursive: true }); // Create subfolder if not exists
//     cb(null, subfolder);
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// // Route for handling file upload from React
// app.post("/multifiles", upload.array("files", 5), (req, res) => {
//   const uploadedFiles = req.files.map((file) => file.path);

//   // Call Python script with selected PDF files
//   callPythonScript(req.body.name);

//   res.json({ message: "Files uploaded and processed successfully." });
// });

// // Function to call Python script with selected PDF files
// function callPythonScript(subfolder) {
//   const subfolderPath = path.join("uploads", subfolder);
//   const selectedFiles = fs.readdirSync(subfolderPath).slice(0, 5); // Select up to five files from the subfolder
//   const pythonScriptPath = "C:\\Users\\Rahul\\LastYearProject\\FinalMajor.py";

//   const pythonProcess = spawn("python", [pythonScriptPath, ...selectedFiles.map(file => path.join(subfolderPath, file))]);

//   pythonProcess.stdout.on("data", (data) => {
//     console.log(`Data from Python: ${data}`);
//   });

//   pythonProcess.stderr.on("data", (data) => {
//     console.error(`Error from Python: ${data}`);
//   });

//   pythonProcess.on("close", (code) => {
//     console.log(`Python script exited with code ${code}`);
//   });
// }

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

//////      
// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const { spawn } = require("child_process");
// const path = require("path");
// const fs = require("fs");

// const app = express();
// const port = 4000;

// app.use(cors());

// // Set up multer storage for file upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const subfolder = path.join("uploads", req.body.name); // Subfolder based on input field name
//     fs.mkdirSync(subfolder, { recursive: true }); // Create subfolder if not exists
//     cb(null, subfolder);
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// // Route for handling file upload from React
// app.post("/multifiles", upload.array("files", 10), (req, res) => {
//   const uploadedFiles = req.files.map((file) => file.path);

//   // Call Python script with selected PDF files
//   callPythonScript(req.body.name);

//   res.json({ message: "Files uploaded and processed successfully." });
// });

// // Function to call Python script with selected PDF files
// function callPythonScript(subfolder) {
//   const subfolderPath = path.join("uploads", subfolder);
//   const pdfFiles = fs.readdirSync(subfolderPath);

//   // Generate unique pairs of PDFs
//   const pairs = generateUniquePairs(pdfFiles);

//   // Call Python script for each pair
//   pairs.forEach((pair) => {
//     const pythonScriptPath = "C:\\Users\\Rahul\\LastYearProject\\FinalMajor.py";
//     const pythonProcess = spawn("python", [
//       pythonScriptPath,
//       ...pair.map((file) => path.join(subfolderPath, file)),
//     ]);

//     pythonProcess.stdout.on("data", (data) => {
//       console.log(`Data from Python: ${data}`);
//     });

//     pythonProcess.stderr.on("data", (data) => {
//       console.error(`Error from Python: ${data}`);
//     });

//     pythonProcess.on("close", (code) => {
//       console.log(`Python script exited with code ${code}`);
//     });
//   });
// }

// // Function to generate unique pairs of items from an array
// function generateUniquePairs(array) {
//   const pairs = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       pairs.push([array[i], array[j]]);
//     }
//   }
//   return pairs;
// }


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routes/uploadRoutess");
const similarityRoutes = require("./routes/similarityRoutes");
const path = require("path"); // Import the path module
const fs = require("fs"); 
const axios = require("axios");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('output_pdfs'));

// Endpoint to get list of PDF files
app.get('/pdfs', (req, res) => {
    const pdfDir = path.join(__dirname, 'output_pdfs');

    fs.readdir(pdfDir, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        const pdfFiles = files.filter(file => file.endsWith('.pdf'));
        res.json({ pdfFiles });
    });
});


// Endpoint to download PDF file
app.get('/uploads/download-pdf/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, 'output_pdfs', filename);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Set the appropriate headers for the PDF file
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);

    // Create a read stream to the file and pipe it to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else {
    // If the file doesn't exist, return a 404 response
    res.status(404).send('File not found');
  }
});




app.use("/upload", uploadRoutes);
app.use("/similarity", similarityRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
