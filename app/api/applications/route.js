import { NextResponse } from "next/server";
import prisma from "@/config/prisma";

export async function GET() {
  try {
    const applications = await prisma.Applications.findMany({
      include: {
        offer: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ applicants: applications }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { offerId, fullName, email, phone, additionalInfo, countryCode , countryName } =
      await req.json();

    if (!offerId || !fullName || !email || !phone)
      return NextResponse.json(
        { msg: "Missing required fields" },
        { status: 400 }
      );

    await prisma.Applications.create({
      data: { offerId, fullName, email, phone, additionalInfo,countryCode , countryName },
    });

    return NextResponse.json(
      { msg: "Application submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Application Error:", error);
    return NextResponse.json({ msg: "Internal server error" }, { status: 500 });
  }
}
