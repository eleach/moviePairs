-- CreateTable
CREATE TABLE "actors" (
    "id" SERIAL NOT NULL,
    "myId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "actors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "actors_myId_key" ON "actors"("myId");

-- CreateIndex
CREATE UNIQUE INDEX "actors_name_key" ON "actors"("name");
