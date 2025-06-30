import React, { useState } from 'react'
import bg from '../assets/proposal/bg.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { forgetPassword } from '../thunk/authThunk'
import { clearError, clearSuccess } from '../redux/features/userSlice'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const { loading, error, success } = useSelector(state => state.user)
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(forgetPassword({ email }));
        dispatch(clearError())
        dispatch(clearSuccess())
    }

    return (
        <div>
            <section className='relative flex flex-col justify-around items-center min-h-[80vh] py-16'>
                <div className='absolute md:top-0 h-full w-full'><img src={bg} alt="" className="w-full h-full object-cover opacity-70" /></div>
                <div className='absolute inset-0 bg-black/[0.7]'></div>

                <div className='z-10 max-w-md w-[90%] px-6 py-10 bg-[#272727] rounded-lg shadow-xl'>
                    <h1 className='text-xl md:text-2xl font-bold mb-6 text-center'>Reset Your Password</h1>

                    {!success ? (
                        <>
                            <p className='text-sm text-white/80 mb-8 text-center'>
                                Enter your email address and we'll send you instructions to reset your password.
                            </p>
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                {error && (
                                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg py-2 px-4">
                                        <p className="text-xs text-red-400">{error}</p>
                                    </div>
                                )}

                                <div>
                                    <label htmlFor="email" className='text-xs font-light mb-1 block'>Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Enter your email address'
                                        className='rounded w-full p-3 text-sm border border-white/10 bg-white/10 text-white'
                                        required
                                        disabled={loading}
                                    />
                                </div>

                                <button
                                    type='submit'
                                    disabled={loading}
                                    className='w-full bg-gradient-to-r from-[#D5BB54]/90 to-[#977619] bg-[#977619] hover:bg-black py-2.5 text-sm rounded-full transition-all disabled:opacity-60 disabled:cursor-not-allowed'
                                >
                                    {loading ? 'Sending...' : 'Send Reset Instructions'}
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <Link
                                    to="/login"
                                    className={`text-xs text-[#D5BB54] hover:underline ${loading ? 'pointer-events-none opacity-50' : ''}`}
                                    onClick={() => {
                                        dispatch(clearError())
                                        dispatch(clearSuccess())
                                    }}
                                >
                                    Return to Login
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="text-center">
                            <div className="bg-green-900/20 border border-green-500/30 rounded-lg py-4 px-6 mb-6">
                                <p className="text-sm text-white">
                                    If an account exists with email <span className="font-semibold">{email}</span>, you will receive password reset instructions shortly.
                                </p>
                            </div>

                            <Link
                                to="/login"
                                className="text-[#D5BB54] text-sm hover:underline"
                                onClick={() => {
                                    dispatch(clearError())
                                    dispatch(clearSuccess())
                                }}
                            >
                                Return to Login
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default ForgotPassword
