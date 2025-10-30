/*
  Warnings:

  - You are about to drop the column `status` on the `Offer` table. All the data in the column will be lost.
  - Added the required column `city` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `validity` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail` to the `Offer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "status",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "validity" TIMESTAMP(3) NOT NULL,
DROP COLUMN "thumbnail",
ADD COLUMN     "thumbnail" JSONB NOT NULL;
