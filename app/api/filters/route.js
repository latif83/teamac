import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [countries, services] = await Promise.all([
      prisma.country.findMany({
        orderBy: { name: "asc" },
        select: {
          id: true,
          name: true,
          code: true,
          flag: true,
        },
      }),
      prisma.service.findMany({
        orderBy: { name: "asc" },
        select: {
          id: true,
          name: true,
          description: true,
          image: true,
          isFeatured: true,
        },
      }),
    ]);

    return NextResponse.json({
      success: true,
      data: { countries, services },
    },{status:200});
  } catch (error) {
    console.error("Filter Fetch Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error fetching filters" },
      { status: 500 }
    );
  }
}
