import { Document } from "@prisma/client"

export type CreateDocumentData = Omit<Document, "id" | "createdAt">

import * as documentsRepository from "@repositories/documentsRepository"

export async function createDocument(data: CreateDocumentData) {
  const foundDocument = await documentsRepository.findByNumberAndUserId(
    data.userId,
    data.number,
  )
  console.log("🚀 ~ foundDocument", foundDocument)

  if (foundDocument)
    throw {
      status: 409,
      message: "A document with this number already exists",
    }

  const createdDocument = await documentsRepository.createDocument(data)

  return createdDocument
}

export async function findAllDocuments(userId: number) {
  const documents = await documentsRepository.findAllByUserId(userId)

  return documents
}

export async function findDocumentById(userId: number, documentId: number) {
  const document = await documentsRepository.findById(documentId)

  if (!document) throw { status: 404, message: "Document not found" }
  if (document.userId !== userId)
    throw {
      status: 401,
      message: "This document does not belong to this user",
    }

  return document
}

export async function deleteDocumentById(userId: number, documentId: number) {
  await findDocumentById(userId, documentId)

  await documentsRepository.deleteById(documentId)
}
