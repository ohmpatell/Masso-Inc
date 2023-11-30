const express = require("express");
const router = express.Router();
const User = require('../model/client')
router.post("/register", async(req, res) =>{
const user = new User({Name : req.body.Name, Email : req.body.Email, Password : req.body.Password})
try{
    const newUser = await newUser.save();
    res.send ("User registered sucessfully")
}
catch(error){
    return res.status(400).json({error});
}
});

router.post("/login"), async (req, res) =>{
    const {email, passsword} = req.body
  try{
    const user = await User.findOne({Email: Email, Password : Password})
    if(user){

        const temp = {
            Name : user.Name,
            Email : user.Email,
            isAdmin : user.isAdmin,
            _id : user._id
        }
        res.send(temp)
    }
    else{
        return res.status(400).json({message: 'Login Failed'});
    }
  }
  catch(error){
    return res.status(400).json({error})
  }
}

module.exports = router;