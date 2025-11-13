-- CreateTable
CREATE TABLE "Applications" (
    "id" TEXT NOT NULL,
    "offerId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Applications_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Applications" ADD CONSTRAINT "Applications_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
