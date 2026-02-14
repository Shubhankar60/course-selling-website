const { Router } =require("express") ;

const userRouter= Router();


userRouter.post("/signup", function(req, res){
  
    res.json({
        message:"signup"
    })

})
userRouter.post("/sigin", function(req, res){
  
    res.json({
        message:"signin"
    })

})
userRouter.get("/purchases", function(req, res){
  
    res.json({
        message:"signup"
    })

})


module.exports={
   userRouter: userRouter
}