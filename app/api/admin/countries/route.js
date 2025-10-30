import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const countries = await prisma.country.findMany();

    return NextResponse.json({ countries }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { msg: "Internal Server Error!" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const countries = await req.json();

    if (!Array.isArray(countries) || countries.length === 0) {
      return NextResponse.json(
        { msg: "Invalid input. Expected an array of countries." },
        { status: 400 }
      );
    }

    const added = [];
    const skipped = [];

    for (const country of countries) {
      const { label:name, value:code, flag } = country;

      if (!name || !code) {
        skipped.push({ name, reason: "Missing required fields" });
        continue;
      }

      // Check if already exists
      const exists = await prisma.country.findFirst({
        where: {
          OR: [{ name: name.trim() }, { code: code.trim() }],
        },
      });

      if (exists) {
        skipped.push({ name, reason: "Already exists" });
        continue;
      }

      // Create new record
      const newCountry = await prisma.country.create({
        data: {
          name: name.trim(),
          code: code.trim(),
          flag: flag || null,
        },
      });

      added.push(newCountry);
    }

    // console.log({
    //   message: "Countries added successfully.",
    //   added,
    //   skipped,
    // })

    return NextResponse.json({
      msg: "Countries added successfully.",
      added,
      skipped,
    });
  } catch (e) {
    console.error("Error adding countries:", e);
    return NextResponse.json(
      { msg: "Internal Server Error!" },
      { status: 500 }
    );
  }
}


// 🧹 DELETE COUNTRY
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { msg: "Country ID is required" },
        { status: 400 }
      );
    }

    // Check if the country exists
    const existingCountry = await prisma.country.findUnique({
      where: { id },
    });

    if (!existingCountry) {
      return NextResponse.json(
        { msg: "Country not found" },
        { status: 404 }
      );
    }

    // Delete the country
    await prisma.country.delete({
      where: { id },
    });

    return NextResponse.json(
      { msg: "Country deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting country:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}