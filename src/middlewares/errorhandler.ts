import { NextFunction, Request, Response } from "express"

interface Error {
  status?: number
  message?: string
  details?: [{ message: string }]
}

export function handleError(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(error)

  if (error.status && error.message)
    return res.status(error.status).send(error.message)
  if (error.details)
    return res.status(422).send(error.details.map(({ message }) => message))

  res.status(500)
}
