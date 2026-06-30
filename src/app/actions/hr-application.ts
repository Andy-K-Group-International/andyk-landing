"use server";

export async function submitHrApplication(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY not set");
    return { success: false, error: "Email service not configured. Please contact us directly." };
  }

  const role     = (formData.get("role")        as string) || "Personal Assistant & Sales Support";
  const fullName = (formData.get("fullName")     as string) || "";
  const email    = (formData.get("email")        as string) || "";
  const phone    = (formData.get("phone")        as string) || "";
  const location = (formData.get("location")     as string) || "";
  const langs    = (formData.get("languages")    as string) || "";
  const linkedin = (formData.get("linkedin")     as string) || "";
  const exp      = (formData.get("experience")   as string) || "";
  const avail    = (formData.get("availability") as string) || "";
  const rate     = (formData.get("hourlyRate")   as string) || "";
  const message  = (formData.get("message")      as string) || "";

  if (!fullName || !email) {
    return { success: false, error: "Full name and email are required." };
  }

  // Build email body
  const text = `New contractor application received via andykgroup.com/work-with-us

Role: ${role}
─────────────────────────────
Name:         ${fullName}
Email:        ${email}
Phone:        ${phone || "N/A"}
Location:     ${location || "N/A"}
Languages:    ${langs || "N/A"}
LinkedIn:     ${linkedin || "N/A"}
Experience:   ${exp || "N/A"}
Availability: ${avail || "N/A"}
Hourly Rate:  ${rate || "N/A"}

Message:
${message || "N/A"}

─────────────────────────────
Submitted: ${new Date().toISOString()}
Andy'K Group HR System`;

  // Handle CV attachment
  const attachments: { filename: string; content: string }[] = [];
  const cvFile = formData.get("cv") as File | null;
  if (cvFile && cvFile.size > 0) {
    try {
      const buffer = await cvFile.arrayBuffer();
      const base64 = Buffer.from(buffer).toString("base64");
      attachments.push({ filename: cvFile.name, content: base64 });
    } catch (err) {
      console.error("CV attachment encoding failed:", err);
      // Continue without attachment
    }
  }

  const payload: Record<string, unknown> = {
    from: "Andy'K Group HR <info@andykgroup.com>",
    to: ["ceo@andykgroup.com"],
    reply_to: email,
    subject: `New Contractor Application: ${role} — ${fullName}`,
    text,
  };
  if (attachments.length > 0) payload.attachments = attachments;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Resend API error:", errorText);
    return { success: false, error: "Failed to send application. Please try again or contact us directly." };
  }

  return { success: true };
}
