-- CreateEnum
CREATE TYPE "AdminRoles" AS ENUM ('owner', 'attendant');

-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "role" "AdminRoles" NOT NULL DEFAULT 'attendant';
