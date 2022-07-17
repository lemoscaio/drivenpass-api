import {
  createCard,
  deleteCardById,
  findAllCards,
  findCardById,
} from "@controllers/cardsController"
import { validateSchema } from "@middlewares/validateSchema"
import { validateSession } from "@middlewares/validateSession"
import { validateToken } from "@middlewares/validateToken"
import { newCardSchema } from "@schemas/newCardSchema"

import { Router } from "express"

export const cardsRouter = Router()

cardsRouter.post(
  "/",
  validateSchema(newCardSchema),
  validateToken,
  validateSession,
  createCard,
)
cardsRouter.get("/", validateToken, validateSession, findAllCards)
cardsRouter.get("/:id", validateToken, validateSession, findCardById)
cardsRouter.delete("/:id", validateToken, validateSession, deleteCardById)
