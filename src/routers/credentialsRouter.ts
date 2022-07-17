import { Router } from "express"

import {
  createCredential,
  deleteCredentialById,
  findAllCredentials,
  findCredentialById,
} from "@controllers/credentialsControllers"
import { validateSchema } from "@middlewares/validateSchema"
import { newCredentialSchema } from "@schemas/newCredentialSchema"
import { validateToken } from "@middlewares/validateToken"
import { validateSession } from "@middlewares/validateSession"

export const credentialsRouter = Router()

// TODO change validateToken && validateSession into 1 function that calls both functions inside
credentialsRouter.post(
  "/",
  validateSchema(newCredentialSchema),
  validateToken,
  validateSession,
  createCredential,
)
credentialsRouter.get("/", validateToken, validateSession, findAllCredentials)
credentialsRouter.get(
  "/:id",
  validateToken,
  validateSession,
  findCredentialById,
)
credentialsRouter.delete(
  "/:id",
  validateToken,
  validateSession,
  deleteCredentialById,
)
