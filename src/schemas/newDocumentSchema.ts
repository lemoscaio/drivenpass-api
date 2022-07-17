import { CreateDocumentData } from "@services/documentsService"
import Joi from "joi"

export const newDocumentSchema = Joi.object<CreateDocumentData>({
  expirationDate: Joi.string().required(),
  fullName: Joi.string().required(),
  issuedBy: Joi.string().required(),
  number: Joi.string().required(),
  type: Joi.string().equal("driverLicense", "idCard"),
})
