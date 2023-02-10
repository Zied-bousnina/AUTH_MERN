const profileModels = require("../models/profile.models")
const profileInputValidator = require("../validation/profile")

const FindAllProfile = async(req, res)=>{
    // res.send('ok')
    try {
        const data = await profileModels.find().populate('user', ["name", "email", "role"])
        res.status(200).json(data)
        
    } catch (error) {
        res.status(500).json({message: "error"})
        
    }    
}

const AddProfile = async(req, res)=>{
    const {isValid, errors} = profileInputValidator(req.body)
   try {
    if(!isValid) {
        res.status(404).json(errors)
    }else{   
        // console.log(req.body)
        const telExist = await profileModels.find({tel: req.body.tel})
        
        profileModels.findOne({user: req.user.id})
        .then(async (profile)=>{
            if(!profile){
                if(!(telExist.tel === req.body.tel)){

                    req.body.user = req.user.id
                    await profileModels.create(req.body)
                    res.status(200).json({message: "success"})
                }else{
                    errors.tel = "tel already exist"
                    res.status(404).json(errors)
                }
            }else{
                // if(!(telExist1[0].tel === req.body.tel)){
                    
                    await profileModels.findOneAndUpdate(
                        {user: req.user.id},
                        req.body,
                        {new: true}
                        ).then(result=>{
                            var tel = result.tel
                            res.status(200).json(result)
                        }).catch(async (err)=>{
                            const telExist1 = await profileModels.find({tel: req.body.tel})
                            console.log(telExist1)
                            console.log(req.body.tel)
                            if(telExist1[0]?.tel === req.body.tel) {
                                errors.tel = "tel already exist"
                                res.status(404).json(errors)
                            }else{

                                res.status(500).json({message: "error"})
                            }
                            
                        })
                    // }else{
                    //     errors.tel = "tel already exist"
                    //     res.status(404).json(errors)
                    // }
                    }
                })
      
            
    }
    
   } catch (error) {
    res.status(500).json({message: "error2"})
    
   }
}

const findSingleProfile = async(req, res)=>{
    var userId = req.query.id;
    try {
       const data = await profileModels.find({user: req.user.id}).populate('user', ['name', 'email', 'role'])
       res.status(200).json(data)
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}

const DeleteProfile = async(req, res)=>{
   try {
    const userId = req.params.id;
    const deleteProfile = await profileModels.findByIdAndDelete(userId);
    if(!deleteProfile){
        res.status(404).json({message: "profile not found"})
    }else{

        res. status(200).json({message: "profile deleted successfully"})
    }
    
   } catch (error) {
    res.status(500).send('error server')

    
   }
}

module.exports = {
    FindAllProfile,
    AddProfile,
    findSingleProfile,
    DeleteProfile
}

