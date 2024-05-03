-- CreateTable
CREATE TABLE "CountItems" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nmId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CountItems_nmId_key" ON "CountItems"("nmId");
