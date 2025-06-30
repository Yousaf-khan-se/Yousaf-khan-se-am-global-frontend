import React from 'react'
import { useNavigate } from 'react-router-dom'
import FeaturesCard from '../components/FeaturesCard'
import homeSection1Pattern from '../assets/homePageAssets/homeSection1Pattern.png'
import section2Img from '../assets/homePageAssets/section2Img.png'
import star from '../assets/homePageAssets/star.png'
import section4Logo from '../assets/homePageAssets/section4Logo.png'
import section7Background from '../assets/homePageAssets/section7Background.png'
import TailoredHrSolutionsLogo from '../assets/homePageAssets/featuresLogo/TailoredHrSolutionsLogo.png'
import globalExpertiseLogo from '../assets/homePageAssets/featuresLogo/globalExpertiseLogo.png'
import EffeciencyAndComplianceLogo from '../assets/homePageAssets/featuresLogo/EffeciencyAndComplianceLogo.png'

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

const WhyUs = () => {
    // Features descriptions
    const tailoredHrSolDescription = 'We provide customized HR and staffing solutions, meeting the unique needs of diverse industries and business sizes with precision and care.'
    const globalExpertiseDescription = 'Leverage our extensive experience across Gulf countries, India, Pakistan, and the USA to deliver exceptional results for your business.'
    const efficiencyAndComplianceDescription = 'Streamline your processes with WPS-compliant payroll and HR services, reducing costs and ensuring complete regulatory adherence.'

    return (
        <div className="w-full overflow-x-hidden">
            {/* Hero Section */}
            <section className='w-full bg-gray-900 py-16 md:py-24 mobile-full-width'>
                <div className='container mx-auto px-4 text-center'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-6 text-white'>Why Choose AM Global?</h1>
                    <p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
                        Discover the advantages that make us the preferred HR solutions partner for businesses worldwide.
                    </p>
                    <StartApplyingBtn hover_c='hover:bg-themeYDark' txt={'Get Started'} url='/services' />
                </div>
            </section>

            {/* Key Benefits Section */}
            <section
                className="bg-cover bg-center h-auto w-full pb-20 md:pb-40 pt-16 md:pt-20 flex flex-col items-center justify-evenly px-4 md:px-0 mobile-full-width"
                style={{ backgroundImage: `url(${homeSection1Pattern})` }}
            >
                <div className='m-8 md:m-16 mb-16 md:mb-32 text-center'>
                    <h1 className='text-themeYDark/85 text-md sm:text-xl md:text-[2rem] font-semibold p-2'>Our Advantages</h1>
                    <h2 className='text-xl sm:text-2xl md:text-[2.4rem] text-white font-semibold p-2 pb-0'>What Sets Us Apart</h2>
                </div>
                <div className='flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 md:gap-4 xl:gap-6 w-full max-w-5xl md:max-w-4xl xl:max-w-5xl'>
                    <FeaturesCard cardLogo={TailoredHrSolutionsLogo} heading='Tailored HR Solutions' text={tailoredHrSolDescription} themeNo={1} />
                    <FeaturesCard cardLogo={globalExpertiseLogo} heading='Global Expertise' text={globalExpertiseDescription} themeNo={2} />
                    <FeaturesCard cardLogo={EffeciencyAndComplianceLogo} heading='Efficiency and Compliance' text={efficiencyAndComplianceDescription} themeNo={1} />
                </div>
            </section>

            {/* Competitive Advantages */}
            <section className='mb-8 md:mb-16 mt-16 md:mt-[7.1rem] px-4 md:px-0 w-full mobile-full-width'>
                <div className='max-w-6xl mx-auto'>
                    <div className='h-auto flex flex-col gap-y-8 md:gap-y-10 justify-center content-center md:flex-row'>
                        <div className='flex-1 ml-0 md:ml-4 flex flex-col items-center md:items-start'>
                            <img src={section2Img} alt="" className='mt-0 w-full max-w-[300px] md:max-w-none'
                                style={{ scale: 0.8 }} />
                            <p className='relative text-white text-xs -top-[13rem] -left-[6.6rem] md:text-left md:origin-top-left md:left-[4.9rem] -rotate-90 md:-top-[17rem] tracking-wide md:tracking-[0.32rem] font-semibold md:text-[1.1rem] mt-4 md:mt-0'>Proven Excellence</p>
                        </div>

                        <div className='flex-1 mt-4 md:mt-[4.3rem] px-0'>
                            <h1 className='text-themeYTwo/85 py-2 px-3 md:p-2 text-left text-base md:text-[1.12rem] mb-1'>Competitive Edge</h1>
                            <h2 className='font-bold text-md md:text-4xl px-3 md:p-1 mr-4 md:mr-20 text-left leading-tight md:leading-[3.1rem]'>Experience the AM Global difference</h2>

                            <div className='text-left mt-6'>
                                <div className='border-l-2 border-[#CEB551] ml-0 md:ml-2 pl-3 md:pl-0'>
                                    <p className='pl-0 md:pl-7 mb-6 md:mb-8 mt-4 text-sm -tracking-tighter font-[180] text-balance'>
                                        With over 5 years of industry expertise, AM Global stands out as a reliable partner that understands the complexities of modern HR challenges and delivers solutions that drive real business value.
                                    </p>
                                    <p className='pl-0 md:pl-7 text-sm md:text-base leading-5 text-balance'>
                                        Our commitment to innovation, quality, and client satisfaction has earned us the trust of 20+ businesses across multiple industries and regions.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row mt-8 md:mt-14 gap-4 md:gap-0'>
                                <div className='text-left'>
                                    <h2 className='text-[#CEB551] flex gap-2 md:gap-5 ml-0 md:ml-1 pb-2 text-sm font-semibold justify-start'>
                                        <img src={star} alt="" className='h-2 w-2 md:h-3 md:w-3 mt-1' /> Cost Effective
                                    </h2>
                                    <p className='pl-0 md:pl-9 pr-4 md:pr-[7.5rem] text-center md:text-left text-xs md:text-[0.65rem]'>
                                        Reduce operational costs by up to 40% while maintaining high-quality service standards.
                                    </p>
                                </div>
                                <div className='text-left'>
                                    <h2 className='text-[#CEB551] flex gap-2 md:gap-5 ml-0 md:ml-1 pb-2 text-sm font-semibold justify-start'>
                                        <img src={star} alt="" className='h-2 w-2 md:h-3 md:w-3 mt-1' /> 24/7 Support
                                    </h2>
                                    <p className='pl-[0.7rem] md:pl-9 pr-4 md:pr-[3.45rem] text-left text-xs md:text-[0.65rem]'>
                                        Round-the-clock support ensuring your HR operations never skip a beat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Features */}
            <section className='bg-white/[0.13] h-auto flex flex-col justify-center items-center pt-8 md:pt-14 pb-16 md:pb-32 px-4 md:px-0 w-full'>
                <div className='max-w-6xl mx-auto'>
                    <div className='text-center mb-16'>
                        <h1 className='font-bold text-2xl md:text-3xl xl:text-[2.3rem] pb-4'>Key Differentiators</h1>
                        <p className='text-sm max-w-2xl mx-auto'>
                            Discover what makes AM Global the preferred choice for businesses seeking reliable HR solutions.
                        </p>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div className='bg-gradient-to-br from-white/10 to-black bg-black/50 border border-white/15 rounded-xl p-6'>
                            <div className='w-12 h-12 bg-themeY/20 rounded-lg mb-4 flex items-center justify-center'>
                                <span className='text-lg font-bold text-themeY'>⚡</span>
                            </div>
                            <h3 className='text-lg font-semibold mb-2'>Rapid Implementation</h3>
                            <p className='text-sm font-light'>Get your HR systems up and running in record time with our streamlined onboarding process.</p>
                        </div>

                        <div className='bg-gradient-to-br from-themeYTwo to-themeYDarkTwo bg-black/50 border border-white/15 rounded-xl p-6'>
                            <div className='w-12 h-12 bg-white/20 rounded-lg mb-4 flex items-center justify-center'>
                                <span className='text-lg font-bold text-white'>🔒</span>
                            </div>
                            <h3 className='text-lg font-semibold mb-2'>Data Security</h3>
                            <p className='text-sm font-light'>Enterprise-grade security measures to protect your sensitive HR data and ensure complete confidentiality.</p>
                        </div>

                        <div className='bg-gradient-to-br from-white/10 to-black bg-black/50 border border-white/15 rounded-xl p-6'>
                            <div className='w-12 h-12 bg-themeY/20 rounded-lg mb-4 flex items-center justify-center'>
                                <span className='text-lg font-bold text-themeY'>📊</span>
                            </div>
                            <h3 className='text-lg font-semibold mb-2'>Analytics & Insights</h3>
                            <p className='text-sm font-light'>Advanced reporting and analytics to help you make data-driven HR decisions.</p>
                        </div>

                        <div className='bg-gradient-to-br from-themeYTwo to-themeYDarkTwo bg-black/50 border border-white/15 rounded-xl p-6'>
                            <div className='w-12 h-12 bg-white/20 rounded-lg mb-4 flex items-center justify-center'>
                                <span className='text-lg font-bold text-white'>🌍</span>
                            </div>
                            <h3 className='text-lg font-semibold mb-2'>Multi-Country Expertise</h3>
                            <p className='text-sm font-light'>Deep understanding of local labor laws and regulations across all our operating regions.</p>
                        </div>

                        <div className='bg-gradient-to-br from-white/10 to-black bg-black/50 border border-white/15 rounded-xl p-6'>
                            <div className='w-12 h-12 bg-themeY/20 rounded-lg mb-4 flex items-center justify-center'>
                                <span className='text-lg font-bold text-themeY'>⚙️</span>
                            </div>
                            <h3 className='text-lg font-semibold mb-2'>Scalable Solutions</h3>
                            <p className='text-sm font-light'>Flexible services that grow with your business, from startups to enterprise organizations.</p>
                        </div>

                        <div className='bg-gradient-to-br from-themeYTwo to-themeYDarkTwo bg-black/50 border border-white/15 rounded-xl p-6'>
                            <div className='w-12 h-12 bg-white/20 rounded-lg mb-4 flex items-center justify-center'>
                                <span className='text-lg font-bold text-white'>🎯</span>
                            </div>
                            <h3 className='text-lg font-semibold mb-2'>Industry Specialization</h3>
                            <p className='text-sm font-light'>Specialized knowledge across 20+ industries ensures tailored solutions for your sector.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Success Section */}
            <section className='flex flex-col xl:flex-row pt-8 md:pt-14 flex-wrap px-4 md:px-0 w-full'>
                <div className='flex flex-col justify-center items-center sm:flex-row'>
                    <div className='pt-10 pb-10 max-w-[30rem] ml-5 sm:ml-36'>
                        <h1 className='text-left text-xl pb-2 text-[#CEB551]'>Client Success Stories</h1>
                        <p className='text-xl font-semibold md:text-[2.2rem] text-left md:leading-[2.8rem] pr-8 md:pr-0'>Trusted by businesses for <span className='text-[#CEB551]'>exceptional results</span></p>
                    </div>
                    <div className='flex-1 md:pt-14 md:pb-10'>
                        <p className=' border-[#606060] ml-0 md:ml-8 mr-10 pl-5 border-l-2 sm:m-10 sm:ml-0 sm:border-l sm:p-2 sm:mr-[5.5rem] sm:pl-10 text-left text-[0.8rem] font-light'>
                            Our clients consistently experience improved operational efficiency, reduced costs, and enhanced compliance when partnering with AM Global.
                            From small businesses to large enterprises, we deliver measurable results that drive sustainable growth and competitive advantage.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center contents-center sm:flex-row md:mt-2'>
                    <img className='flex-1 max-w-[40rem] h-auto scale-105 mr-10 md:m-0' src={section4Logo} alt="" />
                    <div className='flex-1 flex flex-col'>
                        <h1 className='ml-6 md:ml-0 text-xl font-bold pr-10 md:pr-60 md:text-[2.2rem] md:pt-20 leading-10 text-left'>Ready to experience the <span className='text-[#CEB551]'>AM Global advantage?</span></h1>
                        <div className='border-l border-[#CEB551] pl-3 md:pl-10 pr-3 md:pr-[6rem] opacity mt-14'>
                            <p className='mb-8 text-left pl-2 text-sm font-extralight'>
                                Join the growing number of satisfied clients who have transformed their HR operations with our expert solutions.
                                Our proven methodology and dedicated support ensure your success from day one.
                            </p>
                            <p className='text-left pl-2 text-sm font-extralight pr-3'>
                                Experience faster implementation, reduced costs, improved compliance, and enhanced employee satisfaction.
                                Let us show you why businesses choose AM Global as their trusted HR partner.
                            </p>
                        </div>
                        <button className='bg-[#CEB551] text-white w-32 rounded p-2 pr-0 pl-0 m-10 sm:ml-12 text-md mt-14 self-start text-xs transition-none-all ease-in-out delay-100 hover:bg-[#CEB551]/90'>Get Started</button>
                    </div>
                </div>
            </section>

            {/* Success Metrics */}
            <section className='relative bg-cover bg-center h-auto w-full pb-12 md:pb-20 pt-12 md:pt-20 flex flex-col justify-center items-center gap-6 md:gap-10 px-4 md:px-0'
                style={{ backgroundImage: `url(${section7Background})` }}>
                <div className='absolute inset-0 bg-themeYDark bg-gradient-to-b from-themeYTwo to-themeYDarkTwo opacity-50 -z-10'></div>
                <h1 className='text-xl md:text-2xl xl:text-4xl font-bold md:text-center'>Our <span className='bg-black px-2'>Success</span> Metrics</h1>
                <p className='mx-auto max-w-2xl md:text-center text-sm px-5 md:px-4'>Measurable results that demonstrate our commitment to client success and operational excellence.</p>
                <div className='flex flex-col md:flex-row w-full max-w-60 md:max-w-6xl justify-evenly items-center content-center bg-[#2F2F2F] rounded-xl p-6 md:p-8 pb-8 md:pb-14 gap-6 md:gap-4'>
                    <div className='w-full md:w-60 h-auto text-center'>
                        <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl text-themeY'>99%</h1>
                        <p className='font-extralight text-sm p-2'>Client Satisfaction Rate</p>
                    </div>
                    <div className='w-full md:w-60 h-auto text-center'>
                        <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl text-themeY'>40%</h1>
                        <p className='font-extralight text-sm p-2'>Average Cost Reduction</p>
                    </div>
                    <div className='w-full md:w-60 h-auto text-center'>
                        <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl text-themeY'>72hrs</h1>
                        <p className='font-extralight text-sm p-2 pb-0'>Average Response Time</p>
                        <p className='font-extralight text-sm p-2 pt-0'>for urgent requests</p>
                    </div>
                    <div className='w-full md:w-44 h-auto text-center'>
                        <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl text-themeY'>95%</h1>
                        <p className='font-extralight text-sm p-2 text-balance'>Client Retention Rate</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhyUs
