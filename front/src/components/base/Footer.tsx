import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neo-background pt-unit_xl pb-8 px-8 md:px-16 border-t-4 border-black">
      <div className="grid grid-cols-12 gap-gutter mb-unit_xl">
        <div className="col-span-12 md:col-span-6">
          <div className="text-3xl font-black tracking-tighter text-black uppercase mb-8 font-display-lg">
            KNOT
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant md:w-1/2">
            Secure, real-time group communication. Redefining digital infrastructure through absolute typographic and geometric control.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-start md:justify-end gap-16 mt-12 md:mt-0">
          <div className="flex flex-col gap-4">
            <h5 className="font-mono-label text-mono-label text-on-surface-variant uppercase mb-2">Platform</h5>
            <Link href="#" className="font-mono-label text-mono-label text-black hover:text-neo-secondary transition-none">Chat Rooms</Link>
            <Link href="#" className="font-mono-label text-mono-label text-black hover:text-neo-secondary transition-none">Security</Link>
            <Link href="#" className="font-mono-label text-mono-label text-black hover:text-neo-secondary transition-none">Storage</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-mono-label text-mono-label text-on-surface-variant uppercase mb-2">Company</h5>
            <Link href="#" className="font-mono-label text-mono-label text-black hover:text-neo-secondary transition-none">About</Link>
            <Link href="#" className="font-mono-label text-mono-label text-black hover:text-neo-secondary transition-none">Careers</Link>
            <Link href="#" className="font-mono-label text-mono-label text-black hover:text-neo-secondary transition-none">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-black/10 pt-8 flex justify-between items-center">
        <span className="font-mono-label text-[10px] text-on-surface-variant uppercase tracking-widest">© {currentYear} KNOT SYSTEMS</span>
        <div className="flex gap-8">
          <Link href="#" className="font-mono-label text-[10px] text-on-surface-variant uppercase tracking-widest hover:text-black transition-none">TWITTER</Link>
          <Link href="#" className="font-mono-label text-[10px] text-on-surface-variant uppercase tracking-widest hover:text-black transition-none">GITHUB</Link>
        </div>
      </div>
    </footer>
  );
}
