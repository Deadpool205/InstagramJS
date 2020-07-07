var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = 8080;

var router = express.Router();

router.use(function(_req,_res,next){
    console.log("do somethings tease user");
    next();
})

router.get('/',function(_req,res){
    res.json({message: "this is sweet"})
})

router.get('/test',function(_req,res){
    res.json({message: "this is not sweet"})
})

app.use('/api',router);
 
app.listen(port);
console.log("code is running");