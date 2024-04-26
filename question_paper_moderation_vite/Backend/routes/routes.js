const express = require('express');
const multer = require('multer');
const fs = require('fs');
const app = express();
const port = 5731;


// Set up multer middleware to handle file uploads with disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the destination folder for storing uploaded files
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded file
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});

// Create a multer instance with the defined storage configuration
const upload = multer({ storage: storage });

// POST route to handle file uploads
app.post('/api/upload', upload.single('pdf'), (req, res) => {
  // Access the uploaded file via req.file
  const file = req.file;

  // If no file is uploaded, send an error response
  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Process the uploaded file as needed (e.g., move it to a different directory)
  // In this example, we'll simply respond with a success message

  // Respond with a success message
  res.json({ message: 'File uploaded successfully', filename: file.filename });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
