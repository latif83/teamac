/*
  Warnings:

  - Added the required column `updatedAt` to the `Applications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Applications" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Pending',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
