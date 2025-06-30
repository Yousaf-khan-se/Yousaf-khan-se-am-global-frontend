import React from 'react'
import { useNavigate } from 'react-router-dom'
import homeSection1Pattern from '../assets/homePageAssets/homeSection1Pattern.png'
import section2Img from '../assets/homePageAssets/section2Img.png'
import star from '../assets/homePageAssets/star.png'
import section5Pattern from '../assets/homePageAssets/section5Assets/section5Pattern.png'
import section7Background from '../assets/homePageAssets/section7Background.png'

const StartApplyingBtn = ({ hover_c, txt, url }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (url) {
            navigate(url);
        }
    }

    return (
        <button onClick={handleClick} className={`font-extrabold mt-2 text-xs bg-white text-black p-2 md:p-3 px-6 md:px-10 transition-all ${hover_c} hover:text-white ease-in-out duration-500`}>{txt}</button>
    )
}

const About = () => {
    return (
        <div className="w-full overflow-x-hidden">
            {/* Hero Section */}
            <section className='w-full bg-gray-900 py-16 md:py-24 mobile-full-width'>
                <div className='container mx-auto px-4 text-center'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-6 text-white'>About AM Global</h1>
                    <p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
                        Leading provider of HR outsourcing and manpower solutions across Gulf countries, India, Pakistan, and the USA.
                    </p>
                    <StartApplyingBtn hover_c='hover:bg-themeYDark' txt={'Learn More'} url='/services' />
                </div>
            </section>

            {/* Company Story Section */}
            <section
                className="bg-cover bg-center h-auto w-full pb-20 md:pb-40 pt-16 md:pt-20 flex flex-col items-center justify-center px-4 md:px-0 mobile-full-width"
                style={{ backgroundImage: `url(${homeSection1Pattern})` }}
            >
                <div className='max-w-6xl mx-auto'>
                    <div className='text-center mb-16'>
                        <h1 className='text-themeYDark/85 text-md sm:text-xl md:text-[2rem] font-semibold p-2'>Our Story</h1>
                        <h2 className='text-xl sm:text-2xl md:text-[2.4rem] text-white font-semibold p-2 pb-0'>Building Success Through Partnership</h2>
                    </div>

                    <div className='grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
                        <div className='text-white'>
                            <h3 className='text-xl md:text-2xl font-semibold mb-4 text-themeY'>Our Foundation</h3>
                            <p className='text-sm md:text-base mb-6 font-light leading-relaxed'>
                                AM Global was founded with a vision to revolutionize HR outsourcing and manpower solutions.
                                With over 5 years of experience, we have established ourselves as a trusted partner for
                                businesses seeking reliable, efficient, and compliant HR services.
                            </p>
                            <p className='text-sm md:text-base font-light leading-relaxed'>
                                Our journey began with a simple mission: to help businesses focus on their core competencies
                                while we handle their HR complexities with precision and expertise.
                            </p>
                        </div>

                        <div className='text-white'>
                            <h3 className='text-xl md:text-2xl font-semibold mb-4 text-themeY'>Our Growth</h3>
                            <p className='text-sm md:text-base mb-6 font-light leading-relaxed'>
                                Today, AM Global serves over 20+ industries with a resource pool of 1000+ professionals.
                                We have built lasting partnerships with 20+ businesses and continue to expand our reach
                                across multiple countries.
                            </p>
                            <p className='text-sm md:text-base font-light leading-relaxed'>
                                Our team's combined experience of 10+ years in the staffing business ensures that we
                                deliver exceptional results tailored to each client's unique requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className='mb-8 md:mb-16 mt-16 md:mt-[7.1rem] px-4 md:px-0 w-full mobile-full-width'>
                <div className='max-w-6xl mx-auto'>
                    <div className='h-auto flex flex-col gap-y-8 md:gap-y-10 justify-center content-center md:flex-row'>
                        <div className='flex-1 ml-0 md:ml-4 flex flex-col items-center md:items-start'>
                            <img src={section2Img} alt="" className='mt-0 w-full max-w-[300px] md:max-w-none'
                                style={{ scale: 0.8 }} />
                            <p className='relative text-white text-xs -top-[13rem] -left-[6.6rem] md:text-left md:origin-top-left md:left-[4.9rem] -rotate-90 md:-top-[17rem] tracking-wide md:tracking-[0.32rem] font-semibold md:text-[1.1rem] mt-4 md:mt-0'>Excellence in Service</p>
                        </div>

                        <div className='flex-1 mt-4 md:mt-[4.3rem] px-0'>
                            <h1 className='text-themeYTwo/85 py-2 px-3 md:p-2 text-left text-base md:text-[1.12rem] mb-1'>Our Mission</h1>
                            <h2 className='font-bold text-md md:text-4xl px-3 md:p-1 mr-4 md:mr-20 text-left leading-tight md:leading-[3.1rem]'>Empowering businesses through exceptional HR solutions</h2>

                            <div className='text-left mt-6'>
                                <div className='border-l-2 border-[#CEB551] ml-0 md:ml-2 pl-3 md:pl-0'>
                                    <p className='pl-0 md:pl-7 mb-6 md:mb-8 mt-4 text-sm -tracking-tighter font-[180] text-balance'>
                                        Our mission is to provide comprehensive HR outsourcing services that enable businesses to focus on their core operations while we handle their human resource needs with expertise and efficiency.
                                    </p>
                                    <p className='pl-0 md:pl-7 text-sm md:text-base leading-5 text-balance'>
                                        We are committed to delivering tailored solutions that meet the unique requirements of each client, ensuring compliance, reducing costs, and driving sustainable growth.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row mt-8 md:mt-14 gap-4 md:gap-0'>
                                <div className='text-left'>
                                    <h2 className='text-[#CEB551] flex gap-2 md:gap-5 ml-0 md:ml-1 pb-2 text-sm font-semibold justify-start'>
                                        <img src={star} alt="" className='h-2 w-2 md:h-3 md:w-3 mt-1' /> Our Vision
                                    </h2>
                                    <p className='pl-0 md:pl-9 pr-4 md:pr-[7.5rem] text-center md:text-left text-xs md:text-[0.65rem]'>
                                        To be the leading HR solutions provider, recognized for innovation, reliability, and excellence in service delivery.
                                    </p>
                                </div>
                                <div className='text-left'>
                                    <h2 className='text-[#CEB551] flex gap-2 md:gap-5 ml-0 md:ml-1 pb-2 text-sm font-semibold justify-start'>
                                        <img src={star} alt="" className='h-2 w-2 md:h-3 md:w-3 mt-1' /> Our Values
                                    </h2>
                                    <p className='pl-[0.7rem] md:pl-9 pr-4 md:pr-[3.45rem] text-left text-xs md:text-[0.65rem]'>
                                        Integrity, excellence, innovation, and client-centricity form the foundation of everything we do.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team & Leadership Section */}
            <section className='bg-white/[0.13] h-auto flex flex-col justify-center items-center pt-8 md:pt-14 pb-16 md:pb-32 px-4 md:px-0 w-full'>
                <div className='max-w-6xl mx-auto'>
                    <div className='text-center mb-16'>
                        <h1 className='font-bold text-2xl md:text-3xl xl:text-[2.3rem] pb-4'>Our Leadership</h1>
                        <p className='text-sm max-w-2xl mx-auto'>
                            Our experienced leadership team brings together decades of expertise in HR, staffing, and business management to guide our organization towards continued success.
                        </p>
                    </div>

                    <div className='grid md:grid-cols-3 gap-8'>
                        <div className='bg-gradient-to-br from-white/10 to-black bg-black/50 border border-white/15 rounded-xl p-6 text-center'>
                            <div className='w-20 h-20 bg-themeY/20 rounded-full mx-auto mb-4 flex items-center justify-center'>
                                <span className='text-2xl font-bold text-themeY'>CEO</span>
                            </div>
                            <h3 className='text-lg font-semibold mb-2'>Executive Leadership</h3>
                            <p className='text-sm font-light'>Strategic vision and operational excellence driving our company's growth and success.</p>
                        </div>

                        <div className='bg-gradient-to-br from-themeYTwo to-themeYDarkTwo bg-black/50 border border-white/15 rounded-xl p-6 text-center'>
                            <div className='w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center'>
                                <span className='text-2xl font-bold text-white'>HR</span>
                            </div>
                            <h3 className='text-lg font-semibold mb-2'>HR Experts</h3>
                            <p className='text-sm font-light'>Seasoned professionals with deep expertise in human resources and talent management.</p>
                        </div>

                        <div className='bg-gradient-to-br from-white/10 to-black bg-black/50 border border-white/15 rounded-xl p-6 text-center'>
                            <div className='w-20 h-20 bg-themeY/20 rounded-full mx-auto mb-4 flex items-center justify-center'>
                                <span className='text-2xl font-bold text-themeY'>OPS</span>
                            </div>
                            <h3 className='text-lg font-semibold mb-2'>Operations Team</h3>
                            <p className='text-sm font-light'>Dedicated professionals ensuring seamless service delivery and client satisfaction.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Presence Section */}
            <section className="relative bg-cover bg-center h-auto w-full pb-16 md:pb-28 pt-12 md:pt-32 flex flex-col justify-evenly content-evenly px-4 md:px-0"
                style={{ backgroundImage: `url(${section5Pattern})` }}
            >
                <div className="absolute inset-0 bg-white/15"></div>
                <div className='max-w-6xl mx-auto text-center'>
                    <div className='p-6 md:p-14'>
                        <h1 className='text-2xl md:text-4xl font-semibold pb-2 md:p-3'>Global Presence</h1>
                        <p className='text-md md:text-2xl font-light mb-12'>Serving clients across multiple countries with local expertise</p>
                    </div>

                    <div className='grid md:grid-cols-4 gap-6 mb-8'>
                        <div className='bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                            <h3 className='text-xl font-bold text-themeY mb-2'>UAE</h3>
                            <p className='text-sm'>Dubai Main Office & JAFZA</p>
                        </div>
                        <div className='bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                            <h3 className='text-xl font-bold text-themeY mb-2'>Gulf Countries</h3>
                            <p className='text-sm'>Comprehensive coverage across GCC</p>
                        </div>
                        <div className='bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                            <h3 className='text-xl font-bold text-themeY mb-2'>India & Pakistan</h3>
                            <p className='text-sm'>Strong presence in South Asia</p>
                        </div>
                        <div className='bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-white/20'>
                            <h3 className='text-xl font-bold text-themeY mb-2'>USA</h3>
                            <p className='text-sm'>Expanding operations in North America</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Stats */}
            <section className='relative bg-cover bg-center h-auto w-full pb-12 md:pb-20 pt-12 md:pt-20 flex flex-col justify-center items-center gap-6 md:gap-10 px-4 md:px-0'
                style={{ backgroundImage: `url(${section7Background})` }}>
                <div className='absolute inset-0 bg-themeYDark bg-gradient-to-b from-themeYTwo to-themeYDarkTwo opacity-50 -z-10'></div>
                <h1 className='text-xl md:text-2xl xl:text-4xl font-bold md:text-center'>About AM Global <span className='bg-black px-2'>by Numbers</span></h1>
                <p className='mx-auto max-w-2xl md:text-center text-sm px-5 md:px-4'>Our commitment to excellence is reflected in our growth and the trust our clients place in us.</p>
                <div className='flex flex-col md:flex-row w-full max-w-60 md:max-w-6xl justify-evenly items-center content-center bg-[#2F2F2F] rounded-xl p-6 md:p-8 pb-8 md:pb-14 gap-6 md:gap-4'>
                    <div className='w-full md:w-60 h-auto text-center'>
                        <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl text-themeY'>5+</h1>
                        <p className='font-extralight text-sm p-2'>Years of Excellence</p>
                    </div>
                    <div className='w-full md:w-60 h-auto text-center'>
                        <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl text-themeY'>4</h1>
                        <p className='font-extralight text-sm p-2'>Countries Served</p>
                    </div>
                    <div className='w-full md:w-60 h-auto text-center'>
                        <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl text-themeY'>1000+</h1>
                        <p className='font-extralight text-sm p-2 pb-0'>Professionals</p>
                        <p className='font-extralight text-sm p-2 pt-0'>in our network</p>
                    </div>
                    <div className='w-full md:w-44 h-auto text-center'>
                        <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl text-themeY'>20+</h1>
                        <p className='font-extralight text-sm p-2 text-balance'>Satisfied Business Partners</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
