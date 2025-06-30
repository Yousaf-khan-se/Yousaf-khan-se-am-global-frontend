import React, { useState, useEffect } from 'react'
import sec0Bg from '../assets/jobFindSearchPage/sec0Bg.png'
import sec1Bg from '../assets/jobFindSearchPage/sec1Bg.png'
import searchIcon from '../assets/jobFindSearchPage/searchIcon.png'
import locationIcon from '../assets/jobFindSearchPage/locationIcon.png'
import JobCards from '../components/JobCards'
import arrow from '../assets/jobFindSearchPage/arrow.png'
import { Range } from 'react-range'

const JobControlBtn = ({ text, handler, hid }) => {
    return (
        <div>
            <button hidden={hid} onClick={handler} className='py-2 sm:py-3 px-8 sm:px-16 bg-gradient-to-b from-[#EDD569]/90 to-[#977619] bg-[#977619] hover:bg-black rounded-full text-base sm:text-xl transition-all'>
                {text}
            </button>
        </div>
    )
}

const JobFindSearchPage = () => {

    // Dummy data for job listings
    const jobsData = [
        {
            id: 1,
            heading: 'Senior UI Designer',
            experienceLvl: 'Expert',
            location: 'San Francisco, USA',
            desc: 'UI designer measure and optimise applications to improve ease of use (usability), and create the best user experience by exploring many different approaches to solve end-user\'s problems.',
            startingPrice: 3,
            endingPrice: 4
        },
        {
            id: 2,
            heading: 'Frontend Developer',
            experienceLvl: 'Middle',
            location: 'New York, USA',
            desc: 'Develop responsive web applications using modern JavaScript frameworks. Work closely with designers to implement pixel-perfect interfaces.',
            startingPrice: 2.5,
            endingPrice: 3.5
        },
        {
            id: 3,
            heading: 'Full Stack Developer',
            experienceLvl: 'Senior',
            location: 'Austin, USA',
            desc: 'Build and maintain scalable web applications. Experience with both frontend and backend technologies required.',
            startingPrice: 4,
            endingPrice: 6
        },
        {
            id: 4,
            heading: 'UX Researcher',
            experienceLvl: 'Middle',
            location: 'Seattle, USA',
            desc: 'Conduct user research and usability testing to inform product decisions. Analyze user behavior and create actionable insights.',
            startingPrice: 2.8,
            endingPrice: 4.2
        },
        {
            id: 5,
            heading: 'Product Manager',
            experienceLvl: 'Senior',
            location: 'Los Angeles, USA',
            desc: 'Lead product strategy and roadmap development. Collaborate with cross-functional teams to deliver innovative solutions.',
            startingPrice: 5,
            endingPrice: 7
        },
        {
            id: 6,
            heading: 'Data Scientist',
            experienceLvl: 'Middle',
            location: 'Boston, USA',
            desc: 'Analyze large datasets to extract meaningful insights. Build machine learning models to solve business problems.',
            startingPrice: 3.5,
            endingPrice: 5
        },
        {
            id: 7,
            heading: 'DevOps Engineer',
            experienceLvl: 'Senior',
            location: 'Denver, USA',
            desc: 'Manage cloud infrastructure and deployment pipelines. Ensure system reliability and scalability.',
            startingPrice: 4.2,
            endingPrice: 6.5
        },
        {
            id: 8,
            heading: 'Mobile Developer',
            experienceLvl: 'Middle',
            location: 'Miami, USA',
            desc: 'Develop native mobile applications for iOS and Android platforms. Focus on performance and user experience.',
            startingPrice: 3,
            endingPrice: 4.5
        },
        {
            id: 9,
            heading: 'Backend Developer',
            experienceLvl: 'Entry/Junior',
            location: 'Chicago, USA',
            desc: 'Build robust server-side applications and APIs. Work with databases and cloud services to ensure optimal performance.',
            startingPrice: 2,
            endingPrice: 3
        },
        {
            id: 10,
            heading: 'QA Engineer',
            experienceLvl: 'Middle',
            location: 'Portland, USA',
            desc: 'Design and execute test plans to ensure software quality. Implement automated testing frameworks.',
            startingPrice: 2.5,
            endingPrice: 3.8
        },
        {
            id: 11,
            heading: 'Graphic Designer',
            experienceLvl: 'Entry/Junior',
            location: 'Nashville, USA',
            desc: 'Create visual content for digital and print media. Collaborate with marketing team to develop brand materials.',
            startingPrice: 1.8,
            endingPrice: 2.8
        },
        {
            id: 12,
            heading: 'Cybersecurity Analyst',
            experienceLvl: 'Senior',
            location: 'Washington, USA',
            desc: 'Monitor and protect organization\'s computer networks and systems. Investigate security breaches and implement preventive measures.',
            startingPrice: 4.5,
            endingPrice: 6.8
        }
    ];


    const [salaryVal, setsalaryVal] = useState([200, 10000]);
    const [activePage, setActivePage] = useState(0);
    const [jobListDisplay, setJobListDisplay] = useState(jobsData.slice(0, 3));
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        // Handle responsive filter display
        const handleResize = () => {
            const isLargeScreen = window.innerWidth >= 1024;
            setIsMobile(!isLargeScreen);

            // If screen becomes large, ensure the filter is visible
            if (isLargeScreen) {
                const filterForm = document.getElementById('jobFilterForm');
                if (filterForm) {
                    filterForm.classList.remove('hidden');
                }
            } else {
                // On mobile/tablet, hide the filter by default
                const filterForm = document.getElementById('jobFilterForm');
                if (filterForm) {
                    filterForm.classList.add('hidden');
                }
            }
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const upDateJobList = (id) => {
        setActivePage(id);
        setJobListDisplay(jobsData.slice(id, id + 3));
    }

    return (
        <div className='w-full my-10 md:mt-20'>
            {/* sec0 */}
            <section className='relative flex justify-start items-center md:h-[78vh] h-full w-full'>
                <div className='absolute inset-0'><img src={sec0Bg} alt="" className='w-full h-full object-cover grayscale' /></div>
                <div className='z-10'>
                    <h1 className='p-8 md:p-3 md:ml-20 text-2xl md:text-[2.8rem] leading-[2rem] md:leading-[4rem] font-bold text-left w-[80vw] md:w-[35vw]'>Match Your Skills to the <span className='text-[#CEB551]'> Ideal Role</span></h1>
                    <div className='absolute bottom-2 md:bottom-0 flex justify-center items-center w-full text-[0.6rem]  sm:text-xs md:text-lg'>
                        <div className='z-20 relative flex justify-end w-[85vw] top-10'>
                            <img src={searchIcon} alt="" className='absolute left-0 m-4 md:m-6 w-5 h-5 md:w-8 md:h-8' />
                            <input type="text" className='absolute bg-[rgb(184,157,50)] w-full h-full py-6 md:py-10 rounded-full placeholder:text-white pl-10 md:pl-16 font-semibold' placeholder='Search Job Title Here' />
                            <div className='relative right-0 top-1/2 flex justify-evenly sm:justify-between items-center w-[40vw] md:w-[44vw]'>
                                <div className='border h-[55%] opacity-60'></div>
                                <img src={locationIcon} alt="" className='h-4 w-4 md:h-8 md:w-8 md:mr-48' />
                                <button className='shadow-2xl shadow-black/20 right-0 mr-2 md:mr-5 my-2 md:my-4 rounded-full py-2 px-5 md:py-3 md:px-14 bg-white text-black hover:bg-white/85'>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* sec1 */}
            <section className='relative mt-10 md:mt-0 h-full min-h-screen lg:h-auto lg:min-h-[220vh] bg-white/10 p-5 sm:p-10 md:p-20 flex flex-col justify-start items-center'>
                <div className='absolute top-80 opacity-30 lg:opacity-50'><img src={sec1Bg} alt="" className="max-w-full" /></div>
                <div className='pt-20 z-10 flex flex-col lg:flex-row justify-center items-start lg:items-start gap-6 lg:gap-1 w-full max-w-[1400px]'>{/* Mobile Filter Toggle Button - only visible on small screens */}
                    <div className="lg:hidden w-full px-4 mb-4">
                        <button
                            className='py-2 px-8 bg-[rgb(184,157,50)] rounded-full text-sm font-medium w-full flex items-center justify-center'
                            onClick={(e) => {
                                e.preventDefault();
                                const filterForm = document.getElementById('jobFilterForm');
                                if (filterForm) {
                                    filterForm.classList.toggle('hidden');
                                    // Update button text based on filter visibility
                                    e.target.innerText = filterForm.classList.contains('hidden') ?
                                        'Show Filters' : 'Hide Filters';
                                }
                            }}
                        >
                            {isMobile ? 'Show Filters' : 'Filter Jobs'}
                        </button>
                    </div>

                    {/* Filter Form - Hidden on mobile by default, always visible on desktop */}
                    <form id="jobFilterForm" className='pt-4 opacity-90 hidden lg:flex w-full lg:w-[25vw] px-4 lg:pl-5 xl:pl-14 flex-col gap-3 md:gap-8'>
                        <div className='flex justify-between items-start mb-4'>
                            <h1 className='text-lg md:text-3xl font-semibold'>Filter</h1>
                            <div className='flex justify-center items-center gap-2 pt-2'>
                                <button className='py-[2px] px-4 bg-[rgb(184,157,50)] rounded-full text-xs' type='submit'>Apply</button>
                                <button className='py-[2px] px-4 bg-[#B89D32] rounded-full text-xs text-nowrap' type='reset' onClick={() => { setsalaryVal([200, 10000]) }}>Remove All</button>
                            </div>
                        </div>

                        <div className='flex flex-col gap-14 my-2'>
                            <div className='flex flex-col justify-start gap-5'>
                                <h2 className='md:text-xl font-semibold pb-1 md:pb-2'>Job Type</h2>
                                {
                                    [
                                        { id: 'full-time', txt: 'Full Time Job' },
                                        { id: 'part-time', txt: 'Part Time Job' },
                                        { id: 'internship', txt: 'Internship Job' },
                                        { id: 'temporary', txt: 'Remote Job' },
                                        { id: 'contract', txt: 'Contract' }
                                    ].map((items, index) => {
                                        return (
                                            <div key={index} className='text-sm md:text-lg px-2'>
                                                <input type="checkbox" id={items.id} className='scale-[2] px-1' />
                                                <label htmlFor={items.id} className='px-5'>{items.txt}</label>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className='my-2'>
                                <h2 className='md:text-xl font-semibold pb-2 mb-1 md:mb-3'>Salary</h2>
                                <div className='flex justify-between items-center w-[80%] mb-4 font-extralight'>
                                    <p>
                                        {
                                            new Intl.NumberFormat('en-US', {
                                                style: 'currency',
                                                currency: 'USD',
                                                minimumFractionDigits: 0,
                                            }).format(salaryVal[0])
                                        }
                                    </p>
                                    <p>{
                                        new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                            minimumFractionDigits: 0,
                                        }).format(salaryVal[1])
                                    }</p>
                                </div>
                                <Range
                                    values={salaryVal}
                                    step={1}
                                    min={200}
                                    max={10000}
                                    onChange={(val) => {
                                        setsalaryVal(val);
                                    }}

                                    renderTrack={({ props, children }) => (
                                        <div
                                            {...props}
                                            style={{
                                                ...props.style,
                                                height: "2px",
                                                width: "70%",
                                                backgroundColor: "#CEB551",
                                            }}

                                            className='ml-3'
                                        >
                                            {children}
                                        </div>
                                    )}
                                    renderThumb={({ props }) => (
                                        <div
                                            {...props}
                                            key={props.key}
                                            style={{
                                                ...props.style,
                                                height: "15px",
                                                width: "15px",
                                                backgroundColor: "#CEB551"
                                            }}

                                            className='rounded-full'
                                        />
                                    )}
                                />
                            </div>

                            <div className='flex flex-col justify-start gap-4 mt-2'>
                                <h2 className='md:text-xl font-semibold pb-1 md:pb-2'>Experience Level</h2>
                                {
                                    [
                                        { id: 'entry/junior', txt: 'Entry/Junior' },
                                        { id: 'middle', txt: 'Middle' },
                                        { id: 'senior', txt: 'Senior' }
                                    ].map((items, index) => {
                                        return (
                                            <div key={index} className='text-sm md:text-lg'>
                                                <input type="checkbox" id={items.id} className='scale-[2] px-1' />
                                                <label htmlFor={items.id} className='px-5'>{items.txt}</label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </form>

                    {/* Job Listing */}
                    <div className='relative h-full w-full lg:w-[62vw] p-2 sm:p-4 lg:pr-10 lg:pl-12 xl:pl-24 flex flex-col justify-evenly items-start gap-2 md:gap-5'>
                        <div className='px-2 sm:px-6 md:px-8 lg:px-0 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full text-sm sm:text-lg md:text-xl'>
                            <p className='text-white/50 font-semibold mb-2 sm:mb-0'>Showing <span className='text-white'>{jobListDisplay.length}</span> of <span className='text-white'>{jobsData.length}</span> results</p>
                            <p className='text-white/50 flex items-center flex-wrap gap-1'>
                                <span className='text-white opacity-90 font-extralight text-sm sm:text-base'>Sort by: </span>
                                <span className='px-2'> Newest Post </span>
                                <img src={arrow} alt="" className='inline-block scale-75' />
                            </p>
                        </div>
                        <div className='job-listings flex flex-col gap-5 md:gap-8 mt-5 md:mt-8 w-full'>
                            {/* <JobCards heading='Senior Ui Designer' experienceLvl='Expert' location='San Francisco, USA' desc='Ui designer measure and optimise applications to improve ease of use (usability), and create the best user experience by exploring many different approaches to solve end-user’s problems.' startingPrice={3} endingPrice={4} /> */}
                            {jobListDisplay.map((job) => (
                                <JobCards
                                    key={job.id}
                                    heading={job.heading}
                                    experienceLvl={job.experienceLvl}
                                    location={job.location}
                                    desc={job.desc}
                                    startingPrice={job.startingPrice}
                                    endingPrice={job.endingPrice} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className='flex items-center gap-3 sm:gap-4 self-center sm:self-end sm:mr-10 mt-6'>
                            {jobsData.map((_, idx) => (
                                idx % 3 === 0 &&
                                <span
                                    key={idx}
                                    onClick={() => upDateJobList(idx)}
                                    className={
                                        `inline-block rounded-full transition-all duration-200 cursor-pointer ` +
                                        (idx === activePage
                                            ? 'bg-[#CEB551] w-4 sm:w-5 h-4 sm:h-5'
                                            : 'bg-white w-3 h-3 opacity-80')}
                                />
                            ))}
                        </div>

                        <div className='flex justify-between items-center w-full px-2 mt-6 sm:mt-4'>
                            <JobControlBtn
                                text='Back'
                                handler={(e) => {
                                    e.preventDefault();
                                    if (activePage > 0) {
                                        upDateJobList(activePage - 3);
                                        // Scroll to top of job listings on mobile
                                        if (window.innerWidth < 768) {
                                            const jobListings = document.querySelector('.job-listings');
                                            jobListings?.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }
                                }}
                                hid={
                                    activePage <= 0
                                        ? true
                                        : false
                                }
                            />
                            <JobControlBtn text='Next'
                                handler={(e) => {
                                    e.preventDefault();
                                    if (activePage < jobsData.length - 3) {
                                        upDateJobList(activePage + 3);
                                        // Scroll to top of job listings on mobile
                                        if (window.innerWidth < 768) {
                                            const jobListings = document.querySelector('.job-listings');
                                            jobListings?.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }
                                }}
                                hid={
                                    activePage >= jobsData.length - 3
                                        ? true
                                        : false
                                }
                            />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default JobFindSearchPage