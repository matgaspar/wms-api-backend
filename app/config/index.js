const path = require('path');
const multer = require('multer');
require('dotenv').config();

module.exports = {
  app: process.env.APP || 'production',
  port: process.env.PORT || '7000',
  DB: {
    timezone: process.env.DB_TIMEZONE || 'Etc/GMT-3' || 'America/Sao_Paulo',
    dialect: process.env.DB_DIALECT || 'mariadb',
    host: process.env.DB_HOST || 'localhost',
    name: process.env.DB_NAME || 'webonl_api',
    user: process.env.DB_USER || 'webonl',
    port: process.env.DB_PORT || '3306',
    pass: process.env.DB_PASS || 'gaspar15!',
  },
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
  Pagination: {
    default: {
      page: 1,
      paginate: 25,
    },
  },
};
