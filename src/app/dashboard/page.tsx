"use client";

import { useState } from "react";

export default function Dashboard() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    try {
      const response = await fetch("/api/payment/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, amount }),
      });

      const data = await response.json();
      if (data.status) {
        window.location.href = data.data.authorization_url; // Redirect to Paystack payment page
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Payment initialization failed:", error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}
