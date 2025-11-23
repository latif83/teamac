import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/actions/actions";
import prisma from "@/config/prisma";

export async function GET() {
  try {
    // Check if the user has a valid access token
    const hasCookies = await cookies().has("access-token");

    if (!hasCookies) {
      console.log("Please login to continue.");
      return NextResponse.json(
        {
          msg: "Please login to continue.",
        },
        { status: 400 }
      );
    }

    // Get the user details from the access token
    const cookie = await cookies().get("access-token");
    const verificationResult = await verifyToken(cookie?.value || "");

    if (!verificationResult.status) {
      return NextResponse.json(
        { msg: "Your session is expired, please login" },
        { status: 400 }
      );
    }

    const user = verificationResult.decodedToken;

    return NextResponse.json(
      {
        msg: "User info and subscription retrieved.",
        user
      },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    // Handle other errors if needed
    return NextResponse.json(
      { msg: "Internal server error" },
      { status: 500 }
    );
  }
}
