import { NextResponse } from "next/server";

export async function GET() {
  const uri = process.env.DATABASE_URI || "(not set)";
  return NextResponse.json({
    firstChars: uri.substring(0, 20),
    length: uri.length,
    startsWithMongo: uri.startsWith("mongodb"),
    startsWithQuote: uri.startsWith('"') || uri.startsWith("'"),
  });
}
