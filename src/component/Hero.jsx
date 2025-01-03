import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import LocomotiveScroll from 'locomotive-scroll';
import { Power3 } from 'gsap';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from '../heroStyles.css'
import { Link } from 'react-router-dom'
import Terminal from './Terminal'
import orange from "../../public/orange.svg"
import slicedOrg from "../../public/sliced_org.jpg"
import github from '../../public/github.svg'
import linkedin from '../../public/linked-in.svg'
import insta from '../../public/instagram.svg'
import mail from '../../public/mail.svg'
import tempProjectsImg from '../../public/projects.jpg'
import projectImg1 from '../../public/project-img1.png'
import ProjectCard from './ui/projectCard';
import { TextGenerateEffect } from './ui/text-generate-effect'
import Lenis from 'lenis';
gsap.registerPlugin(ScrollTrigger)
function Hero() {



    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const handleMouseMove = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        const handleMouseEnter = () => {
            cursor.classList.add('show');
        };

        const handleMouseLeave = () => {
            cursor.classList.remove('show');
        };

        // Attach event listeners
        document.addEventListener('mousemove', handleMouseMove);
        const orgLogo = document.querySelector('.orgLogo');
        orgLogo.addEventListener('mouseenter', handleMouseEnter);
        orgLogo.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup event listeners on unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            orgLogo.removeEventListener('mouseenter', handleMouseEnter);
            orgLogo.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);




    useEffect(() => {

        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

    }, [])



    function handleScrollArrow() {

        window.scrollTo({
            top: 630,           // Vertical positio
            behavior: "smooth"  // Smooth scroll
        });
    }



    // rendering project card with this obj
    let projects = [

        {
            projectName: "Mihika Arts",
            projectDescription: "A curated collection of sketches and watercolors, with easy filters and a seamless shopping experience. Find art that speaks to you!",
            projectImg: projectImg1
        },
        {
            projectName: "Project",
            projectDescription: " this is second project, it is in development",
            projectImg: tempProjectsImg
        },
        {
            projectName: "Project",
            projectDescription: " this is third project, it is in development",
            projectImg: tempProjectsImg
        },
        {
            projectName: "Project",
            projectDescription: " this is fourth project, it is in development",
            projectImg: tempProjectsImg
        }
    ]


    const mainHeadingWords = "Creating User Experiences That Coded with the Zest of Fresh Oranges!";

    const org = useRef();
    const projectCon = useRef();
    const mainHeading = useRef();
    const mainCon = useRef();
    const subHeading = useRef();
    const aboutCon = useRef();
    //nav bar glass-fading  effect
    const nav = useRef();
    window.onscroll = () => {
        if (window.scrollY > 80) {
            nav.current.classList.add('nav-active');
        } else {
            nav.current.classList.remove('nav-active');
        }
    };




    const handleMouseLeave_orgLogo = () => {
        gsap.to(org.current, {

            rotate: "-=360",
            // ease: Power3.easeInOut,
        });
    };
    //gsap animation
    useGSAP(() => {



        // org spining animation

        gsap.from(org.current, {

            x: 100,
            scale: 5
        })

        gsap.from(org.current, {
            ease: Power3,

            rotate: 360,
            duration: 80,
            repeat: -1
        })


        gsap.from(projectCon.current, {

            y: 400,
            opacity: 0,
            scrollTrigger: {

                trigger: mainCon.current,
                start: "70% 70%",
                scrub: true,
                duration: 0.1

            }

        })

        gsap.from(mainCon.current, {

            y: 100,
            opacity: 0,
            duration: .6,
            stagger: .2
        })


    })

    return (

        <div className="hero w-full h-auto bg-grid-[#fc9930]/[.04] ">

            <div ref={cursorRef} className="custom-cursor"></div>
            <nav ref={nav} className="fixed top-0 w-full h-48 flex justify-center items-center z-[99]">

                <div className="flex justify-between items-center w-full h-full px-8 md:px-16 ">

                    <h1 className="logoNav text-2xl lg:text-[2.25rem] hover:text-[#fc9930]">
                        <a href="/">आ<span className="accent">0.</span></a>
                    </h1>

                    <ul className="flex gap-4 font-semibold text-lg">

                        <li className="hover:text-[#fc9930] hover:tracking-widest  ulLinkNav">
                            <Link to="/terminal">Terminal</Link>
                        </li>

                        <li className="hover:text-[#fc9930]  hover:tracking-widest ulLinkNav">
                            <a href="#">Resume</a>
                        </li>

                    </ul>

                </div>

            </nav>

            <main className="flex justify-center relative  w-full min-h-screen pt-48 mb-24 flex-col items-center overflow-x-hidden">

                <div ref={mainCon} className="flex flex-col gap-7 items-center w-11/12 md:w-3/5 text-center md:mb-8">

                    <div className="flex text-center">


                        <div ref={mainHeading} className="text-[1.35rem] md:text-[2.2rem] lg:text-[2.8rem] font-semibold text-[#fafafa]">
                            <h1 className='inline'>
                                <TextGenerateEffect className={"inline"} words={mainHeadingWords} /></h1>
                            <Link to="/terminal">
                                <img
                                    onMouseLeave={handleMouseLeave_orgLogo}
                                    ref={org}
                                    className="ml-4 inline w-12 md:w-[4.25rem] orgLogo"
                                    src={orange} alt="orange logo" />
                            </Link>
                        </div>


                    </div>

                    <h2 ref={subHeading} className="text-lg md:text-2xl text-[#d3c6ba] font-medium mb-5">

                        — Hi, I’m
                        <a
                            onClick={() => document.querySelector('.about')?.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })}
                            className=" font-semibold text-[#f6b64f] cursor-pointer "> Ayush</a>, a web developer from <span className="font-semibold text-[#f6b64f]">India</span>.

                    </h2>

                    <div className="flex space-x-4">

                        <div className="networks flex lg:flex-row-reverse flex-wrap flex-col gap-4 ">

                            <div className="netbox border-[#ffffff] rounded-lg flex gap-4 p-3">

                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/constayush">
                                    <img className="w-10  heroSocialLogos" src={github} alt="GitHub" />
                                </a>

                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/constayush/">
                                    <img className="w-10  heroSocialLogos" src={linkedin} alt="LinkedIn" />
                                </a>

                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/maihoonayush/">
                                    <img className="w-10  heroSocialLogos" src={insta} alt="Instagram" />
                                </a>

                                <a target="_blank" rel="noopener noreferrer" href="mailto:aayush@mail.com">
                                    <img className="w-10  heroSocialLogos" src={mail} alt="Mail" />
                                </a>

                            </div>

                            <a download="" class="p-4 flex items-center bg-[#111111] w-auto text-center justify-center hover:bg-white text-white hover:text-[#111111] md:px-3 md:py-1 rounded transition duration-300 border border-white">


                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 384 512" className="mr-2" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"></path></svg>


                                Resume</a>

                        </div>

                    </div>

                </div>


                <svg onClick={handleScrollArrow} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".17" strokeLinecap="round" strokeLinejoin="round" className="lucide scrollDownArrow  lucide-move-down size-10 hover:cursor-pointer"><path d="M8 18L12 22L16 18"></path></svg>

            </main>

            <div ref={projectCon} className="flex justify-center w-full h-auto py-10 ">

                <div className="w-full max-w-5xl projectss p-8 flex flex-col gap-16">

                    <h1 className="text-3xl md:text-[2.7rem] font-semibold ">Projects<span className="font-semibold text-[#f6b64f]">.</span></h1>

                    <div className="break-words grid grid-cols-1 md:grid-cols-2 gap-6  place-items-center ">


                        {
                            projects.map((i, a) => {

                                return <ProjectCard key={projects[a].projectName} projectDescription={projects[a].projectDescription} projectImg={projects[a].projectImg} projectName={projects[a].projectName} />
                            })
                        }

                    </div>

                </div>

            </div>




            <div ref={aboutCon} className="about flex justify-center w-full h-auto py-10">

                <div className="w-full max-w-5xl projectss p-8 flex flex-col gap-8 "  >

                    <h1 className="text-3xl md:text-[2.7rem] font-semibold ">About me<span className="font-semibold text-[#f6b64f]">.</span></h1>

                    <p className='text-[1.15rem] text-[#cecece] font-medium '>Hi! I’m <span className='font-semibold text-[#ffc973]'>Ayush Srivastava</span>, an <span className='font-semibold text-[#fff]'>18-year-old</span> web developer from <span className='font-semibold text-[#fff]'>India</span> crafting seamless user experiences. I’m currently working with <span className='font-semibold text-[#ffc567]'>TypeScript, React, and Next.js</span>. When I’m not coding, you’ll usually find me playing <span className='font-semibold text-[#ffffff]'>chess</span> or relaxing with a game of <span className='font-semibold text-[#ffffff]'>Valorant or CS2</span>. </p>

                    <h1 className='font-semibold text-xl text-[#ffffff]'>My Tech Stack</h1>

                    <div className='flex gap-5 flex-wrap'>


                        <div className='w-auto border inline-block p-2 '>JavaScript</div>
                        <div className='w-auto border inline-block p-2 '>TypeScript</div>
                        <div className='w-auto border inline-block p-2 '>React</div>
                        <div className='w-auto border inline-block p-2 '>Next.js</div>

                    </div>


                    <hr></hr>

                    <h1 className='font-semibold text-xl text-[#ffffff]'>Contact</h1>


                    <div className='flex flex-wrap gap-8 text-center items-center justify-center md:justify-between '>

                        <div className="  w-fit rounded-lg flex gap-4 flex-wrap justify-center items-center">

                            <a className='footerLinks' target="_blank" rel="noopener noreferrer" href="https://github.com/constayush">
                                GitHub
                            </a>

                            <a className='footerLinks' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/constayush/">
                                LinkedIn
                            </a>

                            <a className='footerLinks' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/maihoonayush/">
                                Instagram
                            </a>

                            <a className='footerLinks' target="_blank" rel="noopener noreferrer" href="mailto:aayush@mail.com">
                                Mail
                            </a>
                            <a download="" className="p-2 flex items-center bg-[#111111] w-auto text-center justify-center hover:bg-white text-white hover:text-[#111111]  rounded transition duration-300">

                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 384 512" className="mr-2" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"></path></svg>

                                <h5 className=' hover:text-[#000]'>Resume</h5></a>
                        </div>

                        <p>© 2025 Ayush Srivastava</p>


                    </div>
                </div>
            </div>




        </div>


    )
}


export default Hero