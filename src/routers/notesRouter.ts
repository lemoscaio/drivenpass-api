import {
  createNote,
  deleteNoteById,
  findAllNotes,
  findNoteById,
} from "@controllers/notesController"
import { validateSchema } from "@middlewares/validateSchema"
import { validateSession } from "@middlewares/validateSession"
import { validateToken } from "@middlewares/validateToken"
import { newNoteSchema } from "@schemas/newNoteSchema"
import { Router } from "express"

export const notesRouter = Router()

notesRouter.post(
  "/",
  validateSchema(newNoteSchema),
  validateToken,
  validateSession,
  createNote,
)
notesRouter.get("/", validateToken, validateSession, findAllNotes)
notesRouter.get("/:id", validateToken, validateSession, findNoteById)
notesRouter.delete("/:id", validateToken, validateSession, deleteNoteById)
