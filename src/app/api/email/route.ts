// Disable the email API in static export mode (for Github Pages)
// Enable back when hosting on platform with server support
export const dynamic = "force-static";
export const revalidate = false;

export async function POST() {
  console.log("API disabled in static export mode");
  return new Response(
    JSON.stringify({ error: "Email API is disabled in static export mode" }),
    { status: 404, headers: { "Content-Type": "application/json" } }
  );
}


// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export const POST = async (req: NextRequest) => {
//   const { name, email, message } = await req.json();

//   // When you use service: 'Gmail', Nodemailer automatically sets the host, port, and secure settings for Gmail. 
//   // This is a shorthand that makes it easier to set up for common services without needing to specify all the details.
//   // But if you want to have more control and clarity over the SMTP configuration, you can explicitly specifying "host", "port", and "secure" yourself.
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     host: "smtp.gmail.com",
//     port: 465, // true for 465, false for other ports
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_AUTH_USER,
//       pass: process.env.EMAIL_AUTH_PASS,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_AUTH_USER,
//     to: process.env.EMAIL_RECIPIENT_ADDRESS,
//     subject: `My portfolio email`,
//     text: `
//       Name: ${name}
//       Email: ${email}
//       Message: ${message}
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
//   }
// }
