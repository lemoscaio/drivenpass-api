import { CreateNoteData } from "@services/notesService"
import { Request, Response } from "express"

import * as notesService from "@services/notesService"

export async function createNote(req: Request, res: Response) {
  const { title, body }: CreateNoteData = req.body
  const { id: userId }: { id: number } = res.locals.user

  const createdNote = await notesService.createNote({
    title,
    userId,
    body,
  })

  res.status(201).send(createdNote)
}

export async function findAllNotes(req: Request, res: Response) {
  const { id: userId }: { id: number } = res.locals.user

  const notes = await notesService.findAllNotes(userId)

  res.send(notes)
}

export async function findNoteById(req: Request, res: Response) {
  const { id: userId }: { id: number } = res.locals.user
  const noteId = Number(req.params.id)

  const note = await notesService.findNoteById(userId, noteId)

  res.send(note)
}

export async function deleteNoteById(req: Request, res: Response) {
  const { id: userId }: { id: number } = res.locals.user
  const noteId = Number(req.params.id)

  await notesService.deleteNoteById(userId, noteId)

  res.send(204)
}
