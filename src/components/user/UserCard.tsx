import React from 'react'
import { UserInformation } from '../../apiType'
import { Avatar, Group } from '@mantine/core';
import clsx from 'clsx';

interface UserCardProps {
    user: UserInformation;
    setSelectUserInfo: () => void
    select?: boolean;
    preSlect?: boolean;
}


const UserCard: React.FC<UserCardProps> = ({ user, setSelectUserInfo, select, preSlect }) => {
    const { info, name, email, phone } = user
    const nameArray = Array.isArray(info) ? info : [info];
    const avatarNames = nameArray.map((n) => <Avatar key={n} name={n} color="initials" size='md' />)
    return (
        <div className={clsx('flex flex-row gap-2 py-3 px-2',
            select ? 'bg-slate-100 border-b-0 rounded-lg' : 'border-b border-slate-200',
            preSlect ? 'border-b-0' : 'border-b'

        )} onClick={setSelectUserInfo}>
            <Group>{avatarNames}</Group>
            <div className='overflow-hidden px-2'>
                <p className='text-sm'>{name}</p>
                <p className='text-sm overflow-ellipsis line-clamp overflow-hidden'>{email}</p>
                <p className='text-xs'>{phone}</p>
            </div>
        </div>
    )
}

export default UserCard