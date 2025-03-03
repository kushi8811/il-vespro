import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, date, time, guests, specialRequest } =
      await req.json();

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

    // **Email to Restaurant Owner**
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Owner's email
      subject: "📅 New Table Booking Request - Il Vespro Firenze",
      text: `Dear Team,
    
    You have received a new table booking request:
    
    🔹 **Name: ${name}  
    🔹 **Email: ${email}  
    🔹 **Phone: ${phone}  
    🔹 **Date: ${date}  
    🔹 **Time: ${fixedTime}  
    🔹 **Guests: ${guests}  
    🔹 **Special Requests:** ${specialRequest || "None"}  
    
    
    
    Best,  
    Il Vespro Firenze`,
    };

    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Customer's email
      subject: "✅ Your Table Reservation is Confirmed - Il Vespro Firenze",
      text: `Dear ${name},
    
    We are pleased to confirm your table reservation at **Il Vespro Firenze**:
    
    📅 **Date:  ${date}  
    🕒 **Time:  ${fixedTime}  
    👥 **Guests:  ${guests}  
    
    📍 **Address:** Piazza Del Carmine 4/R, Florence  
    
    🍽️ We look forward to welcoming you and ensuring you have a delightful dining experience.  
    
    If you have any questions or need to modify your booking, feel free to contact us.  
    
    Best Regards,  
    **Il Vespro Firenze Team**  
    📞 [ 0557098883 ]  `,
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
