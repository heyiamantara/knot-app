"use client";
import React from "react";
import Link from "next/link";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import LoginModal from "../auth/LoginModal";

export default function HeroSection({ user }: { user: CustomUser | null }) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-16 pt-24 bg-white">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4 border-l-4 border-black pl-6 pt-2">
          <span className="font-mono-label text-[10px] sm:text-mono-label uppercase tracking-widest text-neo-secondary block mb-4">SYSTEM_READY</span>
          <p className="font-body-lg text-sm sm:text-body-lg text-on-surface">
            Experience instantaneous communication stripped of all excess. Pure, unadulterated dialogue delivered through an uncompromising geometric architecture.
          </p>
        </div>
        <div className="col-span-12 md:col-span-8 flex flex-col justify-end mt-8 md:mt-0">
          <h1
            className="font-extrabold uppercase text-black mb-8 font-epilogue tracking-[-0.04em] leading-none"
            style={{ fontSize: "clamp(52px, 10vw, 120px)" }}
          >
            PURE<br />SIGNAL<br />NO NOISE
          </h1>
        </div>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between border-t-4 border-black pt-8 gap-6 sm:gap-0">
        <div className="flex gap-8 flex-wrap">
          <div className="flex flex-col">
            <span className="font-mono-label text-[10px] text-on-surface-variant uppercase">TECHNOLOGY</span>
            <span className="font-bold uppercase text-lg sm:text-2xl">SOCKET.IO</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono-label text-[10px] text-on-surface-variant uppercase">DATABASE</span>
            <span className="font-bold uppercase text-lg sm:text-2xl">POSTGRES</span>
          </div>
        </div>
        {user ? (
          <Link href="/dashboard" className="w-full sm:w-auto">
            <button className="bg-neo-secondary text-white font-mono-label text-sm sm:text-base px-8 py-5 uppercase hover:bg-black transition-none flex items-center gap-4 w-full sm:w-auto justify-center">
              GETTING STARTED
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
            </button>
          </Link>
        ) : (
          <div className="w-full sm:w-auto">
            <LoginModal fullWidth />
          </div>
        )}
      </div>
    </section>
  );
}
