/*
  Warnings:

  - The values [licenseDriver] on the enum `DocumentType` will be removed. If these variants are still used in the database, this will fail.
  - Made the column `createdAt` on table `cards` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `credentials` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `documents` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `networks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `notes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `sessions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DocumentType_new" AS ENUM ('driverLicense', 'idCard');
ALTER TABLE "documents" ALTER COLUMN "type" TYPE "DocumentType_new" USING ("type"::text::"DocumentType_new");
ALTER TYPE "DocumentType" RENAME TO "DocumentType_old";
ALTER TYPE "DocumentType_new" RENAME TO "DocumentType";
DROP TYPE "DocumentType_old";
COMMIT;

-- AlterTable
ALTER TABLE "cards" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "credentials" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "documents" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "networks" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "notes" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "sessions" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "createdAt" SET NOT NULL;
