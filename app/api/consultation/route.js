import { NextResponse } from "next/server";
import prisma from "@/config/prisma";
import {
  sendAdminAppointmentNotification,
  sendAppointmentEmail,
} from "@/actions/sendEmailNotifications";

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
      message,
    } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !countryCode || !mode || !date) {
      return NextResponse.json(
        { msg: "Missing required fields." },
        { status: 400 }
      );
    }

    // Create consultation entry
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

    // --------------------------
    // 📩 SEND EMAIL NOTIFICATION
    // --------------------------
    await sendAppointmentEmail({
      name,
      email,
      mode,
      date,
      countryName,
      countryCode,
      message,
    });

    // Send admin email
    await sendAdminAppointmentNotification({
      name,
      email,
      phone,
      countryCode,
      countryName,
      mode,
      date,
      message,
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


export async function GET() {
  try {
    const consultations = await prisma.consultation.findMany({
      orderBy: { date: "asc" }
    });

    return NextResponse.json({ consultations });
  } catch (error) {
    console.error("Error fetching consultations:", error);
    return NextResponse.json(
      { msg: "Failed to fetch consultations" },
      { status: 500 }
    );
  }
}



export async function DELETE(req) {
  try {
    const { id } = await req.json();

    // ✅ Check if application exists
    const consultation = await prisma.consultation.findUnique({ where: { id } });
    if (!consultation) {
      return NextResponse.json(
        { msg: "Appointment not found." },
        { status: 404 }
      );
    }

    // ✅ Delete the consultation
    await prisma.consultation.delete({ where: { id } });

    return NextResponse.json(
      { msg: "Appointment deleted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting appoinment:", error);
    return NextResponse.json(
      { msg: "Internal server error." },
      { status: 500 }
    );
  }
}