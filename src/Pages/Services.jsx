import React from 'react'
import ServicesCardsServicePage from '../components/ServicesCardsServicePage'

// sec0 assets
import sec0Bg from '../assets/services/sec0/sec0Bg.png'
import sec0BgPattern from '../assets/services/sec0/sec0BgPattern.png'

// sec1 assets
import sec1Bg from '../assets/services/sec1/sec1Bg.png'
import sec1Pic from '../assets/services/sec1/sec1Pic.png'

// sec2 assets
import sec2Pic from '../assets/services/sec2/sec2Pic.png'
import manPowerSupplyLogo from '../assets/homePageAssets/servicesLogo/manPowerSupplyLogo.png'
import peoServicesLogo from '../assets/homePageAssets/servicesLogo/peoServicesLogo.png'
import hrOutsourcingLogo from '../assets/homePageAssets/servicesLogo/hrOutSourcingLogo.png'
import itStaffingLogo from '../assets/homePageAssets/servicesLogo/itStaffingLogo.png'
import payrollServicesLogo from '../assets/homePageAssets/servicesLogo/payrollServicesLogo.png'
// import recruitmentServicesLogo from '../assets/homePageAssets/servicesLogo/recruitmentServicesLogo.png'


// sec3 assets
import sec3BgPattern from '../assets/services/sec3/sec3BgPattern.png'

// sec4 assets
// import sec4BgPattern from '../assets/services/sec4/sec4BgPattern.png'
import sec4Pic from '../assets/services/sec4/sec4Pic.png'
import { useNavigate } from 'react-router-dom'

// Services data array
const servicesData = [
    {
        heading: 'Manpower Supply',
        text: 'We provide a comprehensive range of manpower solutions to help businesses stay staffed and productive.',
        cardLogo: manPowerSupplyLogo,
        color: 'yellow'
    },
    {
        heading: 'PEO Services',
        text: 'Our PEO services can help businesses save time and money while reducing compliance risks.',
        cardLogo: peoServicesLogo
    },
    {
        heading: 'HR Outsourcing',
        text: 'Our team of HR professionals can take on all your HR needs, from payroll to benefits administration.',
        cardLogo: hrOutsourcingLogo
    },
    {
        heading: 'Recruitment Services',
        text: 'Let our experts help you find the best talent for your open positions to keep your business moving forward.',
        cardLogo: hrOutsourcingLogo
    },
    {
        heading: 'Payroll Services',
        text: 'We provide WPS-compliant payroll solutions, saving you time and costs while ensuring efficiency.',
        cardLogo: payrollServicesLogo
    },
    {
        heading: 'IT Staffing',
        text: 'We offer expert IT staffing solutions across the Gulf, India, Pakistan, and the USA, with tailored, project based support.',
        cardLogo: itStaffingLogo,
        color: 'yellow'
    }
];


const Services = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* sec0 */}
            <section className='relative flex justify-start items-start w-full max-w-full p-4 h-auto md:h-[115vh] overflow-hidden'>
                <div className='absolute inset-0 opacity-25'><img src={sec0Bg} alt="" className='w-full h-full object-cover' /></div>
                <div className='absolute right-0 top-1 overflow-hidden'><img src={sec0BgPattern} alt="" className='w-full h-[115vh] object-contain opacity-80' /></div>
                <div className='m-2 md:ml-44 md:mt-40 z-10 flex flex-col justify-center items-start gap-2 md:gap-10'>
                    <p className='text-[#D4B760] text-xl md:text-2xl ml-1'>Home &gt;  Services</p>
                    <h1 className='text-3xl md:text-6xl font-semibold md:w-[45vw]'>Global HR & Manpower<span className='text-[#CEB551]'> Expertise</span></h1>
                    <div className='flex justify-center items-start gap-2 md:gap-8'>
                        <button className='py-[0.6rem] w-[40vw] md:w-[15vw] rounded bg-gradient-to-b text-sm md:text-lg font-semibold from-[#EDD569]/90 to-[#977619] bg-[#977619] hover:bg-black' onClick={(e) => {
                            e.preventDefault();
                            navigate('/proposal');
                        }}>Request Proposal &gt;</button>
                        <button className='py-[0.6rem] w-[28vw] md:w-[10vw] rounded bg-white text-black hover:bg-black hover:text-white text-sm md:text-lg font-semibold' onClick={
                            (e) => {
                                e.preventDefault();
                                navigate('/jobs');
                            }
                        }>Register CV &gt;</button>
                    </div>
                </div>
            </section >

            {/* sec1 */}
            < section className='relative flex flex-wrap justify-center items-center p-4 h-full md:h-[110vh]' >
                <div className='absolute inset-0 h-[135vh] bg-gradient-to-b from-black to-white/5 bg-white/5 -z-10'></div>
                <div className='absolute inset-0'><img src={sec1Bg} alt="" className='w-full h-[110vh] object-contain opacity-15 -z-10' /></div>
                <div className='sz-10 flex flex-col justify-center items-baseline gap-4'>
                    <h1 className='pl-4 md:pl-0 text-[#C2A441] md:text-2xl'>What Sets Us Apart</h1>
                    <h2 className='pl-4 md:pl-0 text-2xl md:text-4xl font-bold w-[85vw] md:w-[45vw]'>Leading the Way in HR Solutions and Global <span className='text-[#CEB551]'> Expertise</span></h2>
                    <div className='mt-2 md:mt-10 border-l-2 border-[#CEB551] pl-4 md:pl-10 md:w-[39vw] opacity-85'>
                        <p className='mb-2 md:mb-8'>At AM Global,  we  distinguish  ourselves  by  delivering  customized
                            HR  solutions  that  cater  to  your  specific  business  needs.  With
                            our  extensive  experience across the Gulf, India, Pakistan, and the USA, we ensure your company excels with the right talent, efficient payroll management, and strategic HR services.</p>
                        <p>AM Global excels in providing customized HR solutions across global markets, ensuring your business runs efficiently with the right talent and streamlined services.</p>
                    </div>
                </div>
                <div className='z-10'>
                    <img src={sec1Pic} alt="" className='max-h-[78vh] w-auto' />
                </div>
            </section >

            {/* sec2 */}
            < section className='flex flex-col justify-center items-center md:gap-10 p-2 h-full md:h-[110vh] my-2 md:mt-20 md:mb-5' >
                <div className='flex justify-center items-center p-4 md:p-2'>
                    <div className='text-left'>
                        <h1 className='text-[#CEB551] m-1 md:pr-14 text-xl md:text-2xl'>Services</h1>
                        <h2 className='m-1 md:pr-14 text-2xl md:text-4xl font-bold'>Our Core Services</h2>
                    </div>
                    <div className='text-left m-1 pl-4 md:pl-14 py-1 border-l-2 border-opacity-85 border-[#CEB551] text-sm md:text-lg w-[45vw] md:w-[43vw]'>
                        <p>Explore our tailored HR, staffing, and payroll solutions designed for efficiency and global reach.</p>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-1'>
                    <div className='md:w-[35vw] w-[90vw] h-auto flex justify-end items-center'><img src={sec2Pic} alt="" className='w-auto md:h-[34vw] mb-4 md:mb-14 object-contain' /></div>
                    <div className='md:w-[61.5vw] w-[90vw] h-auto flex flex-wrap gap-2 md:gap-3 justify-center items-center'>
                        {servicesData.map((service, index) => (
                            <ServicesCardsServicePage
                                key={index}
                                heading={service.heading}
                                text={service.text}
                                cardLogo={service.cardLogo}
                                color={service.color}
                            />
                        ))}
                    </div>
                </div>
                <button className='md:ml-0 ml-4 self-start md:self-auto md:mb-20 text-white bg-gradient-to-r from-[#F0D784]/75 to-[#C3A349] bg-[#C3A349] hover:bg-black py-[0.4rem] my-4 md:my-0 w-[35vw] md:w-[9.5vw] rounded text-sm font-semibold'>Learn More</button>
            </section >

            {/* sec3 */}
            < section className='relative md:h-[85vh] flex flex-col justify-around items-center md:mb-0 mb-20' >
                <div className='absolute inset-0 w-full h-full'><img src={sec3BgPattern} alt="" /></div>
                <div className='absolute inset-0 w-full h-full bg-white/15'></div>
                <div className='md:my-0 my-4 flex flex-col justify-center items-start md:items-center gap-2 md:gap-4'>
                    <h1 className='text-xl text-center md:text-4xl font-semibold'>Our &nbsp;<span className='bg-[#CEB551] rounded'> Impact </span>&nbsp; in Numbers</h1>
                    <p className='text-xs md:text-sm w-[88vw] text-left md:text-center'>Our outsourcing and manpower solutions have helped businesses in a wide range of industries to save time and money while reducing compliance risks.</p>
                    <div className='self-center md:mt-10 mt-2 flex flex-col lg:flex-row w-full max-w-[60vw] md:max-w-7xl justify-evenly items-center content-center bg-[#2F2F2F]/20 rounded-xl p-6 lg:p-6 pb-8 lg:pb-10 gap-6 lg:gap-4'>
                        <div className='w-full md:w-60 h-auto text-center'>
                            <h1 className='text-[#BDA03D] font-semibold text-2xl md:text-3xl xl:text-5xl'>20+</h1>
                            <p className='font-extralight text-sm p-2'>Industries</p>
                        </div>
                        <div className='w-full lg:w-60 h-auto text-center'>
                            <h1 className='text-[#BDA03D] font-semibold text-2xl lg:text-3xl xl:text-5xl'>1000+</h1>
                            <p className='font-extralight text-sm p-2'>Resource Pool Available</p>
                        </div>
                        <div className='w-full lg:w-60 h-auto text-center'>
                            <h1 className='text-[#BDA03D] font-semibold text-2xl lg:text-3xl xl:text-5xl'>20+</h1>
                            <p className='font-extralight text-sm p-2 pb-0'>Business Partnerships</p>
                            <p className='font-extralight text-sm p-2 pt-0'>(still growing)</p>
                        </div>
                        <div className='w-full lg:w-44 h-auto text-center'>
                            <h1 className='text-[#BDA03D] font-semibold text-2xl lg:text-3xl xl:text-5xl'>10+</h1>
                            <p className='font-extralight text-sm p-2 text-balance'>A M Global Team has 10+ Year's experience in staffing business</p>
                        </div>
                    </div>
                </div>
            </section >

            {/* sec4 */}
            < section className='relative flex flex-wrap md:justify-center justify-start items-center px-8 md:p-4 h-full md:h-[110vh]' >
                <div className='absolute inset-0 h-full md:h-[135vh] bg-gradient-to-b from-black to-white/5 bg-white/5 -z-10'></div>
                <div className='absolute inset-0'><img src={sec1Bg} alt="" className='w-full h-full md:h-[110vh] object-contain opacity-15 -z-10' /></div>
                <div className='relative p-2 z-10 flex flex-col md:gap-16 gap-5 justify-center items-start w-auto md:w-[80vw] sm:w-[100vw]'>
                    <div className='flex flex-col items-start gap-2'>
                        <h1 className='text-[#C2A441] text-xl md:text-2xl'>Contact Us</h1>
                        <h2 className='text-2xl md:text-4xl font-bold'>How Can We Help?</h2>
                    </div>
                    <p className='text-sm md:text-[1rem] md:w-[27vw]'>If there is anything you'd like to know about what we do, how we do it, or how we can help you, please get in touch.</p>
                    <button className='bg-gradient-to-r from-[#F0D784]/85 to-[#C3A349] bg-[#C3A349] hover:bg-black rounded py-2 md:w-[10vw] w-[30vw] text-xs md:text-sm font-semibold'
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/proposal');
                        }}
                    >Contact Us &gt;</button>
                </div>
                <div className='z-10 p-2 md:absolute md:right-10 md:bottom-0'>
                    <img src={sec4Pic} alt="" className='md:h-[90vh] h-auto w-auto' />
                </div>
            </section >
        </div >
    )
}

export default Services