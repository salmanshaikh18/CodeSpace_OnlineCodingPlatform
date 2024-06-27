import mongoose from "mongoose"

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!, {
            dbName: "CodeSpace"
        })
        console.log("Database connected successfully :)")
    } catch (error) {
        console.log("Error while connecting database :( ", error)
    }
}