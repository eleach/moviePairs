/*
  Warnings:

  - You are about to drop the `Assoc` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Assoc";

-- CreateTable
CREATE TABLE "assoc" (
    "myId" INTEGER NOT NULL,
    "movie" INTEGER NOT NULL,
    "actor" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "assoc_myId_key" ON "assoc"("myId");
