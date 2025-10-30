/*
  Warnings:

  - Changed the type of `image` on the `Service` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "image",
ADD COLUMN     "image" JSONB NOT NULL;
