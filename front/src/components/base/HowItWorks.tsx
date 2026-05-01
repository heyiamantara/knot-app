import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-unit_2xl px-8 md:px-16 bg-neo-background">
      <div className="grid grid-cols-12 gap-gutter mb-unit_xl">
        <div className="col-span-12 md:col-span-4">
          <h2 className="font-mono-label text-mono-label uppercase text-on-surface-variant">PROCESS_01</h2>
          <h3 className="font-headline-md text-headline-md mt-4 uppercase">HOW IT OPERATES</h3>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-gutter border-t-4 border-black pt-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-3 lg:border-r border-black/10 lg:pr-8 mb-8 lg:mb-0">
          <span className="font-display-lg text-display-lg text-surface-container-highest block mb-8">01</span>
          <h4 className="font-headline-md text-headline-md mb-4 uppercase">Authentication</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Start by landing on the homepage and clicking "Getting Started" to authenticate securely using your Google account via Google OAuth.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 lg:border-r border-black/10 lg:px-8 mb-8 lg:mb-0">
          <span className="font-display-lg text-display-lg text-surface-container-highest block mb-8">02</span>
          <h4 className="font-headline-md text-headline-md mb-4 uppercase">Group Interaction</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Access the dashboard to join existing groups or create your own by defining a title and an optional passcode for secure room entry.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 lg:border-r border-black/10 lg:px-8 mb-8 md:mb-0">
          <span className="font-display-lg text-display-lg text-surface-container-highest block mb-8">03</span>
          <h4 className="font-headline-md text-headline-md mb-4 uppercase">Real-Time Chat</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Enter the chat interface and send messages that appear instantly for all participants in the room, powered by robust Socket.io infrastructure.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 lg:pl-8">
          <span className="font-display-lg text-display-lg text-surface-container-highest block mb-8">04</span>
          <h4 className="font-headline-md text-headline-md mb-4 uppercase">Data Persistence</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">
            All messages are securely saved to a Postgres database, ensuring your conversation history remains intact even after leaving or refreshing the page.
          </p>
        </div>
      </div>
    </section>
  );
}
