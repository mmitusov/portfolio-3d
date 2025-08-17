// Tell Next.js this is static-only
// Disable the email API in static export mode (for Github Pages)
// Enable back when hosting on platform with server support
export const dynamic = "force-static";
export const revalidate = false;

// Optional: console.log instead of real logic
// (won’t actually run on GitHub Pages anyway)
export const GET = async () => {
  console.log("API route was called — but static export ignores it.");
  return new Response(
    JSON.stringify({ message: "Static export mode — no server APIs" }),
    { headers: { "Content-Type": "application/json" } }
  );
};


// import { NextRequest, NextResponse } from "next/server";

// export const GET = async () => {
//   return NextResponse.json({
//     test: 'API is working!'
//   })
// }