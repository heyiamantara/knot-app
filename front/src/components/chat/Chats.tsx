import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { getSocket } from "@/lib/socket.config";
import { v4 as uuidv4 } from "uuid";
export default function Chats({
  group,
  oldMessages,
  chatUser,
}: {
  group: GroupChatType;
  oldMessages: Array<MessageType> | [];
  chatUser?: GroupChatUserType;
}) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<MessageType>>(oldMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  let socket = useMemo(() => {
    const socket = getSocket();
    socket.auth = {
      room: group.id,
    };
    return socket.connect();
  }, []);
  useEffect(() => {
    socket.on("message", (data: MessageType) => {
      console.log("The message is", data);
      setMessages((prevMessages) => [...prevMessages, data]);
      scrollToBottom();
    });

    return () => {
      socket.close();
    };
  }, []);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Resolve name from chatUser state or fall back to localStorage
    const resolvedName = (() => {
      if (chatUser?.name) return chatUser.name;
      try {
        const stored = localStorage.getItem(group.id);
        if (stored) return (JSON.parse(stored) as GroupChatUserType).name;
      } catch {}
      return "Guest";
    })();

    const payload: MessageType = {
      id: uuidv4(),
      message: message,
      name: resolvedName,
      created_at: new Date().toISOString(),
      group_id: group.id,
    };
    socket.emit("message", payload);
    setMessage("");
    setMessages([...messages, payload]);
  };

  return (
    <div className="flex flex-col flex-1 p-4 md:p-8 bg-white overflow-hidden">
      <div className="flex-1 overflow-y-auto flex flex-col-reverse pr-2 pb-4">
        <div ref={messagesEndRef} />
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`max-w-md p-4 border-standard border-black flex flex-col gap-2 rounded-none shadow-none ${
                message.name === chatUser?.name
                  ? "bg-black text-white self-end ml-12"
                  : "bg-surface-bright text-black self-start mr-12"
              }`}
            >
              <span className="font-mono-label text-[10px] uppercase opacity-70 border-b border-current pb-1 mb-1">{message.name}</span>
              <span className="font-body-md whitespace-pre-wrap">{message.message}</span>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex items-center border-t-4 border-black pt-4">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          className="flex-1 p-4 border-standard border-black font-mono-label text-sm outline-none focus:border-heavy focus:ring-0 bg-surface-bright"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="bg-neo-secondary text-white font-mono-label text-mono-label px-6 py-4 uppercase hover:bg-black transition-none border-standard border-black border-l-0">
          SEND
        </button>
      </form>
    </div>
  );
}

