import { NextResponse } from "next/server";
import prisma from "@/config/prisma";

export async function GET() {
  try {
    // Run multiple Prisma count queries in parallel for performance
    const [offersCount, activeOffers, servicesCount,applicantsCount] = await Promise.all([
      prisma.offer.count(),
      prisma.offer.count({
        where: { validity: { gte: new Date() } }, // Example of 'active' offers
      }),
      prisma.service.count(),
      prisma.Applications.count()
      // You can add more like consultations or applicants later
    ]);

    return NextResponse.json(
      {
        stats: {
          offers: offersCount,
          activeOffers,
          services: servicesCount,
          consultations: 0, // Placeholder
          applicants: applicantsCount, // Placeholder
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { msg: "Internal Server Error" },
      { status: 500 }
    );
  }
}
