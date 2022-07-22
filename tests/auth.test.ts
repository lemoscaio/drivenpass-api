import { prisma } from "@config/database"
import supertest from "supertest"
import App from "../src/app"
import { userFactory } from "./factories/userFactory"

describe("Auth test suite", () => {
  const userData = userFactory.createUserData()

  it("given a new user data, it should return 201 (as created)", async () => {
    const user = await supertest(App).post("/sign-up").send(userData)

    expect(user.status).toBe(201)
  })

  it("given a bad user data, it should return 422", async () => {
    const userBadData = { ...userData, password: "" }
    const user = await supertest(App).post("/sign-up").send(userBadData)

    expect(user.status).toBe(422)
  })

  it("given a right email and password, it should return 200", async () => {
    const user = await supertest(App).post("/sign-in").send(userData)

    expect(user.status).toBe(200)
  })

  it("given a wrong password, it should return 401", async () => {
    const userWithWrongPass = { ...userData, password: "wrongPassword" }
    const user = await supertest(App).post("/sign-in").send(userWithWrongPass)

    expect(user.status).toBe(401)
  })

  it("given a wrong email, it should return 401", async () => {
    const userWithWrongEmail = { ...userData, email: "wrongEmail@test.com" }
    const user = await supertest(App).post("/sign-in").send(userWithWrongEmail)

    expect(user.status).toBe(401)
  })
})

afterAll(async () => {
  await prisma.$disconnect()
})
