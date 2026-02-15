const { Router }=require("express");
const adminRouter=Router();

adminRouter.post("/signup", function(req, res){
    res.json({
        message:"admin signup"
    })
})

adminRouter.post("/signin",function(req, res){
    res.json({
        message:"admin signin"
    })
})


adminRouter.post("/course",function(req, res){
    res.json({
        message:"admin course endpoint"
    })
})

adminRouter.put("/course", function(req, res){
    res.json({
        message:"put course endpoint"
    })
})
adminRouter.get("/course/bulk", function(req, res){
    res.json({
        message:"course get endpoint"
    })
})

module.exports={
    adminRouter:adminRouter
}