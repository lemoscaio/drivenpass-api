import { Card, Credential, Network } from "@prisma/client"
import { encrypt } from "./encryptFunctions"

export function returnCredentialWithCleanPassword(credential: Credential) {
  const cleanPassword = encrypt.cryptr.decryptPassword(credential.password)

  return { ...credential, password: cleanPassword }
}

export function returnNetworkWithCleanPassword(network: Network) {
  const cleanPassword = encrypt.cryptr.decryptPassword(network.password)

  return { ...network, password: cleanPassword }
}

export function returnCardWithCleanPassword(card: Card) {
  const cleanPassword = encrypt.cryptr.decryptPassword(card.password)
  const cleanSecurityCode = encrypt.cryptr.decryptPassword(card.securityCode)

  return {
    ...card,
    password: cleanPassword,
    securityCode: cleanSecurityCode,
  }
}
