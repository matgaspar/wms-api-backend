const path = require('path');
const multer = require('multer');

module.exports = {
  Upload: {
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, path.resolve('src', 'assets', 'upload'));
      },

      filename: (req, file, cb) => {
        const [filename, ext] = file.originalname.split('.');
        console.log(file);
        cb(null, `${Date.now()}-${filename}.${ext}`);
      },
    }),
  },
};
