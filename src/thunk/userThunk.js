import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadUser = createAsyncThunk(
    'user/loadUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/user');
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.error || 'Session expired. Please log in again.'
            );
        }
    }
);

export const updateUserProfile = createAsyncThunk(
    'user/updateUserProfile',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.patch('/user', userData);
            console.log('User profile updated successfully:', response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.error || 'Failed to update profile. Please try again later.'
            )
        }
    }
);

export const deleteUserProfile = createAsyncThunk(
    'user/deleteUserProfile',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.delete('/user');
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.error || 'Failed to delete profile. Please try again later.'
            )
        }
    }
);

export const changePassword = createAsyncThunk(
    'user/changePassword',
    async (passwordData, { rejectWithValue }) => {
        try {
            const response = await axios.patch('/user/update-password', passwordData);
            console.log('Password changed successfully:', response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.error || 'Failed to change password. Please try again later.'
            );
        }
    }
);
