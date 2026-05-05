"use client";
import React from 'react';
import Link from 'next/link';
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import LoginModal from "../auth/LoginModal";

export default function CTABanner({ user }: { user: CustomUser | null }) {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 bg-black text-white border-b-4 border-white">
      <div className="text-center flex flex-col items-center">
        <h2
          className="font-extrabold uppercase mb-10 font-epilogue leading-none"
          style={{ fontSize: "clamp(48px, 10vw, 120px)" }}
        >
          START<br />CHATTING
        </h2>
        {user ? (
          <Link href="/dashboard" className="w-full sm:w-auto">
            <button className="bg-neo-secondary text-white font-mono-label text-sm sm:text-base px-8 sm:px-16 py-5 sm:py-8 uppercase hover:bg-white hover:text-black transition-none inline-flex items-center gap-4 w-full sm:w-auto justify-center">
              GET STARTED NOW
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
            </button>
          </Link>
        ) : (
          <LoginModal fullWidth />
        )}
      </div>
    </section>
  );
}
