import { NextResponse } from "next/server";
import prisma from "@/config/prisma";
import {
  sendOfferAdminNotification,
  sendOfferApplicationEmail,
} from "@/actions/sendEmailNotifications";

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
    const {
      offerId,
      fullName,
      email,
      phone,
      additionalInfo,
      countryCode,
      countryName,
    } = await req.json();

    if (!offerId || !fullName || !email || !phone)
      return NextResponse.json(
        { msg: "Missing required fields" },
        { status: 400 }
      );

    const newApplication = await prisma.Applications.create({
      data: {
        offerId,
        fullName,
        email,
        phone,
        additionalInfo,
        countryCode,
        countryName,
      },
    });

    // Fetch the offer title for email purposes
    const offer = await prisma.offer.findUnique({ where: { id: offerId } });

    const emailData = {
      fullName,
      email,
      phone,
      countryName,
      additionalInfo,
      offerTitle: offer.title,
    };

    // Send emails
    await sendOfferApplicationEmail(emailData);
    await sendOfferAdminNotification(emailData);

    return NextResponse.json(
      { msg: "Application submitted successfully" },
      { status: 201 }
    );

  } catch (error) {
    console.error("Application Error:", error);
    return NextResponse.json({ msg: "Internal server error" }, { status: 500 });
  }
}
