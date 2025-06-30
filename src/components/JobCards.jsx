import React from 'react'
import cardlogo from '../assets/jobCard/cardlogo.png'
import locationLogo from '../assets/jobCard/locationLogo.png'

const JobCards = ({ heading, startingPrice, endingPrice, experienceLvl, location, desc }) => {
    return (
        <div className='py-3 px-4 md:p-5 flex flex-col gap-2 md:gap-4 bg-black bg-gradient-to-r from-[#979797]/25 to-[#313131]/80 border-[0.1rem] border-white/30 rounded-lg'>
            <div className='flex flex-col sm:flex-row justify-between items-start'>
                <div className='flex justify-start items-start sm:items-center gap-3 md:gap-4 w-full sm:w-auto'>
                    <div className='border bg-[#B89D32] p-1 rounded-sm min-w-10'>
                        <img src={cardlogo} alt="Job logo" className='w-full h-full object-contain scale-75' />
                    </div>
                    <div className='flex flex-col gap-1 md:gap-3 justify-start items-start max-w-full'>
                        <h2 className='text-lg md:text-2xl text-[#B89D32] font-semibold break-words w-full'>{heading}</h2>
                        <div className='flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center gap-2 sm:gap-3 md:gap-10 text-xs font-light w-full'>
                            <p className='text-sm'>{experienceLvl}</p>
                            <div className='flex justify-center items-center gap-1'>
                                <img src={locationLogo} alt="Location" className='w-4 h-4' />
                                <p className='text-xs sm:text-sm truncate max-w-[180px]'>{location}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex mt-2 sm:mt-0 self-start sm:self-center'>
                    <strong className='text-[#B89D32] text-lg md:text-2xl whitespace-nowrap'>${startingPrice}K - ${endingPrice}K</strong>
                </div>
            </div>

            <p className='text-sm font-light opacity-90 line-clamp-3 sm:line-clamp-none'>{desc}</p>

            <div className='flex flex-wrap justify-start items-center gap-2 py-2 mt-2 sm:mt-auto'>
                <button className='py-1 px-4 bg-[rgb(184,157,50)] rounded-full text-xs hover:bg-[#977619] transition-colors'>Remote</button>
                <button className='py-1 px-4 bg-white/90 rounded-full text-xs text-black hover:bg-white/80 transition-colors'>Full Time</button>
            </div>
        </div>
    )
}

export default JobCards