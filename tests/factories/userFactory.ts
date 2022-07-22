import { prisma } from "@config/database"
import { faker } from "@faker-js/faker"
import { encrypt } from "@utils/encryptFunctions"
import supertest from "supertest"

function createUserData(email = "test@email.com", passwordLength = 10) {
  return {
    email: email,
    password: faker.internet.password(passwordLength),
  }
}

async function createUser(data: { email: string; password: string }) {
  data.password = encrypt.bcrypt.encryptPassword(data.password)

  const createdUser = await prisma.user.create({ data })

  return createdUser
}

export const userFactory = {
  createUserData,
  createUser,
}
