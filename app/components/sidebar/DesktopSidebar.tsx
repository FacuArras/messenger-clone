"use client";

import { useState } from "react";
import useRoutes from "@/app/hooks/useRoutes";
import { User } from "@prisma/client";
import DesktopItem from "./DesktopItem";
import SettingsModal from "./SettingsModal";
import { IoSettingsSharp } from "react-icons/io5";

interface DesktopSidebarProps {
  currentUser: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between dark:bg-gray-900 dark:border-gray-700">
        <nav className="mt-4 flex flex-col justify-between">
          <ul role="list" className="flex flex-col items-center space-y-1">
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
              />
            ))}
          </ul>
        </nav>
        <nav className="mt-4 flex flex-col justify-between items-center">
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer rounded-md p-3 text-sm leading-6 font-semimbold text-gray-500 hover:text-black hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-gray-500 dark:hover:text-neutral-900"
          >
            <IoSettingsSharp size={24} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default DesktopSidebar;
