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
    callbackUrl: "/",
  });
};

export default function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-neo-secondary text-neo-on-secondary font-mono-label text-mono-label px-8 py-4 uppercase hover:bg-black transition-none active:bg-neo-secondary">
          GETTING STARTED
        </button>
      </DialogTrigger>
      <DialogContent className="border-heavy bg-white rounded-none p-8">
        <DialogHeader>
          <DialogTitle className="font-display-lg text-4xl uppercase mb-2">Welcome to Knot</DialogTitle>
          <DialogDescription className="font-body-md text-on-surface-variant">
            Knot makes it effortless to create secure chat links and start
            conversations in seconds.
          </DialogDescription>
        </DialogHeader>
        <button 
          onClick={handleGoogleLogin}
          className="border-standard flex items-center justify-center font-mono-label text-mono-label px-8 py-4 uppercase hover:bg-black hover:text-white transition-none w-full mt-6"
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
