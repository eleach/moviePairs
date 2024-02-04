-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "myId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_myId_key" ON "movies"("myId");

-- CreateIndex
CREATE UNIQUE INDEX "movies_name_key" ON "movies"("name");
