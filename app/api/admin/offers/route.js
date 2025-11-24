import { NextResponse } from "next/server";
import prisma from "@/config/prisma";

export async function GET() {
  try {
    const offers = await prisma.offer.findMany({
      include: {
        service: true,
        country: true,
        Applications : true
      },
      orderBy: {
        datePosted: "desc", // optional: newest first
      },
    });

    return NextResponse.json({ offers }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { msg: "Internal server error!" },
      { status: 500 }
    );
  }
}

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
      requirements,
    } = await req.json();

    // ✅ Validate required fields
    if (
      !title ||
      !description ||
      !serviceId ||
      !countryId
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
        validity: validity ? new Date(validity) : null,
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


export async function PUT(req) {
  try {
    
    const {
      id,
      title,
      description,
      serviceId,
      countryId,
      priceLabel,
      priceDescription,
      thumbnail,
      city,
      validity,
      requirements,
    } = await req.json();

    console.log({validity})

    // ✅ Validate
    if (!id)
      return NextResponse.json({ msg: "Offer ID is required." }, { status: 400 });

    // ✅ Check that the offer exists
    const existingOffer = await prisma.offer.findUnique({
      where: { id },
    });

    if (!existingOffer) {
      return NextResponse.json({ msg: "Offer not found." }, { status: 404 });
    }

    // ✅ Optional validation for service/country if provided
    if (serviceId) {
      const service = await prisma.service.findUnique({ where: { id: serviceId } });
      if (!service)
        return NextResponse.json({ msg: "Invalid service ID." }, { status: 400 });
    }

    if (countryId) {
      const country = await prisma.country.findUnique({ where: { id: countryId } });
      if (!country)
        return NextResponse.json({ msg: "Invalid country ID." }, { status: 400 });
    }

    // ✅ Update the offer
    const updatedOffer = await prisma.offer.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(description && { description }),
        ...(serviceId && { serviceId }),
        ...(countryId && { countryId }),
        ...(priceLabel && { priceLabel }),
        ...(priceDescription && { priceDescription }),
        ...(thumbnail && { thumbnail }),
        ...(city && { city }),
        validity: validity ? new Date(validity) : null,
        ...(requirements && { requirements }),
      },
      include: {
        service: true,
        country: true,
        Applications : true
      },
    });

    return NextResponse.json(
      { msg: "Offer updated successfully!", data: updatedOffer },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating offer:", error);
    return NextResponse.json(
      { msg: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    // ✅ Check if offer exists
    const offer = await prisma.offer.findUnique({ where: { id } });
    if (!offer) {
      return NextResponse.json(
        { msg: "Offer not found." },
        { status: 404 }
      );
    }

    // ✅ Delete the offer
    await prisma.offer.delete({ where: { id } });

    return NextResponse.json(
      { msg: "Offer deleted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting offer:", error);
    return NextResponse.json(
      { msg: "Internal server error." },
      { status: 500 }
    );
  }
}