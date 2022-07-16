import Joi from "joi"

export const newCredentialSchema = Joi.object({
  url: Joi.string().uri().required(),
  label: Joi.string().max(50).required(),
  login: Joi.string().required(),
  password: Joi.string().required(),
})
