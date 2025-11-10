import { NextResponse } from "next/server";
import prisma from "@/config/prisma";

// ✅ Get a single offer by ID
export async function GET(request, { params }) {
  try {
    const { offerId:id } = await params;
    console.log({id})

    // Check if ID exists
    if (!id) {
      return NextResponse.json(
        { message: "Offer ID is required." },
        { status: 400 }
      );
    }

    // Fetch the offer (with related country & service)
    const offer = await prisma.offer.findUnique({
      where: { id },
      include: {
        service: true,
        country: true,
      },
    });

    if (!offer) {
      return NextResponse.json(
        { message: "Offer not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ offer }, { status: 200 });
  } catch (error) {
    console.error("Error fetching offer:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
