// const express = require("express");
// const multer = require("multer");
// const fs = require("fs");
// const { spawn } = require("child_process");

// const checkUploadFolder = require("../MiddleWares/emptyUploadFolder");
// const router = express.Router();
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${file.originalname}`);
//   },
// });
// const upload = multer({ storage });

// router.post("/upload",upload.array("files", 5), (req, res) => {
//   const uploadedFiles = req.files.map((file) => file.path);
//   callPythonScript(uploadedFiles);
//   res.json({ message: "Files uploaded and processed successfully." });
// });




// function callPythonScript(selectedFiles) {
//   const pythonScriptPath = "C:\\Users\\Rahul\\LastYearProject\\FinalMajor.py";
//   const pythonProcess = spawn("python", [pythonScriptPath]);
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

// module.exports = router;




///impelemting web socket above handle incoming file but this give notification to react

const express = require("express");
const multer = require("multer");
const { spawn } = require("child_process");
const WebSocket = require('ws');

const checkUploadFolder = require("../MiddleWares/emptyUploadFolder");
const uploadPdfMiddleware = checkUploadFolder("output_pdfs");
const outputpdfMiddlewaare=checkUploadFolder("uploads")
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}`);
  },
  

});
const upload = multer({ storage });

// Create WebSocket server
const wss = new WebSocket.Server({ port: 8080 });


router.post("/upload",outputpdfMiddlewaare,uploadPdfMiddleware,upload.array("files", 5), (req, res) => {
  const uploadedFiles = req.files.map((file) => file.path);
  callPythonScript(uploadedFiles);
  res.json({ message: "Files uploaded and processing started." });
});


function callPythonScript(selectedFiles) {
  const pythonScriptPath = "C:\\Users\\Rahul\\LastYearProject\\FinalMajor.py";
  const pythonProcess = spawn("python", [pythonScriptPath]);
  
  pythonProcess.stdout.on("data", (data) => {
    console.log(`Data from Python: ${data}`);
  });
  
  pythonProcess.stderr.on("data", (data) => {
    console.error(`Error from Python: ${data}`);
  });
  
  pythonProcess.on("close", (code) => {
    console.log(`Python script exited with code ${code}`);
    console.log("Python script execution completed.");

    // Notify frontend that processing is complete
    wss.clients.forEach((client) => {
      client.send('Processing complete');
    });
  });
}
module.exports = router;
