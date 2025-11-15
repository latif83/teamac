// app/api/services/route.ts
import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
        isFeatured: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: { offers: true },
        },
      },
    });

    return NextResponse.json({ services },{status:200});
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json({ msg: "Failed to fetch services" }, { status: 500 });
  }
}
