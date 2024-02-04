/*
  Warnings:

  - You are about to drop the `File` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Issue` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_issueId_fkey";

-- DropTable
DROP TABLE "File";

-- DropTable
DROP TABLE "Issue";

-- CreateTable
CREATE TABLE "Assoc" (
    "myId" INTEGER NOT NULL,
    "movie" INTEGER NOT NULL,
    "actor" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Assoc_myId_key" ON "Assoc"("myId");
