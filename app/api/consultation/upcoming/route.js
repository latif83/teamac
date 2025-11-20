import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const upcoming = await prisma.consultation.findMany({
      where: {
        date: {
          gte: new Date() // only future appointments
        }
      },
      orderBy: {
        date: "asc"
      },
      take: 2
    });

    return NextResponse.json({ upcoming });
  } catch (error) {
    console.error("Error fetching upcoming consultations:", error);
    return NextResponse.json(
      { msg: "Failed to fetch upcoming consultations" },
      { status: 500 }
    );
  }
}
