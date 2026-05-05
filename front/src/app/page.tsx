import React from "react";
import Navbar from "@/components/base/Navbar";
import HeroSection from "@/components/base/HeroSection";
import HowItWorks from "@/components/base/HowItWorks";
import FeatureSection from "@/components/base/FeatureSection";
import CTABanner from "@/components/base/CTABanner";
import Footer from "@/components/base/Footer";
import { getServerSession } from "next-auth";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";

export default async function LandingPage() {
  const session: CustomSession | null = await getServerSession(authOptions);
  
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar user={session?.user || null} />
      
      <main className="flex-1">
        <HeroSection user={session?.user || null} />
        <HowItWorks />
        <FeatureSection />
        <CTABanner user={session?.user || null} />
      </main>
      
      <Footer />
    </div>
  );
}
