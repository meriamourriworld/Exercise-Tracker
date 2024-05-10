const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();
const connect = require("./models/connection");



//Configuration
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
//DataBase Connection
connect;

//Routing
app.post("/api/users", (req, res)=>
{

});



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
