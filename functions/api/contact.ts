interface Env {
  RESEND_API_KEY: string;
  CONTACT_EMAIL_TO?: string;
}

interface EventContext {
  request: Request;
  env: Env;
}

export const onRequestPost = async (context: EventContext) => {
  try {
    const { name, email, phone, company, message } = (await context.request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      company?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const apiKey = context.env.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Server misconfiguration: RESEND_API_KEY is not set in Cloudflare." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Use environment variable for recipient if configured
    const recipient = context.env.CONTACT_EMAIL_TO || "onboarding@resend.dev";

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // If domain is verified on Resend, you can change this back to:
        // "Waterledge Website <contact@waterledgeconsultancy.co.uk>"
        from: "Waterledge Website <contact@waterledgeconsultancy.co.uk>",
        to: [recipient],
        reply_to: email,
        subject: `New Enquiry from ${name}${company ? ` (${company})` : ""}`,
        html: `
          <h2>New Website Consultation Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <hr />
          <h3>Message / Project Scope:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        `,
      }),
    });

    const data = await resendResponse.json();

    if (!resendResponse.ok) {
      return new Response(JSON.stringify({ error: data }), {
        status: resendResponse.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, id: (data as any).id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || "Failed to process request" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};