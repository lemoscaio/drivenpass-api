import { CreateNoteData } from "@services/notesService"
import Joi from "joi"

export const newNoteSchema = Joi.object<CreateNoteData>({
  title: Joi.string().max(50).required(),
  body: Joi.string().max(1000).required(),
})
