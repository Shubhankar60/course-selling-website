const { Router } =require("express") ;
const userRouter= Router();
const { userModel }=require("../db");
const jwt=require("jsonwebtoken");
const JWT_USER_PASSWORD="asasa12"

userRouter.post("/signup", async function(req, res){
   const { email, password, firstName, lastName }=req.body;



   await userModel.create({
    email:email,
    password:password,
    firstName:firstName,
    lastName:lastName
   })
    res.json({
        message:"signup succeded"
    })

})
userRouter.post("/signin", async function(req, res){
  const {email, password}=req.body;
  const user=await userModel.findOne({
    email:email,
    password:password
  });

  if(user){
    const token = jwt.sign({
        id: user._id
    },JWT_USER_PASSWORD);

    //

   res.json({
    token:token
   })

  }else{
      res.status(404).json({
        message:"wrong credential"
    })
  }
})
userRouter.get("/purchases", function(req, res){
  
    res.json({
        message:"signup"
    })

})


module.exports={
   userRouter: userRouter
}