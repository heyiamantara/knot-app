"use client";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createChatSchema,
  createChatSchemaType,
} from "@/validations/chatSchema";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import axios, { AxiosError } from "axios";
import { CHAT_GROUP } from "@/lib/apiAuthRoutes";
import { toast } from "sonner";
import { clearCache } from "@/actions/common";

export default function EditGroupChat({
  user,
  group,
  open,
  setOpen,
}: {
  user: CustomUser;
  group: GroupChatType;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<createChatSchemaType>({
    resolver: zodResolver(createChatSchema),
  });

  useEffect(() => {
    setValue("title", group.title);
    setValue("passcode", group.passcode);
  }, [group]);

  const onSubmit = async (payload: createChatSchemaType) => {
    try {
      setLoading(true);
      const { data } = await axios.put(`${CHAT_GROUP}/${group.id}`, payload, {
        headers: {
          Authorization: user.token,
        },
      });

      if (data?.message) {
        setOpen(false);
        toast.success(data?.message);
        clearCache("dashboard");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error instanceof AxiosError) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong.please try again!");
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border-heavy bg-white rounded-none p-8" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="font-display-lg text-4xl uppercase mb-4">UPDATE THREAD</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <input 
              placeholder="ENTER THREAD TITLE" 
              className="w-full border-standard border-black p-4 font-mono-label text-sm outline-none focus:border-heavy focus:ring-0 uppercase bg-surface-bright" 
              {...register("title")} 
            />
            <span className="text-red-500 font-mono-label text-[10px] uppercase mt-1 block">{errors.title?.message}</span>
          </div>
          <div className="mt-4">
            <input 
              placeholder="SET PASSCODE" 
              className="w-full border-standard border-black p-4 font-mono-label text-sm outline-none focus:border-heavy focus:ring-0 uppercase bg-surface-bright" 
              {...register("passcode")} 
            />
            <span className="text-red-500 font-mono-label text-[10px] uppercase mt-1 block">{errors.passcode?.message}</span>
          </div>
          <div className="mt-8">
            <button className="bg-neo-secondary text-white font-mono-label text-mono-label px-8 py-4 uppercase hover:bg-black transition-none w-full" disabled={loading}>
              {loading ? "PROCESSING..." : "SUBMIT"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

