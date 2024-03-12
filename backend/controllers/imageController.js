const Image = require("../models/Image");

const multer = require("multer");

var fs = require("fs");
var path = require("path");
const { uploadImage } = require("../utils/awsUtils");



exports.file = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 ** 7 },
});

exports.upload = async (req, res, next) => {
  const imageUrl = await uploadImage(req.file)
  console.log(req.body);
  var obj = {
    imageName: req.body.imageName,
    desc: req.body.desc,
    img: {
      url: imageUrl,
      contentType: "image/png",
    },
  };
  Image.create(obj)
    .then((item) => {
      console.log(item.img.url);
      res.status(201).json(item.img.url);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "An error occurred" });
    });
};
