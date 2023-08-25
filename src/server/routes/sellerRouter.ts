import { Router } from "express"

const sellersRouter = Router();

sellersRouter.get("/", (req, res)=>{
    res.status(200).json("Bienvenido")
});

export default sellersRouter;
