import React, { Dispatch, SetStateAction, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { CHAT_GROUP } from "@/lib/apiAuthRoutes";
import { toast } from "sonner";
import { clearCache } from "@/actions/common";

export default function DeleteChatGroup({
  open,
  setOpen,
  groupId,
  token,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  groupId: string;
  token: string;
}) {
  const [loading, setLoading] = useState(false);
  const deleteChatGroup = async () => {
    setLoading(true);
    try {
      const { data } = await axios.delete(`${CHAT_GROUP}/${groupId}`, {
        headers: {
          Authorization: token,
        },
      });
      if (data?.message) {
        clearCache("dashboard");
        toast.success(data?.message);
        setOpen(false);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Somethign went wrong.please try again later.");
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="border-heavy bg-white rounded-none p-8 border-red-600">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-display-lg text-4xl uppercase mb-2 text-red-600">TERMINATE THREAD?</AlertDialogTitle>
          <AlertDialogDescription className="font-body-md text-on-surface-variant">
            This action cannot be undone. This will permanently delete your chat
            group and its conversations.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-8 flex flex-col sm:flex-row gap-4 sm:space-x-0">
          <AlertDialogCancel className="rounded-none border-standard font-mono-label text-mono-label px-8 py-4 uppercase hover:bg-surface-variant transition-none flex-1 mt-0 sm:mt-0">CANCEL</AlertDialogCancel>
          <AlertDialogAction className="rounded-none bg-red-600 text-white font-mono-label text-mono-label px-8 py-4 uppercase hover:bg-red-700 transition-none flex-1" disabled={loading} onClick={deleteChatGroup}>
            {loading ? "PROCESSING..." : "CONFIRM TERMINATION"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

