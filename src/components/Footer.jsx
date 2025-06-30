import React from 'react'
import AMGlobal from '../assets/footerLogo/AMGlobal.png'
import facebook from '../assets/footerLogo/facebook.png'
import googleplus from '../assets/footerLogo/googleplus.png'
import instagram from '../assets/footerLogo/instagram.png'
import linkedin from '../assets/footerLogo/linkedin.png'
import pinterest from '../assets/footerLogo/pinterest.png'
import rss from '../assets/footerLogo/rss.png'
import twitter from '../assets/footerLogo/twitter.png'
import youtube from '../assets/footerLogo/youtube.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <nav className='pb-4 md:pb-8 w-full bg-black'>
            {/* Main Footer Content */}
            <div className='flex flex-col md:flex-row justify-center md:justify-evenly gap-8 md:gap-4 items-center px-4 md:px-0 pb-5 pt-16 md:pt-28'>
                {/* Logo Section */}
                <div className='flex justify-center md:block'>
                    <img className='w-20 md:w-[55%] h-auto md:ml-14' src={AMGlobal} alt="AM Global" />
                </div>

                {/* Contact and Social Media Section */}
                <div className='text-center md:text-left md:mt-10 text-xs md:text-[0.7rem]'>
                    {/* Address */}
                    <p className='font-extralight p-4 md:p-6 md:ml-[7.5rem]'>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>

                    {/* Phone Numbers */}
                    <div className='font-extralight flex flex-col sm:flex-row justify-center gap-4 md:gap-[9.2rem] md:ml-14 mb-6 md:mb-0'>
                        <p className='ml-1'>(123) 456-7890</p>
                        <p>(123) 456-7890</p>
                    </div>

                    {/* Social Media Section */}
                    <div className='md:ml-[5rem] text-sm md:text-[0.75rem] font-extralight flex flex-col md:flex-row items-center md:justify-center gap-3 md:gap-[0.rem] p-3 md:p-7 md:pl-5'>
                        <h1 className='opacity-50 mb-1 md:mb-0 md:pt-3 ml-3'>Social Media</h1>
                        <div className='flex flex-wrap justify-center items-center gap-2 md:gap-5 ml-1'>
                            <Link><img src={facebook} alt="facebook" className='w-6 h-6 md:w-6 md:h-6 hover:w-5 hover:h-8 md:hover:w-10 md:hover:h-10 transition-all' /></Link>
                            <Link><img src={twitter} alt="twitter" className='w-6 h-6 md:w-6 md:h-6 hover:w-8 hover:h-8 md:hover:w-10 md:hover:h-10 transition-all' /></Link>
                            <Link><img src={linkedin} alt="linkedin" className='w-6 h-6 md:w-6 md:h-6 hover:w-8 hover:h-8 md:hover:w-10 md:hover:h-10 transition-all' /></Link>
                            <Link><img src={youtube} alt="youtube" className='w-6 h-6  md:w-6 md:h-6 hover:w-8 hover:h-8 md:hover:w-10 md:hover:h-10 transition-all' /></Link>
                            <Link><img src={instagram} alt="instagram" className='w-6 h-6 md:w-6 md:h-6 hover:w-8 hover:h-8 md:hover:w-10 md:hover:h-10 transition-all' /></Link>
                            <Link><img src={googleplus} alt="googleplus" className='w-6 h-6 md:w-6 md:h-6 hover:w-8 hover:h-8 md:hover:w-10 md:hover:h-10 transition-all' /></Link>
                            <Link><img src={pinterest} alt="pinterest" className='w-6 h-6 md:w-6 md:h-6 hover:w-8 hover:h-8 md:hover:w-10 md:hover:h-10 transition-all' /></Link>
                            <Link><img src={rss} alt="rss" className='w-6 h-6 md:w-6 md:h-6 hover:w-8 hover:h-8 md:hover:w-10 md:hover:h-10 transition-all' /></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className='mx-4 md:ml-28 md:mr-24 mt-5'>
                <hr className='md:ml-4 opacity-40' />

                {/* Mobile Layout */}
                <div className="block md:hidden px-1 py-2">
                    {/* Navigation Links - Mobile */}
                    <ul className="flex flex-wrap justify-center items-center gap-2 text-xs font-extralight mb-1">
                        <Link className='hover:font-normal'><li>ABOUT US</li></Link>
                        <Link className='hover:font-normal'><li>CONTACT US</li></Link>
                        <Link className='hover:font-normal'><li>HELP</li></Link>
                        <Link className='hover:font-normal'><li>PRIVACY POLICY</li></Link>
                        <Link className='hover:font-normal'><li>DISCLAIMER</li></Link>
                    </ul>

                    {/* Copyright - Mobile */}
                    <p className="opacity-60 text-center text-xs font-extralight font-Assistant">
                        Copyright &copy; 2024 <span className="font-extrabold">.</span> GM GLOABAL
                    </p>
                </div>

                {/* Desktop Layout - Hidden on Mobile */}
                <div className="hidden md:flex justify-between items-center px-4">
                    <ul className="flex justify-start items-center gap-[3.2rem] text-[0.7rem] font-extralight pt-7 pb-7">
                        <Link className='hover:font-normal'><li>ABOUT US</li></Link>
                        <Link className='hover:font-normal'><li>CONTACT US</li></Link>
                        <Link className='hover:font-normal'><li>HELP</li></Link>
                        <Link className='hover:font-normal'><li>PRIVACY POLICY</li></Link>
                        <Link className='hover:font-normal'><li>DISCLAIMER</li></Link>
                    </ul>

                    <p className="opacity-60 ml-4 text-[0.7rem] font-extralight font-Assistant">
                        Copyright &copy; 2024 <span className="font-extrabold">.</span> GM GLOABAL
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default Footer