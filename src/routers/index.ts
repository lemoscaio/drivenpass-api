import { Router } from "express"
import { authRouter } from "./authRouter"
import { credentialsRouter } from "./credentialsRouter"
import { notesRouter } from "./notesRouter"

export const router = Router()

router.use(authRouter)
router.use("/credentials", credentialsRouter)
router.use("/notes", notesRouter)
