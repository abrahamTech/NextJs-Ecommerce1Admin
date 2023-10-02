import clientPromise from "@/lib/mongodb";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

const handle = async (req , res) => {
    // res.json(req.method);
    const {method} = req;

    //Mongoose connection
    await mongooseConnect();
    
    if(method === "POST") {
        const {title, desc, price} = req.body;
        const productDoc = await mongooseConnect.model("Product").create({
            title, desc, price
        })
        res.json(productDoc);
    }

}

export default handle;