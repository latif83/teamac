import { NextResponse } from "next/server";
import prisma from "@/config/prisma";

export async function GET() {
  try {
    const featuredFeedbacks = await prisma.feedback.findMany({
      //   where: { isFeatured: true },
      take: 4, // limit to 4
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ featuredFeedbacks }, { status: 200 });
  } catch (error) {
    console.error("Error fetching featured feedbacks:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
