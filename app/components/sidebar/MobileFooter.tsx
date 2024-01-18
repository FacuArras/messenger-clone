"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";
import { useState } from "react";
import SettingsModal from "./SettingsModal";
import { User } from "@prisma/client";
import Avatar from "../Avatar";

interface MobileFooterProps {
  currentUser: User;
}

const MobileFooter: React.FC<MobileFooterProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const { isOpen } = useConversation();
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  if (isOpen) {
    return null;
  }

  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
      />
      <div
        className="fixed justify-between w-full bottom-0 z-40 flex items-center
       bg-white border-t-[1px] lg:hidden"
      >
        <div
          onClick={() => setIsConfigOpen(true)}
          className="hover:opacity-75 transition pt-1 px-4"
        >
          <Avatar user={currentUser} isConfig />
        </div>
        {routes.map((route) => (
          <MobileItem
            key={route.href}
            href={route.href}
            active={route.active}
            icon={route.icon}
            onClick={route.onClick}
          />
        ))}
      </div>
    </>
  );
};

export default MobileFooter;
