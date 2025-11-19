import prisma from "@/config/prisma";
import { NextResponse } from "next/server";


export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const serviceId = searchParams.get("service") || undefined;
    const countryId = searchParams.get("country") || undefined;
    const sort = searchParams.get("sort") || "newest";

    // Sorting logic
    const orderBy =
      sort === "oldest"
        ? { datePosted: "asc" }
        : { datePosted: "desc" }; // default: newest first

    // WHERE clause is built dynamically
    const where = {};

    if (serviceId) where.serviceId = serviceId;
    if (countryId) where.countryId = countryId;

    console.log({where})

    const offers = await prisma.offer.findMany({
      where,
      include: {
        service: true,
        country: true,
      },
      orderBy,
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
