import { type ClassValue, clsx } from "clsx"
import mongoose, { mongo } from "mongoose"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const connectToDB = async () => {
   try {
       if(mongoose.connections && mongoose.connections[0].readyState){
           console.log("mongodb is alredy connected")
           return 
       }

       const {connection } = await mongoose.connect(process.env.MONGODB_URI! as string) 
       
       console.log(`Connected to database : ${connection.host}`)
   } catch (error) {
      throw new Error("Error connecting to database")
   }
}