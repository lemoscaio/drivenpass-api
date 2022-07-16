import bcrypt from "bcrypt"
import Cryptr from "cryptr"

export const encrypt = {
  bcrypt: {
    encryptPassword: encryptPasswordWithBcrypt,
    decryptPasswordAndCompare: decryptPasswordAndCompareWithBcrypt,
  },
  cryptr: {
    encryptPassword: encryptPasswordWithCryptr,
    decryptPassword: decryptPasswordWithCryptr,
  },
}

function encryptPasswordWithBcrypt(password: string) {
  const hashSalt = 10

  const hashPassword = bcrypt.hashSync(password, hashSalt)

  return hashPassword
}

function decryptPasswordAndCompareWithBcrypt(
  password: string,
  hashPassword: string,
) {
  if (!password || !hashPassword) return false

  return bcrypt.compareSync(password, hashPassword)
}

function encryptPasswordWithCryptr(password: string) {
  const CRYPTR_KEY = process.env.CRYPTR_KEY
  const cryptr = new Cryptr(CRYPTR_KEY)

  return cryptr.encrypt(password)
}

function decryptPasswordWithCryptr(hashPassword: string) {
  const CRYPTR_KEY = process.env.CRYPTR_KEY
  const cryptr = new Cryptr(CRYPTR_KEY)

  return cryptr.decrypt(hashPassword)
}
