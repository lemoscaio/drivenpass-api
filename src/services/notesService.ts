import { Note } from "@prisma/client"

export type CreateNoteData = Omit<Note, "id" | "createdAt">

import * as notesRepository from "@repositories/notesRepository"

export async function createNote(data: CreateNoteData) {
  const foundNote = await notesRepository.findByLabelAndUserId(
    data.userId,
    data.title,
  )

  if (foundNote)
    throw {
      status: 409,
      message: "A note with this title already exists",
    }

  const createdNote = await notesRepository.createNote(data)

  return createdNote
}

export async function findAllNotes(userId: number) {
  const notes = await notesRepository.findAllByUserId(userId)

  return notes
}

export async function findNoteById(userId: number, noteId: number) {
  const note = await notesRepository.findById(noteId)

  if (!note) throw { status: 404, message: "Note not found" }
  if (note.userId !== userId)
    throw {
      status: 401,
      message: "This note does not belong to this user",
    }

  return note
}

export async function deleteNoteById(userId: number, noteId: number) {
  await findNoteById(userId, noteId)

  await notesRepository.deleteById(noteId)
}
