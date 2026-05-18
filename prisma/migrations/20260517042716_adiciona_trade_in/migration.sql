-- CreateTable
CREATE TABLE "TradeIn" (
    "id" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "valuation" DOUBLE PRECISION NOT NULL,
    "generatedLink" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TradeIn_pkey" PRIMARY KEY ("id")
);
