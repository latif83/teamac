import { NextResponse } from "next/server";
import prisma from "@/config/prisma";

export async function POST(req) {
  try {
    const {
      name,
      email,
      phone,
      countryCode,
      countryName,
      mode,
      date,
      message
    } = await req.json();

    console.log({
      name,
      email,
      phone,
      countryCode,
      countryName,
      mode,
      date,
      message
    });

    // ✅ Validate required fields
    if (!name || !email || !phone || !countryCode || !mode || !date) {
      return NextResponse.json(
        { msg: "Missing required fields." },
        { status: 400 }
      );
    }

    // ✅ Create the consultation entry
    const newConsultation = await prisma.consultation.create({
      data: {
        name,
        email,
        phone,
        countryCode,
        countryName,
        mode,
        date: new Date(date),
        message,
      },
    });

    return NextResponse.json(
      {
        msg: "Consultation booked successfully!",
        data: newConsultation,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error booking consultation:", error);
    return NextResponse.json(
      { msg: "Internal server error." },
      { status: 500 }
    );
  }
}
