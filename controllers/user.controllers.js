const usersModels = require("../models/users.models");
const validateRegisterInput = require('../validation/Register')
const validateLoginInput = require('../validation/login')
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const Register = async(req, res)=>{
    const {errors, isValid} =  validateRegisterInput(req.body)
    
try {
    if(!isValid) {
        res.status(404).json(errors);
    }else {
        usersModels.findOne({email:req.body.email})
        .then(exist=>{
            if(exist) {
                res.status(404).json({email:"Email already exist"})
            }else {
                // req.body.role = "USER"
                const user = new usersModels({
                    name: req.body.name,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    role: req.body.role
                })
                user.save()
                .then(user=>{
                    res.status(200).json({message:"User created successfully"})
                })
                .catch(err=>{
                    res.status(500).json({message: "error"})
                })
            }
        })
    }
       

    
} catch (error) {
    res.status(500).json({message: "error"})
    
}
}

// const Login = async(req, res)=>{
//     const {errors, isValid} =  validateLoginInput(req.body)
  
//     try {
//         if(isValid){
//             usersModels.findOne({email:req.body.email})
//             .then(user=>{
//                 if(!user) {
//                     errors.email = "Email not found"
//                     res.status(404).json(errors);

//                 }else{
//                     bcrypt.compare(req.body.password, user.password)
//                     .then(isMatch=>{
//                         if(isMatch) {
//                             var token = jwt.sign({
//                                 id: user._id,
//                                 name: user.name,
//                                 email: user.email,
//                                 role: user.role

//                             }, process.env.SECRET_KEY, {expiresIn: '1h'})
//                             res.header('auth-token', token).send(token)
                            

//                             res.status(200).json({message:"Login successful"})
//                         }else {
//                             errors.password = "Password incorrect"
//                             res.status(404).json(errors);
//                         }
//                     })
                    
//                 }
//             })
//         }else{
//             // errors.password = "password field is required"
//             res.status(404).json(errors);
//         }
//     } catch (error) {
//         res.status(500).json({message: "error"})
//     }
    

// }
let responseSent = false;

const Login = async(req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  
  try {
    if (isValid) {
      const user = await usersModels.findOne({ email: req.body.email });
      if (!user) {
        errors.email = "Email not found";
        responseSent = true;
        return res.status(404).json(errors);
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (isMatch) {
        const token = jwt.sign(
          {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
          },
          process.env.SECRET_KEY,
          { expiresIn: "1h" }
        );
        responseSent = true;
        return res.header("auth-token", token).status(200).json({ message: "Login successful", token: "Bearer "+token });
      } else {
        errors.password = "Password incorrect";
        responseSent = true;
        return res.status(404).json(errors);
      }
    } else {
      responseSent = true;
      return res.status(404).json(errors);
    }
  } catch (error) {
    if (!responseSent) {
      responseSent = true;
      return res.status(500).json({ message: "error" });
    }
  }
};

const test = async(req, res)=>{
    // res.send("je suis la page test")
    res.send("welcome user")
    // res.send(req.user)
   
}

const admin = async(req, res)=> {
    res.send("je suis la page admin")
}


module.exports = {
    Register,
    Login, 
    test,
    admin
}