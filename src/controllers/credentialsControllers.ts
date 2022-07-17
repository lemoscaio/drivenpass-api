import { CreateCredentialData } from "@services/credentialsService"
import { Request, Response } from "express"

import * as credentialsService from "@services/credentialsService"

export async function createCredential(req: Request, res: Response) {
  const { url, label, login, password }: CreateCredentialData = req.body
  const { id: userId }: { id: number } = res.locals.user

  const createdCredential = await credentialsService.createCredential({
    url,
    label,
    login,
    password,
    userId,
  })

  createdCredential.password = password

  res.status(201).send(createdCredential)
}

export async function findAllCredentials(req: Request, res: Response) {
  const { id: userId }: { id: number } = res.locals.user

  const credentials = await credentialsService.findAllCredentials(userId)

  res.send(credentials)
}

export async function findCredentialById(req: Request, res: Response) {
  const { id: userId }: { id: number } = res.locals.user
  const credentialId = Number(req.params.id)

  const credential = await credentialsService.findCredentialById(
    userId,
    credentialId,
  )

  res.send(credential)
}

export async function deleteCredentialById(req: Request, res: Response) {
  const { id: userId }: { id: number } = res.locals.user
  const credentialId = Number(req.params.id)

  await credentialsService.deleteCredentialById(userId, credentialId)

  res.send(204)
}
