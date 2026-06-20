import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// Google Sheets Webhook URL (Google Apps Script Web App)
// This is a public Google Apps Script URL that accepts POST requests and writes to a Google Sheet
const GOOGLE_SHEETS_WEBHOOK_URL =
  process.env.GOOGLE_SHEETS_WEBHOOK_URL || "";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: firstName, lastName, email, message" },
        { status: 400 }
      );
    }

    // Save to local SQLite database as backup
    await db.contactSubmission.create({
      data: {
        firstName,
        lastName,
        email,
        subject: subject || "General Inquiry",
        message,
      },
    });

    // Also try to send to Google Sheets if webhook URL is configured
    if (GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            subject: subject || "General Inquiry",
            message,
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch (sheetsError) {
        console.error("Failed to send to Google Sheets:", sheetsError);
        // Don't fail the request if Sheets fails — we still have the local backup
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received. We will get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve all submissions (admin use)
export async function GET() {
  try {
    const submissions = await db.contactSubmission.findMany({
      orderBy: { createdAt: "desc" },
      take: 100,
    });
    return NextResponse.json({ success: true, data: submissions });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}
