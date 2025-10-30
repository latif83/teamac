import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const countries = await req.json();

    if (!Array.isArray(countries) || countries.length === 0) {
      return NextResponse.json(
        { message: "Invalid input. Expected an array of countries." },
        { status: 400 }
      );
    }

    const added = [];
    const skipped = [];

    for (const country of countries) {
      const { name, code, flag } = country;

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

    return NextResponse.json({
      message: "Countries added successfully.",
      added,
      skipped,
    });
  } catch (e) {
    console.error("Error adding countries:", e);
    return NextResponse.json(
      { message: "Internal Server Error!" },
      { status: 500 }
    );
  }
}