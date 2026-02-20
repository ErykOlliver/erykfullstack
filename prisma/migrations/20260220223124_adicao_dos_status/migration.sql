/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('EMANDAMENTO', 'FINALIZADO');

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'EMANDAMENTO';

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");
