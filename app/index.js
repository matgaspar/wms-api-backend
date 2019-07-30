const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pe = require('parse-error');
const Quagga = require('quagga').default;
const path = require('path');
const { PDFImage } = require('pdf-image');
const { getDevices, UsbScanner } = require('usb-barcode-scanner');
const fs = require('fs');
const multer = require('multer');

const app = express();
const server = require('http').Server(app);
const CONFIG = require('./config');
const db = require('./models');

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados SQL:', CONFIG.DB.name);
  })
  .catch(() => {
    console.error('Não é possível conectar-se ao banco de dados SQL:', CONFIG.DB.name);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const upload = multer(CONFIG.Upload);

app.get('/', (req, res) => res.send('<b>Hello World!</b>'));
app.get('/devices', (req, res) => res.status(200).json(getDevices()));
app.post('/device', (req, res) => {
  try {
    const { path } = req.body;
    const scanner = new UsbScanner({
      path,
      /* vendorId: 1155,
    productId: 22352, */
      /** You could also initialize the scanner by giving entering the path variable:
       *  path: 'IOService:/AppleACPI etc...'
       * */
    });

    scanner.on('data', (data) => {
      console.log(data);
    });

    scanner.startScanning();
    scanner.stopScanning();
  } catch (err) {
    throw err;
  }
});

app.post('/canhoto', upload.array('docs'), (req, res) => {
  try {
    // const pdfFile = path.resolve('assets', 'teste.pdf');
    // console.log(req.body, req.files);
    return res.json(req.files);
    /* const pdfImage = new PDFImage(pdfFile);
    pdfImage.convertPage(0).then(
      (imagePath) => {
        if (fs.existsSync(imagePath)) {
          Quagga.decodeSingle(
            {
              src: imagePath,
              numOfWorkers: 0, // Needs to be 0 when used within node
              inputStream: {
                name: 'canhoto',
                type: 'ImageStream',
                size: 800, // restrict input-size to be 800px in width (long-side)
                area: {
                  // defines rectangle of the detection/localization area
                  top: '0%', // top offset
                  right: '0%', // right offset
                  left: '0%', // left offset
                  bottom: '0%', // bottom offset
                },
                singleChannel: true, // true: only the red color-channel is read
              },
              decoder: {
                readers: ['code_128_reader', 'i2of5_reader', '2of5_reader'], // List of active readers
                debug: {
                  drawBoundingBox: true,
                  showFrequency: true,
                  drawScanline: true,
                  showPattern: true,
                },
              },
            },
            (result) => {
              if (result.codeResult) {
                return res.status(200).json(result);
              }
              fs.unlinkSync(imagePath);
              return res.status(500).json('not detected');
            },
          );
        }
      },
      err => res.status(500).json(err),
    ); */
  } catch (ex) {
    return res.status(500).json(ex);
  }
});

app.use('/public', require('./routes/public.routes'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.message = 'Not Found';
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err.message);
});

process.on('unhandledRejection', (error) => {
  console.error('Uncaught Error', pe(error));
});

server.listen(CONFIG.port, () => {
  console.log(`Servidor em execução na porta :${CONFIG.port}`);
});
