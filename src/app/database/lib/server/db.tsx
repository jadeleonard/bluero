import mongoose from "mongoose";


const db = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL!);
        console.log('connected')
    } catch (error) {
        console.log('error',error)
    }
}

export default db