import { Router } from "express"
import { authRouter } from "./authRouter"
import { cardsRouter } from "./cardsRouter"
import { credentialsRouter } from "./credentialsRouter"
import { documentsRouter } from "./documentsRouter"
import { networksRouter } from "./networksRouter"
import { notesRouter } from "./notesRouter"

export const router = Router()

router.use(authRouter)
router.use("/credentials", credentialsRouter)
router.use("/notes", notesRouter)
router.use("/cards", cardsRouter)
router.use("/networks", networksRouter)
router.use("/documents", documentsRouter)
