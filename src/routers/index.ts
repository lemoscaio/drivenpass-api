import { Router } from "express"
import { authRouter } from "./authRouter"
import { credentialsRouter } from "./credentialsRouter"

export const router = Router()

router.use(authRouter)
router.use(credentialsRouter)
