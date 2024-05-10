const mongoose = require("mongoose");


module.exports.connection = mongoose.connect(process.env.DB_URL)
                                    .then(()=> console.log("Connection established on trainingDb..."))
                                    .catch((err)=> console.log("Connection to DataBase Failed!! "));