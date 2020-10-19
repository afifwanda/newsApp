const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;
const router = require('./router/router');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',router)

app.listen(port,function(){
    console.log("you're listening to port " + port)
})
