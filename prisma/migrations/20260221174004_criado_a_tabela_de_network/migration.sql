-- CreateTable
CREATE TABLE "Network" (
    "id" SERIAL NOT NULL,
    "instagram" TEXT,
    "facebook" TEXT,
    "youtube" TEXT,
    "github" TEXT,
    "linkedin" TEXT,
    "whatsapp" TEXT,

    CONSTRAINT "Network_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Network_id_key" ON "Network"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Network_instagram_key" ON "Network"("instagram");

-- CreateIndex
CREATE UNIQUE INDEX "Network_facebook_key" ON "Network"("facebook");

-- CreateIndex
CREATE UNIQUE INDEX "Network_youtube_key" ON "Network"("youtube");

-- CreateIndex
CREATE UNIQUE INDEX "Network_github_key" ON "Network"("github");

-- CreateIndex
CREATE UNIQUE INDEX "Network_linkedin_key" ON "Network"("linkedin");

-- CreateIndex
CREATE UNIQUE INDEX "Network_whatsapp_key" ON "Network"("whatsapp");
