import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    // Remove the cookie by setting it to empty & expired
    await cookies().set("access-token", "", {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(0) // Expire immediately
    });

    return NextResponse.json(
      { msg: "Logout successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[LOGOUT_ERROR]", error);
    return NextResponse.json(
      { msg: "Something went wrong" },
      { status: 500 }
    );
  }
}
