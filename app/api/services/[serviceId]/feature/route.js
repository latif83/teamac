import { NextResponse } from "next/server";
import prisma from "@/config/prisma";

export async function PATCH(req, { params }) {
  const { serviceId } = params;
  const data = await req.json();

  try {
    // ✅ Optional: prevent more than 4 featured services
    if (data.isFeatured === true) {
      const count = await prisma.service.count({ where: { isFeatured: true } });
      if (count >= 4) {
        return NextResponse.json(
          { msg: "You can only feature up to 4 services." },
          { status: 400 }
        );
      }
    }

    const updatedService = await prisma.service.update({
      where: { id : serviceId },
      data,
    });

    return NextResponse.json(updatedService, { status: 200 });
  } catch (error) {
    console.error("Error updating service:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
