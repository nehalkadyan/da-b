const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user.routes");
const cors = require("cors")

// app
const app = express();

app.use(cors())

// const port = process.env.PORT || 6000

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to DB")
}).catch((err) => console.log("err", err.message));

// let isConnected = false;

// async function connectToDB(){
//     try{
//       await mongoose.connect(process.env.MONGO_URI, {
//         useNewUrlParser : true,
//         useUnifiedTopology : true
//       })
//       isConnected = true;
//       console.log("Connected to DB")
//     }catch(err){
//       console.error("Error connecting to MongoDB")
//     }
// }

// // add middleware

// app.use((req, res, next) => {
//     if(!isConnected){
//         connectToDB()
//     }

//     next()
// })

app.use("/api", userRoutes)
app.get("/", (req, res) => {
  return res.send("<h1>Hello World!</h1>")
})

module.exports = app

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// })

















