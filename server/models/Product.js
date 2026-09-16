const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(

    {
        name:{
            type:String,
            reqired:true,
            trim:true,
        },
        description:{
            type:String,
            required:true,
            trim:true,
        },
        price:{
            type:Number,
            required:true,
            trim:true,
        },
        category:{
            type:String,
            required:true,
            trime:true,
        },
         stock:{
            type:Number,
            required:true,
            min:0,
            default:0,
         },
         image:{
            type:String,
            default:"",
         },
        },
        {
            timestamps:true,
        }
    
);

module.exports = mongoose.model("Product",productSchema)