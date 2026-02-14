const{ Router }=require("express");

const courseRouter=Router();

courseRouter.post("/purchase", function(req, res){
    res.json({
        message:"purchase course"
    })
})


courseRouter.get("/preview", function(req, res){
    res.json({
        message:"course previwe"
    })
})

module.exports={
    courseRouter: courseRouter
}