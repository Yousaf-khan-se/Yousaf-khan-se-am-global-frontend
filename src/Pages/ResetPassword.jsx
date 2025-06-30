import React, { useState } from 'react'
import bg from '../assets/proposal/bg.png'
import { Link, useSearchParams } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../thunk/authThunk'
import { clearError, clearSuccess, setError } from '../redux/features/userSlice'

const ResetPassword = () => {
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    })

    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const { loading, error, success, message } = useSelector(state => state.user)
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!token) {
            return dispatch(setError('Invalid or missing reset token. Please request a new password reset.'))
        }

        if (formData.password !== formData.confirmPassword) {
            dispatch(clearError())
            return dispatch(setError('Passwords do not match. Please try again.'))
        }
        dispatch(resetPassword({ token, password: formData.password }));
    }

    if (!token) {
        return (
            <section className='relative bg-white/45 flex flex-col justify-center items-center min-h-[100vh] py-1'>
                <div className='absolute z-10 md:top-0 h-full w-full'><img src={bg} alt='' className='w-full h-full object-cover' /></div>
                <div className='absolute inset-0 bg-black/[0.7]'></div>
                <div className='z-20 bg-red-900/20 border border-red-500/30 rounded-lg py-6 px-8 max-w-md text-center'>
                    <h1 className='text-xl font-bold mb-4'>Invalid Reset Link</h1>
                    <p className='text-sm mb-4'>The password reset link is invalid or has expired. Please request a new password reset.</p>
                    <Link to='/forgot-password' className='text-xs text-[#D5BB54] hover:underline'>
                        Request New Password Reset
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className='relative bg-white/45 flex flex-col justify-around items-center min-h-[100vh] md:h-[110vh] py-1'>
            <div className='absolute z-10 md:top-0 h-full w-full'><img src={bg} alt='' className='w-full h-full object-cover' /></div>
            <div className='absolute inset-0 bg-black/[0.7]'></div>
            <div className='ml-4 md:ml-0 md:text-center z-10'>
                <h1 className='text-xl md:text-[2.5rem] font-extrabold m-4 md:m-2 md:mb-6'>Reset Password</h1>
                <p className='md:text-center text-left md:ml-0 m-4 opacity-80 md:w-[30vw] md:mb-10 mb-2'>
                    Enter your new password below to reset your account password.
                </p>
            </div>
            <div className='z-20 shadow-2xl shadow-black/5 md:p-10 p-3 rounded-xl flex md:flex-row flex-col-reverse justify-center items-center bg-[#272727] m-2 gap-3 md:gap-10 w-[90vw] md:w-[60vw] h-auto md:h-[60vh]'>
                {!success ? (
                    <form onSubmit={handleSubmit} className='md:ml-2 md:w-[35vw] w-full'>
                        <h1 className='text-lg md:text-xl font-semibold mb-1'>Set New Password</h1>
                        <p className='font-extralight opacity-90 md:w-[24vw] text-xs mb-6'>
                            Choose a strong password you haven't used before.
                        </p>
                        <div className='py-4 flex flex-col justify-center items-start gap-4 text-black'>
                            <div className='relative w-full'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder='New Password'
                                    className='rounded w-full p-[0.4rem] pr-10 placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                                    required
                                    disabled={loading}
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPassword(v => !v)}
                                    className='absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-white/60 hover:text-white'
                                    disabled={loading}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                            <div className='relative w-full'>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name='confirmPassword'
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder='Confirm New Password'
                                    className='rounded w-full p-[0.4rem] pr-10 placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                                    required
                                    disabled={loading}
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowConfirmPassword(v => !v)}
                                    className='absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-white/60 hover:text-white'
                                    disabled={loading}
                                >
                                    {showConfirmPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </div>
                        {error && (
                            <div className='bg-red-900/20 border border-red-500/30 rounded-lg py-2 px-4 mb-4'>
                                <p className='text-xs text-red-400'>{error}</p>
                            </div>
                        )}
                        <button
                            type='submit'
                            disabled={loading}
                            className='bg-gradient-to-r from-[#D5BB54]/90 to-[#977619] bg-[#977619] hover:bg-black py-2 md:w-[8vw] w-[20vw] text-xs rounded-full transition-all disabled:opacity-60 disabled:cursor-not-allowed'
                        >
                            {loading ? 'Resetting...' : 'Reset Password'}
                        </button>
                        <div className='mt-4 text-center'>
                            <Link
                                to='/login'
                                className='text-xs text-[#D5BB54] hover:underline'
                                onClick={() => {
                                    dispatch(clearError())
                                    dispatch(clearSuccess())
                                }}
                            >
                                Return to Login
                            </Link>
                        </div>
                    </form>
                ) : (
                    <div className="w-full md:w-[70%] text-center px-5 py-8">
                        <div className="inline-block p-3 rounded-full bg-green-600/20 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold mb-3">Password Reset Successful!</h2>
                        <div className='bg-green-900/20 border border-green-500/30 rounded-lg py-4 px-6 mb-6'>
                            <p className="text-sm text-white">
                                {message || 'Your password has been reset successfully. You can now log in with your new password.'}
                            </p>
                        </div>
                        <Link
                            to="/login"
                            className="inline-block bg-gradient-to-r from-[#D5BB54]/90 to-[#977619] hover:bg-[#977619] py-2.5 px-6 text-sm rounded-full transition-all"
                            onClick={() => {
                                dispatch(clearError())
                                dispatch(clearSuccess())
                            }}
                        >
                            Log in now
                        </Link>
                    </div>
                )}
                {!success && (
                    <div className='hidden md:block'>
                        <img src={logo} alt='Reset illustration' className='h-full max-h-[40vh] object-cover' />
                    </div>
                )}
            </div>
        </section>
    )
}

export default ResetPassword