import { Router } from "express";
import sellersRouter from "./sellerRouter.js";
const router = Router();

router.use("/sellers", sellersRouter);

export default router;
