import express, { Request, Response } from "express"
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv"

import { router } from "@routers/index"
import { handleError } from "@middlewares/errorhandler"

dotenv.config()

const App = express()

App.use(express.json())
App.use(cors())

App.get("/", (req: Request, res: Response) => res.send("Online"))
App.use(router)

App.use(handleError)

export default App
