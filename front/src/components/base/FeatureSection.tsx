import React from "react";

export default function FeatureSection() {
  return (
    <section id="features" className="py-unit_2xl px-8 md:px-16 bg-white border-y-4 border-black relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-surface-bright -z-10 border-l-4 border-black hidden md:block"></div>
      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-12 md:col-span-6 md:pr-8">
          <h2 className="font-mono-label text-mono-label uppercase text-on-surface-variant mb-unit_xl">SYSTEM_FEATURES</h2>
          <div className="space-y-16">
            <div>
              <div className="w-8 h-8 bg-black mb-6"></div>
              <h3 className="font-headline-md text-headline-md mb-4 uppercase">Google OAuth Security</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Standardized, frictionless authentication. Gain instant, secure access to the platform without managing another set of credentials.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 bg-black mb-6"></div>
              <h3 className="font-headline-md text-headline-md mb-4 uppercase">Protected Chat Rooms</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Create dedicated channels with optional cryptographic passcodes, ensuring only authorized personnel can enter your communication space.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 md:pl-16 pt-16 md:pt-0">
          <div className="space-y-16 mt-unit_xl md:mt-32">
            <div>
              <div className="w-8 h-8 bg-neo-secondary mb-6"></div>
              <h3 className="font-headline-md text-headline-md mb-4 uppercase">Real-Time Connectivity</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Powered by Socket.io, experience instantaneous bidirectional data flow. See messages the exact millisecond they are transmitted.
              </p>
            </div>
            <div>
              <div className="w-8 h-8 bg-neo-secondary mb-6"></div>
              <h3 className="font-headline-md text-headline-md mb-4 uppercase">Persistent Storage</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                A robust Postgres database backend guarantees that your entire conversation history is permanently archived and instantly retrievable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
