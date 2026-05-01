import React from "react";

export default function ChatSidebar({
  users,
}: {
  users: Array<GroupChatUserType> | [];
}) {
  return (
    <div className="hidden md:flex flex-col h-full overflow-y-auto w-1/5 bg-neo-background border-r-4 border-black">
      <div className="flex flex-col gap-4 px-6 py-6">
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
    </div>
  );
}

