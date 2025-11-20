import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {
    const { id, featured } = await req.json();

    if (!id || typeof featured !== "boolean") {
      return NextResponse.json(
        { msg: "Invalid payload" },
        { status: 400 }
      );
    }

    // Make sure feedback exists
    const feedback = await prisma.feedback.findUnique({ where: { id } });
    if (!feedback) {
      return NextResponse.json(
        { msg: "Feedback not found" },
        { status: 404 }
      );
    }

    // If trying to set featured = true → check limit
    if (featured === true) {
      const countFeatured = await prisma.feedback.count({
        where: { featured: true },
      });

      // If already at max (4), block request unless the item itself is already featured
      if (countFeatured >= 4 && !feedback.featured) {
        return NextResponse.json(
          { msg: "Maximum of 4 featured feedbacks allowed." },
          { status: 403 }
        );
      }
    }

    // Update feature status
    const updated = await prisma.feedback.update({
      where: { id },
      data: { featured },
    });

    return NextResponse.json(
      { msg: "Feedback updated", data: updated },
      { status: 200 }
    );

  } catch (error) {
    console.error("PATCH feedback feature error:", error);
    return NextResponse.json(
      { msg: "Internal server error" },
      { status: 500 }
    );
  }
}
