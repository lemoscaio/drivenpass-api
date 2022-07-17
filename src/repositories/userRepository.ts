import { prisma } from "@config/database"
import { CreateUserData } from "@services/userService"

export function register(data: CreateUserData) {
  return prisma.user.create({ data })
}

export function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  })
}
