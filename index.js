const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();
const connect = require("./models/connection");
const User = require("./models/user");
const Exercise = require("./models/exercice");

//Configuration
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//DataBase Connection
connect;

//Routing
app.post("/api/users", async (req, res)=>
{
  const {username} = req.body;
  await User.insertMany({username: username});
  const user = await User.findOne({username: username});
  res.json({"username":user.username , "_id": user._id});
});
app.get("/api/users", async (req, res)=>
{
  const usersList = await User.find({});
  res.json(usersList);
});


app.post("/api/users/:_id/exercises", async (req, res)=>
{
  const {_id} = req.params;
  let {description, duration, date} = req.body;
  date = (!date)? new Date().toDateString() : date;
  const {username} = await User.findById(_id);

  await Exercise.insertMany({username:username, date:date ,duration: duration, description: description});
  const exercise = await Exercise.findOne({description: description, duration: duration, username: username});
  res.json(exercise);
});


app.get("/api/users/:_id/logs", async (req, res)=>
{
  const {_id} = req.params;
  const {username} = await User.findById(_id);
  const count = await Exercise.find({username: username}).countDocuments();
  
  const logs = await Exercise.find({username: username});
  console.log(logs)
});






const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
});
