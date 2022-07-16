import { Request, Response } from "express"

import * as userService from "@services/userService"

export async function registerUser(req: Request, res: Response) {
  const { email, password }: { email: string; password: string } = req.body

  await userService.registerUser({ email, password })

  res.status(201).send(req.body)
}

export async function loginUser(req: Request, res: Response) {
  const { email, password }: { email: string; password: string } = req.body

  const token = await userService.loginUser({ email, password })

  res.status(200).send({ token })
}
