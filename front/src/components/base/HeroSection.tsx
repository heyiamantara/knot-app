import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-24 bg-white">
      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-12 md:col-span-4 border-l-4 border-black pl-6 pt-2">
          <span className="font-mono-label text-mono-label uppercase tracking-widest text-neo-secondary block mb-4">SYSTEM_READY</span>
          <p className="font-body-lg text-body-lg text-on-surface">
            Experience instantaneous communication stripped of all excess. Pure, unadulterated dialogue delivered through an uncompromising geometric architecture.
          </p>
        </div>
        <div className="col-span-12 md:col-span-8 flex flex-col justify-end mt-12 md:mt-0">
          <h1 className="font-display-2xl text-[80px] md:text-[120px] leading-[80px] md:leading-[110px] tracking-[-0.04em] font-extrabold uppercase text-black mb-12 font-epilogue">
            PURE<br />SIGNAL<br />NO NOISE
          </h1>
        </div>
      </div>
      <div className="mt-unit_xl flex flex-col md:flex-row md:items-center justify-between border-t-4 border-black pt-8 gap-8 md:gap-0">
        <div className="flex gap-16">
          <div className="flex flex-col">
            <span className="font-mono-label text-[10px] text-on-surface-variant uppercase">TECHNOLOGY</span>
            <span className="font-headline-md text-headline-md">SOCKET.IO</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono-label text-[10px] text-on-surface-variant uppercase">DATABASE</span>
            <span className="font-headline-md text-headline-md">POSTGRES</span>
          </div>
        </div>
        <Link href="/dashboard">
          <button className="bg-neo-secondary text-white font-mono-label text-xl px-12 py-6 uppercase hover:bg-black transition-none flex items-center gap-4 w-full md:w-auto justify-center">
            GETTING STARTED
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
          </button>
        </Link>
      </div>
    </section>
  );
}
