const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const port = process.env.PORT || 3001
const route = require('./router/router')

let storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null,'./assets')
  },
  filename: (req,file,cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
  
const upload = multer({ storage })

app.use(cors());
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.use("/media",express.static(__dirname+'/assets'))
app.use('/',route)

app.post('/upload', upload.single('image'), (req, res) => {
  if (req.file)
    res.json({
      imageUrl: `media/${req.file.filename}`
    });
  else 
    res.status("409").json("No Files to Upload.")
});

app.get('/media')

app.listen(port,function(){
    console.log("youre listening to port " + port)
})

module.exports = app