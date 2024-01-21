"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";
import { useState } from "react";
import SettingsModal from "./SettingsModal";
import { User } from "@prisma/client";
import Avatar from "../Avatar";
import { IoSettingsSharp } from "react-icons/io5";

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
       bg-white border-t-[1px] lg:hidden dark:bg-gray-900 dark:border-gray-700"
      >
        <div
          onClick={() => setIsConfigOpen(true)}
          className="flex justify-center p-4 w-9/12 h-full text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-gray-500 dark:hover:text-neutral-900"
        >
          <IoSettingsSharp size={24} />
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
