// src/app/page.tsx
"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

const features = [
  "Easy Authentication Integration (OAuth with Google and GitHub)",
  "Full Supabase Integration (Database & Authentication)",
  "Payment Gateway Integration with Paystack",
  "Modern UI Components (Shadcn for UI)",
  "Performance Optimized with Next.js",
  "Built-in Analytics with Google Analytics, Posthog, and Mixpanel",
  "SEO-Ready for Better Search Engine Visibility"
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
          SaaS Boilerplate Africa
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Accelerate your SaaS product development with a robust, scalable, and 
          feature-rich starter template designed for African entrepreneurs and developers.
        </p>
        
        <div className="flex justify-center space-x-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Features List */}
          <div>
            <h2 className="text-3xl font-bold mb-6">What's Included</h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon className="mr-3 text-primary" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature Highlight Card */}
          <Card>
            <CardHeader>
              <CardTitle>Ready to Ship Faster</CardTitle>
              <CardDescription>
                Our boilerplate provides a solid foundation for your next big idea.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-muted-foreground">
                  Skip weeks of initial setup and focus on what matters most - 
                  building your unique product and serving your customers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Join hundreds of African entrepreneurs leveraging our SaaS boilerplate 
          to turn their ideas into reality.
        </p>
        <Button size="lg">Create Your Project</Button>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-muted-foreground">
          © 2024 SaaS Boilerplate Africa. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;