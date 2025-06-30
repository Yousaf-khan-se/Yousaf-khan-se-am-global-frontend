import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../thunk/authThunk'
import logo from '../assets/logo.png'
import profileLogo from '../assets/profileLogo.png'
import { clearError, clearSuccess, setByPassUserLoad } from '../redux/features/userSlice'

const t_size = 0.6; // in rem

const ContactButton = ({ mobile = false }) => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/proposal');
    }
    return (
        <button className={`text-[${t_size}rem] relative overflow-hidden text-[#EDD569] border p-2 pr-7 pl-7 ${mobile ? '' : 'md:ml-48'} border-themeY/50 rounded transition-colors duration-300 group`} onClick={handleContactClick}>
            <span className="absolute inset-0 w-full h-full bg-themeYDark scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Us</span>
        </button>
    )
}

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuthenticated, user, loading } = useSelector(state => state.user)
    const [userFirstName, setUserFirstName] = useState('User');

    useEffect(() => {
        if (!loading && isAuthenticated && user) {
            setUserFirstName(user.firstName)
            console.log('Nav: User name updated to', user.firstName)
        } else if (isAuthenticated && !user) {
            console.log('Nav: User authenticated but no user data available')
        }

        dispatch(setByPassUserLoad(false));
    }, [user, isAuthenticated, loading, dispatch]);

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser()).unwrap();
            dispatch(clearError());
            dispatch(clearSuccess());
            await dispatch(setByPassUserLoad(true));
            console.log('Nav: Setting byPassUserLoad to true');
            setProfileDropdownOpen(false);
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }

    const handleProfileClick = () => {
        dispatch(clearError());
        dispatch(clearSuccess());
        setProfileDropdownOpen(false);
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileDropdownOpen && !event.target.closest('.profile-dropdown-container')) {
                setProfileDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [profileDropdownOpen]);

    // Close profile dropdown when mobile menu is closed
    useEffect(() => {
        if (!menuOpen) {
            setProfileDropdownOpen(false);
        }
    }, [menuOpen]);

    return (
        <nav className='fixed w-full flex justify-between items-center p-4 md:p-10 bg-black/70 z-30'>
            <img src={logo} alt='Company Logo' className='h-8 md:pr-28' />
            {/* Desktop Nav */}
            <ul className={`hidden md:flex justify-center gap-6 lg:gap-10 text-[${t_size}rem]`}>
                <NavLink to="/" className='hover:underline hover:decoration-themeYDark decoration-themeYDark underline-offset-4 [&.active]:underline [&.active]:decoration-themeYDark' end><li>Home</li></NavLink>
                <NavLink to="/about" className='hover:underline hover:decoration-themeYDark decoration-themeYDark underline-offset-4 [&.active]:underline [&.active]:decoration-themeYDark'><li>About</li></NavLink>
                <NavLink to="/services" className='hover:underline hover:decoration-themeYDark decoration-themeYDark underline-offset-4 [&.active]:underline [&.active]:decoration-themeYDark'><li>Our Services</li></NavLink>
                <NavLink to="/whyus" className='hover:underline hover:decoration-themeYDark decoration-themeYDark underline-offset-4 [&.active]:underline [&.active]:decoration-themeYDark'><li>Why Us</li></NavLink>
                <NavLink to="/industries" className='hover:underline hover:decoration-themeYDark decoration-themeYDark underline-offset-4 [&.active]:underline [&.active]:decoration-themeYDark'><li>Industries</li></NavLink>
            </ul>

            {/* Desktop Auth Section */}
            <div className='hidden md:flex items-center gap-4'>
                {isAuthenticated ? (
                    <>
                        <ContactButton />
                        <div className="relative profile-dropdown-container">
                            <button
                                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                                className="flex items-center gap-2 transition-all ease-in-out duration-300 hover:scale-110 focus:outline-none"
                            >
                                <img src={profileLogo} alt="Profile" className="w-6 h-6 rounded-full" />
                                <span className="text-white text-xs">{loading ? 'loading...' : userFirstName}</span>
                                <svg
                                    className={`w-4 h-4 text-white transition-transform duration-200 ${profileDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {profileDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-40">
                                    <div className="py-1">
                                        <NavLink
                                            to="/user-profile"
                                            onClick={handleProfileClick}
                                            className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors duration-200"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            Manage Profile
                                        </NavLink>
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center gap-3 w-full px-4 py-2 text-sm text-[#EDD569] hover:bg-gray-700 transition-colors duration-200"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" className="text-white hover:text-[#EDD569] text-xs">Login</NavLink>
                        <NavLink to="/signup" className="text-white hover:text-[#EDD569] text-xs">Signup</NavLink>
                        <ContactButton />
                    </>
                )}
            </div>

            {/* Mobile Right Section */}
            <div className="md:hidden flex items-center gap-2">
                {/* Contact Us Button for Mobile */}
                <div className="scale-75">
                    <ContactButton mobile={true} />
                </div>

                {/* Profile Dropdown for Mobile (when authenticated) */}
                {isAuthenticated && (
                    <div className="relative profile-dropdown-container">
                        <button
                            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                            className="flex items-center gap-1 transition-all ease-in-out duration-300 focus:outline-none"
                        >
                            <img src={profileLogo} alt="Profile" className="w-6 h-6 rounded-full" />
                            <svg
                                className={`w-3 h-3 text-white transition-transform duration-200 ${profileDropdownOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Mobile Profile Dropdown Menu */}
                        {profileDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-44 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-50">
                                <div className="py-1">
                                    <div className="px-4 py-2 text-xs text-gray-300 border-b border-gray-600">
                                        {userFirstName}
                                    </div>
                                    <NavLink
                                        to="/user-profile"
                                        onClick={handleProfileClick}
                                        className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors duration-200"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        Manage Profile
                                    </NavLink>
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-3 w-full px-4 py-2 text-sm text-[#EDD569] hover:bg-gray-700 transition-colors duration-200"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Hamburger Icon */}
                {!menuOpen && (
                    <button className='z-20 ml-2' onClick={() => setMenuOpen(!menuOpen)} aria-label="Open Menu">
                        <svg className='w-8 h-8 text-themeYDark' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                    </button>
                )}
            </div>
            {/* Mobile Sliding Menu */}
            <div className={`fixed top-0 right-0 h-full w-2/3 bg-black shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden text-white`}>
                <button className='absolute top-4 right-4' onClick={() => setMenuOpen(false)} aria-label="Close Menu">
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                    </svg>
                </button>
                <ul className='flex flex-col items-start gap-6 p-8 pt-16'>
                    <NavLink to="/" onClick={() => setMenuOpen(false)} className='hover:underline hover:decoration-themeYDark'><li>Home</li></NavLink>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)} className='hover:underline hover:decoration-themeYDark'><li>About</li></NavLink>
                    <NavLink to="/services" onClick={() => setMenuOpen(false)} className='hover:underline hover:decoration-themeYDark'><li>Our Services</li></NavLink>                    <NavLink to="/whyus" onClick={() => setMenuOpen(false)} className='hover:underline hover:decoration-themeYDark'><li>Why Us</li></NavLink>
                    <NavLink to="/industries" onClick={() => setMenuOpen(false)} className='hover:underline hover:decoration-themeYDark'><li>Industries</li></NavLink>

                    {/* Auth links for mobile */}
                    {!isAuthenticated && (
                        <div className="border-t border-white/20 w-full my-2 pt-2">
                            <NavLink to="/login" onClick={() => setMenuOpen(false)} className='block mb-2 text-[#EDD569] hover:underline text-xs'><li>Login</li></NavLink>
                            <NavLink to="/signup" onClick={() => setMenuOpen(false)} className='block mb-2 text-[#EDD569] hover:underline text-xs'><li>Sign Up</li></NavLink>
                        </div>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Nav