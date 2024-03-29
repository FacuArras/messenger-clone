"use client";

import { User } from "@prisma/client";
import UserBox from "./UserBox";

interface UserListProps {
  items: User[];
}

const UserList: React.FC<UserListProps> = ({ items }) => {
  return (
    <aside className="fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto lg:border-r border-gray-200 block w-full left-0 dark:bg-gray-900 dark:border-gray-700">
      <div>
        <div className="flex-col border-b border-gray-200 px-5 mb-3 dark:border-gray-700">
          <div className="text-2xl font-bold text-neutral-800 py-4 dark:text-darkTitle">
            Users
          </div>
        </div>
        {items.map((item) => (
          <UserBox key={item.id} data={item} />
        ))}
      </div>
    </aside>
  );
};

export default UserList;
