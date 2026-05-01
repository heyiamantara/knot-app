import React from 'react';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="py-unit_2xl px-8 md:px-16 bg-black text-white border-b-4 border-white">
      <div className="text-center flex flex-col items-center">
        <h2 className="font-display-2xl text-[80px] leading-[80px] md:text-display-2xl uppercase mb-12 font-epilogue">
          START<br />CHATTING
        </h2>
        <Link href="/dashboard">
          <button className="bg-neo-secondary text-white font-mono-label text-xl px-16 py-8 uppercase hover:bg-white hover:text-black transition-none inline-flex items-center gap-4">
            GET STARTED NOW
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
          </button>
        </Link>
      </div>
    </section>
  );
}
