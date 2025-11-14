import prisma from "@/config/prisma";
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const testimonials = await prisma.feedback.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ testimonials }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: "Internal server error" }, { status: 500 });
  }
}