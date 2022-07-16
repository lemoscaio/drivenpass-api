import { Credential } from "@prisma/client"
import { encrypt } from "./encryptFunctions"

export function returnCleanPassword(credential: Credential) {
  const cleanPassword = encrypt.cryptr.decryptPassword(credential.password)

  return { ...credential, password: cleanPassword }
}
