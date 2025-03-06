import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
interface UserInfo {
    authName: string;
    authPassword: string;
}

interface AuthState {
    isAuthenticated: boolean;
    user: UserInfo | null;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<UserInfo>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
        },
        logoutUser: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        },
        setAuthError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const { loginSuccess, logoutUser, setAuthError, clearError } = authSlice.actions;
export default authSlice.reducer;
