-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('licenseDriver', 'idCard');

-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('credit', 'debit', 'creditAndDebit');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credentials" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "label" VARCHAR(254) NOT NULL,
    "url" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "credentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "body" VARCHAR(1000) NOT NULL,
    "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "label" VARCHAR(254) NOT NULL,
    "number" VARCHAR(254) NOT NULL,
    "cardholder" VARCHAR(254) NOT NULL,
    "securityCode" VARCHAR(3) NOT NULL,
    "expirationDate" VARCHAR(10) NOT NULL,
    "isVirtual" BOOLEAN NOT NULL DEFAULT false,
    "type" "CardType" NOT NULL,
    "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "networks" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "label" VARCHAR(254) NOT NULL,
    "ssid" VARCHAR(32) NOT NULL,
    "password" VARCHAR(254) NOT NULL,
    "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "networks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" "DocumentType" NOT NULL,
    "fullName" VARCHAR(254) NOT NULL,
    "number" VARCHAR(254) NOT NULL,
    "expirationDate" VARCHAR(10) NOT NULL,
    "issuedBy" VARCHAR(254) NOT NULL,
    "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_token_key" ON "sessions"("token");

-- CreateIndex
CREATE UNIQUE INDEX "credentials_userId_label_key" ON "credentials"("userId", "label");

-- CreateIndex
CREATE UNIQUE INDEX "notes_userId_title_key" ON "notes"("userId", "title");

-- CreateIndex
CREATE UNIQUE INDEX "cards_userId_label_key" ON "cards"("userId", "label");

-- CreateIndex
CREATE UNIQUE INDEX "networks_userId_label_key" ON "networks"("userId", "label");

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credentials" ADD CONSTRAINT "credentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "networks" ADD CONSTRAINT "networks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
