import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    const senderSubject = company 
      ? `Website Inquiry: ${company} (${name})`
      : `Website Inquiry from ${name}`;

    const data = await resend.emails.send({
      from: 'Waterledge Website <website@waterledgeconsultancy.co.uk>',
      to: process.env.CONTACT_EMAIL as string,
      replyTo: email,
      subject: senderSubject,
      text: `
New inquiry from the Waterledge Consultancy website:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Service: ${service || 'General / Specified in Message'}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Resend Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}