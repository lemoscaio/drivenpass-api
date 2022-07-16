import { prisma } from "@config/database"
import { CreateUserData } from "@services/userService"

export function register({ email, password }: CreateUserData) {
  return prisma.user.create({ data: { email, password } })
}

export function findByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } })
}
