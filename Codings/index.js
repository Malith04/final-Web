var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/Database')
var db = mongoose.connection

db.on('error', ()=> HTMLFormControlsCollection.log("Error in Connecting to Database"))
db.once('open',()=> console.log("Connected to Database"))

app.post("/sign_up", (req,res)=>{
    var first_name = req.body.f_name
    var last_name = req.body.l_name
    var age = req.body.age
    var email = req.body.email
    var phone
})

app.get("/", (req, res) => {
    res.send("Server Connection is successful")
}).listen(3000, () => {
    console.log("Listening to port 3000");
});