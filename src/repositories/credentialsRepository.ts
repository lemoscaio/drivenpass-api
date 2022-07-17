import { prisma } from "@config/database"
import { CreateCredentialData } from "@services/credentialsService"

export function createCredential(data: CreateCredentialData) {
  return prisma.credential.create({ data })
}

export function findByLabelAndUserId(userId: number, label: string) {
  return prisma.credential.findFirst({
    where: { userId, label: { equals: label, mode: "insensitive" } },
  })
}

export function findAllByUserId(userId: number) {
  return prisma.credential.findMany({
    where: { userId },
    orderBy: { id: "desc" },
  })
}

export function findById(credentialId: number) {
  return prisma.credential.findFirst({ where: { id: credentialId } })
}

export function deleteById(credentialId: number) {
  return prisma.credential.delete({ where: { id: credentialId } })
}
