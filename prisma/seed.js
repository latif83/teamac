// prisma/seed.js
import prisma from "@/config/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = "admin@example.com";
  const password = "admin123"; // plain text
  const hashedPassword = await bcrypt.hash(password, 10);

  const existing = await prismaConfig.admin.findUnique({ where: { email } });
  if (existing) {
    console.log("Admin already exists.");
    return;
  }

  await prisma.admin.create({
    data: {
      name: "Super Admin",
      email,
      password: hashedPassword,
    },
  });

  console.log("✅ Admin created successfully!");
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
