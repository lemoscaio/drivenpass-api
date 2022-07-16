import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express"

export function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers
  const JWT_TOKEN = process.env.JWT_TOKEN
  const hasBearer = authorization?.match(/Bearer/)
  const token = authorization?.replace("Bearer", "").trim()

  if (!hasBearer)
    throw {
      status: 401,
      message: "Authorization header must have 'Bearer' at the beggining",
    }

  if (!token)
    throw {
      status: 401,
      message: "You must pass an authorization token in the request header",
    }

  try {
    const tokenData = JSON.stringify(jwt.verify(token, JWT_TOKEN))
    const parsedData: { email: string } = JSON.parse(tokenData)
    res.locals.user = { email: parsedData.email }
  } catch (error) {
    throw { status: 401, message: "Wrong or expired token" }
  }

  next()
}
