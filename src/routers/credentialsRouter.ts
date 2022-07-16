import { createCredential } from "@controllers/credentialsControllers"
import { validateToken } from "@middlewares/validateToken"
import { Router } from "express"

export const credentialsRouter = Router()

credentialsRouter.post("/credentials", validateToken, createCredential)
