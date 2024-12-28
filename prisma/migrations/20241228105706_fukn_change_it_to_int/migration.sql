/*
  Warnings:

  - Changed the type of `length` on the `Blog` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "length",
ADD COLUMN     "length" INTEGER NOT NULL;
