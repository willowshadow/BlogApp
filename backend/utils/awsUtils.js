const AWS = require('aws-sdk');
const express = require('express');
const router = express.Router();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-southeast-2' 
});

const s3 = new AWS.S3();

module.exports.uploadImage = async (fileData) => {
  // Assuming req.file contains the file data
  
  const params = {
    Bucket: 'genericcdntest',
    Key: 'images/' + fileData.originalname, // e.g., 'images/my-image.jpg', // e.g., 'images/my-image.jpg'
    Body: fileData.buffer,
    ContentType: fileData.mimetype,
    ACL: 'public-read',
  };

  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.Location); // Return the S3 URL of the uploaded image
      }
    });
  });
};
