import React from 'react'
import bg from '../assets/proposal/bg.png'
import formPic from '../assets/proposal/formPic.png'

const Porposal = () => {
    return (
        <div>
            <section className='relative flex flex-col justify-around items-center md:h-[150vh] h-auto  py-20'>
                <div className='absolute md:top-52 md:h-[150vh]'><img src={bg} alt="" /></div>
                <div className='absolute inset-0 md:h-[150vh] bg-white/[0.13]'></div>
                <div className='ml-4 md:ml-0 md:text-center'>
                    <h1 className='text-xl md:text-[2.5rem] font-extrabold m-4 md:m-2 md:mb-8'>Request Proposal</h1>
                    <p className='md:text-center text-left md:ml-0 m-4 opacity-80 md:w-[30vw] md:mb-20 mb-2'>Share details of the role you're looking to fill and we'll be in touch within 24 hours.</p>
                </div>
                <div className='shadow-2xl shadow-black/5 md:p-10 p-3 rounded-xl flex md:flex-row flex-col-reverse justify-center items-center bg-[#272727] m-2 gap-3 md:gap-10 w-auto md:w-[80vw] h-atuo md:h-[110vw] z-10'>
                    <form action="" className='md:ml-10 md:w-[38vw] md:h-full'>
                        <h1 className='text-lg md:text-xl font-semibold mb-1'>Let's Connect </h1>
                        <p className='font-extralight opacity-90 md:w-[24vw] text-xs'>Have questions or need support? Contact us today to discuss your HR needs. Our team is here to help.</p>
                        {/* field div */}
                        <div className='py-7 flex flex-col justify-center items-start gap-4 text-black'>
                            <div className='flex justify-start items-center gap-4 w-full'>
                                <input type="text" placeholder='First Name' className='rounded w-1/2 p-[0.4rem] placeholder:text-xs text-sm  border border-white/10 bg-white/10 text-white' />
                                <input type="text" placeholder='Last Name' className='rounded w-1/2 p-[0.4rem] placeholder:text-xs text-sm  border border-white/10 bg-white/10 text-white' />
                            </div>
                            <input type="text" placeholder='Business Email' className='rounded w-full p-[0.4rem] placeholder:text-xs  text-sm  border border-white/10 bg-white/10 text-white' />
                            <div className='flex justify-start items-center gap-4 w-full'>
                                <input type="text" placeholder='Phone Number' className='rounded w-1/3 p-[0.4rem] placeholder:text-xs  text-sm  border border-white/10 bg-white/10 text-white' />
                                <input type="text" placeholder='+92' className='rounded w-2/3 p-[0.4rem] placeholder:text-xs text-sm  border border-white/10 bg-white/10 text-white' />
                            </div>
                            <div className='flex justify-start items-center gap-4 w-full'>
                                <input type="text" placeholder='Company Name' className='rounded w-1/2 p-[0.4rem] placeholder:text-xs text-sm  border border-white/10 bg-white/10 text-white' />
                                <input type="text" placeholder='Your Job Title' className='rounded w-1/2 p-[0.4rem] placeholder:text-xs text-sm  border border-white/10 bg-white/10 text-white' />
                            </div>
                            <input type="text" placeholder='Payroll Outsourcing' className='rounded w-full p-[0.4rem] placeholder:text-xs text-sm  border border-white/10 bg-white/10 text-white' />
                            <input type="text" placeholder='What is your payroll headcount?' className='rounded w-full p-[0.4rem] placeholder:text-xs text-sm  border border-white/10 bg-white/10 text-white' />
                            <input type="text" placeholder='Which Country do you want to cover for Payroll Outsourcing Services?' className='rounded w-full p-[0.4rem] placeholder:text-xs text-sm  border border-white/10 bg-white/10 text-white' />
                        </div>                        <div className='relative'>
                            <input type="checkbox" id='privacy' className='absolute appearance-none bg-transparent top-0 left-0 w-4 h-4 border border-white/30 rounded checked:after:content-["✓"] checked:after:text-white checked:after:text-xs checked:after:absolute checked:after:top-[-2px] checked:after:left-[1px] checked:after:font-bold' />
                            <label htmlFor="privacy" className='text-[0.55rem] font-extralight px-4 ml-2 md:w-[28vw] inline-block opacity-85'>Yes, I agree to recieve communication over emails (service related, newsletters, weekly updates), phone, fax or post from AM Global.</label>
                        </div>

                        <button type='submit' className='mt-6 bg-gradient-to-r from-[#D5BB54]/90 to-[#977619] bg-[#977619] hover:bg-black py-2 md:w-[8vw] w-[20vw] text-xs rounded-full'>Submit</button>
                    </form>
                    <div className='m-3'>
                        <img src={formPic} alt="" className='h-full max-h-[92vh]' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Porposal