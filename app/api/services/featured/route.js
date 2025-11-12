import { NextResponse } from "next/server";
import prisma from "@/config/prisma";

export async function GET() {
  try {
    const featuredServices = await prisma.service.findMany({
      where: { isFeatured: true },
      take: 4, // limit to 4
      orderBy: { datePosted: "desc" },
    });

    return NextResponse.json({ featuredServices }, { status: 200 });
  } catch (error) {
    console.error("Error fetching featured services:", error);
    return NextResponse.json(
      { msg: "Internal server error." },
      { status: 500 }
    );
  }
}
