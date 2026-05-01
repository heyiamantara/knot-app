import CreateChat from "@/components/chatGroup/CreateChat";
import DashNav from "@/components/chatGroup/DashNav";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { fetchChatGroups } from "@/fetch/groupFetch";
import GroupChatCard from "@/components/chatGroup/GroupChatCard";

export default async function dashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);
  const groups: Array<GroupChatType> | [] = await fetchChatGroups(
    session?.user?.token!
  );
  return (
    <div className="bg-neo-background min-h-screen pb-16">
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image ?? undefined}
      />
      <div className="pt-12">
        <div className="flex justify-between items-end border-b-4 border-black pb-4 mb-8 px-8 md:px-16">
          <div>
            <h2 className="font-mono-label text-mono-label uppercase text-on-surface-variant">OPERATIONS</h2>
            <h3 className="font-headline-md text-headline-md mt-2 uppercase">ACTIVE THREADS</h3>
          </div>
          <div>
            <CreateChat user={session?.user!} />
          </div>
        </div>

        {/* If Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter px-8 md:px-16">
          {groups.length > 0 &&
            groups.map((item, index) => (
              <GroupChatCard group={item} key={index} user={session?.user!} />
            ))}
        </div>
      </div>
    </div>
  );
}
