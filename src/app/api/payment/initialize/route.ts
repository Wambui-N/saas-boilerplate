import { NextResponse } from "next/server";
import { initializePayment } from "@/lib/paystack";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const response = await initializePayment({
      email: body.email,
      amount: body.amount * 100, // Amount in kobo (multiply by 100 for NGN)
    });

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response?.data || "An error occurred" },
      { status: 500 }
    );
  }
}
