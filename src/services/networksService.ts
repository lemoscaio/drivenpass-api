import { Network } from "@prisma/client"

import * as networksRepository from "@repositories/networksRepository"
import { encrypt } from "@utils/encryptFunctions"
import { returnNetworkWithCleanPassword } from "@utils/formatData"

export type CreateNetworkData = Omit<Network, "id" | "createdAt">

export async function createNetwork(data: CreateNetworkData) {
  const hashPassword = encrypt.cryptr.encryptPassword(data.password)
  console.log(data)
  data.password = hashPassword
  console.log(data)

  const foundNetwork = await networksRepository.findByLabelAndUserId(
    data.userId,
    data.label,
  )
  console.log("🚀 ~ foundNetwork", foundNetwork)

  if (foundNetwork)
    throw {
      status: 409,
      message: "A network with this label already exists",
    }

  const createdNetwork = await networksRepository.createNetwork(data)

  createdNetwork.password = data.password

  return createdNetwork
}

export async function findAllNetworks(userId: number) {
  const networks = await networksRepository.findAllByUserId(userId)

  const passwordCleanNetworks = networks.map(returnNetworkWithCleanPassword)

  return passwordCleanNetworks
}

export async function findNetworkById(userId: number, networkId: number) {
  const network = await networksRepository.findById(networkId)

  if (!network) throw { status: 404, message: "Network not found" }
  if (network.userId !== userId)
    throw {
      status: 401,
      message: "This network does not belong to this user",
    }

  const passwordCleanNetwork = returnNetworkWithCleanPassword(network)

  return passwordCleanNetwork
}

export async function deleteNetworkById(userId: number, networkId: number) {
  await findNetworkById(userId, networkId)

  await networksRepository.deleteById(networkId)
}
