import React, { useState } from 'react'
import sec0Arrow from '../assets/applyPageAssets/sec0/sec0Arrow.png'

const ApplyPageCards = ({ image, heading, txt, isHovered }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const handleReadMoreClick = () => {
        if (!isExpanded) {
            // Expanding - immediate change
            setIsExpanded(true)
        } else {
            // Collapsing - add transition delay
            setIsTransitioning(true)
            setTimeout(() => {
                setIsExpanded(false)
                setIsTransitioning(false)
            }, 100) // Small delay to start the transition smoothly
        }
    }

    return (
        <div className='bg-black border border-[#C8AF4E]/60 rounded-lg w-[75vw] md:w-[25vw]'>
            <img src={image} alt="" />
            <div
                className={`relative cursor-pointer transition-all duration-500 ${isExpanded ? 'h-full' : 'h-[32vh] md:h-[28vh] overflow-hidden'}`}
            >
                <div className={`m-2 md:m-4 md:mt-1 transition-all duration-1000 ease-in-out ${(isExpanded || isTransitioning)
                    ? 'relative opacity-100 transform translate-y-0'
                    : `absolute bg-black/90 backdrop-blur-sm transform ${isHovered
                        ? 'top-2 left-2 right-2 md:top-0 md:left-0 md:right-0 opacity-100 translate-y-0'
                        : 'translate-y-full opacity-0 bottom-0 left-0 right-0'
                    }`
                    }`}>

                    {/* content-div: */}
                    <div>
                        <h2 className='pt-1 pb-1 md:pt-2 md:pb-2 bg-clip-text text-transparent text-xl md:text-2xl font-bold bg-gradient-to-r from-[#CEB551] to-[#8C7934]/80'>{heading}</h2>
                        <p className={`font-opensans pt-1 pb-2 md:pt-2 md:pb-4 text-[0.8rem] font-light ${isExpanded ? '' : 'line-clamp-2'}`}
                            style={{ wordSpacing: '0.1rem' }}>
                            {txt}
                        </p>
                    </div>

                    <div className='font-opensans mt-2 md:mt-3 flex justify-start items-center gap-2' onClick={handleReadMoreClick}>
                        <p className='text-left text-xs md:text-sm hover:text-[#CEB551] transition-colors cursor-pointer'>
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </p>
                        <img
                            src={sec0Arrow}
                            alt=""
                            className={`scale-75 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                                }`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ApplyPageCards, (prevProps, nextProps) => {
    return (
        prevProps.image === nextProps.image &&
        prevProps.heading === nextProps.heading &&
        prevProps.txt === nextProps.txt &&
        prevProps.isHovered === nextProps.isHovered
    );
});