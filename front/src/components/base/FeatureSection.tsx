import React from "react";

const features = [
  {
    color: "bg-black",
    title: "Google OAuth Security",
    desc: "Standardized, frictionless authentication. Gain instant, secure access to the platform without managing another set of credentials.",
  },
  {
    color: "bg-black",
    title: "Protected Chat Rooms",
    desc: "Create dedicated channels with optional cryptographic passcodes, ensuring only authorized personnel can enter your communication space.",
  },
  {
    color: "bg-neo-secondary",
    title: "Real-Time Connectivity",
    desc: "Powered by Socket.io, experience instantaneous bidirectional data flow. See messages the exact millisecond they are transmitted.",
  },
  {
    color: "bg-neo-secondary",
    title: "Persistent Storage",
    desc: "A robust Postgres database backend guarantees that your entire conversation history is permanently archived and instantly retrievable.",
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="py-12 sm:py-unit_2xl px-6 sm:px-8 md:px-16 bg-white border-y-4 border-black">
      <h2 className="font-mono-label text-[10px] sm:text-mono-label uppercase text-on-surface-variant mb-8 sm:mb-unit_xl">
        SYSTEM_FEATURES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
        {features.map((f) => (
          <div key={f.title} className="border-t-2 border-black/10 pt-6">
            <div className={`w-6 h-6 sm:w-8 sm:h-8 ${f.color} mb-4`}></div>
            <h3 className="font-headline-md text-base sm:text-headline-md mb-3 uppercase">{f.title}</h3>
            <p className="font-body-lg text-sm sm:text-body-lg text-on-surface-variant">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
