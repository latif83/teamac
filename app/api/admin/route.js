import { NextResponse } from "next/server";
import prisma from "@/config/prisma";
import { cookies } from "next/headers";
import { verifyToken } from "@/actions/actions";

export async function GET(req) {
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

        // Find admin
        const admin = await prisma.admin.findUnique({
            where: { id: user.userId },
        });

        if (!admin) {
            return NextResponse.json(
                { msg: "Admin not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { admin },
            { status: 200 }
        );

    } catch (e) {
        console.log(e)

        return NextResponse.json({ msg: "Internal server error!" }, { status: 500 })
    }

}

export async function PUT(req) {
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

        const body = await req.json();
        const { name, email, currentPassword, newPassword } = body;

        // Find admin
        const admin = await prisma.admin.findUnique({
            where: { id: user.userId },
        });

        if (!admin) {
            return NextResponse.json(
                { msg: "Admin not found" },
                { status: 404 }
            );
        }

        let updateData = {};

        // --------------------------
        // UPDATE PROFILE (name/email)
        // --------------------------
        if (name) updateData.name = name.trim();
        if (email) updateData.email = email.trim();

        // --------------------------
        // CHANGE PASSWORD (raw)
        // --------------------------
        if (newPassword) {
            if (!currentPassword) {
                return NextResponse.json(
                    { msg: "Current password is required" },
                    { status: 400 }
                );
            }

            if (currentPassword !== admin.password) {
                return NextResponse.json(
                    { msg: "Current password is incorrect" },
                    { status: 401 }
                );
            }

            updateData.password = newPassword; // raw password, no bcrypt
        }

        if (Object.keys(updateData).length === 0) {
            return NextResponse.json(
                { msg: "Nothing to update" },
                { status: 400 }
            );
        }

        const updatedAdmin = await prisma.admin.update({
            where: { id: user.userId },
            data: updateData,
        });

        return NextResponse.json(
            {
                msg: "Update successful",
                admin: {
                    id: updatedAdmin.id,
                    name: updatedAdmin.name,
                    email: updatedAdmin.email,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { msg: "Something went wrong" },
            { status: 500 }
        );
    }
}
