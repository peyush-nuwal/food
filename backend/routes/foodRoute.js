import express from "express"
import { addFood, deleteFood, list_food} from "../controllers/foodController.js"
import multer from "multer"


const foodRouter=express.Router();

//image storage engine
 const storage =multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
 })

 const upload=multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",list_food)
foodRouter.post("/delete/:id",deleteFood);

export default foodRouter