import axios from "axios";

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY!; // Ensure this is defined in your .env file

/**
 * Initializes a Paystack payment session.
 * @param data - The payment data to send to Paystack.
 * @returns The response data from Paystack.
 */
export const initializePayment = async (data: {
  email: string;
  amount: number;
  currency?: string; // Default is NGN (Naira)
}) => {
  const response = await axios.post(
    "https://api.paystack.co/transaction/initialize",
    data,
    {
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

/**
 * Verifies a Paystack transaction.
 * @param reference - The reference of the transaction to verify.
 * @returns The response data from Paystack.
 */
export const verifyPayment = async (reference: string) => {
  const response = await axios.get(
    `https://api.paystack.co/transaction/verify/${reference}`,
    {
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      },
    }
  );
  return response.data;
};
