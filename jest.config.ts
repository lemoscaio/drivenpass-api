import { compilerOptions } from "./tsconfig.json"
import { pathsToModuleNameMapper } from "ts-jest"

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>",
  }),
}
