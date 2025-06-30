import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser, logoutUser } from '../../thunk/authThunk';
import { loadUser } from '../../thunk/userThunk';

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    success: false,
    message: '',
    byPassUserLoad: false, // Flag to bypass user load in AuthRoute
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        clearSuccess: (state) => {
            state.success = false;
            state.message = '';
        },
        setCredentials: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setByPassUserLoad: (state, action) => {
            state.byPassUserLoad = action.payload;
            console.log('setByPassUserLoad called with:', action.payload);
        }
    },
    extraReducers: (builder) => {
        // Register user
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.message = action.payload.message || 'Registration successful';
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
            state.success = false;
        });

        // Login user
        builder.addCase(loginUser.pending, (state) => {
            state.error = null;
            state.success = false;
            state.isAuthenticated = false;
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.error = null;
            state.isAuthenticated = true;
            state.success = true;
            state.message = action.payload.message || 'Login successful';
            state.loading = false;

        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.error = action.payload || 'Invalid credentials';
            state.success = false;
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;

        });

        // Logout user
        builder.addCase(logoutUser.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        });
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
            state.success = true;
            state.message = action.payload.message || 'Logged out successfully';
            state.loading = false;
        });
        builder.addCase(logoutUser.rejected, (state, action) => {
            state.error = action.payload || 'Logout failed';
            state.success = false;
            state.loading = false;
            state.message = '';
        });

        // Load user
        builder.addCase(loadUser.pending, (state) => {
            state.error = null;
            state.success = false;
            state.loading = true;

        });
        builder.addCase(loadUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
            // state.success = true;
            state.error = null;
        });
        builder.addCase(loadUser.rejected, (state, action) => {
            state.error = action.payload || 'Failed to load user data';
            state.isAuthenticated = false;
            state.user = null;
            state.success = false;
            state.loading = false;
        });

        // Update user profile
        builder.addCase('user/updateUserProfile/pending', (state) => {
            state.error = null;
            state.success = false;
            state.loading = true;
            state.message = '';
        });

        builder.addCase('user/updateUserProfile/fulfilled', (state, action) => {
            state.error = null;
            state.success = true;
            state.loading = false;
            state.message = action.payload.message || 'Profile updated successfully';
            state.user = { ...state.user, ...action.payload };
        });

        builder.addCase('user/updateUserProfile/rejected', (state, action) => {
            state.error = action.payload || 'Failed to update profile';
            state.success = false;
            state.loading = false;
            state.message = '';
        });

        // Delete user profile
        builder.addCase('user/deleteUserProfile/pending', (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
            state.message = '';
        });

        builder.addCase('user/deleteUserProfile/fulfilled', (state, action) => {
            state.user = null;
            state.isAuthenticated = false;
            state.success = true;
            state.error = null;
            state.message = action.payload.message || 'Profile deleted successfully';
            state.loading = false;
        });

        builder.addCase('user/deleteUserProfile/rejected', (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload || 'Failed to delete profile';
            state.message = '';
        });

        // Change password
        builder.addCase('user/changePassword/pending', (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
            state.message = '';
        });
        builder.addCase('user/changePassword/fulfilled', (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.message = action.payload.message || 'Password changed successfully';
        });
        builder.addCase('user/changePassword/rejected', (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload || 'Failed to change password';
            state.message = '';
        });

        //forget password
        builder.addCase('user/forgetPassword/pending', (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
            state.message = '';
        });
        builder.addCase('user/forgetPassword/fulfilled', (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.message = action.payload.message || 'Password reset link sent to your email';
        });
        builder.addCase('user/forgetPassword/rejected', (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload || 'Failed to send password reset link';
            state.message = '';
        });

        // Reset password
        builder.addCase('user/resetPassword/pending', (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
            state.message = '';
        });
        builder.addCase('user/resetPassword/fulfilled', (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.message = action.payload.message || 'Password reset successful';
        });
        builder.addCase('user/resetPassword/rejected', (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload || 'Failed to reset password';
            state.message = '';
        });
    },
});

export const { clearError, clearSuccess, setCredentials, logout, setError, setByPassUserLoad } = userSlice.actions;

export default userSlice.reducer;
