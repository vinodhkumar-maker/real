import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Types
interface UserInfo {
  authName: string;
  authPassword: string;
}

interface AuthResponse {
  success: boolean;
  user?: UserInfo;
  error?: string;
}

// Simulated API
const predefinedUsers: UserInfo[] = [
  { authName: 'vinodh', authPassword: 'P@ssw0rd' },
  { authName: 'admin', authPassword: 'Admin@123' },
];

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), // No actual API needed here
  endpoints: (builder) => ({
    loginUser: builder.mutation<AuthResponse, UserInfo>({
      queryFn: async (userInfo) => {
        const matchedUser = predefinedUsers.find(
          (user) =>
            user.authName === userInfo.authName && user.authPassword === userInfo.authPassword,
        );

        if (matchedUser) {
          return { data: { success: true, user: matchedUser } };
        }
        return { error: { status: 401, data: { success: false, error: 'Invalid credentials' } } };
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
