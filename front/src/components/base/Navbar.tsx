"use client";
import React from "react";
import Link from "next/link";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import LoginModal from "../auth/LoginModal";

export default function Navbar({ user }: { user: CustomUser | null }) {
  return (
    <nav className="sticky top-0 w-full z-50 flex justify-between items-center px-6 sm:px-8 md:px-16 h-16 sm:h-24 bg-white border-b-4 border-black">
      <div className="text-xl sm:text-3xl font-black tracking-tighter text-black uppercase font-display-lg">
        <Link href="/">KNOT</Link>
      </div>
      <div className="hidden md:flex gap-12 items-center">
        <Link href="#how-it-works" className="font-mono-label text-mono-label text-black opacity-80 hover:text-neo-secondary transition-none">HOW IT WORKS</Link>
        <Link href="#features" className="font-mono-label text-mono-label text-black opacity-80 hover:text-neo-secondary transition-none">FEATURES</Link>
      </div>
      <div className="flex items-center">
        {!user ? (
          <LoginModal />
        ) : (
          <Link href="/dashboard" className="bg-neo-secondary text-neo-on-secondary font-mono-label text-[11px] sm:text-mono-label px-4 sm:px-8 py-2 sm:py-4 uppercase hover:bg-black transition-none active:bg-neo-secondary">
            DASHBOARD
          </Link>
        )}
      </div>
    </nav>
  );
}
