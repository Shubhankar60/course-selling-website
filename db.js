const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;
console.log("conected mongoo");



mongoose.connect("mongodb+srv://shubhankar:sbk261104@course-selling-web.hgu3lev.mongodb.net/coursera-app")

const userSchema= Schema({
    email:{ type:String, unique: true },
    password:String,
    firstName:String,
    lastName:String
});

const adminSchema=Schema({
   email:{ type:String, unique: true },
    password:String,
    firstName:String,
    lastName:String
});

const courseSchema=Schema({
   title:String,
   description:String,
   price:Number,
   imgUrl:String,
   creatorId:String
});

const purchaseSchema=Schema({
    userId:ObjectId,
    courseId:ObjectId

});

const userModel=mongoose.model("user",userSchema);

const adminModel=mongoose.model("admin", adminSchema);

const courseModel=mongoose.model("course",courseSchema);

const purchaseModel=mongoose.model("purchase",purchaseSchema)

module.exports={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}