"use server"
import nodemailer from "nodemailer";


const mailer = nodemailer.createTransport({
  host: "smtp.zoho.eu",
  port: 465,          // SSL
  secure: true,       // true for port 465
  auth: {
    user: "info@teamacgloballtd.com",   // your Zoho Mail address
    pass: "P4H2HFguBmF4",     // ⚠️ MUST be an App Password
  },
});

// Platform information
const platformName = "TEAMAC GLOBAL LTD";
const baseUrl = "teamacgloballtd.com";
const senderEmail = "info@teamacgloballtd.com";
const platformLogo =
  "https://teamac.vercel.app/logo.png"; // Change to your real logo URL
const adminEmail = "teamacgloballtd@gmail.com"//"info@teamacgloballtd.com"; // CHANGE THIS to the real admin email

// ----------- UNIVERSAL EMAIL TEMPLATE WRAPPER ---------------
const wrapEmail = (content) => {
  return `
  <div style="width:100%; background:#f7f9fb; padding:40px 0; font-family:Arial, sans-serif;">
  
  <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:14px; box-shadow:0 2px 10px rgba(0,0,0,0.08); overflow:hidden;">

    <!-- HEADER -->
    <div style="padding:25px 20px; text-align:center; border-bottom:1px solid #e5e7eb;">
      <div style="display:flex; align-items:center; justify-content:center; gap:12px;">
        <img src="${platformLogo}" alt="${platformName}" style="width:60px; height:auto;" />

        <!-- Company Name -->
        <div style="text-transform:uppercase; line-height:1; margin-left:4px;">
          <div style="color:#00B4D8; font-weight:800; font-size:20px; margin:0; padding:0;">
            TEAMAC
          </div>
          <div style="font-size:12px; font-weight:600; color:#FF6F61; margin:0; padding:0;">
            GLOBAL LTD
          </div>
        </div>
      </div>
    </div>

    <!-- BODY CONTENT -->
    <div style="padding:30px 25px; color:#333333; font-size:15px; line-height:1.7;">
      ${content}
    </div>

    <!-- FOOTER -->
    <div style="background:#f1f5f9; padding:20px; text-align:center; color:#64748b; font-size:12px; line-height:1.5;">
      <div style="margin-bottom:4px;">
        © ${new Date().getFullYear()} ${platformName}. All rights reserved.
      </div>

      <a href="${baseUrl}" style="color:#00B4D8; text-decoration:none; font-weight:600;">
        Visit Website
      </a>
    </div>

  </div>

</div>
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

      <p>Thank you for booking a consultation with us.</p>

      <p><strong>Booking Details:</strong></p>

      <p>
        <strong>Date:</strong> ${formattedDate}<br>
        <strong>Mode:</strong> ${data.mode}<br>
        <strong>Country:</strong> ${data.countryName || data.countryCode}
      </p>

      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : "N/A"}

      <p>We look forward to speaking with you!</p>

      <p>Best regards.</p>
    `;

    await mailer.sendMail({
      from: `${platformName} <${senderEmail}>`,
      to: data.email,
      subject: `Your Appointment Has Been Booked – ${platformName}`,
      html: wrapEmail(bodyContent),
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
        <strong>Phone:</strong>${data.phone}<br>
        <strong>Country:</strong> ${data.countryName || "N/A"}<br>
      </p>

      <p><strong>Appointment Details:</strong></p>

      <p>
        <strong>Mode:</strong> ${data.mode}<br>
        <strong>Date:</strong> ${formattedDate}<br>
      </p>

      ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : "N/A"}

      <p>Please visit the site to follow up as soon as possible.</p>

      <p>Regards,<br>Automated Notification System – ${platformName}</p>
    `;

    await mailer.sendMail({
      from: `${platformName} <${senderEmail}>`,
      to: adminEmail,
      subject: `NEW Appointment Booked – ${data.name}`,
      html: wrapEmail(bodyContent),
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

      <p>Thank you for applying for this offer:</p>

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

      <p>Best regards.</p>
    `;

    await mailer.sendMail({
      from: `${platformName} <${senderEmail}>`,
      to: data.email,
      subject: `Application Received – ${data.offerTitle}`,
      html: wrapEmail(bodyContent),
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
      html: wrapEmail(bodyContent),
    });

    console.log(`Admin notified of application for: ${data.offerTitle}`);
  } catch (err) {
    console.error("Error sending admin email:", err);
    throw new Error("Failed to send admin notification");
  }
};

// ---- Send Custom Email Notification -----
export const sendCustomAdminEmail = async ({ to, subject, message }) => {
  try {
    const formattedMessage = message.replace(/\n/g, "<br/>");
    const bodyContent = `
      <p>Hello,</p>
      <p>${formattedMessage}</p>
    `;

    await mailer.sendMail({
      from: `${platformName} <${senderEmail}>`,
      to,
      subject,
      html: wrapEmail(bodyContent),
    });

    return { success: true };
  } catch (err) {
    console.error("Email error:", err);
    return { success: false, error: "Failed to send email" };
  }
};
