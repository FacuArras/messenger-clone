"use client";

import { User } from "@prisma/client";
import Image from "next/image";
import useActiveList from "../hooks/useActiveList";
import { useState } from "react";
import ImageModal from "../conversations/[conversationId]/components/ImageModal";
import clsx from "clsx";

interface AvatarProps {
  user?: User;
  isClickable?: boolean;
  isConfig?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ user, isClickable, isConfig }) => {
  const { members } = useActiveList();
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const isActive = members.indexOf(user?.email!) !== -1;

  return (
    <>
      <ImageModal
        src={user?.image || "/images/placeholder.jpg"}
        isOpen={imageModalOpen}
        onClose={() => setImageModalOpen(false)}
      />
      <div
        className="relative"
        onClick={() => isClickable && setImageModalOpen(true)}
      >
        <div
          className={clsx(
            "relative inline-block rounded-full overflow-hidden md:h-11 md:w-11",
            isConfig ? "h-7 w-7" : "h-11 w-11"
          )}
        >
          <Image
            alt="Avatar"
            src={user?.image || "/images/placeholder.jpg"}
            fill
          />
        </div>
        {isActive && (
          <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3" />
        )}
      </div>
    </>
  );
};

export default Avatar;
