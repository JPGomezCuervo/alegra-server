import { Router } from "express";
import sellersRouter from "./sellerRouter.js";
import searchRouter from "./searchRouter.js";

const router = Router();

router.use("/sellers", sellersRouter);
router.use("/search", searchRouter);

export default router;
