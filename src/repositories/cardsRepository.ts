import { prisma } from "@config/database"
import { CreateCardData } from "@services/cardsService"

export function createCard(data: CreateCardData) {
  return prisma.card.create({ data })
}

export function findByLabelAndUserId(userId: number, label: string) {
  return prisma.card.findFirst({ where: { userId, label } })
}

export function findAllByUserId(userId: number) {
  return prisma.card.findMany({ where: { userId } })
}

export function findById(cardId: number) {
  return prisma.card.findFirst({ where: { id: cardId } })
}

export function deleteById(cardId: number) {
  return prisma.card.delete({ where: { id: cardId } })
}
