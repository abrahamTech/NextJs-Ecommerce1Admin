import mongoose from "mongoose";

export function mongooseConnect () {
    try {
        if(mongoose.connection.readyState === 1) {
            return mongoose.connection.asPromise();
        } else {
            const uri = process.env.MONGODB_URI;
            return mongoose.connect(uri);
        }
        
    } catch (error) {
        throw new Error("Connection failed by: " + error)
    }
    
}

/* SECOND Option
const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
    } catch (error) {
        throw new Error("Connection failed by: " + error)
    }
};

export default connect;
*/