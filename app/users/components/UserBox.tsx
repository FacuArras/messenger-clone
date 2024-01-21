"use client";

import Avatar from "@/app/components/Avatar";
import LoadingModal from "@/app/components/LoadingModal";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { HiMiniPaperAirplane } from "react-icons/hi2";

interface UserBoxProps {
  data: User;
}

const UserBox: React.FC<UserBoxProps> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);

    axios
      .post("/api/conversations", {
        userId: data.id,
      })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data, router]);

  return (
    <>
      {isLoading && <LoadingModal />}
      <div className="w-full relative flex items-center space-x-3 bg-white py-3 px-6 hover:bg-neutral-100 transition cursor-pointer mb-1 dark:bg-gray-900 dark:hover:bg-gray-800">
        <Avatar user={data} isClickable />
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <div className="flex justify-between items-center mb-1">
              <p className="text-md font-medium text-gray-900 dark:text-neutral-100">
                {data.name}
              </p>
              <div
                className="p-3 rounded-xl text-neutral-800 hover:bg-neutral-700 hover:text-white dark:text-neutral-200 dark:hover:bg-gray-500 dark:hover:text-neutral-900"
                onClick={handleClick}
              >
                <HiMiniPaperAirplane />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBox;
