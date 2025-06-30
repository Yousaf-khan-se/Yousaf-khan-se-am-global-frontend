import React, { useState } from 'react'
import bg from '../assets/proposal/bg.png'
import loginPic from '../assets/logo.png'
import { loginUser } from '../thunk/authThunk'
import { clearError, clearSuccess, setByPassUserLoad } from '../redux/features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    })
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.user)

    const handleChange = (e) => {
        // e.preventDefault();

        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(loginUser({
            email: formData.email,
            password: formData.password
        }))

        dispatch(setByPassUserLoad(false));
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <section className='relative bg-white/45 flex flex-col justify-around items-center min-h-[100vh] h-[100vh] py-5'>
            <div className='absolute z-10 inset-0 h-full w-full'><img src={bg} alt="" className="w-full h-full object-cover" /></div>
            <div className='absolute inset-0 h-[115vh] md:h-full w-full bg-black/[0.7]'></div>
            <div className='ml-4 md:ml-0 md:text-center z-10'>
                <h1 className='text-xl md:text-[2.5rem] font-extrabold m-4 md:m-2 md:mb-6'>Welcome Back</h1>
                <p className='md:text-center text-left md:ml-0 m-4 opacity-80 md:w-[30vw] md:mb-10 mb-2'>
                    Login to access your personalized dashboard, saved jobs, and application status.
                </p>
            </div>

            <div className='md:ml-36 z-20 shadow-2xl shadow-black/5 md:p-10 p-3 rounded-xl flex md:flex-row flex-col-reverse justify-center items-center bg-[#272727] m-2 gap-3 md:gap-10 w-[90vw] md:w-[60vw] h-auto md:h-[80vh]'>
                <div className='hidden md:block'>
                    <img src={loginPic} alt="AM Global" className='h-full w-auto object-cover' />
                </div>
                <form onSubmit={handleSubmit} className='md:ml-2 md:w-[35vw] w-full'>
                    <h1 className='text-lg md:text-xl font-semibold mb-1'>Login</h1>
                    <p className='font-extralight opacity-90 md:w-[24vw] text-xs mb-6'>
                        Enter your credentials to access your account and explore global opportunities.
                    </p>

                    {/* field div */}
                    <div className='py-4 flex flex-col justify-center items-start gap-4 text-black'>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email Address'
                            className='rounded w-full p-[0.4rem] placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                            required
                            disabled={loading}
                        />

                        <div className='relative w-full'>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder='Password'
                                className='rounded w-full p-[0.4rem] pr-10 placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                                required
                                disabled={loading}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-white/60 hover:text-white"
                                disabled={loading}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-between items-center mb-6'>
                        {/* <div className='relative'>
                            <input
                                type="checkbox"
                                id='rememberMe'
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                                disabled={loading}
                                className='absolute appearance-none bg-transparent top-1 left-0 w-4 h-4 border border-white/30 rounded checked:after:content-["✓"] checked:after:text-white checked:after:text-xs checked:after:absolute checked:after:top-[-2px] checked:after:left-[1px] checked:after:font-bold'
                            /> <label htmlFor="rememberMe" className='text-xs text-white/70 ml-6'>Remember Me</label>
                        </div> */}

                        <Link
                            to="/forgot-password"
                            className={`text-xs text-[#D5BB54] hover:underline ${loading ? 'pointer-events-none opacity-50' : ''}`}
                            onClick={() => {
                                dispatch(clearError());
                                dispatch(clearSuccess());
                            }}
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {error && (
                        <div className="bg-red-900/20 border border-red-500/30 rounded-lg py-2 px-4 mb-4">
                            <p className="text-xs text-red-400">{error}</p>
                        </div>
                    )}

                    <div className="flex flex-col justify-start items-start md:items-center gap-3">
                        <button
                            type='submit'
                            disabled={loading}
                            className='bg-gradient-to-r from-[#D5BB54]/90 to-[#977619] bg-[#977619] hover:bg-black py-2 md:w-[30vw] w-[83vw] text-xs rounded-full transition-all disabled:opacity-60 disabled:cursor-not-allowed'
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                        <p className="text-xs text-white/70">
                            Don't have an account? &nbsp;
                            <Link to="/signup" className={`text-[#D5BB54] hover:underline ${loading ? 'pointer-events-none opacity-50' : ''}`}
                                onClick={() => {
                                    dispatch(clearError());
                                    dispatch(clearSuccess());
                                }}
                            >Sign up here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login