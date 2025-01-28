-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "concluded" BOOLEAN NOT NULL
);
