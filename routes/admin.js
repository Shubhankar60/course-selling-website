const { Router }=require("express");
const adminRouter=Router();
const {adminModel}=require("../db");
const jwt=require("jsonwebtoken");
const JWT_USER_PASSWORD="absbba12"

adminRouter.post("/signup", async function(req, res){


    const { email, password, firstName, lastName }=req.body;



   await adminModel.create({
    email:email,
    password:password,
    firstName:firstName,
    lastName:lastName
   })
    res.json({
        message:"signup succeded"
    })
   
})



adminRouter.post("/signin", async function(req, res){
   const {email, password}=req.body;
  const admin=await adminModel.findOne({
    email:email,
    password:password
  });

  if(admin){
    const token = jwt.sign({
        id: admin._id
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


adminRouter.post("/",function(req, res){
    res.json({
        message:"admin course endpoint"
    })
})

adminRouter.put("/", function(req, res){
    res.json({
        message:"put course endpoint"
    })
})
adminRouter.get("/bulk", function(req, res){
    res.json({
        message:"course get endpoint"
    })
})

module.exports={
    adminRouter:adminRouter
}