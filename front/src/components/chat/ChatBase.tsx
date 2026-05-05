"use client";
import React, { useState, useEffect } from "react";
import ChatNav from "./ChatNav";
import ChatUserDialog from "./ChatUserDialog";
import ChatSidebar from "./ChatSidebar";
import Chats from "./Chats";
import axios from "axios";
import { CHAT_GROUP_USERS } from "@/lib/apiAuthRoutes";

export default function ChatBase({
  group,
  users: initialUsers,
  oldMessages,
}: {
  group: GroupChatType;
  users: Array<GroupChatUserType> | [];
  oldMessages: Array<MessageType> | [];
}) {
  const [open, setOpen] = useState(true);
  const [chatUser, setChatUser] = useState<GroupChatUserType>();
  const [users, setUsers] = useState<Array<GroupChatUserType>>(initialUsers);

  useEffect(() => {
    const data = localStorage.getItem(group.id);
    if (data) {
      const pData = JSON.parse(data);
      setChatUser(pData);
    }
  }, [group.id]);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`${CHAT_GROUP_USERS}?group_id=${group.id}`);
      if (data?.data) setUsers(data.data);
    } catch {}
  };

  const handleJoined = () => {
    const data = localStorage.getItem(group.id);
    if (data) setChatUser(JSON.parse(data));
    fetchUsers();
  };

  return (
    <div className="flex flex-col bg-neo-background h-screen">
      <div className="flex h-16 sm:h-24 bg-white shrink-0">
        <div className="hidden md:flex items-center w-1/5 border-r-4 border-b-4 border-black px-6">
          <h1 className="font-headline-md text-2xl uppercase">USERS</h1>
        </div>
        <div className="flex flex-1 items-center justify-between px-4 sm:px-8 border-b-4 border-black">
          <div className="flex items-center space-x-3">
            <div className="md:hidden">
              <ChatNav chatGroup={group} users={users} user={chatUser} mobileOnly />
            </div>
            <h1 className="text-lg sm:text-3xl font-black tracking-tighter text-black uppercase font-display-lg truncate max-w-[180px] sm:max-w-none">
              {group.title}
            </h1>
          </div>
          <p className="font-mono-label text-[10px] sm:text-mono-label uppercase text-on-surface-variant hidden md:block">
            USER: {chatUser?.name ?? "—"}
          </p>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <ChatSidebar users={users} />
        <div className="w-full md:w-4/5 bg-white flex flex-col h-full overflow-hidden">
          {open && <ChatUserDialog open={open} setOpen={setOpen} group={group} onJoined={handleJoined} />}
          <Chats oldMessages={oldMessages} group={group} chatUser={chatUser} />
        </div>
      </div>
    </div>
  );
}
