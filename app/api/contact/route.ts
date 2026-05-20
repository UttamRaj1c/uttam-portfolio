import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(
  req: Request
) {
  try {
    const body =
      await req.json();

    const {
      name,
      email,
      subject,
      message,
    } = body;

    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "All fields required",
        },
        { status: 400 }
      );
    }

    await db.query(
      `
      INSERT INTO contact_inquiry
      (
        name,
        email,
        subject,
        message
      )
      VALUES ($1, $2, $3, $4)
      `,
      [
        name,
        email,
        subject,
        message,
      ]
    );

    return NextResponse.json({
      success: true,
      message:
        "Message sent successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Database error",
      },
      { status: 500 }
    );
  }
}