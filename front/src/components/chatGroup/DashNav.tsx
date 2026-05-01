"use client";
import React from "react";
import ProfileMenu from "../auth/ProfileMenu";
import Link from "next/link";

export default function DashNav({
  image,
  name,
}: {
  image?: string;
  name: string;
}) {
  return (
    <nav className="sticky top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 h-24 bg-white border-b-4 border-black">
      <h1 className="text-3xl font-black tracking-tighter text-black uppercase font-display-lg">
        <Link href="/">DASHBOARD</Link>
      </h1>
      <div className="flex items-center space-x-2 md:space-x-6 text-gray-700">
        <ProfileMenu name={name} image={image} />
      </div>
    </nav>
  );
}

