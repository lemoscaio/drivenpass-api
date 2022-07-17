import Joi from "joi"

export const newNoteSchema = Joi.object({
  title: Joi.string().max(50).required(),
  body: Joi.string().max(1000).required(),
})
