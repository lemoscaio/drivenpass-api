import { CreateCardData } from "@services/cardsService"
import Joi from "joi"

export const newCardSchema = Joi.object<CreateCardData>({
  cardholder: Joi.string().required(),
  expirationDate: Joi.string().length(5).required(),
  isVirtual: Joi.boolean().required(),
  label: Joi.string().required(),
  number: Joi.string().required(),
  securityCode: Joi.string().length(3).required(),
  password: Joi.string().required(),
  type: Joi.string().equal("credit", "debit", "creditAndDebit"),
})
