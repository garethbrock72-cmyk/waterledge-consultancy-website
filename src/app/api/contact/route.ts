import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the key from your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    const data = await resend.emails.send({
      // The 'from' address MUST use your verified domain
      from: 'Waterledge Website <website@waterledgeconsultancy.co.uk>',
      to: process.env.CONTACT_EMAIL as string,
      replyTo: email,
      subject: `Website Inquiry: ${service} - ${name}`,
      text: `
        New inquiry from the Waterledge Consultancy website.
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Service of Interest: ${service || 'General Inquiry'}
        
        Message:
        ${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Resend Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}