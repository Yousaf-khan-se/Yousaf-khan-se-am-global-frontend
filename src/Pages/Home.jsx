import React from 'react'
import homeYellowSquare from '../assets/homePageAssets/homeYellowSquare.png'
import homeBlackSquare from '../assets/homePageAssets/homeBlackSquare.png'
import homeTopBackground from '../assets/homePageAssets/homeTopBackground.jpg'
import homeWhitePatternDesign from '../assets/homePageAssets/homeWhitePatternDesing.png'
import homeSection1Pattern from '../assets/homePageAssets/homeSection1Pattern.png'
import TailoredHrSolutionsLogo from '../assets/homePageAssets/featuresLogo/TailoredHrSolutionsLogo.png'
import globalExpertiseLogo from '../assets/homePageAssets/featuresLogo/globalExpertiseLogo.png'
import EffeciencyAndComplianceLogo from '../assets/homePageAssets/featuresLogo/EffeciencyAndComplianceLogo.png'
import section2Img from '../assets/homePageAssets/section2Img.png'
import star from '../assets/homePageAssets/star.png'
import FeaturesCard from '../components/FeaturesCard'
import ServicesCard from '../components/ServicesCard'
import manPowerSupplyLogo from '../assets/homePageAssets/servicesLogo/manPowerSupplyLogo.png'
import peoServicesLogo from '../assets/homePageAssets/servicesLogo/peoServicesLogo.png'
import hrOutsourcingLogo from '../assets/homePageAssets/servicesLogo/hrOutSourcingLogo.png'
import itStaffingLogo from '../assets/homePageAssets/servicesLogo/itStaffingLogo.png'
import payrollServicesLogo from '../assets/homePageAssets/servicesLogo/payrollServicesLogo.png'
import recruitmentServicesLogo from '../assets/homePageAssets/servicesLogo/recruitmentServicesLogo.png'
import section4Logo from '../assets/homePageAssets/section4Logo.png'
import section5Pattern from '../assets/homePageAssets/section5Assets/section5Pattern.png'
import section5CrescentPattern from '../assets/homePageAssets/section5Assets/section5CrescentPattern.png'
import section5pics from '../assets/homePageAssets/section5Assets/section5pics.png'
import section7Background from '../assets/homePageAssets/section7Background.png'
import automation from '../assets/homePageAssets/sec6Images/automation.png'
import aviation from '../assets/homePageAssets/sec6Images/aviation.png'
import financeAndBanking from '../assets/homePageAssets/sec6Images/financeAndBanking.png'
import foodAndIndustry from '../assets/homePageAssets/sec6Images/foodAndIndustry.png'
import marineAndShipping from '../assets/homePageAssets/sec6Images/marineAndShipping.png'
import oilAndGasEnergy from '../assets/homePageAssets/sec6Images/oilAndGasEnergy.png'
import technologyAndIT from '../assets/homePageAssets/sec6Images/technologyAndIT.png'

import { useNavigate } from 'react-router-dom'

// /for sec0
const StartApplyingBtn = ({ hover_c, txt, url }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (url) {
            console.log(url);
            navigate(url);
        } else {
            console.log('no url for this btn-', txt);
        }
    }

    return (
        <button onClick={handleClick} className={`font-extrabold mt-2 text-xs bg-white text-black p-2 md:p-3 px-6 md:px-10 transition-all ${hover_c} hover:text-white ease-in-out duration-500`}>{txt}</button>
    )
}

const Home = () => {
    // /Features Desc
    const tailoredHrSolDescription = 'Provide customized HR and staffing solutions, meeting the unique needs of diverse industries and business sizes.'
    const globalExpertiseDescription = 'Leverage extensive experience across Gulf countries, India, Pakistan, and the USA to deliver exceptional results.'
    const efficiencyAndComplianceDescription = 'Streamline processes with WPS-compliant payroll and HR services, reducing costs and ensuring regulatory adherence.'

    // / Services Desc
    const manPowerSupplyDescription = 'We provide a comprehensive range of manpower solutions to help businesses stay staffed and productive.'
    const peoServicesDescription = 'Our PEO services can help businesses save time and money while reducing compliance risks.'
    const hrOutsourcingDescription = 'Our team of HR professionals can take on all your HR needs, from payroll to benefits administration.'
    const itStaffingDescription = 'Our highly efficient & experienced team provides IT Staffing solutions to companies across Gulf countries, India, Pakistan and USA. Our IT Staff Augmentation team has successfully delivered both short-term and long-term solutions as well as project-based deployment and we provide our customers a concise talent management solutions that matches with a particular industry, geography, or business requirement.'
    const payrollServicesDescription = 'Managing payroll, accounting, and all other financial responsibilities in house and at once is time-consuming and prone to errors. We work in partnership with our clients to develop, implement and manage bespoke payroll services. Our services are in line with the WPS and our clients enjoy considerable cost savings and can focus on core activities of the business.'
    const recruitmentServicesDescription = 'Let our experts help you find the best talent for your open positions to keep your business moving forward.'

    return (
        <div className="w-full overflow-x-hidden">
            {/* sec0 - Mobile First Hero Section */}
            <section className='w-full bg-gray-900 py-8 md:py-7 mobile-full-width'>
                {/* Mobile Layout */}
                <div className='block md:hidden w-full px-4'>
                    {/* Job Seeker Section - Mobile */}
                    <div className='mb-12 text-center relative'>
                        <div className='relative inline-block'>
                            <img src={homeYellowSquare} alt="Home" className='w-80 h-auto mx-auto' />
                            <h1 className='absolute top-[5.8rem] left-12 transform -translate-x-1/2 -rotate-[17.13deg] text-xs font-bold bg-black p-2 px-4 z-10 whitespace-nowrap'>Job Seeker</h1>
                            {/* Content overlaid on image */}
                            <div className='absolute inset-0 flex flex-col justify-center items-center pt-16 px-4'>
                                <div className='space-y-3 text-center'>
                                    <h2 className='text-md font-bold leading-tight px-2'><strong>We help candidates find their perfect job</strong></h2>
                                    <p className='text-xs font-light px-2'>Concise talent management solutions that matches with a particular industry, geography, or business requirement.</p>
                                    <div className='pt-2'>
                                        <StartApplyingBtn hover_c='hover:bg-black' txt={'Start Applying'} url='/apply' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Companies Section - Mobile */}
                    <div className='text-center relative'>
                        <div className='relative inline-block'>
                            <img src={homeBlackSquare} alt="Home" className='w-80 h-auto mx-auto' />
                            <h1 className='absolute top-[6rem] -right-[4.5rem] transform -translate-x-1/2 rotate-[17.13deg] text-xs font-bold bg-gradient-to-r from-themeY/60 to-themeYDark/90 bg-themeYDark p-2 px-4 z-10 rounded whitespace-nowrap'>Companies</h1>
                            {/* Content overlaid on image */}
                            <div className='absolute inset-0 flex flex-col justify-center items-center pt-16 px-4'>
                                <div className='space-y-3 text-center'>
                                    <h2 className='text-md font-bold leading-tight px-2'><strong>We provide staffing Solution to our clients</strong></h2>
                                    <p className='text-xs font-light px-2'>Concise talent management solutions that matches with a particular industry, geography, or business requirement.</p>                                    <div className='pt-2'>
                                        <StartApplyingBtn hover_c='hover:bg-themeYDark' txt={'View Services'} url='/services' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout - Hidden on Mobile */}
                <div className='hidden md:flex md:relative md:flex-row md:items-center md:justify-center md:min-h-0 md:pb-7'>
                    <div className='flex items-top justify-center relative w-auto'>
                        <img src={homeYellowSquare} alt="Home" id="yellow-square" />
                        <h1 className='absolute text-sm font-bold bg-black p-2 pr-7 pl-7 transform -rotate-[17.13deg] top-[6.8rem] left-[8.4rem] z-10'>Job Seeker</h1>
                        <div className='absolute mt-36'>
                            <div className='text-start tracking-wide ml-44'>
                                <h2 className='mb-4 pr-24 text-4xl'><strong>We help candidates find their perfect job</strong></h2>
                                <p className='mb-8 text-sm pr-16 font-light'>Concise talent management solutions that matches with a particular industry, geography, or business requirement.</p>
                            </div>                            <div className='flex justify-center md:justify-start md:ml-44 pr-5'>
                                <StartApplyingBtn hover_c='hover:bg-black' txt={'Start Applying'} url='/apply' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-top justify-center relative w-auto'>
                        <img src={homeBlackSquare} alt="Home" />
                        <h1 className='absolute text-sm font-bold bg-gradient-to-r from-themeY/60 to-themeYDark/90 bg-themeYDark p-2 px-7 transform rotate-[17.13deg] top-[7.8rem] right-[8.2rem] z-10 rounded'>Companies</h1>
                        <div className='absolute mt-36'>
                            <div className='text-start tracking-wide mr-28'>
                                <h2 className='mb-4 pl-28 text-4xl'><strong>We provide staffing Solution to our clients</strong></h2>
                                <p className='mb-8 text-sm pl-28 font-light'>Concise talent management solutions that matches with a particular industry, geography, or business requirement.</p>
                            </div>                            <div className='flex justify-center pr-[17.5rem]'>
                                <StartApplyingBtn hover_c='hover:bg-themeYDark' txt={'View Services'} url='/services' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* sec1 */}
            <section
                className="bg-cover bg-center h-auto w-full pb-20 md:pb-40 pt-10 md:pt-0 flex flex-col items-center justify-evenly px-4 md:px-0 mobile-full-width"
                style={{ backgroundImage: `url(${homeSection1Pattern})` }}
            >
                <div className='m-8 md:m-16 mb-16 md:mb-32 text-center'>
                    <h1 className='text-themeYDark/85 text-md sm:text-xl md:text-[2rem] font-semibold p-2'>Features</h1>
                    <h2 className='text-xl sm:text-2xl md:text-[2.4rem] text-white font-semibold p-2 pb-0'>Why Partner With Us</h2>
                </div>
                <div className='flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 md:gap-4 xl:gap-6 w-full max-w-5xl md:max-w-4xl xl:max-w-5xl'>
                    <FeaturesCard cardLogo={TailoredHrSolutionsLogo} heading='Tailored HR Solutions' text={tailoredHrSolDescription} themeNo={1} />
                    <FeaturesCard cardLogo={globalExpertiseLogo} heading='Global Expertise' text={globalExpertiseDescription} themeNo={2} />
                    <FeaturesCard cardLogo={EffeciencyAndComplianceLogo} heading='Efficiency and Compliance' text={efficiencyAndComplianceDescription} themeNo={1} />
                </div>
            </section>

            {/* sec2 */}
            <section className='mb-8 md:mb-16 mt-16 md:mt-[7.1rem] px-4 md:px-0 w-full mobile-full-width'>
                <div className='h-auto flex flex-col gap-y-8 md:gap-y-10 justify-center content-center md:flex-row'>
                    <div className='flex-1 ml-0 md:ml-4 flex flex-col items-center md:items-start'>
                        <img src={section2Img} alt="" className='mt-0 w-full max-w-[300px] md:max-w-none'
                            style={{ scale: 0.8 }} />
                        <p className='relative text-white text-xs -top-[13rem] -left-[6.6rem] md:text-left md:origin-top-left md:left-[4.9rem] -rotate-90 md:-top-[17rem] tracking-wide md:tracking-[0.32rem] font-semibold md:text-[1.1rem] mt-4 md:mt-0'>5+ Years of Experience</p>
                    </div>

                    <div className='flex-1 mt-4 md:mt-[4.3rem] px-0'>
                        <h1 className='text-themeYTwo/85 py-2 px-3 md:p-2 text-left text-base md:text-[1.12rem] mb-1'>HR Simplified</h1>
                        <h2 className='font-bold text-md md:text-4xl px-3 md:p-1 mr-4 md:mr-20 text-left leading-tight md:leading-[3.1rem]'>Outsourcing your HR needs has never been easier!</h2>
                        <div className='text-left mt-6'>
                            <div className='border-l-2 border-[#CEB551] ml-0 md:ml-2 pl-3 md:pl-0'>
                                <p className='pl-0 md:pl-7 mb-6 md:mb-8 mt-4 text-sm -tracking-tighter font-[180] text-balance'><span className='text-sm font-normal'>A M Global</span> is the leading provider of HR outsourcing services, and we provide a comprehensive suite of services that allow businesses to focus on their core competencies and leave the HR functions to us.</p>
                                <p className='pl-0 md:pl-7 text-sm md:text-base leading-5 text-balance'>Partner with us for streamlined HR management, ensuring your business thrives without the administrative burden.</p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row mt-8 md:mt-14 gap-4 md:gap-0'>
                            <div className='text-left'>
                                <h2 className='text-[#CEB551] flex gap-2 md:gap-5 ml-0 md:ml-1 pb-2 text-sm font-semibold justify-start'><img src={star} alt="" className='h-2 w-2 md:h-3 md:w-3 mt-1' /> Our Expertise</h2>
                                <p className='pl-0 md:pl-9 pr-4 md:pr-[7.5rem] text-center md:text-left text-xs md:text-[0.65rem]'>Tailored HR solutions to match your business needs, ensuring efficiency and compliance.</p>
                            </div>
                            <div className='text-left'>
                                <h2 className='text-[#CEB551] flex gap-2 md:gap-5 ml-0 md:ml-1 pb-2 text-sm font-semibold justify-start'><img src={star} alt="" className='h-2 w-2 md:h-3 md:w-3 mt-1' /> Global Reach</h2>
                                <p className='pl-[0.7rem] md:pl-9 pr-4 md:pr-[3.45rem] text-left text-xs md:text-[0.65rem]'>Bringing global expertise with operations in the Gulf, India, Pakistan, and the USA.</p>
                            </div>
                        </div>
                        <div className='flex justify-center md:justify-start pl-0 md:pl-8 mt-8 md:mt-[6rem]'>
                            <button className='justify-self-start bg-gradient-to-r from-[#F0D784]/70 to-[#C3A349]/90 bg-[#C3A349] hover:bg-black transition-all ease-in-out delay-100 text-white font-semibold w-[7rem] h-[1.8rem] rounded pr-0.5 pl-0 text-[0.6rem]'>Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* sec3 */}
            <section className='bg-white/[0.13] h-auto flex flex-col justify-center items-center pt-8 md:pt-14 pb-16 md:pb-32 px-4 md:px-0 md:ml-4 w-full'>
                <div className='pl-[0.9rem] pt-10 md:pt-20 pb-16 md:pb-36 md:pl-28 self-center md:self-start max-w-md text-left'>
                    <h1 className='font-bold text-2xl md:text-3xl xl:text-[2.3rem] pb-4'>Our Services</h1>
                    <p className='text-sm'>Concise talent management solutions that matches with a particular industry, geography, or business requirement.</p>
                </div>
                <div className='flex flex-wrap gap-4 md:gap-6 justify-center items-center max-w-6xl'>
                    <ServicesCard heading='Manpower Supply' text={manPowerSupplyDescription} cardLogo={manPowerSupplyLogo} color='yellow' h='sm:min-h-60' />
                    <ServicesCard heading='PEO Services' text={peoServicesDescription} cardLogo={peoServicesLogo} h='sm:min-h-64' />
                    <ServicesCard heading='HR Outsourcing' text={hrOutsourcingDescription} cardLogo={hrOutsourcingLogo} h='sm:min-h-64' />
                    <ServicesCard heading='Recruitment Services' text={recruitmentServicesDescription} cardLogo={recruitmentServicesLogo} h='sm:min-h-60' />
                    <ServicesCard heading='IT Staffing' text={itStaffingDescription} cardLogo={itStaffingLogo} flexWidth='2' h='sm:min-h-60' />
                    <ServicesCard heading='Payroll Services' text={payrollServicesDescription} cardLogo={payrollServicesLogo} color='yellow' flexWidth='2' h='sm:min-h-[15.6rem]' />
                </div>
            </section>

            {/* sec4 */}
            <section className='flex flex-col xl:flex-row pt-8 md:pt-14 flex-wrap px-4 md:px-0 w-full'>
                <div className='flex flex-col justify-center items-center sm:flex-row'>
                    <div className='pt-10 pb-10 max-w-[30rem] ml-5 sm:ml-36'>
                        <h1 className='text-left text-xl pb-2 text-[#CEB551]'>Why Choose AM Global</h1>
                        <p className='text-xl font-semibold md:text-[2.2rem] text-left md:leading-[2.8rem] pr-8 md:pr-0'>Trusted HR Solutions Tailored for Your <span className='text-[#CEB551]'>Success</span></p>
                    </div>
                    <div className='flex-1 md:pt-14 md:pb-10'>
                        <p className=' border-[#606060] ml-0 md:ml-8 mr-10 pl-5 border-l-2 sm:m-10 sm:ml-0 sm:border-l sm:p-2 sm:mr-[5.5rem] sm:pl-10 text-left text-[0.8rem] font-light'>AM Global has a proven track record of providing high-quality HR outsourcing and manpower  supply  solutions to businesses of all sizes. We  are the leading  provider of HR  outsourcing  services in  the UAE  and provide  top-notch  Manpower  Supply, HR Outsourcing, and Recruitment Services to our clients.</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center contents-center sm:flex-row md:mt-2'>
                    <img className='flex-1 max-w-[40rem] h-auto scale-105 mr-10 md:m-0' src={section4Logo} alt="" />
                    <div className='flex-1 flex flex-col'>
                        <h1 className='ml-6 md:ml-0 text-xl font-bold pr-10 md:pr-60 md:text-[2.2rem] md:pt-20 leading-10 text-left'>Find the Right Solution for Your <span className='text-[#CEB551]'>Business Today!</span></h1>
                        <div className='border-l border-[#CEB551] pl-3 md:pl-10 pr-3 md:pr-[6rem] opacity mt-14'>
                            <p className='mb-8 text-left pl-2 text-sm font-extralight'>A M Global   is  one  of  the  top  outsourcing  agencies  that  offer  cutting-edge solutions for all your HR requirements. A M Global covering all the seven emirates and  with  plans  of  expansion  to  the  GCC. We  have experienced  work  force deployed across various industry segments and an employee pool with a mix of nationalities. </p>
                            <p className='text-left pl-2 text-sm font-extralight pr-3'>By  providing exemplary  services  we aim to focus on  providing value to  both to our clients and employees. This has helped us gain and  maintain  good business relationship  with  our  existing  clients  and  we  hope to  continue doing  so  in  the future.</p>
                        </div>
                        <button className='bg-[#CEB551] text-white w-32 rounded p-2 pr-0 pl-0 m-10 sm:ml-12 text-md mt-14 self-start text-xs transition-none-all ease-in-out delay-100 hover:bg-[#CEB551]/90'>Learn More</button>
                    </div>
                </div>
            </section>

            {/* sec5 */}
            <section className="relative bg-cover bg-center h-auto w-full pb-16 md:pb-28 pt-12 md:pt-32 flex flex-col justify-evenly content-evenly px-4 md:px-0"
                style={{ backgroundImage: `url(${section5Pattern})` }}
            >
                <div className="absolute inset-0 bg-white/15"></div>
                <div className='p-6 md:p-14 md:text-center'>
                    <h1 className='text-2xl md:text-4xl font-semibold pb-2 md:p-3'>Our Office</h1>
                    <p className='text-md md:text-2xl font-light'>Find us at our offices in JAFZA and Dubai Main Office</p>
                </div>
                <img src={section5CrescentPattern} className='absolute hidden md:block' alt="" />
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-full max-w-[1000px] md:w-[65%] h-auto pt-6 md:pt-10' src={section5pics} alt="" />
                </div>
            </section>

            {/* sec6 */}
            <section className='pb-16 md:pb-28 pt-12 md:pt-20 flex flex-col px-4 md:px-0 w-full'>
                <h1 className='text-xl md:text-2xl xl:text-[2.2rem] p-7 md:p-10 pb-12 md:pb-20 font-bold md:text-center'><span className='text-[#CEB551]'>INDUSTRIES </span>WE ARE SERVING</h1>
                <div className='flex md:justify-center items-center gap-2 md:gap-4 flex-wrap max-w-6xl mx-auto'>
                    <div className='relative mr-2 md:mr-4 flex items-end justify-center text-md md:text-2xl pb-6 md:pb-10 font-bold bg-contain bg-center bg-no-repeat h-[20rem] md:h-[25rem] w-[16rem] md:w-[20rem]'
                        style={{ backgroundImage: `url(${automation})` }}
                    >
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#A68628]/80'></div>
                        <p className='z-10'>AUTOMATION</p>
                    </div>
                    <div className='relative flex items-end justify-center text-sm md:text-xl pb-6 md:pb-10 bg-contain bg-center bg-no-repeat h-[20rem] md:h-[25rem] w-[4rem] md:w-[6rem]'
                        style={{ backgroundImage: `url(${aviation})` }}
                    >
                        <div className='absolute inset-0 bg-black/75'></div>
                        <p className='z-10 transform -rotate-90 m-auto text-nowrap'>AVIATION</p>
                    </div>
                    <div
                        className='relative flex items-end justify-center text-sm md:text-xl pb-6 md:pb-10 bg-contain bg-center bg-no-repeat h-[20rem] md:h-[25rem] w-[4rem] md:w-[6rem]'
                        style={{ backgroundImage: `url(${financeAndBanking})` }}
                    >
                        <div className='absolute inset-0 bg-black/75'></div>
                        <p className='z-10 transform -rotate-90 m-auto text-nowrap'>FINANCE & BANKING</p>
                    </div>
                    <div
                        className='relative flex items-end justify-center text-sm md:text-xl pb-6 md:pb-10 bg-contain bg-center bg-no-repeat h-[20rem] md:h-[25rem] w-[4rem] md:w-[6rem]'
                        style={{ backgroundImage: `url(${foodAndIndustry})` }}
                    >
                        <div className='absolute inset-0 bg-black/75'></div>
                        <p className='z-10 transform -rotate-90 m-auto text-nowrap'>FOOD INDUSTRY</p>
                    </div>
                    <div
                        className='relative flex items-end justify-center text-sm md:text-xl pb-6 md:pb-10 bg-contain bg-center bg-no-repeat h-[20rem] md:h-[25rem] w-[4rem] md:w-[6rem]'
                        style={{ backgroundImage: `url(${marineAndShipping})` }}
                    >
                        <div className='absolute inset-0 bg-black/75'></div>
                        <p className='z-10 transform -rotate-90 m-auto text-nowrap'>MARINE & SHIPPING</p>
                    </div>
                    <div
                        className='relative flex items-end justify-center text-sm md:text-xl pb-6 md:pb-10 bg-contain bg-center bg-no-repeat h-[20rem] md:h-[25rem] w-[4rem] md:w-[6rem]'
                        style={{ backgroundImage: `url(${oilAndGasEnergy})` }}
                    >
                        <div className='absolute inset-0 bg-black/75'></div>
                        <p className='z-10 transform -rotate-90 m-auto text-nowrap'>OIL & GAS/ENERGY</p>
                    </div>
                    <div
                        className='relative flex items-end justify-center text-sm md:text-xl pb-6 md:pb-10 bg-contain bg-center bg-no-repeat h-[20rem] md:h-[25rem] w-[4rem] md:w-[6rem]'
                        style={{ backgroundImage: `url(${technologyAndIT})` }}
                    >
                        <div className='absolute inset-0 bg-black/75'></div>
                        <p className='z-10 transform -rotate-90 m-auto text-nowrap'>TECHNOLOGY & IT</p>
                    </div>
                </div>
            </section>

            {/* sec7 */}
            <section className='relative bg-cover bg-center h-auto w-full pb-12 md:pb-20 pt-12 md:pt-20 flex flex-col justify-center items-center gap-6 md:gap-10 px-4 md:px-0'
                style={{ backgroundImage: `url(${section7Background})` }}>
                <div className='absolute inset-0 bg-themeYDark bg-gradient-to-b from-themeYTwo to-themeYDarkTwo opacity-50 -z-10'></div>
                <h1 className='text-xl md:text-2xl xl:text-4xl font-bold md:text-center'>Our <span className='bg-black px-2'>Impact</span> in Numbers</h1>
                <p className='mx-auto max-w-2xl md:text-center text-sm px-5 md:px-4'>Our outsourcing and manpower solutions have helped businesses in a wide range of industries to save time and money while reducing compliance risks.</p>
                <div className='flex flex-col md:flex-row w-full max-w-60 md:max-w-6xl justify-evenly items-center content-center bg-[#2F2F2F] rounded-xl p-6 md:p-8 pb-8 md:pb-14 gap-6 md:gap-4'>
                    <div className='w-full md:w-60 h-auto text-center'>
                        <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl'>20+</h1>
                        <p className='font-extralight text-sm p-2'>Industries</p>
                    </div>
                    <div className='w-full md:w-60 h-auto text-center'>
                        <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl'>1000+</h1>
                        <p className='font-extralight text-sm p-2'>Resource Pool Available</p>
                    </div>
                    <div className='w-full md:w-60 h-auto text-center'>
                        <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl'>20+</h1>
                        <p className='font-extralight text-sm p-2 pb-0'>Business Partnerships</p>
                        <p className='font-extralight text-sm p-2 pt-0'>(still growing)</p>
                    </div>
                    <div className='w-full md:w-44 h-auto text-center'>
                        <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl'>10+</h1>
                        <p className='font-extralight text-sm p-2 text-balance'>A M Global Team has 10+ Year's experience in staffing business</p>
                    </div>
                </div>
            </section>
        </div >
    )
}


export default Home