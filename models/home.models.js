import mongoose from "mongoose";


const homeProductSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    image:{
        type:String,
        required:true
    },

    sizes:[
        {
            type:String
        }
    ]

},
{
    timestamps:true
}
);


const HomeProduct = mongoose.model(
    "HomeProduct",
    homeProductSchema
);


export default HomeProduct;