const router = require('express').Router();
const formidable = require('formidable'); 



//file handling START
    router.route('/')
    .post((req, res) => {
      var form = new formidable.IncomingForm();

      form.parse(req);

      form.on('fileBegin', function (name, file){
          file.path = __dirname + '/uploads/' + file.name;
      });

      form.on('file', function (name, file){
         res.send(true);      
      });
  });

  //file handling end

/*


const multer = require("multer");
const fs = require("fs");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`)
  },
  // fileFilter: (req, file, cb) => {
  //   const ext = path.extname(file.originalname)
  //   if (ext !== '.jpg' && ext !== '.png' && ext !== '.mp4') {
  //     return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
  //   }
  //   cb(null, true)
  // }
})
 
var upload = multer({ storage: storage }).single("file")

router.post("/",(req, res) => {
  upload(req, res, err => {
    if(err) {
      return res.json({ success: false, err })
    }
    return res.json({ success: true, url: res.req.file.path });
  })
});
*/



module.exports= router;