import { NextResponse } from "next/server";
import prisma from "@/config/prisma";

export async function GET() {
  try {
    const featuredOffers = await prisma.offer.findMany({
      where: { isFeatured: true },
      take: 4, // limit to 4
      include: {
        service: true,
        country: true,
      },
      orderBy: { datePosted: "desc" },
    });

    return NextResponse.json({ featuredOffers }, { status: 200 });
  } catch (error) {
    console.error("Error fetching featured offers:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
