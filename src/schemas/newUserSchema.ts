import { CreateUserData } from "@services/userService"
import Joi from "joi"

export const newUserSchema = Joi.object<CreateUserData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
})
