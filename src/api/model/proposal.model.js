const mongoose=require("mongoose"),proposal=new mongoose.Schema({slug:{type:String,required:!0},creator:{type:mongoose.Schema.Types.ObjectId,ref:"Account"},type:{type:Number,default:0},threshold:{type:Number,default:0},multiplier:{type:Number,default:1},percent:{type:Number,default:0},title:{type:String,required:!0},description:{type:String,required:!0},summary:{type:String,required:!0},timezone:{type:mongoose.Schema.Types.Mixed,required:!0},f_start_at:{type:Date,required:!0},f_end_at:{type:Date,required:!0},s_start_at:{type:Date},s_end_at:{type:Date},voters:{type:Array},result:{type:Array},status:{type:Number,default:0},importance:{type:Boolean,default:!1},created_at:{type:Date,default:Date.now}},{strict:!1}),Proposal=mongoose.model("Proposal",proposal);module.exports=Proposal;