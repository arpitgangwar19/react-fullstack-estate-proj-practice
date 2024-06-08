import express, { response } from 'express';


const router  = express.Router();

router.get("/test",(request,response)=>{
    console.log("Workking");
    return "working";
})

export default router;