import { Router } from "express"
import { authRouter } from "./authRouter"

export const router = Router()

router.use(authRouter)
