/*
  Warnings:

  - You are about to drop the column `facebook` on the `Network` table. All the data in the column will be lost.
  - You are about to drop the column `github` on the `Network` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `Network` table. All the data in the column will be lost.
  - You are about to drop the column `linkedin` on the `Network` table. All the data in the column will be lost.
  - You are about to drop the column `whatsapp` on the `Network` table. All the data in the column will be lost.
  - You are about to drop the column `youtube` on the `Network` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Network` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[link]` on the table `Network` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `link` to the `Network` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Network` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Network_facebook_key";

-- DropIndex
DROP INDEX "Network_github_key";

-- DropIndex
DROP INDEX "Network_instagram_key";

-- DropIndex
DROP INDEX "Network_linkedin_key";

-- DropIndex
DROP INDEX "Network_whatsapp_key";

-- DropIndex
DROP INDEX "Network_youtube_key";

-- AlterTable
ALTER TABLE "Network" DROP COLUMN "facebook",
DROP COLUMN "github",
DROP COLUMN "instagram",
DROP COLUMN "linkedin",
DROP COLUMN "whatsapp",
DROP COLUMN "youtube",
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Network_name_key" ON "Network"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Network_link_key" ON "Network"("link");
