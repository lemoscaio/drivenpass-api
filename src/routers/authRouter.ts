import { Router } from "express"

import { loginUser, registerUser } from "@controllers/userController"
import { validateSchema } from "@middlewares/validateSchema"
import { newUserSchema } from "@schemas/newUserSchema"

export const authRouter = Router()

authRouter.post("/sign-up", validateSchema(newUserSchema), registerUser)

authRouter.post("/sign-in", validateSchema(newUserSchema), loginUser)
