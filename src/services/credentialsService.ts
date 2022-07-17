import { Credential } from "@prisma/client"

import * as credentialsRepository from "@repositories/credentialsRepository"
import { encrypt } from "@utils/encryptFunctions"
import { returnCredentialWithCleanPassword } from "@utils/formatData"

export type CreateCredentialData = Omit<Credential, "id" | "createdAt">

export async function createCredential(data: CreateCredentialData) {
  const hashPassword = encrypt.cryptr.encryptPassword(data.password)
  data.password = hashPassword

  const foundCredential = await credentialsRepository.findByLabelAndUserId(
    data.userId,
    data.label,
  )

  if (foundCredential)
    throw {
      status: 409,
      message: "A credential with this label already exists",
    }

  const createdCredential = await credentialsRepository.createCredential(data)

  createdCredential.password = data.password

  return createdCredential
}

export async function findAllCredentials(userId: number) {
  const credentials = await credentialsRepository.findAllByUserId(userId)

  const passwordCleanCredentials = credentials.map(
    returnCredentialWithCleanPassword,
  )

  return passwordCleanCredentials
}

export async function findCredentialById(userId: number, credentialId: number) {
  const credential = await credentialsRepository.findById(credentialId)

  if (!credential) throw { status: 404, message: "Credential not found" }
  if (credential.userId !== userId)
    throw {
      status: 401,
      message: "This credential does not belong to this user",
    }

  const passwordCleanCredential = returnCredentialWithCleanPassword(credential)

  return passwordCleanCredential
}

export async function deleteCredentialById(
  userId: number,
  credentialId: number,
) {
  await findCredentialById(userId, credentialId)

  await credentialsRepository.deleteById(credentialId)
}
