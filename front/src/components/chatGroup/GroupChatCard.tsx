import React from "react";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import GroupChatCardMenu from "./GroupChatCardMenu";

export default function GroupChatCard({
  group,
  user,
}: {
  group: GroupChatType;
  user: CustomUser;
}) {
  return (
    <div className="border-standard bg-white p-6 hover:border-heavy transition-all flex flex-col justify-between min-h-[200px]">
      <div className="flex justify-between items-start mb-6">
        <h4 className="font-display-lg text-2xl uppercase break-words pr-4">{group.title}</h4>
        <GroupChatCardMenu user={user} group={group} />
      </div>
      <div>
        <p className="font-mono-label text-xs text-on-surface-variant uppercase mb-2">
          PASSCODE: <strong className="text-black">{group.passcode}</strong>
        </p>
        <p className="font-mono-label text-[10px] text-surface-tint uppercase">
          INITIATED: {new Date(group.created_at).toDateString()}
        </p>
      </div>
    </div>
  );
}

