import clientPromise from "@/lib/mongodb";
import mongoose from "mongoose";

const handle = async (req , res) => {
    // res.json(req.method);
    const {method} = req;

    //Connect to DataBase 
    //mongoose.connect(clientPromise.url); //Probably this you will create another connection

    if(method === "POST") {
        const {title, desc, price} = req.body;
        const productDoc = await Product.create({
            title, desc, price
        })
        res.json(productDoc);
    }

}

export default handle;