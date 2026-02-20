/*
  Warnings:

  - Changed the type of `type` on the `Skill` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "SkillCategory" AS ENUM ('SOFT', 'HARD');

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "type",
ADD COLUMN     "type" "SkillCategory" NOT NULL;

-- DropEnum
DROP TYPE "SkillType";
