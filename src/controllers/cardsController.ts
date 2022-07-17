import { CreateCardData } from "@services/cardsService"
import { Request, Response } from "express"

import * as cardsService from "@services/cardsService"

export async function createCard(req: Request, res: Response) {
  const {
    cardholder,
    expirationDate,
    isVirtual,
    label,
    number,
    securityCode,
    password,
    type,
  }: CreateCardData = req.body
  const { id: userId }: { id: number } = res.locals.user

  const createdCard = await cardsService.createCard({
    cardholder,
    expirationDate,
    isVirtual,
    label,
    number,
    securityCode,
    password,
    type,
    userId,
  })

  res.status(201).send(createdCard)
}

export async function findAllCards(req: Request, res: Response) {
  const { id: userId }: { id: number } = res.locals.user

  const cards = await cardsService.findAllCards(userId)

  res.send(cards)
}

export async function findCardById(req: Request, res: Response) {
  const { id: userId }: { id: number } = res.locals.user
  const cardId = Number(req.params.id)

  const card = await cardsService.findCardById(userId, cardId)

  res.send(card)
}

export async function deleteCardById(req: Request, res: Response) {
  const { id: userId }: { id: number } = res.locals.user
  const cardId = Number(req.params.id)

  await cardsService.deleteCardById(userId, cardId)

  res.send(204)
}
