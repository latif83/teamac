import { NextResponse } from "next/server";
import prisma from "@/config/prisma";

export async function POST(req) {
  try {
    const {
      title,
      description,
      serviceId,
      countryId,
      priceLabel,
      priceDescription,
      thumbnail,
      city,
      validity,
      requirements
    } = await req.json();

    // ✅ Validate required fields
    if (
      !title ||
      !description ||
      !serviceId ||
      !countryId ||
      !city ||
      !validity
    ) {
      return NextResponse.json(
        { msg: "Missing required fields." },
        { status: 400 }
      );
    }

    // ✅ Check if service and country exist before linking
    const [service, country] = await Promise.all([
      prisma.service.findUnique({ where: { id: serviceId } }),
      prisma.country.findUnique({ where: { id: countryId } }),
    ]);

    if (!service || !country) {
      return NextResponse.json(
        { message: "Invalid service or country ID." },
        { status: 400 }
      );
    }

    // ✅ Create the offer
    const newOffer = await prisma.offer.create({
      data: {
        title,
        description,
        serviceId,
        countryId,
        priceLabel,
        priceDescription,
        thumbnail,
        city,
        requirements,
        validity: new Date(validity),
      },
      include: {
        service: true,
        country: true,
      },
    });

    return NextResponse.json(
      { message: "Offer created successfully!", data: newOffer },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating offer:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
