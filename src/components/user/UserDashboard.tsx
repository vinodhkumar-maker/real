import { AppShell, Loader } from '@mantine/core';
import UserSidebar from './UserSidebar';
import { useUserInformation } from '../../querys';
import { useEffect, useState } from 'react';
import { UserDetail, UserInformation } from '../../apiType';
import UserInformationDetails from './UserInformationDetails';

const UserDashboard: React.FC = () => {
  const { data: userData, isFetching } = useUserInformation();
  const [selectUser, setSelectUser] = useState<UserInformation[]>([]);
  const [savedUsers, setSavedUsers] = useState<UserDetail[]>([]);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);

  const [formValues, setFormValues] = useState<UserDetail>({
    id: 0,
    name: '',
    email: '',
    phone: '',
  });
  useEffect(() => {
    if (userData && userData.length > 0) {
      setSelectUser([userData[0]]);
    }
  }, [userData]);

  const handleSave = (user: UserDetail) => {
    if (editingUserId) {
      setSavedUsers((prev) =>
        prev.map((u) => (u.id === editingUserId ? { ...user, id: editingUserId } : u)),
      );
      setEditingUserId(null);
    } else {
      setSavedUsers((prev) => [...prev, { ...user, id: Date.now() }]);
    }
    setFormValues({ id: 0, name: '', email: '', phone: '' });
  };

  const handleEditClick = (user: UserDetail) => {
    setFormValues(user);
    setEditingUserId(user.id ?? null);
  };

  const handleCancel = () => {
    setFormValues({ id: 0, name: '', email: '', phone: '' });
    setEditingUserId(null);
  };

  return (
    <div className="w-full flex flex-row">
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 250, breakpoint: 'sm' }}
        aside={{ width: 350, breakpoint: 'sm' }}
      >
        <AppShell.Header>
          <p>User Dashboard</p>
        </AppShell.Header>
        <AppShell.Navbar>
          <UserSidebar
            userInfo={userData}
            isfetching={isFetching}
            selectInfo={selectUser}
            setSelectUserInfo={setSelectUser}
          />
        </AppShell.Navbar>
        <AppShell.Main>
          {savedUsers.some((user) => user.name && user.email && user.phone) && (
            <div className="m-4 p-4 bg-slate-100 rounded-md">
              <p className="text-xl mb-2">Saved Users</p>
              {savedUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex justify-between items-center bg-white p-2 mb-2 rounded shadow"
                >
                  <div>
                    <p>
                      Name: <strong>{user.name}</strong>
                    </p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                  </div>
                  <button
                    className="text-blue-500 border px-2 py-1 rounded hover:bg-blue-100"
                    onClick={() => handleEditClick(user)}
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>
          )}
        </AppShell.Main>
        <AppShell.Aside>
          <p className="text-center font-medium py-2 bg-slate-100 border-b border-slate-300">
            {editingUserId ? 'Edit User' : 'Add User'}
          </p>
          {isFetching ? (
            <div className="flex justify-center items-center h-full">
              <Loader />
            </div>
          ) : (
            <UserInformationDetails
              selectInfo={selectUser}
              formValues={formValues}
              setFormValues={setFormValues}
              saveFormValue={handleSave}
              isEditing={editingUserId !== null}
              onCancel={handleCancel}
            />
          )}
        </AppShell.Aside>
      </AppShell>
    </div>
  );
};

export default UserDashboard;
