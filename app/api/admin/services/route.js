import { NextResponse } from "next/server";
import prisma from "@/config/prisma";

export async function GET() {
  try {
    const services = await prisma.service.findMany();

    return NextResponse.json({ services }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { msg: "Internal server error!" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { name, description, image } = await req.json();

    // ✅ Validate required fields
    if (!name || !description) {
      return NextResponse.json(
        { msg: "Name and description are required." },
        { status: 400 }
      );
    }

    // ✅ Check for duplicates (case-insensitive)
    const existing = await prisma.service.findFirst({
      where: { name: { equals: name, mode: "insensitive" } },
    });

    if (existing) {
      return NextResponse.json(
        { message: "Service already exists." },
        { status: 409 }
      );
    }

    // ✅ Create service entry
    await prisma.service.create({
      data: {
        name,
        description,
        image, // this is now just the Cloudinary URL
      },
    });

    return NextResponse.json(
      { msg: "Service added successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding service:", error);
    return NextResponse.json(
      { message: "Internal Server Error." },
      { status: 500 }
    );
  }
}


export async function PUT(req) {
  try {
    const { id,name, description, image } = await req.json();

    // ✅ Check if the service exists
    const existingService = await prisma.service.findUnique({ where: { id } });
    if (!existingService) {
      return NextResponse.json(
        { msg: "Service not found." },
        { status: 404 }
      );
    }

    // ✅ Update only fields provided
    const updatedService = await prisma.service.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description && { description }),
        ...(image && { image }),
      },
    });

    return NextResponse.json(
      {
        msg: "Service updated successfully!",
        data: updatedService,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating service:", error);
    return NextResponse.json(
      { msg: "Internal server error." },
      { status: 500 }
    );
  }
}