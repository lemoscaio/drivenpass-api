import { CreateNetworkData } from "@services/networksService"
import Joi from "joi"

export const newNetworkSchema = Joi.object<CreateNetworkData>({
  label: Joi.string().required(),
  ssid: Joi.string().max(32).required(),
  password: Joi.string().required(),
})
