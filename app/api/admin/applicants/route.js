import { NextResponse } from "next/server";
import prisma from "@/config/prisma";

export async function PATCH(req) {
  try {
    
    const { id,status } = await req.json();

    // Validation
    const validStatuses = ["Pending", "Reviewed", "Completed", "Rejected"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { msg: "Invalid status provided." },
        { status: 400 }
      );
    }

    // Check if application exists
    const application = await prisma.applications.findUnique({
      where: { id },
    });

    if (!application) {
      return NextResponse.json(
        { msg: "Application not found." },
        { status: 404 }
      );
    }

    // Update status
    const updated = await prisma.applications.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(
      { msg: "Status updated successfully.", data: updated },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating application status:", error);
    return NextResponse.json(
      { msg: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    // ✅ Check if application exists
    const application = await prisma.applications.findUnique({ where: { id } });
    if (!application) {
      return NextResponse.json(
        { msg: "Application not found." },
        { status: 404 }
      );
    }

    // ✅ Delete the application
    await prisma.applications.delete({ where: { id } });

    return NextResponse.json(
      { msg: "Application deleted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting application:", error);
    return NextResponse.json(
      { msg: "Internal server error." },
      { status: 500 }
    );
  }
}