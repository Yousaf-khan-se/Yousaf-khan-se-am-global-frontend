import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Register a new user
export const registerUser = createAsyncThunk(
    'user/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('/auth/signup', userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.error || 'Registration failed'
            );
        }
    }
);

// Login user
export const loginUser = createAsyncThunk(
    'user/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('/auth/login', credentials);

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.error || 'Login failed'
            );
        }
    }
);

// Logout user
export const logoutUser = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post('/auth/logout');

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.error || 'Logout failed'
            );
        }
    }
);

export const forgetPassword = createAsyncThunk(
    'user/forgetPassword',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('/auth/forget-password', credentials);

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.error || 'forget password request failed'
            );
        }
    }
);

export const resetPassword = createAsyncThunk(
    'user/resetPassword',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('/auth/reset-password', credentials);

            return response.data;
        } catch (error) {
            console.error(error)
            return rejectWithValue(
                error.response?.data?.error || 'password reset request failed'
            );
        }
    }
)

