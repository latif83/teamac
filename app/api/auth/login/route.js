import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    console.log({ email, password })

    if (!email || !password) {
      return NextResponse.json(
        { msg: "Email and password are required." },
        { status: 400 }
      );
    }

    // Check if user exists
    const user = await prisma.Admin.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { msg: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Compare password
    const isMatch = password == user.password;

    if (!isMatch) {
      return NextResponse.json(
        { msg: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Create a JWT with the user's information
    const token = jwt.sign(
      { userId: user.id, email: user.email, name: user.name },
      "your-secret-key", // Replace with a secure secret key (keep it secret)
      { expiresIn: "2h" } // Token expiration time (e.g., 1 hour)
    );

    await cookies().set("access-token", token, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Enable for HTTPS in production
    });

    return NextResponse.json(
      {
        token,
        msg: "Login successful",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[LOGIN_POST]", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
