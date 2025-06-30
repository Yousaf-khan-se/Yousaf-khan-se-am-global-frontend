import React, { useState } from 'react'
import Circles from '../assets/JobFindAssets/Circles.png'
import BG from '../assets/JobFindAssets/BG.png'
import experience from '../assets/JobFindAssets/sec1Logos/experience.png'
import jobType from '../assets/JobFindAssets/sec1Logos/jobType.png'
import location from '../assets/JobFindAssets/sec1Logos/location.png'
import salary from '../assets/JobFindAssets/sec1Logos/salary.png'
import skills from '../assets/JobFindAssets/sec1Logos/skills.png'
import workingHours from '../assets/JobFindAssets/sec1Logos/workingHours.png'
import lock from '../assets/JobFindAssets/lock.png'
import section1Bg from '../assets/JobFindAssets/section1Bg.png'
import emailjs from 'emailjs-com'

import { useRef } from 'react'

const popUp = (msg) => {

    return (
        <div className='fixed bottom-40 right-0 z-20 bg-white/30 text-white p-10 rounded-xl'>
            <p>{msg}</p>
        </div>
    )
}

const JobFind = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPopUp, setShowPopUp] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        console.log('Selected file:', file);
    }; const handleFileChangeSm = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        console.log('Selected file:', file);

        if (formRef.current) {
            // First scroll to the form
            formRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            setTimeout(() => {
                const firstTextInput = formRef.current.querySelector('input[type="text"]');
                firstTextInput?.focus();
            }, 500); // Wait 500ms for smooth scroll to complete
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_t63pfwm', 'template_138la2o', formRef.current, '1xuPdsS-jfnmMFW-Z')
            .then((result) => {
                console.log('Email sent to user Successfully!', result)
                setError(null);
            })
            .catch((error) => {
                console.log('Error sending email:', error)
                setError('Error sending email')
            })
            .finally(() => {
                setLoading(false)
                setShowPopUp(true);
                setTimeout(() => { setShowPopUp(false) }, 5000)
            })
    }

    return (
        <div className="w-full min-h-screen">
            {
                showPopUp && popUp(`${error ? error : "Your Application is submitted successfully!"}`)
            }
            {/* sec0 */}
            <section className='relative bg-cover bg-center w-screen h-[80vh] flex justify-start items-center'
                style={{ backgroundImage: `url(${BG})` }}
            >
                <div className='flex flex-col absolute z-10 gap-6 mb-20 md:w-1/2 md:ml-40 ml-5 md:mt-0 mt-40'>
                    <h1 className='text-[#B09130] md:text-[1.5rem] text-[1rem] font-semibold -mb-5'>Submit Your CV</h1>
                    <h2 className='md:text-[2.5rem] text-[1.5rem] font-bold md:pr-40'>Upload your resume & apply for your <span className='text-[#CBB04A]'>ideal job</span> .</h2>
                    <button className='flex flex-grow flex-shrink justify-end items-center rounded md:w-[165px] md:h-[50px] w-[80px] h-[25px] bg-gradient-to-r from-[#EDD569] to-[#977619]'>
                        <label htmlFor='file-upload-sm' className='flex justify-center items-center text-black bg-white rounded-full md:w-[1.5em] md:h-[1.5em] w-[1em] h-[1em] md:mr-4 mr-2 pb-1 font-extrabold text-sm md:text-lg leading-none'>
                            +
                        </label>
                        <input required id="file-upload-sm" type="file" accept=".pdf,.doc,.docx" className='hidden' onChange={handleFileChangeSm} />
                    </button>
                </div>
            </section>

            {/* sec1 */}
            <section className='pb-16 bg-white/[0.12] relative min-h-[110vh] w-full flex flex-row flex-wrap justify-evenly items-center'>
                <div className='absolute inset-0 w-full h-full'><img src={section1Bg} alt="section 1 background" /></div>
                <div className='mt-5 md:mt-0 z-10 flex flex-col items-start gap-5'>
                    <div className='max-w-[80vw] md:max-w-[30vw]'>
                        <h1 className='pl-3 md:pl-0 text-[#C2A441] md:text-[1.8rem] text-[1rem] mb-3'>More About the Role</h1>
                        <h2 className='pl-3 md:pl-0 md:text-[2.5rem] text-[1.5rem] font-semibold'>Company Overview & Job Description</h2>
                    </div>
                    <div className='border-l border-[#CEB551] pl-3 md:pl-10 mt-10 max-w-[90vw] md:max-w-[44vw] md:text-lg opacity-90'>
                        <p className='mb-10'>Discover more about our company and the exciting opportunities we offer. Our team is dedicated to fostering a dynamic and inclusive work environment where innovation thrives. Learn how our culture and values align with your career goals.</p>
                        <p className='pr-2'>The job role involves key responsibilities and opportunities for growth. Get detailed insights into what we’re looking for and how you can contribute to our success.</p>
                    </div>
                </div>

                <div className='z-10 p-[0.05rem] bg-gradient-to-br from-white/30 to-[#191919] rounded-xl mt-24 md:mr-5 md:ml-0 mr-2 ml-2'>
                    <div className='md:text-lg bg-black bg-gradient-to-br from-[#343434]/90 to-[#191919] rounded-xl pt-[0.5rem] pb-[1rem] pl-[1.5rem] pr-[4.5rem] md:pt-[2.5rem] md:pb-[3rem] md:pl-[3.5rem] md:pr-[6.5rem] flex flex-col justify-center items-start gap-10'>
                        <div className="flex items-center gap-5">
                            <img src={jobType} alt="jobType logo" className='scale-75 md:scale-90' />
                            <p>Job Type</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <img src={experience} alt="experience logo" className='scale-75 md:scale-90' />
                            <p>Experience</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <img src={location} alt="location logo" className='scale-75 md:scale-90' />
                            <p>Location</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <img src={workingHours} alt="workingHours logo" className='scale-75 md:scale-90' />
                            <p>Working Hours</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <img src={skills} alt="skills logo" className='scale-75 md:scale-90' />
                            <p>Skills</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <img src={salary} alt="salary logo" className='scale-75 md:scale-90' />
                            <p>Salary</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* sec2 */}
            <section className='p-4 md:p-40 pb-0 bg-black relative min-h-[50vh] w-full flex flex-col justify-center items-start gap-4'>
                <h1 className='pl-3 md:pl-0 text-[#C2A441]/85  md:text-[1.8rem] text-[1rem] font-semibold'>Requirements</h1>
                <h2 className='pl-3 md:pl-0 md:text-[2.5rem] text-[1.5rem] font-semibold'>Job Requirements</h2>
                <div className='mb-24 border-l-2 border-[#CEB551] pl-3 md:pl-10 mt-10 max-w-[70vw] md:text-lg opacity-90'>
                    <p className='mb-10'>Discover more about our company and the exciting opportunities we offer. Our team is dedicated to fostering a dynamic and inclusive work environment where innovation thrives. Learn how our culture and values align with your career goals.</p>
                    <p className='pr-2'>The job role involves key responsibilities and opportunities for growth. Get detailed insights into what we’re looking for and how you can contribute to our success.</p>
                </div>
            </section>

            {/* sec3 */}
            <section className='pl-4 md:pl-0 md:min-h-[140vh] w-full pt-20 pb-20 bg-white/[0.13] flex md:justify-evenly items-center flex-wrap'>
                <div className='flex flex-col justify-center items-start gap-4 md:-mt-80 mb-10 md:mb-0 px-4 md:px-0'>
                    <h1 className='text-[#C2A441]/90 md:text-[1.8rem] text-[1rem] font-semibold'>Get Started</h1>
                    <h2 className='mb-20 md:text-[2.5rem] text-[1.5rem] font-semibold'>Apply Now</h2>
                    <ul className='border-l pl-8 border-white/50 border-dashed flex flex-col justify-center items-start gap-8 md:text-[1.5rem] text-[1rem] list-none'>
                        <li className="relative flex items-start gap-4">
                            <span className='absolute -left-[2.65rem] -top-2 w-5 h-5 mt-2 block rounded-full bg-gradient-to-br from-[#EDD569] to-[#977619]'></span>
                            <p className='-mt-2'>Your resume</p>
                        </li>
                        <li className="relative flex items-start gap-4">
                            <span className='absolute -left-[2.65rem] w-5 h-5 mt-2 block rounded-full bg-gradient-to-br from-[#EDD569] to-[#977619]'></span>
                            Your ambitions
                        </li>
                        <li className="relative flex items-start gap-4">
                            <span className='absolute -left-[2.65rem] w-5 h-5 mt-2 block rounded-full bg-gradient-to-br from-[#EDD569] to-[#977619]'></span>
                            Your selection of conversations
                        </li>
                        <li className="relative flex items-start gap-4">
                            <span className='absolute -left-[2.65rem] top-2 w-5 h-5 block rounded-full bg-gradient-to-br from-[#EDD569] to-[#977619]'></span>
                            <p className='-mb-2'>Your job choice</p>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col'>
                    <div className='p-[0.08rem] bg-gradient-to-br from-white/30 to-[#191919] rounded-3xl bg-black md:mt-0 mt-5'>
                        <form action="" ref={formRef} onSubmit={sendEmail}
                            className='bg-black z-10 relative md:w-[35vw] md:h-[110vh] flex flex-col justify-around items-center gap-5 rounded-3xl bg-gradient-to-br from-[#484848]/60 to-[#1E1E1E] pt-5 p-10'
                        >
                            <div className='absolute right-[3.2rem] top-[5rem] -z-20'><img src={Circles} alt="section 1 background" className='scale-y-125 scale-x-150' /></div>                            <div className='md:-ml-24 flex justify-center items-center gap-2 md:gap-8 mb-5'>
                                <label htmlFor="file-upload" className='cursor-pointer rounded-full h-16 w-16 md:h-24 md:w-24 text-[2.8rem] font-semibold bg-black pb-2 flex justify-center items-center text-center bg-gradient-to-br from-[#EDD569]/95 to-[#977619]/95'>
                                    {selectedFile ? '✓' : '+'}
                                </label>
                                <input id="file-upload" type="file" accept=".pdf,.doc,.docx" className='hidden' onChange={handleFileChange} required={!selectedFile} />
                                <legend className={`md:text-[1.8rem] text-[1rem] text-[#C6AA45] text-center pb-2 font-semibold`}>
                                    {selectedFile ? `${selectedFile.name}` : 'Upload Your CV'}
                                </legend>
                            </div>
                            {
                                [{ t: 'text', ph: 'Surname', n: 'name' },
                                { t: 'text', ph: 'Email', n: 'user_email' },
                                { t: 'text', ph: 'Phone' },
                                { t: 'textarea', ph: 'Message' }

                                ].map((input, index) => (
                                    input.t === 'text' ? (
                                        <input required key={index} type="text" name={input?.n} placeholder={input.ph} className='pl-5 md:text-lg w-full max-w-[29rem] h-full max-h-[3.5rem] p-2 rounded-md bg-white/[0.08] text-white placeholder:text-white/65 placeholder:font-extralight' />
                                    ) : (
                                        <textarea key={index} placeholder={input.ph} className='pl-5 md:text-lg w-full max-w-[29rem] h-full max-h-[12rem] p-2 rounded-md bg-white/[0.08] text-white placeholder:text-white/65 placeholder:font-extralight' />
                                    )
                                ))
                            }
                            <button type="submit" className='bg-gradient-to-b from-[#EDD569]/70 to-[#977619]/90 pt-2 pb-2 pr-[4rem] pl-[4rem] rounded-lg m-10 mt-5 text-lg bg-yellow-400 text-white/70 font-semibold hover:bg-black'>{loading ? 'sending...' : 'Submit'}</button>
                        </form>
                    </div>
                    <div className='flex text-sm font-extralight opacity-85 justify-center items-center p-6 gap-2'>
                        <img src={lock} alt="confidential logo" className='scale-75' />
                        <p>We handle your data confidentially</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default JobFind