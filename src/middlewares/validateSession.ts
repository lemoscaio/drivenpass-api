import { NextFunction, Request, Response } from "express"

import * as userService from "@services/userService"

export async function validateSession(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { email: userEmail }: { email: string } = res.locals.user

  // TODO change code to really validate session. For now, it's a placeholder for passing the userId through the res.locals

  const foundUser = await userService.findByEmail(userEmail)

  if (!foundUser) throw { status: 404, message: "User not found" }

  res.locals.user = { ...res.locals.user, id: foundUser.id }

  next()
}
