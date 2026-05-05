import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { DialogDescription } from "@radix-ui/react-dialog";

const handleGoogleLogin = async () => {
  signIn("google", {
    redirect: true,
    callbackUrl: "/dashboard",
  });
};

export default function LoginModal({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={`bg-neo-secondary text-neo-on-secondary font-mono-label text-[11px] sm:text-mono-label px-3 sm:px-8 py-2 sm:py-4 uppercase hover:bg-black transition-none active:bg-neo-secondary whitespace-nowrap flex items-center gap-4 justify-center ${fullWidth ? "w-full sm:w-auto text-sm sm:text-base px-8 py-5" : ""}`}>
          GETTING STARTED
          {fullWidth && <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>}
        </button>
      </DialogTrigger>
      <DialogContent className="border-heavy bg-white rounded-none p-6 sm:p-8 w-[calc(100vw-32px)] sm:w-full max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="font-display-lg text-2xl sm:text-4xl uppercase mb-2">Welcome to Knot</DialogTitle>
          <DialogDescription className="font-body-md text-sm sm:text-body-md text-on-surface-variant">
            Knot makes it effortless to create secure chat links and start
            conversations in seconds.
          </DialogDescription>
        </DialogHeader>
        <button
          onClick={handleGoogleLogin}
          className="border-standard flex items-center justify-center font-mono-label text-xs sm:text-mono-label px-6 sm:px-8 py-4 uppercase hover:bg-black hover:text-white transition-none w-full mt-6"
        >
          <Image
            src="/images/google.png"
            className="mr-4"
            width={20}
            height={20}
            alt="google"
          />
          CONTINUE WITH GOOGLE
        </button>
      </DialogContent>
    </Dialog>
  );
}
