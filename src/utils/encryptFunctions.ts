import bcrypt from "bcrypt"

export const encrypt = { encryptPassword, decryptPasswordAndCompare }

export function encryptPassword(password: string) {
  const hashSalt = 10

  const hashPassword = bcrypt.hashSync(password, hashSalt)

  return hashPassword
}

export function decryptPasswordAndCompare(
  password: string,
  hashPassword: string,
) {
  if (!password || !hashPassword) return false

  return bcrypt.compareSync(password, hashPassword)
}
