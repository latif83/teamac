-- AlterTable
ALTER TABLE "Offer" ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false;
