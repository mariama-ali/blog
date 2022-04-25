require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

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
app.use("/", require("./routes/posts"));
app.use('*', cors());

//port
const port = process.env.PORT || 4000

app.listen(port, ()=>{
console.log(`server is up and listening on port ${port}`);
});