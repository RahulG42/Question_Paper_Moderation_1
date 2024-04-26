const express = require("express");
const path = require("path");
const fs = require("fs");
const csvParser = require("csv-parser");

const router = express.Router();

router.get("/similarity_scores", (req, res) => {
  const csvFilePath = 'D:\\Programs\\React_Collage_Project\\question_paper_moderation_vite\\Backend\\CSV\\similarity_score.csv';
  const similarityScores = [];

  fs.access(csvFilePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send("File not found");
      return;
    }

    fs.createReadStream(csvFilePath)
      .pipe(csvParser())
      .on("data", (row) => {
        // Process each row of the CSV file
        for (const key in row) {
          const value = parseFloat(row[key]);
          if (!isNaN(value)) {
            // Check if the parsed value is a float
            similarityScores.push(value);
          }
        }
      })
      .on("end", () => {
        // Send the array of similarity scores to the client
        res.json(similarityScores);
      });
  });
});

module.exports = router;
