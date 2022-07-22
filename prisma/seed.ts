import { PrismaClient } from "@prisma/client"
import { encrypt } from "../src/utils/encryptFunctions"
const prisma = new PrismaClient()

const main = async () => {
  const users = [
    {
      email: "caio2@gmail.com",
      password: encrypt.cryptr.encryptPassword("1233456"),
    },
  ]
  const credentials = [
    {
      userId: 1,
      label: "Driven Hub",
      url: "https://driven-hub.com",
      login: "caiooo",
      password: encrypt.cryptr.encryptPassword("1233456"),
    },
  ]
  const notes = [
    {
      userId: 1,
      title: "Notas do Caio",
      body: "segredos do Caio",
    },
  ]
  const cards = [
    {
      userId: 1,
      label: "Conta do Caio",
      number: "1111 1111 1111 1111",
      cardholder: "CAIO A LEMOS",
      securityCode: encrypt.cryptr.encryptPassword("123"),
      password: encrypt.cryptr.encryptPassword("12334"),
      expirationDate: "12/20",
      isVirtual: false,
      type: "debit" as const,
    },
  ]
  const networks = [
    {
      userId: 1,
      label: "casa do Caio",
      ssid: "CaioWifi",
      password: encrypt.cryptr.encryptPassword("123345"),
    },
  ]

  const documents = [
    {
      userId: 1,
      type: "driverLicense" as const,
      fullName: "Caio Lemos Lemos",
      number: encrypt.cryptr.encryptPassword("123456789"),
      expirationDate: "12/12/2024",
      issuedBy: "DETRAN/RJ",
    },
  ]

  await prisma.user.createMany({ data: users })
  await prisma.credential.createMany({ data: credentials })
  await prisma.note.createMany({ data: notes })
  await prisma.card.createMany({ data: cards })
  await prisma.network.createMany({ data: networks })
  await prisma.document.createMany({ data: documents })
}
main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
