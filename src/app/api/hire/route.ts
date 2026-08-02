import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["amolak.saund@gmail.com"],

      subject: "New Hire Request",

      html: `
        <h2>New Hire Request</h2>

        <p><strong>Name:</strong> ${body.name}</p>

        <p><strong>Email:</strong> ${body.email}</p>

        <p><strong>Company:</strong> ${body.company}</p>

        <p><strong>Country:</strong> ${body.country}</p>

        <p><strong>Role:</strong> ${body.role}</p>

        <p><strong>Project:</strong> ${body.projectType}</p>

        <p><strong>Budget:</strong> ${body.budget}</p>

        <p><strong>Timeline:</strong> ${body.timeline}</p>

        <p><strong>Description:</strong></p>

        <p>${body.description}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}