import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-unit_2xl px-6 sm:px-8 md:px-16 bg-neo-background">
      <div className="mb-8 sm:mb-unit_xl">
        <h2 className="font-mono-label text-[10px] sm:text-mono-label uppercase text-on-surface-variant">PROCESS_01</h2>
        <h3 className="font-headline-md text-xl sm:text-headline-md mt-2 sm:mt-4 uppercase">HOW IT OPERATES</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t-4 border-black pt-8 sm:pt-12">
        {[
          {
            num: "01",
            title: "Authentication",
            desc: 'Start by landing on the homepage and clicking "Getting Started" to authenticate securely using your Google account via Google OAuth.',
          },
          {
            num: "02",
            title: "Group Interaction",
            desc: "Access the dashboard to join existing groups or create your own by defining a title and an optional passcode for secure room entry.",
          },
          {
            num: "03",
            title: "Real-Time Chat",
            desc: "Enter the chat interface and send messages that appear instantly for all participants in the room, powered by robust Socket.io infrastructure.",
          },
          {
            num: "04",
            title: "Data Persistence",
            desc: "All messages are securely saved to a Postgres database, ensuring your conversation history remains intact even after leaving or refreshing the page.",
          },
        ].map((step) => (
          <div key={step.num} className="border-b sm:border-b-0 pb-8 sm:pb-0 last:border-b-0">
            <span className="text-5xl sm:text-6xl font-black text-black/10 block mb-4">{step.num}</span>
            <h4 className="font-headline-md text-base sm:text-headline-md mb-3 uppercase">{step.title}</h4>
            <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
