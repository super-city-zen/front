import {createSlice} from '@reduxjs/toolkit';

import {getPayloadToken, setToken, isTokenValid} from "../service/jwtTokenService.js";

const initialState = {
    isAuthenticated: false,
    token: null,
    user: null,
};

export const authenticationSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            const token = action.payload;
            state.token = token;
            const claims = getPayloadToken(token);
            console.log(claims);
            const user = {
                email: claims.sub,
                userId: claims.userId,
                roles: claims.roles.split(','),
            };
            state.user = user;
            state.isAuthenticated = isTokenValid(token);
            setToken(action.payload);
        },
        signOut: (state) => {
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { signIn, signOut } = authenticationSlice.actions;

export const selectIsLogged = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectHasRole = (state, roles) => {
    if (!roles || roles.length === 0) return true;
    const user = state.auth.user;
    if (!user) return false;
    return user.roles.some((role) => roles.includes(role));
};

export default authenticationSlice.reducer;