import React from 'react'

const FeatureCard = ({ heading, text, cardLogo, themeNo }) => {

    return (
        <div className={`bg-gradient-to-br ${themeNo == 1 ? 'from-white/10' : 'from-themeYTwo'} ${themeNo == 1 ? 'to-black' : 'to-themeYDarkTwo'} bg-black/50 border border-white/15 w-full lg:w-[30%] xl:w-[31%] min-h-60 lg:min-h-[22rem] rounded-xl max-w-[20.5rem] lg:max-w-none flex flex-col justify-center mx-auto lg:mx-0`}>
            {cardLogo && (
                <img className='w-10 h-10 lg:w-12 lg:h-12 xl:w-24 xl:h-24 relative -top-2 lg:-top-4 xl:-top-16 left-2 lg:left-2 xl:left-5 xl:scale-110' src={cardLogo} alt="card logo" />
            )}
            <div className='ml-4 lg:ml-6 mr-6 lg:mr-8'>
                <h2 className='font-semibold self-center text-left pr-0 lg:pr-20 text-lg lg:text-xl xl:text-2xl'>{heading}</h2>
                <hr className='relative border mr-12 lg:mr-20 opacity-20 mt-3 lg:mt-4 mb-3 lg:mb-8' />
                <p className='text-sm lg:text-[0.9rem] lg:leading-[1.5rem] text-left mb-4 lg:m-auto font-extralight'>{text}</p>
            </div>
        </div>
    )
}

export default React.memo(FeatureCard);