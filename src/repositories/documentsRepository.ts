import { prisma } from "@config/database"
import { CreateDocumentData } from "@services/documentsService"

export function findByNumberAndUserId(userId: number, number: string) {
  return prisma.document.findFirst({ where: { userId, number } })
}

export function createDocument(data: CreateDocumentData) {
  return prisma.document.create({ data })
}

export function findAllByUserId(userId: number) {
  return prisma.document.findMany({ where: { userId } })
}

export function findById(documentId: number) {
  return prisma.document.findFirst({ where: { id: documentId } })
}

export function deleteById(credentialId: number) {
  return prisma.document.delete({ where: { id: credentialId } })
}
