import { useState } from 'react';
import { TextInput } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import ZenButton from '../button/ZenButton';

interface authData {
    name: string,
    email: string,
    password: string
}

function LoginPage() {
    const navigate = useNavigate();

    const defaultAuthData: authData = {
        name: 'vinodh',
        email: 'vinodh@gmail.com',
        password: 'P@ssw0rd'
    }

    const [authName, setAuthName] = useState<string>('');
    const [authPassword, setAuthPassword] = useState<string>('');
    const [localError, setLocalError] = useState<string | null>(null);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const showNavigatePage = (defaultAuthData.name === authName || defaultAuthData.email === authName) && defaultAuthData.password === authPassword

        if (showNavigatePage) {
            navigate('/mainPage');
        } else {
            setLocalError('Invalid username, email, or password!');
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-[400px] rounded-xl bg-gray-400 shadow-lg p-6"
            >
                <span className="text-white font-semibold text-center text-xl">Enter User Details</span>

                <TextInput
                    label="User Name"
                    type="text"
                    placeholder="Enter name or Email Address"
                    withAsterisk
                    value={authName}
                    onChange={(e) => setAuthName(e.target.value)}
                />
                <TextInput
                    label="Password"
                    type="password"
                    placeholder="Enter Password"
                    withAsterisk
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                />

                {(localError) && (
                    <p className="text-red-500 text-center">
                        {localError}
                    </p>
                )}

                <div className="flex justify-center">
                    <ZenButton
                        label="Login"
                        textSize="lg"
                        className="w-1/3 shadow shadow-blue-300 hover:bg-blue-600"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
