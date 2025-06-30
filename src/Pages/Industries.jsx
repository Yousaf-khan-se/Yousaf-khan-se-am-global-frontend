import React from 'react'
import { useNavigate } from 'react-router-dom'
import homeSection1Pattern from '../assets/homePageAssets/homeSection1Pattern.png'
import section2Img from '../assets/homePageAssets/section2Img.png'
import star from '../assets/homePageAssets/star.png'
import section7Background from '../assets/homePageAssets/section7Background.png'
import automation from '../assets/homePageAssets/sec6Images/automation.png'
import aviation from '../assets/homePageAssets/sec6Images/aviation.png'
import financeAndBanking from '../assets/homePageAssets/sec6Images/financeAndBanking.png'
import foodAndIndustry from '../assets/homePageAssets/sec6Images/foodAndIndustry.png'
import marineAndShipping from '../assets/homePageAssets/sec6Images/marineAndShipping.png'
import oilAndGasEnergy from '../assets/homePageAssets/sec6Images/oilAndGasEnergy.png'
import technologyAndIT from '../assets/homePageAssets/sec6Images/technologyAndIT.png'

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

const IndustryCard = ({ title, description, image, expertise }) => {
    return (
        <div className='bg-gradient-to-br from-white/10 to-black bg-black/50 border border-white/15 rounded-xl p-6 hover:border-themeY/50 transition-all duration-300'>
            <div className='w-16 h-16 bg-cover bg-center bg-no-repeat rounded-lg mb-4 border-2 border-themeY/30'
                style={{ backgroundImage: `url(${image})` }}>
                <div className='w-full h-full bg-black/40 rounded-lg'></div>
            </div>
            <h3 className='text-lg font-semibold mb-3 text-themeY'>{title}</h3>
            <p className='text-sm font-light mb-4 leading-relaxed'>{description}</p>
            <div className='border-t border-white/20 pt-3'>
                <h4 className='text-xs font-semibold text-themeY/80 mb-2'>Our Expertise:</h4>
                <ul className='text-xs font-light space-y-1'>
                    {expertise.map((item, index) => (
                        <li key={index} className='flex items-center gap-2'>
                            <span className='w-1 h-1 bg-themeY rounded-full'></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const Industries = () => {
    // Industry data
    const industries = [
        {
            title: "AUTOMATION",
            image: automation,
            description: "Supporting the future of industrial automation with skilled technicians, engineers, and support staff who understand cutting-edge manufacturing processes.",
            expertise: ["Process Engineers", "Automation Technicians", "Quality Control Specialists", "Project Managers"]
        },
        {
            title: "AVIATION",
            image: aviation,
            description: "Providing specialized talent for the aviation industry, from ground operations to maintenance, ensuring safety and operational excellence.",
            expertise: ["Aircraft Technicians", "Ground Operations", "Safety Inspectors", "Logistics Coordinators"]
        },
        {
            title: "FINANCE & BANKING",
            image: financeAndBanking,
            description: "Delivering financial professionals who drive growth and maintain compliance in the rapidly evolving banking and finance sector.",
            expertise: ["Financial Analysts", "Risk Managers", "Compliance Officers", "Digital Banking Specialists"]
        },
        {
            title: "FOOD INDUSTRY",
            image: foodAndIndustry,
            description: "Supplying quality-focused professionals for food production, processing, and safety, maintaining the highest industry standards.",
            expertise: ["Quality Assurance", "Food Safety Specialists", "Production Managers", "Supply Chain Experts"]
        },
        {
            title: "MARINE & SHIPPING",
            image: marineAndShipping,
            description: "Supporting maritime operations with experienced professionals who understand the complexities of shipping and logistics.",
            expertise: ["Marine Engineers", "Port Operations", "Logistics Managers", "Safety Officers"]
        },
        {
            title: "OIL & GAS/ENERGY",
            image: oilAndGasEnergy,
            description: "Providing specialized workforce for the energy sector, from offshore operations to renewable energy projects.",
            expertise: ["Drilling Engineers", "Safety Supervisors", "Environmental Specialists", "Project Engineers"]
        },
        {
            title: "TECHNOLOGY & IT",
            image: technologyAndIT,
            description: "Connecting businesses with top IT talent across all technology domains, from software development to cybersecurity.",
            expertise: ["Software Developers", "DevOps Engineers", "Cybersecurity Specialists", "Data Scientists"]
        }
    ];

    return (
        <div className="w-full overflow-x-hidden">
            {/* Hero Section */}
            <section className='w-full bg-gray-900 py-16 md:py-24 mobile-full-width'>
                <div className='container mx-auto px-4 text-center'>
                    <h1 className='text-3xl md:text-5xl font-bold mb-6 text-white'>Industries We Serve</h1>
                    <p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
                        Specialized HR solutions across 20+ industries, delivering expertise that drives success in every sector.
                    </p>
                    <StartApplyingBtn hover_c='hover:bg-themeYDark' txt={'Explore Services'} url='/services' />
                </div>
            </section>

            {/* Industry Overview */}
            <section
                className="bg-cover bg-center h-auto w-full pb-20 md:pb-40 pt-16 md:pt-20 flex flex-col items-center justify-center px-4 md:px-0 mobile-full-width"
                style={{ backgroundImage: `url(${homeSection1Pattern})` }}
            >
                <div className='max-w-6xl mx-auto text-center'>
                    <div className='m-8 md:m-16 mb-16 md:mb-32'>
                        <h1 className='text-themeYDark/85 text-md sm:text-xl md:text-[2rem] font-semibold p-2'>Industry Expertise</h1>
                        <h2 className='text-xl sm:text-2xl md:text-[2.4rem] text-white font-semibold p-2 pb-0'>Diverse Sectors, Unified Excellence</h2>
                    </div>

                    <div className='grid md:grid-cols-3 gap-8 mb-16'>
                        <div className='bg-gradient-to-br from-white/10 to-black bg-black/50 border border-white/15 rounded-xl p-6'>
                            <div className='w-16 h-16 bg-themeY/20 rounded-full mx-auto mb-4 flex items-center justify-center'>
                                <span className='text-2xl'>🏭</span>
                            </div>
                            <h3 className='text-lg font-semibold mb-3 text-themeY'>Manufacturing & Production</h3>
                            <p className='text-sm font-light'>From automation to traditional manufacturing, we provide skilled professionals who understand complex production environments.</p>
                        </div>

                        <div className='bg-gradient-to-br from-themeYTwo to-themeYDarkTwo bg-black/50 border border-white/15 rounded-xl p-6'>
                            <div className='w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center'>
                                <span className='text-2xl'>💼</span>
                            </div>
                            <h3 className='text-lg font-semibold mb-3'>Service Industries</h3>
                            <p className='text-sm font-light'>Supporting service-based businesses with professionals who excel in customer-focused environments and operational excellence.</p>
                        </div>

                        <div className='bg-gradient-to-br from-white/10 to-black bg-black/50 border border-white/15 rounded-xl p-6'>
                            <div className='w-16 h-16 bg-themeY/20 rounded-full mx-auto mb-4 flex items-center justify-center'>
                                <span className='text-2xl'>🔬</span>
                            </div>
                            <h3 className='text-lg font-semibold mb-3 text-themeY'>Technology & Innovation</h3>
                            <p className='text-sm font-light'>Connecting cutting-edge companies with top talent in technology, engineering, and innovation-driven sectors.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Insights */}
            <section className='mb-8 md:mb-16 mt-16 md:mt-[7.1rem] px-4 md:px-0 w-full mobile-full-width'>
                <div className='max-w-6xl mx-auto'>
                    <div className='h-auto flex flex-col gap-y-8 md:gap-y-10 justify-center content-center md:flex-row'>
                        <div className='flex-1 ml-0 md:ml-4 flex flex-col items-center md:items-start'>
                            <img src={section2Img} alt="" className='mt-0 w-full max-w-[300px] md:max-w-none'
                                style={{ scale: 0.8 }} />
                            <p className='relative text-white text-xs -top-[13.5rem] -left-[6.8rem] md:text-left md:origin-top-left md:left-[4.5rem] -rotate-90 md:-top-[14rem] tracking-[0.11rem] md:tracking-[0.35rem] font-semibold md:text-[1.1rem] mt-4 md:mt-0'>Industry Leadership</p>
                        </div>

                        <div className='flex-1 mt-4 md:mt-[4.3rem] px-0'>
                            <h1 className='text-themeYTwo/85 py-2 px-3 md:p-2 text-left text-base md:text-[1.12rem] mb-1'>Deep Industry Knowledge</h1>
                            <h2 className='font-bold text-md md:text-4xl px-3 md:p-1 mr-4 md:mr-20 text-left leading-tight md:leading-[3.1rem]'>Understanding your industry's unique challenges</h2>

                            <div className='text-left mt-6'>
                                <div className='border-l-2 border-[#CEB551] ml-0 md:ml-2 pl-3 md:pl-0'>
                                    <p className='pl-0 md:pl-7 mb-6 md:mb-8 mt-4 text-sm -tracking-tighter font-[180] text-balance'>
                                        Each industry has unique requirements, regulations, and challenges. Our specialized approach ensures we provide professionals who not only have the right skills but also understand your sector's specific needs and compliance requirements.
                                    </p>
                                    <p className='pl-0 md:pl-7 text-sm md:text-base leading-5 text-balance'>
                                        From highly regulated industries like finance and healthcare to rapidly evolving sectors like technology and renewable energy, we deliver talent solutions that drive success.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row mt-8 md:mt-14 gap-4 md:gap-0'>
                                <div className='text-left'>
                                    <h2 className='text-[#CEB551] flex gap-2 md:gap-5 ml-0 md:ml-1 pb-2 text-sm font-semibold justify-start'>
                                        <img src={star} alt="" className='h-2 w-2 md:h-3 md:w-3 mt-1' /> Sector Specialists
                                    </h2>
                                    <p className='pl-0 md:pl-9 pr-4 md:pr-[7.5rem] text-center md:text-left text-xs md:text-[0.65rem]'>
                                        Dedicated teams with deep knowledge of specific industries and their talent requirements.
                                    </p>
                                </div>
                                <div className='text-left'>
                                    <h2 className='text-[#CEB551] flex gap-2 md:gap-5 ml-0 md:ml-1 pb-2 text-sm font-semibold justify-start'>
                                        <img src={star} alt="" className='h-2 w-2 md:h-3 md:w-3 mt-1' /> Compliance Focus
                                    </h2>
                                    <p className='pl-[0.7rem] md:pl-9 pr-4 md:pr-[3.45rem] text-left text-xs md:text-[0.65rem]'>
                                        Ensuring all placements meet industry-specific regulations and certification requirements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Industries Grid */}
            <section className='pb-16 md:pb-28 pt-12 md:pt-20 flex flex-col px-4 md:px-0 w-full'>
                <div className='max-w-6xl mx-auto'>
                    <h1 className='text-xl md:text-2xl xl:text-[2.2rem] p-7 md:p-10 pb-12 md:pb-20 font-bold text-center'>
                        <span className='text-[#CEB551]'>INDUSTRIES </span>WE SERVE
                    </h1>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                        {industries.map((industry, index) => (
                            <IndustryCard
                                key={index}
                                title={industry.title}
                                description={industry.description}
                                image={industry.image}
                                expertise={industry.expertise}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Industry Showcase - Similar to Home */}
            <section className='pb-16 md:pb-28 pt-12 md:pt-20 flex flex-col px-4 md:px-0 w-full bg-white/[0.13]'>
                <h1 className='text-xl md:text-2xl xl:text-[2.2rem] p-7 md:p-10 pb-12 md:pb-20 font-bold md:text-center'>
                    <span className='text-[#CEB551]'>VISUAL </span>INDUSTRY PORTFOLIO
                </h1>
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

            {/* Industry Impact Stats */}
            <section className='relative bg-cover bg-center h-auto w-full pb-12 md:pb-20 pt-12 md:pt-20 flex flex-col justify-center items-center gap-6 md:gap-10 px-4 md:px-0'
                style={{ backgroundImage: `url(${section7Background})` }}>
                <div className='absolute inset-0 bg-themeYDark bg-gradient-to-b from-themeYTwo to-themeYDarkTwo opacity-50 -z-10'></div>
                <h1 className='text-xl md:text-2xl xl:text-4xl font-bold md:text-center'>Our <span className='bg-black px-2'>Industry</span> Impact</h1>
                <p className='mx-auto max-w-2xl md:text-center text-sm px-5 md:px-4'>Delivering specialized talent solutions that drive success across diverse industry sectors.</p>
                <div className='flex flex-col md:flex-row w-full max-w-60 md:max-w-6xl justify-evenly items-center content-center bg-[#2F2F2F] rounded-xl p-6 md:p-8 pb-8 md:pb-14 gap-6 md:gap-4'>
                    <div className='w-full md:w-60 h-auto text-center'>
                        <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl text-themeY'>20+</h1>
                        <p className='font-extralight text-sm p-2'>Industries Served</p>
                    </div>
                    <div className='w-full md:w-60 h-auto text-center'>
                        <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl text-themeY'>500+</h1>
                        <p className='font-extralight text-sm p-2'>Specialized Professionals</p>
                    </div>
                    <div className='w-full md:w-60 h-auto text-center'>
                        <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl text-themeY'>85%</h1>
                        <p className='font-extralight text-sm p-2 pb-0'>Industry Compliance</p>
                        <p className='font-extralight text-sm p-2 pt-0'>Success Rate</p>
                    </div>
                    <div className='w-full md:w-44 h-auto text-center'>
                        <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl text-themeY'>100%</h1>
                        <p className='font-extralight text-sm p-2 text-balance'>Sector-Specific Training Completion</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Industries
