"use server"
import nodemailer from "nodemailer";

const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "latifm8360@gmail.com",
    pass: "fekt bnmq ovja pvhj", // APP PASSWORD!
  },
});

// Platform information
const platformName = "TEAMAC GLOBAL LTD";
const baseUrl = "https://teamac.vercel.app";
const senderEmail = "latifm8360@gmail.com";
const platformLogo =
  "https://teamac.vercel.app/logo.png"; // Change to your real logo URL
  const adminEmail = "anonylatif@gmail.com"//"info@teamacgloballtd.com"; // CHANGE THIS to the real admin email

// ----------- UNIVERSAL EMAIL TEMPLATE WRAPPER ---------------
const wrapEmail = (title, content) => {
  return `
  <table width="100%" cellspacing="0" cellpadding="0" style="background:#f5f5f5; padding:30px;">
    <tr>
      <td align="center">
        <table width="600" cellspacing="0" cellpadding="0" style="background:#ffffff; border-radius:10px; overflow:hidden;">
          
          <!-- HEADER -->
          <tr>
            <td style="background:#1a202c; padding:25px; text-align:center;">
              <img src="${platformLogo}" alt="${platformName}" style="width:120px; margin-bottom:10px;" />
              <h2 style="color:#ffffff; font-family:Arial; margin:0;">${title}</h2>
            </td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td style="padding:30px; font-family:Arial; color:#333; font-size:15px; line-height:1.6;">
              ${content}
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#f0f0f0; padding:15px; text-align:center; font-family:Arial; font-size:12px; color:#777;">
              <p style="margin:0;">© ${new Date().getFullYear()} ${platformName}. All rights reserved.</p>
              <p style="margin:0;">
                <a href="${baseUrl}" style="color:#4c51bf; text-decoration:none;">Visit Website</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
  `;
};

// ----------------- APPOINTMENT EMAIL ------------------------
export const sendAppointmentEmail = async (data) => {
  try {
    // Extract readable date + time
    const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formattedTime = new Date(data.date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const bodyContent = `
      <p>Hello <strong>${data.name}</strong>,</p>

      <p>Thank you for booking a consultation/appointment with us.</p>

      <p><strong>Appointment Details:</strong></p>

      <p>
        <strong>Date:</strong> ${formattedDate}<br>
        <strong>Time:</strong> ${formattedTime}<br>
        <strong>Mode:</strong> ${data.mode}<br>
        <strong>Country:</strong> ${data.countryName || data.countryCode}
      </p>

      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}

      <p>We look forward to speaking with you!</p>

      <p>Best regards,<br>The ${platformName} Team</p>
    `;

    await mailer.sendMail({
      from: `${platformName} <${senderEmail}>`,
      to: data.email,
      subject: `Your Appointment Has Been Booked – ${platformName}`,
      html: wrapEmail("Appointment Confirmed", bodyContent),
    });

    console.log(`Appointment email sent to ${data.email}`);
  } catch (err) {
    console.error("Email send error:", err);
    throw new Error("Failed to send appointment email");
  }
};

export const sendAdminAppointmentNotification = async (data) => {
  try {
    const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formattedTime = new Date(data.date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const bodyContent = `
      <p>Hello Admin,</p>

      <p>A new consultation/appointment has been booked on <strong>${platformName}</strong>.</p>

      <p><strong>Client Details:</strong></p>

      <p>
        <strong>Name:</strong> ${data.name}<br>
        <strong>Email:</strong> ${data.email}<br>
        <strong>Phone:</strong> ${data.countryCode} ${data.phone}<br>
        <strong>Country:</strong> ${data.countryName || "N/A"}<br>
      </p>

      <p><strong>Appointment Details:</strong></p>

      <p>
        <strong>Mode:</strong> ${data.mode}<br>
        <strong>Date:</strong> ${formattedDate}<br>
        <strong>Time:</strong> ${formattedTime}<br>
      </p>

      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}

      <p>Please follow up as soon as possible.</p>

      <p>Regards,<br>Automated Notification System – ${platformName}</p>
    `;

    await mailer.sendMail({
      from: `${platformName} <${senderEmail}>`,
      to: adminEmail,
      subject: `NEW Appointment Booked – ${data.name}`,
      html: wrapEmail("New Appointment Notification", bodyContent),
    });

    console.log(`Admin notified about appointment from ${data.name}`);

  } catch (err) {
    console.error("Admin email send error:", err);
    throw new Error("Failed to send admin notification");
  }
};


// ----------------- OFFER APPLICATION EMAIL ------------------------
export const sendOfferApplicationEmail = async (data) => {
  try {
    const bodyContent = `
      <p>Hello <strong>${data.fullName || data.email}</strong>,</p>

      <p>Thank you for applying for the following offer:</p>

      <p><strong>${data.offerTitle}</strong></p>

      <p>Your application details:</p>
      <ul>
        <li>Email: ${data.email}</li>
        <li>Phone: ${data.phone}</li>
        <li>Country: ${data.countryName || "N/A"}</li>
        <li>Additional Info: ${data.additionalInfo || "N/A"}</li>
      </ul>

      <p>Our team will review your application and get back to you soon.</p>

      <p>You can view or track other offers here:</p>
      <a href="${baseUrl}/offers" style="color:#4c51bf;">View Offers</a>

      <p>Best regards,<br>The ${platformName} Team</p>
    `;

    await mailer.sendMail({
      from: `${platformName} <${senderEmail}>`,
      to: data.email,
      subject: `Application Received – ${data.offerTitle}`,
      html: wrapEmail("Application Received", bodyContent),
    });

    console.log(`Application email sent to applicant: ${data.email}`);
  } catch (err) {
    console.error("Error sending applicant email:", err);
    throw new Error("Failed to send application email");
  }
};


export const sendOfferAdminNotification = async (data) => {
  try {
    const bodyContent = `
      <p>Hello Admin,</p>

      <p>A new application has been submitted for an offer on your platform:</p>

      <p><strong>${data.offerTitle}</strong></p>

      <p>Applicant Details:</p>
      <ul>
        <li>Name: ${data.fullName}</li>
        <li>Email: ${data.email}</li>
        <li>Phone: ${data.phone}</li>
        <li>Country: ${data.countryName || "N/A"}</li>
        <li>Additional Info: ${data.additionalInfo || "N/A"}</li>
      </ul>

      <p>Check the admin dashboard to review the application.</p>
      <a href="${baseUrl}/admin/offers" style="color:#4c51bf;">Go to Dashboard</a>

      <p>Regards,<br>${platformName} Notifications</p>
    `;

    await mailer.sendMail({
      from: `${platformName} <${senderEmail}>`,
      to: adminEmail, // admin email
      subject: `New Offer Application – ${data.offerTitle}`,
      html: wrapEmail("New Offer Application", bodyContent),
    });

    console.log(`Admin notified of application for: ${data.offerTitle}`);
  } catch (err) {
    console.error("Error sending admin email:", err);
    throw new Error("Failed to send admin notification");
  }
};

