import {
  createNetwork,
  deleteNetworkById,
  findAllNetworks,
  findNetworkById,
} from "@controllers/networksController"
import { validateSchema } from "@middlewares/validateSchema"
import { validateSession } from "@middlewares/validateSession"
import { validateToken } from "@middlewares/validateToken"
import { newNetworkSchema } from "@schemas/newNetworkSchema"

import { Router } from "express"

export const networksRouter = Router()

networksRouter.post(
  "/",
  validateSchema(newNetworkSchema),
  validateToken,
  validateSession,
  createNetwork,
)
networksRouter.get("/", validateToken, validateSession, findAllNetworks)
networksRouter.get("/:id", validateToken, validateSession, findNetworkById)
networksRouter.delete("/:id", validateToken, validateSession, deleteNetworkById)
