import React from 'react'

const ServicesCardsServicePage = ({ heading, text, cardLogo, color }) => {
    const grad = {
        from: color == 'yellow' ? 'from-[#EDD569]/90' : 'from-[#484848]/85',
        to: color == 'yellow' ? 'to-[#977619]' : 'to=[#1E1E1E]'
    }

    return (
        <div className={`md:h-[30vh] border-2 border-white/5 bg-gradient-to-br ${grad.from} ${grad.to} bg-black w-full md:max-w-[19vw] rounded-2xl p-1 md:p-2 font-extralight`}>
            {
                cardLogo && (
                    <img className='w-5 h-5 md:w-8 md:h-8 xl:w-10 xl:h-10 relative top-1 md:top-2 xl:top-3 left-1 md:left-2 xl:left-4 mb-3 md:mb-4' src={cardLogo} alt="card logo" />
                )}
            <h2 className='mb-2 font-bold ml-3 md:ml-5 mr-3 md:mr-5 text-left text-md md:text-lg leading-tight'>{heading}</h2>
            <p className='text-left ml-3 md:ml-5 mr-3 md:mr-5 mb-3 md:mb-5 text-xs md:text-[0.8rem] opacity-90'>{text}</p>
        </div>
    )
}

export default React.memo(ServicesCardsServicePage);