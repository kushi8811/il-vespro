import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, date, time, guests, specialRequest } =
      await req.json();

    console.log("REcieved email ", email);

    const fixedTime = new Date(`2000-01-01T${time}`).toLocaleTimeString(
      "it-IT",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );

    // **Set up transporter for sending emails**
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or use SMTP from your provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Owner's email
      subject: "📅 New Table Booking Request - Il Vespro Firenze",
      html: `Dear Team,<br><br>
    
      You have received a new table booking request:<br><br>
    
      🔹 <strong>Name:</strong> ${name} <br>
      🔹 <strong>Email:</strong> ${email} <br>
      🔹 <strong>Phone:</strong> ${phone} <br>
      🔹 <strong>Date:</strong> ${date} <br>
      🔹 <strong>Time:</strong> ${fixedTime} <br>
      🔹 <strong>Guests:</strong> ${guests} <br>
      🔹 <strong>Special Requests:</strong> ${specialRequest || "None"} <br><br>
    
      Best, <br>
      <strong>Il Vespro Firenze</strong>
      `,
    };

    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Customer's email
      subject: "✅ Your Table Reservation is Confirmed - Il Vespro Firenze",
      html: `Dear ${name},<br><br>
    
      We are pleased to confirm your table reservation at <strong>Il Vespro Firenze</strong>:<br><br>
    
      📅 <strong>Date:</strong> ${date} <br>
      🕒 <strong>Time:</strong> ${fixedTime} <br>
      👥 <strong>Guests:</strong> ${guests} <br>
     
    
      📍 <strong>Address:</strong> Piazza Del Carmine 4/R, Florence <br><br>
    
      🍽️ We look forward to welcoming you and ensuring you have a delightful dining experience.<br><br>
    
      If you have any questions or need to modify your booking, feel free to contact us.<br><br>
    
      Best Regards, <br>
      <strong>Il Vespro Firenze Team</strong><br>
      📞 <strong>+39 0557098883</strong>
      `,
    };

    // **Send Emails**
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
}
