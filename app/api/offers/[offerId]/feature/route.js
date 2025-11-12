// /app/api/offers/[id]/feature/route.js
import { NextResponse } from "next/server";
import prisma from "@/config/prisma";

export async function PATCH(req, { params }) {
  const { offerId } = await params;

  const { isFeatured } = await req.json();

  try {
    // Allow only max 4 featured offers
    if (isFeatured) {
      const count = await prisma.offer.count({ where: { isFeatured: true } });
      if (count >= 4) {
        return NextResponse.json(
          { msg: "Maximum of 4 featured offers allowed." },
          { status: 400 }
        );
      }
    }

    await prisma.offer.update({
      where: { id:offerId },
      data: { isFeatured }
    });

    return NextResponse.json(
      { msg: "Feature Added Successfully;" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating featured status:", error);
    return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
  }
}
