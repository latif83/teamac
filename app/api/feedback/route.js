import prisma from '@/config/prisma';
import { NextResponse } from 'next/server';

/**
 * Handles POST requests to submit new feedback/testimonials.
 * This function uses the Next.js App Router pattern.
 */
export async function POST(req) {
    // Note: Disconnecting is not necessary in App Router as the handler is run in an edge or serverless function context,
    // and the Prisma client is usually managed by the environment.

    try {
        // 1. Parse request body using req.json()
        const { fullName, email, country, city, comment } = await req.json();

        // 2. Validate essential fields
        if (!fullName || !email || !country || !city || !comment) {
            return NextResponse.json(
                { msg: 'Missing required fields: Full Name, Email, Country, City, and Comment are required.' }, 
                { status: 400 }
            );
        }
        
        // Basic email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { msg: 'Invalid email format provided.' },
                { status: 400 }
            );
        }

        // 3. Create the new feedback entry in the database
        const newFeedback = await prisma.feedback.create({
            data: {
                fullName,
                email,
                country,
                city,
                comment
            },
        });

        // 4. Return success response using NextResponse.json
        return NextResponse.json(
            { 
                msg: 'Feedback submitted successfully!',
                feedbackId: newFeedback.id 
            },
            { status: 201 }
        );

    } catch (error) {
        // Log the error for internal review
        console.error('Error submitting feedback:', error);
        
        // Return a generic server error response
        return NextResponse.json(
            { msg: 'Internal Server Error. Could not process submission.' },
            { status: 500 }
        );
    }
}

export async function GET() {
  try {
    const feedbacks = await prisma.feedback.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ feedbacks }, { status: 200 });
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
