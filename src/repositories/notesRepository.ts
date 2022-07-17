import { prisma } from "@config/database"
import { CreateNoteData } from "@services/notesService"

export function findByLabelAndUserId(userId: number, title: string) {
  return prisma.note.findFirst({
    where: { userId, title: { equals: title, mode: "insensitive" } },
  })
}

export function createNote(data: CreateNoteData) {
  return prisma.note.create({ data })
}

export function findAllByUserId(userId: number) {
  return prisma.note.findMany({ where: { userId }, orderBy: { id: "desc" } })
}

export function findById(noteId: number) {
  return prisma.note.findFirst({ where: { id: noteId } })
}

export function deleteById(credentialId: number) {
  return prisma.note.delete({ where: { id: credentialId } })
}
