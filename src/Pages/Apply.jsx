import React, { useState } from 'react'

// sec0 assets
import sec0Bg from '../assets/applyPageAssets/sec0/sec0Bg.png'
import sec0Pattern from '../assets/applyPageAssets/sec0/sec0Pattern.png'
import sec0SearchIcon from '../assets/applyPageAssets/sec0/sec0SearchIcon.png'
import sec0Arrow from '../assets/applyPageAssets/sec0/sec0Arrow.png'

// sec1 assets
import sec1BgTexture from '../assets/applyPageAssets/sec1/sec1BgTexture.png'
import sec1img1 from '../assets/applyPageAssets/sec1/sec1img1.png'
import sec1img2 from '../assets/applyPageAssets/sec1/sec1img2.png'
import sec1img3 from '../assets/applyPageAssets/sec1/sec1img3.png'
import sec1img4 from '../assets/applyPageAssets/sec1/sec1img4.png'
import sec1img5 from '../assets/applyPageAssets/sec1/sec1img5.png'
import sec1img6 from '../assets/applyPageAssets/sec1/sec1img6.png'
import ApplyPageCards from '../components/ApplyPageCards'

// sec2 assets
import sec2img1 from '../assets/applyPageAssets/sec2/sec2img1.png'
import sec2img2 from '../assets/applyPageAssets/sec2/sec2img2.png'

// sec3 assets
import sec3ApplicationLogo from '../assets/applyPageAssets/sec3/sec3ApplicationLogo.png'
import sec3CommunicationLogo from '../assets/applyPageAssets/sec3/sec3CommunicationLogo.png'
import sec3ContinuedLogo from '../assets/applyPageAssets/sec3/sec3ContinuedLogo.png'
import sec3GuidanceLogo from '../assets/applyPageAssets/sec3/sec3GuidanceLogo.png'
import sec3YourJobLogo from '../assets/applyPageAssets/sec3/sec3YourJobLogo.png'
import sec3Pattern from '../assets/applyPageAssets/sec3/sec3Pattern.png'

// sec5 assets
import sec5img1 from '../assets/applyPageAssets/sec5/sec5img1.png'
import sec5img2 from '../assets/applyPageAssets/sec5/sec5img2.png'
import sec5img3 from '../assets/applyPageAssets/sec5/sec5img3.png'
import sec5img4 from '../assets/applyPageAssets/sec5/sec5img4.png'
import sec5img5 from '../assets/applyPageAssets/sec5/sec5img5.png'
import sec5img6 from '../assets/applyPageAssets/sec5/sec5img6.png'

// sec6 assets
import sec6Bg from '../assets/applyPageAssets/sec6/sec6Bg.png'
import sec6InnerBoxBg from '../assets/applyPageAssets/sec6/sec6InnerBoxBg.png'
import sec6innerBoxPattern from '../assets/applyPageAssets/sec6/sec6innerBoxPattern.png'

import { useNavigate } from 'react-router-dom'

const Apply = () => {
    const [isHovered, setIsHovered] = useState(false)
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    return (
        <div>
            {/* sec0 */}
            <section className='z-20 relative flex justify-center items-start flex-col w-full min-h-[55vh] px-4 md:px-0'>
                <div className='z-20 absolute inset-0 opacity-20 md:-top-24 overflow-hidden'><img src={sec0Bg} alt="" className='w-full h-auto object-cover' /></div>
                <div className='z-20 absolute inset-0 md:-right-20 md:-top-24 overflow-hidden'><img src={sec0Pattern} alt="" className='md:scale-[0.8] w-full h-auto object-contain' /></div>
                <div className='z-30 mx-4 md:mx-40 mt-28 md:mt-52 font-opensans relative flex flex-col justify-center items-start gap-4 md:gap-9 max-w-full'>
                    <h1 className='absolute transform rotate-[-17.13deg] -top-[1.5rem] md:-top-[2rem] -left-7 md:-left-10 bg-gradient-to-b from-[#EDD569]/90 to-[#977619] bg-black rounded-lg font-semibold text-xs md:text-base w-[23vw] md:w-[11vw] pt-[0.4rem] pb-[0.4rem] text-center'>Apply Here</h1>
                    <div>
                        <h2 className='text-2xl md:text-6xl mb-2'>Get The Best Job</h2>
                        <h3 className='text-3xl md:text-7xl font-bold text-[#C7B04C]'>You Deserve</h3>
                    </div>
                    <p className='md:w-[30vw] md:text-base text-xs'>Tailored job matches to align with your skills and aspirations. Discover opportunities that fit your professional goals.</p>
                    <label className='relative flex items-center w-full max-w-[85vw] md:max-w-[32vw]' htmlFor="searchBar">
                        <img className='pr-1 absolute right-2 md:scale-100 scale-50 z-10' src={sec0SearchIcon} alt="" />
                        <input className='w-full p-1 pr-8 md:p-3 rounded placeholder:text-[0.68rem] md:placeholder:text-base' id='searchBar' type="text" placeholder='It is up to you to choose from 4234 vacancies' />
                    </label>
                    <button className='flex justify-center items-center gap-3 md:text-lg bg-gradient-to-r bg-[#EDD569] from-[#EDD569]/90 to-[#977619]/90 hover:bg-black p-1 w-[30vw] md:w-[12vw] md:p-3 rounded-lg'
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/jobfindsearch');
                        }}
                    >
                        <p>Start</p> <img src={sec0Arrow} alt="" className='scale-75' />
                    </button>
                </div>
            </section>

            {/* sec1 */}
            <section className='relative pt-[1rem] overflow-hidden'>
                <div className='absolute inset-0 w-full h-full overflow-hidden'><img src={sec1BgTexture} alt="" className='w-full h-full object-cover' /></div>
                <div className='bg-white/15 relative z-10 flex items-center justify-center flex-wrap gap-14 py-10 md:py-20 pt-6 md:pt-10 px-4' onMouseEnter={handleMouseEnter}>
                    {
                        [
                            { i: sec1img1, h: 'Engineering', t: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta asperiores architecto, iure dolor adipisci necessitatibus repellendus ut doloribus esse, ipsa, rem itaque a? Eius sed modi vel ullam architecto.' },
                            { i: sec1img2, h: 'Developer', t: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta asperiores architecto, iure dolor adipisci necessitatibus repellendus ut doloribus esse, ipsa, rem itaque a? Eius sed modi vel ullam architecto.' },
                            { i: sec1img3, h: 'Sales', t: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta asperiores architecto, iure dolor adipisci necessitatibus repellendus ut doloribus esse, ipsa, rem itaque a? Eius sed modi vel ullam architecto.' },
                            { i: sec1img4, h: 'Manufacturing', t: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta asperiores architecto, iure dolor adipisci necessitatibus repellendus ut doloribus esse, ipsa, rem itaque a? Eius sed modi vel ullam architecto.' },
                            { i: sec1img5, h: 'Finance', t: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta asperiores architecto, iure dolor adipisci necessitatibus repellendus ut doloribus esse, ipsa, rem itaque a? Eius sed modi vel ullam architecto.' },
                            { i: sec1img6, h: 'IT', t: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta asperiores architecto, iure dolor adipisci necessitatibus repellendus ut doloribus esse, ipsa, rem itaque a? Eius sed modi vel ullam architecto.' }
                        ]
                            .map((img, idx) => (
                                <ApplyPageCards image={img.i} heading={img.h} txt={img.t} key={idx} isHovered={isHovered} />
                            ))
                    }
                </div>
            </section>

            {/* sec2 */}
            <section className='md:h-[85vh] flex flex-wrap justify-center items-center gap-10 md:gap-32 md:mb-0 mb-20'>
                <div className='p-4 md:p-2 w-[90vw] md:w-[37vw] flex flex-col gap-2'>
                    <h1 className='text-3xl md:text-5xl font-bold'>
                        <span className='inline-block mb-2'>We Find</span> <br />
                        <span className='text-[#C8AF4E]'> The Job For You</span>
                    </h1>
                    <div>
                        <p className='ml-2 mb-2 opacity-90 tracking-wider font-extralight'>With A M Global you can outsource your entire HR function or any specific HR services that you may need. We will work with you to develop a customized solution that meets your specific business needs with ease.</p>
                        <p className='ml-2 mt-4 md:mt-10 opacity-90 tracking-wider font-extralight'>Sign up as a job seeker and put us to work.</p>
                    </div>
                    <button className='text-sm md:text-base ml-2 pt-3 pb-3 w-[35vw] md:w-[13.5vw] rounded-lg mt-4 font-semibold bg-gradient-to-b bg-[#977619] hover:bg-black from-[#EDD569]/90 to-[#977619]/90'>Register Directly</button>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-5'>
                    <img src={sec2img1} alt="" className='md:w-[18vw] w-[45vw]' />
                    <img src={sec2img2} alt="" className='md:w-[18vw] w-[45vw]' />
                </div>
            </section>

            {/* sec3 */}
            <section className='relative md:h-[85vh] flex flex-col justify-around items-center md:mb-0  mb-20'>
                <div className='absolute inset-0 w-full h-full'><img src={sec3Pattern} alt="" /></div>
                <h1 className='text-3xl md:text-4xl font-bold md:p-1 p-10 text-left md:text-center w-full'>How It Works</h1>
                <div className='ml-7 md:ml-0 flex md:justify-center items-center flex-wrap gap-2 md:gap-16 text-center text-sm'>
                    {[
                        { src: sec3ApplicationLogo, caption: 'Application' },
                        { src: sec3CommunicationLogo, caption: 'Communication' },
                        { src: sec3YourJobLogo, caption: 'Your Job' },
                        { src: sec3GuidanceLogo, caption: 'Guidance' },
                        { src: sec3ContinuedLogo, caption: 'Continued' }
                    ]
                        .map(({ src, caption }) => (
                            <figure key={caption} className='md:m-0 m-1'>
                                <img src={src} alt="" className='w-20 md:w-28 h-auto' />
                                <figcaption className='p-2'>{caption}</figcaption>
                            </figure>
                        ))}
                </div>
                <button className='ml-10 md:ml-0 self-start md:self-auto md:mt-0 mt-8 z-10 text-base md:text-lg w-[35vw] md:w-[13vw] pt-2 pb-2 rounded-lg bg-gradient-to-b bg-[#EDD569]/90 from-[#EDD569]/90 to-[#977619]/90 hover:bg-black'>Get In Touch</button>
            </section>

            {/* sec4 */}
            <section className='font-poppins p-2 md:pl-20 md:h-[85vh] flex flex-col justify-center items-start gap-4 md:gap-10 md:mb-0  mb-20'>
                <div className='md:w-[25vw] w-[90vw] ml-2 md:ml-40'>
                    <h1 className='text-[#BDA54B] text-xl md:text-2xl'>Why AM Global</h1>
                    <h2 className='text-2xl md:text-3xl font-semibold'>From Employee Point Of View?</h2>
                </div>
                <ol className='flex flex-wrap justify-center items-center gap-4 md:gap-6'>
                    {[
                        'Dedicated supervisors to ensure optimal experience',
                        'Best pay master',
                        'Best in class benefits and incentives',
                        'High quality staff accommodation',
                        'Free of cost transportation',
                        'Diverse pool of clients and industries to match your career aspirations'
                    ].map((item, index) => (
                        <li key={item} className={`my-2 text-white relative flex w-[90vw] md:w-[40vw] items-center gap-4 rounded-full px-4 py-5 text-sm md:text-base font-medium ${index === 0 || index === 5
                            ? 'bg-gradient-to-r from-[#EDD569]/90 to-[#977619]/90 bg-[#977619]'
                            : 'bg-gradient-to-r from-[#2D2D2D] to-[#404040]'
                            }`}>
                            <span className={`absolute left-0 w-[5rem] h-[5rem] md:w-[5.8rem] md:h-[5.8rem] rounded-full flex items-center justify-center font-bold text-xl md:text-4xl text-[#D0B44E] bg-gradient-to-br bg-[#404040] from-[#404040] to-[#2D2D2D] shadow-lg shadow-black}`}>
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className='flex-grow ml-20 md:text-base text-xs'>{item}</span>
                        </li>
                    ))}
                </ol>
            </section >

            {/* sec5 */}
            <section className='font-assistant p-2 md:h-[110vh] flex flex-col justify-around items-center gap-4 md:gap-10 md:mb-0  mb-20'>
                <h1 className='self-start ml-9 md:ml-0 md:self-auto text-3xl md:text-7xl font-bold md:mb-10'>Life at AM Global</h1>
                <div className='flex flex-wrap justify-center items-center gap-4'>
                    <div className='md:w-[40vw] flex flex-col justify-center items-center gap-4'>
                        <div className='w-[80vw] md:w-[19vw] flex flex-col md:flex-row justify-center items-center gap-4'>
                            <img src={sec5img1} alt="" />
                            <img src={sec5img2} alt="" /></div>
                        <div className='w-[80vw] md:w-[40vw]'>
                            <img src={sec5img3} alt="" />
                        </div>
                    </div>
                    <div className='md:w-[40vw] flex flex-col justify-center items-center gap-4'>
                        <div className='w-[80vw] md:w-[40vw]'>
                            <img src={sec5img4} alt="" />
                        </div>
                        <div className='w-[80vw] md:w-[19vw] flex flex-col md:flex-row justify-center items-center gap-4'>
                            <img src={sec5img5} alt="" />
                            <img src={sec5img6} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* sec6 */}
            <section className='relative bg-white/10 p-5 h-fit md:h-[90vh] flex flex-col justify-around items-center'>
                <div className='absolute inset-0 w-full h-full'><img src={sec6Bg} alt="" /></div>
                <div className='relative flex justify-around items-center flex-col bg-gradient-to-br bg-[#977619]/90 from-[#EDD569] to-[#977619] w-[80] md:w-[60vw] h-[20vh] md:h-[38vh] rounded-lg'>
                    <div className='absolute inset-0'><img src={sec6InnerBoxBg} alt="" /></div>
                    <div className='absolute top-[40%] w-full h-full'><img src={sec6innerBoxPattern} alt="" /></div>
                    <h1 className='text-xl md:text-2Sxl md:w-[35vw] text-center font-semibold'>
                        Subscribe Our Newsletter For
                        Newest Updates
                    </h1>
                    <div className='relative flex justify-center items-center p-2 text-xs md:text-lg'>
                        <input type="text" placeholder='Type Your Email Here' className='w-[65vw] md:w-[40vw] p-2 md:p-6 bg-white/35 text-white placeholder:text-white placeholder:font-semibold md:placeholder:text-lg placeholder:text-xs rounded-lg ' />
                        <button className='absolute right-0 rounded-lg bg-white text-black font-semibold p-2 md:p-[1.45rem] w-[30%] md:w-[28%]'>Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Apply