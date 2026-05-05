"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useParams } from "next/navigation";
import axios from "axios";
import { CHAT_GROUP_USERS } from "@/lib/apiAuthRoutes";
import { toast } from "sonner";

export default function ChatUserDialog({
  open,
  setOpen,
  group,
  onJoined,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  group: GroupChatType;
  onJoined?: () => void;
}) {
  const params = useParams();
  const [state, setState] = useState({
    name: "",
    passcode: "",
  });

  const TAB_FLAG = `tab_auth_${params["id"]}`;
  const ROOM_KEY = params["id"] as string;

  useEffect(() => {
    const tabFlag = sessionStorage.getItem(TAB_FLAG);
    if (tabFlag) { setOpen(false); return; }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!state.name.trim()) {
      toast.error("Please enter your name!");
      return;
    }

    if (group.passcode != state.passcode) {
      toast.error("Please enter correct passcode!");
      return;
    }

    try {
      const { data } = await axios.post(CHAT_GROUP_USERS, {
        name: state.name,
        group_id: ROOM_KEY,
      });
      localStorage.setItem(ROOM_KEY, JSON.stringify(data?.data));
      sessionStorage.setItem(TAB_FLAG, "1");
      setOpen(false);
      onJoined?.();
    } catch (error) {
      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent className="border-heavy bg-white rounded-none p-5 sm:p-8" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="font-display-lg text-2xl sm:text-4xl uppercase mb-2">ACCESS REQUIRED</DialogTitle>
          <DialogDescription className="font-body-md text-on-surface-variant uppercase">
            ADD YOUR NAME AND PASSCODE TO JOIN THE THREAD
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mt-4">
            <input
              placeholder="ENTER YOUR NAME"
              value={state.name}
              className="w-full border-standard border-black p-4 font-mono-label text-sm outline-none focus:border-heavy focus:ring-0 uppercase bg-surface-bright"
              onChange={(e) => setState({ ...state, name: e.target.value })}
            />
          </div>
          <div className="mt-4">
            <input
              placeholder="ENTER PASSCODE"
              value={state.passcode}
              className="w-full border-standard border-black p-4 font-mono-label text-sm outline-none focus:border-heavy focus:ring-0 uppercase bg-surface-bright"
              onChange={(e) => setState({ ...state, passcode: e.target.value })}
            />
          </div>
          <div className="mt-8">
            <button className="bg-neo-secondary text-white font-mono-label text-mono-label px-8 py-4 uppercase hover:bg-black transition-none w-full border-standard border-black">
              SUBMIT
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
