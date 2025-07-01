import React, { useState } from 'react'
import bg from '../assets/proposal/bg.png'
import signupPic from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../thunk/authThunk'
import { clearError, clearSuccess } from '../redux/features/userSlice'

const Signup = () => {
    const [showPrivacyPolicyError, setShowPrivacyPolicyError] = useState(false)
    const [passwordError, setPasswordError] = useState('')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        country: '',
        jobTitle: '',
        receiveUpdates: false
    })

    const dispatch = useDispatch()

    const { loading, error, success, message } = useSelector(state => state.user)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))

        if (name === 'receiveUpdates' && checked) {
            setShowPrivacyPolicyError(false)
        }

        // Clear password error when user types
        if (name === 'password' || name === 'confirmPassword') {
            setPasswordError('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Check privacy policy agreement
        if (!formData.receiveUpdates) {
            setShowPrivacyPolicyError(true)
            return
        }

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            setPasswordError('Passwords do not match')
            return
        }

        // Prepare data for API
        const userData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            phone: formData.phone,
            country: formData.country,
            jobTitle: formData.jobTitle || undefined
        }

        dispatch(registerUser(userData))
    }

    return (
        <section className='relative bg-white/10 flex flex-col justify-around items-center h-[100vh] py-2 md:py-5'>
            <div className='absolute md:top-5 h-[100vh] z-10'><img src={bg} alt="" className="w-full h-full object-cover" /></div>
            <div className='ml-4 md:ml-0 md:text-center z-10'>
                <h1 className='text-xl md:text-[2rem] font-extrabold m-4'>Join Our Global Network</h1>
                <p className='md:text-center text-left md:ml-0 m-4 opacity-80 mb-2 md:text-base text-sm'>
                    Create your account to unlock personalized job opportunities and connect with leading employers worldwide.
                </p>
            </div>
            <div className='shadow-2xl shadow-black/5 p-3 md:p-5 rounded-xl flex md:flex-row flex-col-reverse justify-center items-center bg-[#272727] m-2 gap-3 md:gap-10 w-auto md:w-[70vw] md:h-[85vh] z-10'>
                <form onSubmit={handleSubmit} className='md:ml-10 w-[90vw] md:w-[35vw] h-full'>
                    <h1 className='text-lg md:text-xl font-semibold mb-1'>Sign Up</h1>
                    <p className='font-extralight opacity-90 md:w-[24vw] text-xs'>
                        Create your account to access personalized job search, application tracking, and career resources.
                    </p>

                    {/* field div */}
                    <div className='py-5 flex flex-col justify-center items-start gap-4 text-black'>
                        <div className='flex flex-row justify-start items-center gap-y-3 gap-x-1 w-full'>
                            <div className='w-1/2 flex'>
                                <span className=' text-red-600 mr-1'>*</span>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder='First Name'
                                    className='rounded w-full p-[0.4rem] placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                                    required
                                    disabled={loading}
                                />
                            </div>
                            <div className='w-1/2 flex'>
                                <span className=' text-red-600 mr-1'>*</span>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder='Last Name'
                                    className='rounded w-full p-[0.4rem] placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                                    required
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div className='flex w-full'>
                            <span className=' text-red-600 mr-1'>*</span>
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
                        </div>

                        <div className='flex justify-start items-center gap-4 w-full'>
                            <div className='w-1/2 flex'>
                                <span className=' text-red-600 mr-1'>*</span>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder='Password'
                                    className='rounded w-full p-[0.4rem] placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                                    required
                                    minLength={6}
                                    disabled={loading}
                                />
                            </div>

                            <div className='w-1/2 flex'>
                                <span className=' text-red-600 mr-1'>*</span>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder='Confirm Password'
                                    className='rounded w-full p-[0.4rem] placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                                    required
                                    disabled={loading}
                                />
                            </div>

                        </div>
                        {passwordError && (
                            <p className="text-xs text-red-500">{passwordError}</p>
                        )}

                        <div className='flex justify-start items-center gap-4 w-full'>
                            <div className='flex w-1/2'>
                                <span className=' text-red-600 mr-1'>*</span>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className='rounded w-full p-[0.4rem] text-xs border border-white/10 bg-white/10 text-white'
                                    required
                                    disabled={loading}
                                >
                                    <option value="" disabled className="bg-gray-800">Select Country</option>
                                    <option value="Pakistan" className="bg-gray-800">Pakistan</option>
                                    <option value="USA" className="bg-gray-800">United States</option>
                                    <option value="UK" className="bg-gray-800">United Kingdom</option>
                                    <option value="Canada" className="bg-gray-800">Canada</option>
                                    <option value="Australia" className="bg-gray-800">Australia</option>
                                    <option value="UAE" className="bg-gray-800">UAE</option>
                                    <option value="Other" className="bg-gray-800">Other</option>
                                </select>
                            </div>
                            <div className='flex w-1/2'>
                                <span className=' text-red-600 mr-1'>*</span>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder='Phone Number'
                                    className='rounded w-full p-[0.4rem] placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                                    required
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            placeholder='Current Job Title'
                            className='ml-3 rounded w-[98%] p-[0.4rem] placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                            disabled={loading}
                        />

                        <div className='ml-3 w-[98%]'>
                            <label className='text-xs text-white font-light mb-1 block'>Select your primary area of interest</label>
                            <select
                                className='rounded w-full p-[0.4rem] text-xs border border-white/10 bg-white/10 text-white'
                                disabled={loading}
                            >
                                <option value="" disabled selected className="bg-gray-800">Select Area of Interest</option>
                                <option value="IT" className="bg-gray-800">Information Technology</option>
                                <option value="Engineering" className="bg-gray-800">Engineering</option>
                                <option value="Finance" className="bg-gray-800">Finance & Accounting</option>
                                <option value="Healthcare" className="bg-gray-800">Healthcare</option>
                                <option value="Sales" className="bg-gray-800">Sales & Marketing</option>
                                <option value="Other" className="bg-gray-800">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className='relative ml-4'>
                        <input
                            type="checkbox"
                            id='privacy'
                            name="receiveUpdates"
                            checked={formData.receiveUpdates}
                            onChange={handleChange}
                            disabled={loading}
                            className='cursor-pointer appearance-none bg-transparent top-0 left-0 w-4 h-4 border border-white/30 rounded checked:after:content-["✓"] checked:after:text-white checked:after:text-xs checked:after:absolute checked:after:top-[2px] checked:after:left-[1px] checked:after:font-bold'
                        />
                        <label htmlFor="privacy" className='text-[0.55rem] font-extralight ml-2 inline-block opacity-85 align-text-top pt-1'>
                            I accept the <Link to="/terms" className={`text-[#D5BB54] hover:underline ${loading ? 'pointer-events-none opacity-50' : ''}`}
                                onClick={() => {
                                    dispatch(clearError());
                                    dispatch(clearSuccess());
                                }}
                            >Terms of Use</Link> and <Link to="/privacy" className={`text-[#D5BB54] hover:underline ${loading ? 'pointer-events-none opacity-50' : ''}`}
                                onClick={() => {
                                    dispatch(clearError());
                                    dispatch(clearSuccess());
                                }}
                            >Privacy Policy</Link>.
                        </label>

                        <br />

                        <label className={`text-[0.55rem] font-light px-4 ml-2 md:w-[28vw] opacity-100 text-red-500 ${showPrivacyPolicyError ? 'block' : 'hidden'}`}>
                            Please Agree to our Privacy Policy and Terms of Use to proceed.
                        </label>
                    </div>

                    {error && (
                        <div className="bg-red-900/20 border border-red-500/30 rounded-lg py-2 px-4 my-4">
                            <p className="text-xs text-red-400">{error}</p>
                        </div>
                    )}

                    {success && message && (
                        <div className="bg-green-900/20 border border-green-500/30 rounded-lg py-2 px-4 my-4">
                            <p className="text-xs text-green-400">{message}</p>
                        </div>
                    )}

                    <div className="flex flex-col justify-start items-start md:items-center gap-3 mt-3">
                        <button
                            type='submit'
                            disabled={loading}
                            className='ml-3 bg-gradient-to-r from-[#D5BB54]/90 to-[#977619] bg-[#977619] hover:bg-black py-2 md:w-[33vw] w-[89vw] text-xs rounded-full transition-all disabled:opacity-60 disabled:cursor-not-allowed'
                        >
                            {loading ? 'Signing up...' : 'Sign Up'}
                        </button>
                        <p className="text-xs text-white/70 md:ml-0 ml-5">
                            Already have an account? &nbsp;
                            <Link to="/login" className={`text-[#D5BB54] hover:underline ${loading ? 'pointer-events-none opacity-50' : ''}`}>Login here</Link>
                        </p>
                    </div>
                </form>
                <div className='m-2 hidden md:block'>
                    <img src={signupPic} alt="People working together" className='object-contain' />
                </div>
            </div>
        </section>
    )
}

export default Signup