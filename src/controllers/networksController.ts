import { CreateNetworkData } from "@services/networksService"
import { Request, Response } from "express"

import * as networksService from "@services/networksService"

export async function createNetwork(req: Request, res: Response) {
  const { label, password, ssid }: CreateNetworkData = req.body
  const { id: userId }: { id: number } = res.locals.user

  const createdNetwork = await networksService.createNetwork({
    label,
    password,
    ssid,
    userId,
  })

  res.status(201).send(createdNetwork)
}

export async function findAllNetworks(req: Request, res: Response) {
  const { id: userId }: { id: number } = res.locals.user

  const networks = await networksService.findAllNetworks(userId)

  res.send(networks)
}

export async function findNetworkById(req: Request, res: Response) {
  const { id: userId }: { id: number } = res.locals.user
  const networkId = Number(req.params.id)

  const network = await networksService.findNetworkById(userId, networkId)

  res.send(network)
}

export async function deleteNetworkById(req: Request, res: Response) {
  const { id: userId }: { id: number } = res.locals.user
  const networkId = Number(req.params.id)

  await networksService.deleteNetworkById(userId, networkId)

  res.send(204)
}
