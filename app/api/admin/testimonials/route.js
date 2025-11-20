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


export async function DELETE(req) {
  try {
    // const { searchParams } = new URL(req.url);
    // const id = searchParams.get("id");

    const {id} = await req.json();

    if (!id) {
      return NextResponse.json(
        { msg: "Feedback ID is required" },
        { status: 400 }
      );
    }

    // Check if feedback exists
    const exists = await prisma.feedback.findUnique({ where: { id } });
    if (!exists) {
      return NextResponse.json(
        { msg: "Feedback not found" },
        { status: 404 }
      );
    }

    // Delete
    await prisma.feedback.delete({ where: { id } });

    return NextResponse.json(
      { msg: "Feedback removed successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("DELETE feedback error:", error);
    return NextResponse.json(
      { msg: "Internal server error" },
      { status: 500 }
    );
  }
}