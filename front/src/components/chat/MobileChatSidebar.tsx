"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function MobileChatSidebar({
  users,
}: {
  users: Array<GroupChatUserType> | [];
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 border-standard border-black hover:bg-black hover:text-white transition-none focus:outline-none focus:ring-0">
          <HamburgerMenuIcon className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-neo-background p-6 rounded-none border-r-4 border-black w-[80vw] sm:w-[400px]">
        <SheetHeader className="mb-8">
          <SheetTitle className="font-headline-md text-3xl uppercase text-left border-b-4 border-black pb-4">USERS</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 overflow-y-auto max-h-[80vh]">
          {users.length > 0 &&
            users.map((item, index) => (
              <div key={index} className="bg-white border-standard border-black p-4 hover:bg-black hover:text-white transition-none group cursor-pointer">
                <p className="font-mono-label text-sm uppercase break-words">{item.name}</p>
                <p className="font-mono-label text-[10px] uppercase text-surface-tint mt-2 group-hover:text-surface-variant">
                  JOINED: {new Date(item.created_at).toDateString()}
                </p>
              </div>
            ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

