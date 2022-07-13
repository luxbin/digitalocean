const mongoose=require("mongoose"),townhall=new mongoose.Schema({superwarden:{type:String,required:!0},villagers:[{type:mongoose.Schema.Types.ObjectId,ref:"Account"}],details:{type:mongoose.Schema.Types.Mixed,required:!0},created_at:{type:Date,default:Date.now},updated_at:{type:Date,default:Date.now},deleted_at:{type:Date,default:null}}),Townhall=mongoose.model("Townhall",townhall);module.exports=Townhall;