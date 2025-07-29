import { Router } from "express";

const router = Router()

router.get("/Hola",(req,res)=>{
    console.log("Hola desde ruta")
    return res.status(200).send("Hola desde ruta")
})

export default router