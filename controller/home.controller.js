import HomeProduct from "../models/home.models.js";



export const homeproductcontroller = async(req,res)=>{

    try {


        const {
            name,
            category,
            price,
            image,
            sizes
        } = req.body;



        if(
            !name ||
            !category ||
            !price ||
            !image ||
            !sizes
        ){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });
        }



        const product = await HomeProduct.create({

            name,
            category,
            price,
            image,
            sizes

        });



        return res.status(201).json({

            success:true,
            message:"Home Product Added Successfully",
            product

        });



    } catch(error){

        return res.status(500).json({

            success:false,
            message:error.message

        });

    }

};

export const getHomeProducts = async(req,res)=>{

    try {


        const products = await HomeProduct.find()
        .sort({
            createdAt:-1
        });



        return res.status(200).json({

            success:true,
            message:"Home Products Fetch Successfully",
            products

        });



    } catch(error){


        return res.status(500).json({

            success:false,
            message:error.message

        });


    }

};