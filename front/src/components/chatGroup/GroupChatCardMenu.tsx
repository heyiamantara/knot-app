"use client";
import React, { Suspense, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import EditGroupChat from "./EditGroupChat";
import { toast } from "sonner";
import Env from "@/lib/env";
const DeleteChatGroup = dynamic(() => import("./DeleteChatGroup"));

export default function GroupChatCardMenu({
  group,
  user,
}: {
  group: GroupChatType;
  user: CustomUser;
}) {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [editDialoag, setEditDialog] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(`${Env.APP_URL}/chat/${group.id}`);
    toast.success("Link copied successfully!");
  };

  return (
    <>
      {deleteDialog && (
        <Suspense fallback={<p>Loading...</p>}>
          <DeleteChatGroup
            open={deleteDialog}
            setOpen={setDeleteDialog}
            groupId={group.id}
            token={user.token!}
          />
        </Suspense>
      )}
      {editDialoag && (
        <Suspense fallback={<p>Loading...</p>}>
          <EditGroupChat
            open={editDialoag}
            setOpen={setEditDialog}
            user={user}
            group={group}
          />
        </Suspense>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none focus:ring-0">
          <DotsVerticalIcon className="h-6 w-6 text-black" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border-standard border-black bg-white rounded-none font-mono-label text-mono-label shadow-none p-0">
          <DropdownMenuItem onClick={handleCopy} className="rounded-none uppercase cursor-pointer hover:bg-black hover:text-white px-4 py-3">COPY LINK</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setEditDialog(true)} className="rounded-none uppercase cursor-pointer hover:bg-black hover:text-white px-4 py-3">
            EDIT
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setDeleteDialog(true)} className="rounded-none uppercase cursor-pointer hover:bg-black hover:text-white px-4 py-3 text-red-600 hover:text-red-500">
            DELETE
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

