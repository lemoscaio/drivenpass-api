import { prisma } from "@config/database"
import { CreateNetworkData } from "@services/networksService"

export function createNetwork(data: CreateNetworkData) {
  return prisma.network.create({ data })
}

export function findByLabelAndUserId(userId: number, label: string) {
  return prisma.network.findFirst({ where: { userId, label } })
}

export function findAllByUserId(userId: number) {
  return prisma.network.findMany({ where: { userId } })
}

export function findById(networkId: number) {
  return prisma.network.findFirst({ where: { id: networkId } })
}

export function deleteById(networkId: number) {
  return prisma.network.delete({ where: { id: networkId } })
}
