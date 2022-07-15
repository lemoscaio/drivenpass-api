import pg from "pg"
import dotenv from "dotenv"
dotenv.config()

const { Pool } = pg

const devConfig = { connectionString: process.env.DEV_DATABASE_URL }
const prodConfig = { connectionString: process.env.DATABASE_URL, ssl: {} }

if (process.env.MODE === "PROD") {
  prodConfig.ssl = {
    rejectUnauthorized: false,
  }
}

const db = new Pool(process.env.MODE === "PROD" ? prodConfig : devConfig)

export default db
