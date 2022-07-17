import {
  createDocument,
  deleteDocumentById,
  findAllDocuments,
  findDocumentById,
} from "@controllers/documentsController"
import { validateSchema } from "@middlewares/validateSchema"
import { validateSession } from "@middlewares/validateSession"
import { validateToken } from "@middlewares/validateToken"
import { newDocumentSchema } from "@schemas/newDocumentSchema"
import { Router } from "express"

export const documentsRouter = Router()

documentsRouter.post(
  "/",
  validateSchema(newDocumentSchema),
  validateToken,
  validateSession,
  createDocument,
)
documentsRouter.get("/", validateToken, validateSession, findAllDocuments)
documentsRouter.get("/:id", validateToken, validateSession, findDocumentById)
documentsRouter.delete(
  "/:id",
  validateToken,
  validateSession,
  deleteDocumentById,
)
