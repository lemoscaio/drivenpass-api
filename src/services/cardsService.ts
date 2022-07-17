import { Card } from "@prisma/client"
import { encrypt } from "@utils/encryptFunctions"

export type CreateCardData = Omit<Card, "id" | "createdAt">

import * as cardsRepository from "@repositories/cardsRepository"
import {
  returnCardWithCleanPassword,
  returnCredentialWithCleanPassword,
} from "@utils/formatData"

export async function createCard(data: CreateCardData) {
  const cleanData = { password: data.password, securityCode: data.securityCode }
  const hashSecurityCode = encrypt.cryptr.encryptPassword(data.securityCode)
  const hashPassword = encrypt.cryptr.encryptPassword(data.password)
  data.securityCode = hashSecurityCode
  data.password = hashPassword

  const foundCard = await cardsRepository.findByLabelAndUserId(
    data.userId,
    data.label,
  )

  if (foundCard)
    throw {
      status: 409,
      message: "A card with this label already exists",
    }

  const createdCard = await cardsRepository.createCard(data)

  createdCard.password = cleanData.password
  createdCard.securityCode = cleanData.securityCode

  return createdCard
}

export async function findAllCards(userId: number) {
  const cards = await cardsRepository.findAllByUserId(userId)

  const passwordCleanCards = cards.map(returnCardWithCleanPassword)

  return passwordCleanCards
}

export async function findCardById(userId: number, cardId: number) {
  const card = await cardsRepository.findById(cardId)

  if (!card) throw { status: 404, message: "Card not found" }
  if (card.userId !== userId)
    throw {
      status: 401,
      message: "This card does not belong to this user",
    }

  const passwordCleanCard = returnCardWithCleanPassword(card)

  return passwordCleanCard
}

export async function deleteCardById(userId: number, cardId: number) {
  await findCardById(userId, cardId)

  await cardsRepository.deleteById(cardId)
}
