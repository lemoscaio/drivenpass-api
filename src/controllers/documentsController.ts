import { CreateDocumentData } from "@services/documentsService"
import { Request, Response } from "express"

import * as documentsService from "@services/documentsService"

export async function createDocument(req: Request, res: Response) {
  const {
    expirationDate,
    fullName,
    issuedBy,
    number,
    type,
  }: CreateDocumentData = req.body
  const { id: userId }: { id: number } = res.locals.user

  const createdDocument = await documentsService.createDocument({
    expirationDate,
    fullName,
    issuedBy,
    number,
    type,
    userId,
  })

  res.status(201).send(createdDocument)
}

export async function findAllDocuments(req: Request, res: Response) {
  const { id: userId }: { id: number } = res.locals.user
  console.log("aqui")

  const documents = await documentsService.findAllDocuments(userId)

  res.send(documents)
}

export async function findDocumentById(req: Request, res: Response) {
  const { id: userId }: { id: number } = res.locals.user
  const documentId = Number(req.params.id)

  const document = await documentsService.findDocumentById(userId, documentId)

  res.send(document)
}

export async function deleteDocumentById(req: Request, res: Response) {
  const { id: userId }: { id: number } = res.locals.user
  const documentId = Number(req.params.id)

  await documentsService.deleteDocumentById(userId, documentId)

  res.send(204)
}
