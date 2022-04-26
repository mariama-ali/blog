require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const multer = require("multer");
const path = require("path");

app.use("/images", express.static(path.join(__dirname, "/images")));

//body-parser
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

//database
mongoose.connect(process.env.DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

//routes
app.use("/auth", require("./routes/auth"));
app.use("/posts", require("./routes/posts"));
app.use("/categories", require("./routes/categories"));
app.use("/users", require("./routes/users"));
app.use('*', cors());

//multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

//port
const port = process.env.PORT || 4000

app.listen(port, ()=>{
console.log(`server is up and listening on port ${port}`);
});