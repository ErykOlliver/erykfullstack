
-- AlterTable
ALTER TABLE "TradeIn" DROP COLUMN "createAt",
DROP COLUMN "updateAt",
ADD COLUMN     "clientContact" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deliveryDeadline" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "entryAmount" DOUBLE PRECISION,
ADD COLUMN     "features" TEXT[],
ADD COLUMN     "niche" TEXT,
ADD COLUMN     "paymentConditions" TEXT,
ADD COLUMN     "projectName" TEXT,
ADD COLUMN     "quoteNumber" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "validUntil" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "TradeIn_quoteNumber_key" ON "TradeIn"("quoteNumber");