import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import bg from '../assets/proposal/bg.png'
import signupPic from '../assets/proposal/formPic.png'
import { updateUserProfile } from '../thunk/userThunk'
import { clearError, clearSuccess } from '../redux/features/userSlice'
import ChangePasswordModal from '../components/ChangePasswordModal'
import DeleteAccountModal from '../components/DeleteAccountModal'

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

const UserProfile = () => {
    const { user, error, success, loading, message } = useSelector(state => state.user)
    const [isEditing, setIsEditing] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        currentJobTitle: '',
        areaOfInterest: ''
    })

    useEffect(() => {
        if (user) {
            setUserData({
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                email: user.email || '',
                phone: user.phone || '',
                country: user.country || '',
                currentJobTitle: user.currentJobTitle || '',
                areaOfInterest: user.areaOfInterest || ''
            })
        }
    }, [user])

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleEdit = () => {
        setIsEditing(true)
        dispatch(clearSuccess());
        dispatch(clearError());
    }

    const handleCancel = () => {
        setIsEditing(false)
        dispatch(clearSuccess());
        dispatch(clearError());
        if (user) {
            setUserData({
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                email: user.email || '',
                phone: user.phone || '',
                country: user.country || '', currentJobTitle: user.currentJobTitle || '',
                areaOfInterest: user.areaOfInterest || ''
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(clearSuccess());
        dispatch(clearError());

        const changedFields = Object.entries(userData).reduce((acc, [key, value]) => {
            if (value !== user[key]) {
                acc[key] = value;
            }
            return acc;
        }, {});

        if (Object.keys(changedFields).length > 0) {
            try {
                await dispatch(updateUserProfile(changedFields)).unwrap();

                setIsEditing(false);
            } catch (err) {
                console.error('Failed to update profile:', err);
            }
        } else {
            setIsEditing(false);
        }
    }

    return (
        <div>
            {/* Inject animation styles */}
            <style dangerouslySetInnerHTML={{ __html: modalAnimationStyle }} />

            <section className='relative bg-white/10 flex flex-col justify-around items-center md:min-h-[120vh] h-auto py-20'>
                <div className='absolute md:top-5 md:h-[120vh] z-10'><img src={bg} alt="" className="w-full h-full object-cover" /></div>
                <div className='ml-4 md:ml-0 md:text-center z-10'>
                    <h1 className='text-xl md:text-[2.5rem] font-extrabold m-4 md:m-2 md:mb-8'>Your Profile</h1>
                    <p className='md:text-center text-left md:ml-0 m-4 opacity-80 md:w-[40vw] md:mb-20 mb-2'>
                        View and manage your account information to keep your profile up-to-date.
                    </p>
                </div>
                <div className='shadow-2xl shadow-black/5 md:p-10 p-3 rounded-xl flex md:flex-row flex-col-reverse justify-center items-center bg-[#272727] m-2 gap-3 md:gap-10 w-auto md:w-[80vw] h-auto md:h-auto z-10'>
                    <form onSubmit={handleSubmit} className='md:ml-10 md:w-[38vw] md:h-full'>
                        <div className="flex justify-between items-center mb-4">
                            <h1 className='text-lg md:text-xl font-semibold mb-1'>Profile Information</h1>
                            {!isEditing && (
                                <button
                                    type="button"
                                    onClick={handleEdit}
                                    className='text-xs bg-themeYDark text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all'
                                >
                                    Edit Profile
                                </button>
                            )}
                        </div>
                        <p className='font-extralight opacity-90 md:w-[24vw] text-xs'>
                            Your personal information and preferences help us provide you with relevant job opportunities.
                        </p>

                        {/* field div */}
                        <div className='py-7 flex flex-col justify-center items-start gap-4 text-black'>
                            <div className='flex justify-start items-center gap-4 w-full'>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={userData.firstName}
                                    onChange={handleChange}
                                    placeholder='First Name'
                                    className='rounded w-1/2 p-[0.4rem] placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                                    disabled={!isEditing || loading}
                                    readOnly={!isEditing}
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={userData.lastName}
                                    onChange={handleChange}
                                    placeholder='Last Name'
                                    className='rounded w-1/2 p-[0.4rem] placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                                    disabled={!isEditing || loading}
                                    readOnly={!isEditing}
                                />
                            </div>

                            <input
                                type="email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                                placeholder='Email Address'
                                className='rounded w-full p-[0.4rem] placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                                disabled={true} // Email cannot be changed
                                readOnly={true}
                            />

                            <div className='flex justify-start items-center gap-4 w-full'>
                                <select
                                    name="country"
                                    value={userData.country}
                                    onChange={handleChange}
                                    className='rounded w-1/2 p-[0.4rem] text-xs border border-white/10 bg-white/10 text-white'
                                    disabled={!isEditing || loading}
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
                                <input
                                    type="tel"
                                    name="phone"
                                    value={userData.phone}
                                    onChange={handleChange}
                                    placeholder='Phone Number'
                                    className='rounded w-1/2 p-[0.4rem] placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                                    disabled={!isEditing || loading}
                                    readOnly={!isEditing}
                                />
                            </div>

                            <input
                                type="text"
                                name="currentJobTitle"
                                value={userData.currentJobTitle}
                                onChange={handleChange}
                                placeholder='Current Job Title'
                                className='rounded w-full p-[0.4rem] placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                                disabled={!isEditing || loading}
                                readOnly={!isEditing}
                            />

                            <div className='w-full'>
                                <label className='text-xs text-white font-light mb-1 block'>Area of interest</label>
                                <select
                                    name="areaOfInterest"
                                    value={userData.areaOfInterest}
                                    onChange={handleChange}
                                    className='rounded w-full p-[0.4rem] text-xs border border-white/10 bg-white/10 text-white'
                                    disabled={!isEditing || loading}
                                >
                                    <option value="" disabled className="bg-gray-800">Select Area of Interest</option>
                                    <option value="IT" className="bg-gray-800">Information Technology</option>
                                    <option value="Engineering" className="bg-gray-800">Engineering</option>
                                    <option value="Finance" className="bg-gray-800">Finance & Accounting</option>
                                    <option value="Healthcare" className="bg-gray-800">Healthcare</option>
                                    <option value="Sales" className="bg-gray-800">Sales & Marketing</option>
                                    <option value="Other" className="bg-gray-800">Other</option>
                                </select>
                            </div>
                        </div>

                        {isEditing && error && (
                            <div className="bg-red-900/20 border border-red-500/30 rounded-lg py-2 px-4 my-4">
                                <p className="text-xs text-red-400">{error}</p>
                            </div>
                        )}

                        {isEditing && success && (
                            <div className="bg-green-900/20 border border-green-500/30 rounded-lg py-2 px-4 my-4">
                                <p className="text-xs text-green-400">{message || 'Profile updated successfully!'}</p>
                            </div>
                        )}

                        {isEditing && (
                            <div className="flex justify-start items-center gap-3 mt-6">
                                <button
                                    type='submit'
                                    disabled={loading}
                                    className='bg-gradient-to-r from-[#D5BB54]/90 to-[#977619] bg-[#977619] hover:bg-black py-2 px-4 text-xs rounded-full transition-all disabled:opacity-60 disabled:cursor-not-allowed'
                                >
                                    {loading ? 'Updating...' : 'Save Changes'}
                                </button>
                                <button
                                    type='button'
                                    onClick={handleCancel}
                                    disabled={loading}
                                    className='bg-transparent border border-white/30 hover:border-white/50 py-2 px-4 text-xs rounded-full transition-all disabled:opacity-60 disabled:cursor-not-allowed'
                                >
                                    Cancel
                                </button>
                            </div>
                        )}

                        {/* Recent Activity Section */}
                        <div className="mt-6 border-t border-white/10 pt-4">
                            <h2 className="text-sm font-medium mb-2">Recent Activity</h2>
                            <div className="bg-white/5 rounded-lg p-3">
                                <ul className="space-y-2 text-xs">
                                    <li className="flex justify-between items-center">
                                        <span>Application submitted for Senior Developer</span>
                                        <span className="text-themeYDark">2 days ago</span>
                                    </li>
                                    <li className="flex justify-between items-center border-t border-white/5 pt-2">
                                        <span>Profile viewed by AM Global Recruiter</span>
                                        <span className="text-themeYDark">5 days ago</span>
                                    </li>
                                    <li className="flex justify-between items-center border-t border-white/5 pt-2">
                                        <span>Job search for "Frontend Developer"</span>
                                        <span className="text-themeYDark">1 week ago</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 border-t border-white/10 pt-4">
                            <h2 className="text-sm font-medium mb-2">Account Settings</h2>
                            <button
                                type="button"
                                className="text-xs text-themeYDark hover:underline mr-4 disabled:hover:opacity-60"
                                disabled={isEditing || loading}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowChangePasswordModal(true);
                                    dispatch(clearSuccess());
                                    dispatch(clearError());
                                }}
                            >
                                Change Password
                            </button>

                            <button
                                type="button"
                                disabled={isEditing || loading}
                                className="text-xs text-red-400 hover:underline disabled:hover:opacity-60"
                                onClick={() => {
                                    setShowDeleteModal(true);
                                    dispatch(clearSuccess());
                                    dispatch(clearError());
                                }}
                            >
                                Delete Account
                            </button>
                        </div>
                        {error && (
                            <div className="mt-4 bg-red-900/20 border border-red-500/30 rounded-lg py-2 px-4">
                                <p className="text-red-400 text-xs">{error}</p>
                            </div>
                        )}

                        {success && (
                            <div className="mt-4 bg-green-900/20 border border-green-500/30 rounded-lg py-2 px-4">
                                <p className="text-green-400 text-xs">{message}</p>
                            </div>
                        )}
                    </form>
                    <div className='m-3'>
                        <img src={signupPic} alt="Profile illustration" className='h-full max-h-[92vh] object-contain' />
                    </div>
                </div>
            </section>

            <ChangePasswordModal
                isOpen={showChangePasswordModal}
                onClose={useCallback(() => setShowChangePasswordModal(false), [])}
            />
            <DeleteAccountModal
                isOpen={showDeleteModal}
                onClose={useCallback(() => setShowDeleteModal(false), [])}
            />
        </div>
    )
}

export default UserProfile