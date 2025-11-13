/*
  Warnings:

  - You are about to drop the column `message` on the `Applications` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Applications" DROP COLUMN "message",
ADD COLUMN     "additionalInfo" TEXT;
