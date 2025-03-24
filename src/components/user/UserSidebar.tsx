import React from 'react';
import { UserInformation } from '../../apiType';
import UserCard from './UserCard';

interface UserSidebarProps {
  userInfo?: UserInformation[];
  selectInfo: UserInformation[];
  setSelectUserInfo: (user: UserInformation[]) => void;
}
const UserSidebar: React.FC<UserSidebarProps> = ({ userInfo, selectInfo, setSelectUserInfo }) => {
  return (
    <div className="bg-white h-full">
      <div className="flex flex-row justify-between border-b border-slate-300 px-4 py-2 bg-slate-100">
        <p className="text-base font-medium text-center  ">User Details</p>
        <p className="p-1 w-6 h-6 bg-red-400 rounded-full text-center text-xs text-white font-bold">
          {userInfo?.length}
        </p>
      </div>
      <div className="flex flex-col h-full overflow-auto scroll p-2">
        {userInfo?.map((user) => {
          const previousSelectedUserId = userInfo.find((user) =>
            selectInfo.some((selectedUser) => selectedUser.id === user.id),
          );

          return (
            <div key={user.id}>
              <UserCard
                user={user}
                setSelectUserInfo={() => setSelectUserInfo([user])}
                select={
                  selectInfo && selectInfo.some((selectedUser) => selectedUser.id === user.id)
                }
                preSlect={
                  previousSelectedUserId ? previousSelectedUserId.id - 1 === user.id : undefined
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserSidebar;
