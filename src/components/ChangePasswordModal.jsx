import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changePassword } from '../thunk/userThunk'

// Define styles for modal animations
const modalAnimationStyle = `
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @keyframes slideIn {
        0% { transform: translateY(-20px); }
        100% { transform: translateY(0); }
    }
`;

const ChangePasswordModal = ({ isOpen, onClose }) => {
    const { error, success, loading } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [passwordData, setPasswordData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
    const [passwordError, setPasswordError] = useState('')

    const handlePasswordChange = (e) => {
        const { name, value } = e.target
        setPasswordData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when user starts typing
        if (passwordError) setPasswordError('')
    }

    const handleChangePassword = async (e) => {
        e.preventDefault()
        setPasswordError('')

        // Validation
        if (!passwordData.oldPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
            setPasswordError('All fields are required')
            return
        }

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setPasswordError('New passwords do not match')
            return
        }

        if (passwordData.newPassword.length < 6) {
            setPasswordError('New password must be at least 6 characters long')
            return
        }

        if (passwordData.oldPassword === passwordData.newPassword) {
            setPasswordError('New password must be different from the old password')
            return
        }

        try {
            const passwordChangeData = {
                oldPassword: passwordData.oldPassword,
                newPassword: passwordData.newPassword
            };

            await dispatch(changePassword(passwordChangeData)).unwrap();

            setPasswordData({ oldPassword: '', newPassword: '', confirmPassword: '' });
            setPasswordError('');

            setTimeout(() => {
                onClose();
            }, 1500);

        } catch (error) {
            console.error('Failed to change password:', error);
            setPasswordError(error.message || error || 'Failed to change password. Please try again.');
        }
    }

    const handleForgotPassword = () => {
        onClose()
        navigate('/forgot-password')
    }

    const handleClose = () => {
        setPasswordData({ oldPassword: '', newPassword: '', confirmPassword: '' });
        setPasswordError('');
        onClose();
    }

    if (!isOpen) return null;

    return (
        <>
            {/* Inject animation styles */}
            <style dangerouslySetInnerHTML={{ __html: modalAnimationStyle }} />

            <div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                onClick={(e) => e.target === e.currentTarget && handleClose()}
            >
                <div
                    className="bg-[#272727] rounded-lg p-8 max-w-md w-full mx-4 border border-themeYDark/30 shadow-lg animate-[fadeIn_0.3s_ease-in-out]"
                    style={{ animation: "fadeIn 0.3s ease-in-out, slideIn 0.3s ease-out" }}
                >
                    <h3 className="text-xl font-semibold mb-6 text-white">Change Password</h3>

                    <form onSubmit={handleChangePassword}>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-white/80 mb-2">
                                    Current Password
                                </label>
                                <input
                                    type="password"
                                    name="oldPassword"
                                    value={passwordData.oldPassword}
                                    onChange={handlePasswordChange}
                                    placeholder="Enter your current password"
                                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:border-themeYDark focus:outline-none"
                                    disabled={loading}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-white/80 mb-2">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={passwordData.newPassword}
                                    onChange={handlePasswordChange}
                                    placeholder="Enter your new password"
                                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:border-themeYDark focus:outline-none"
                                    disabled={loading}
                                    required
                                    minLength={6}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-white/80 mb-2">
                                    Confirm New Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={passwordData.confirmPassword}
                                    onChange={handlePasswordChange}
                                    placeholder="Confirm your new password"
                                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:border-themeYDark focus:outline-none"
                                    disabled={loading}
                                    required
                                />
                            </div>
                        </div>

                        {(error || passwordError) && (
                            <div className="mt-4 bg-red-900/20 border border-red-500/30 rounded-lg py-2 px-4">
                                <p className="text-red-400 text-xs">{error || passwordError}</p>
                            </div>
                        )}

                        <div className="mt-4 text-center">
                            <button
                                type="button"
                                onClick={handleForgotPassword}
                                className="text-xs text-themeYDark hover:underline"
                                disabled={loading}
                            >
                                Forgot your current password?
                            </button>
                        </div>

                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={handleClose}
                                disabled={loading}
                                className="px-4 py-2 text-xs bg-transparent border border-white/30 hover:border-white/50 rounded-full text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-4 py-2 text-xs bg-gradient-to-r from-[#D5BB54]/90 to-[#977619] bg-[#977619] hover:bg-black rounded-full text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Changing...' : 'Change Password'}
                            </button>
                        </div>

                        {loading && (
                            <div className="mt-4 text-center">
                                <p className='text-xs text-white/80'>Updating your password...</p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </>
    )
}

export default React.memo(ChangePasswordModal);
