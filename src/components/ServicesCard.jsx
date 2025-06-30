import React from 'react'

const ServicesCard = ({ heading, text, cardLogo, color, flexWidth, h }) => {
    const grad = {
        from: color == 'yellow' ? 'from-[#EDD569]/90' : 'from-[#484848]/85',
        to: color == 'yellow' ? 'to-[#977619]' : 'to=[#1E1E1E]'
    }

    if (!h) {
        console.log('hight is not given for service cards.')
    }

    return (
        <div className={`${h} border-2 border-white/5 bg-gradient-to-br ${grad.from} ${grad.to} bg-black w-full md:w-auto ${flexWidth === '2' ? 'md:flex-[2] md:max-w-[32rem]' : 'md:flex-1 md:max-w-60'} max-w-64 rounded-2xl p-3 md:p-1 ${flexWidth === '2' ? '' : 'md:pt-1 md:pb-3'} font-extralight`}>
            {
                cardLogo && (
                    <img className='w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 relative top-1 md:top-2 xl:top-3 left-1 md:left-2 xl:left-4 mb-3 md:mb-4' src={cardLogo} alt="card logo" />
                )
            }
            <h2 className='font-bold ml-3 md:ml-5 mr-10 md:mr-40 mb-2 text-left text-md md:text-xl'>{heading}</h2>
            <p className='text-left ml-3 md:ml-5 mr-3 md:mr-5 mb-3 md:mb-5 text-xs md:text-[0.74rem] opacity-90'>{text}</p>
        </div>
    )
}

export default React.memo(ServicesCard);