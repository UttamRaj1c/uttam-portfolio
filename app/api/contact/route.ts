import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const connection =
    await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "aks-test",
    });

    await connection.execute(
      `
      INSERT INTO contact_inquiry
      (name,email,subject,message)
      VALUES (?,?,?,?)
    `,
      [
        body.name,
        body.email,
        body.subject,
        body.message,
      ]
    );

    await connection.end();

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