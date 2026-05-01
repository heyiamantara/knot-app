import React from "react";
import MobileChatSidebar from "./MobileChatSidebar";

export default function ChatNav({
  chatGroup,
  users,
  user,
  mobileOnly = false,
}: {
  chatGroup: GroupChatType;
  users: Array<GroupChatUserType> | [];
  user?: GroupChatUserType;
  mobileOnly?: boolean;
}) {
  if (mobileOnly) {
    return <MobileChatSidebar users={users} />;
  }

  return (
    <nav className="w-full flex justify-between items-center px-8 h-24 border-b-4 border-black bg-white">
      <div className="flex space-x-4 md:space-x-0 items-center">
        <div className="md:hidden">
          <MobileChatSidebar users={users} />
        </div>
        <h1 className="text-3xl font-black tracking-tighter text-black uppercase font-display-lg">
          {chatGroup.title}
        </h1>
      </div>
      <p className="font-mono-label text-mono-label uppercase text-on-surface-variant">
        USER: {user?.name ?? "—"}
      </p>
    </nav>
  );
}
