import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    test: 'API is working!'
  })
}