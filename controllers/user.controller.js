const User = require("../models/User.model")

const getUserById = async(req, res) => {
     try{
        const user = await User.find();

        return res.status(200).json({message : "successfully fetched user", user})
     }catch(err){
        console.log("err", err)
     }
}

module.exports = {getUserById}