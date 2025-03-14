import React, { use, useEffect } from 'react'
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
import xIcon from '../../public/x.svg'
import tempProjectsImg from '../../public/projects.jpg'
import projectImg1 from '../../public/project-img1.png'
import projectImg2 from '../../public/project-img2.png'
import ProjectCard from './ui/projectCard';
import { TextGenerateEffect } from './ui/text-generate-effect'
import TypescriptIcon from '../../public/typescript.svg'
import ReactIcon from '../../public/react-2.svg'
import JavascriptIcon from '../../public/javascript.svg'
import NextjsIcon from '../../public/nextjs.svg'
import pfp from '../../public/pfp.png'
import Lenis from 'lenis';
import Navbar from './Navbar';
import DinoGame from './Dino';

gsap.registerPlugin(ScrollTrigger)

function Hero() {

    const cursorRef = useRef(null);
    const headingWords = " Creating UIs that pop with clean design and code"
    const org = useRef();
    const projectCon = useRef();
    const mainHeading = useRef();
    const mainCon = useRef();
    const subHeading = useRef();
    const aboutCon = useRef();
    const miniGame =useRef();

  


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
            projectName: "Incognito-Art",
            projectDescriptionShort: "AI Image Gallery is a free AI-powered image generation platform [Under Development, will be completed on April 2025]",
            projectDescriptionLong: "Users can generate AI images and submit them anonymously to a Hall of Fame. No one knows who created the images, making it a fun and open space for creative exploration.",
            projectImg: projectImg1,
            projectCode: "https://github.com/constayush/Incognito-Art",
            projectLive: "https://incognito-art.vercel.app/"
        },
        {
            projectName: "Can you remember?",
            projectDescriptionShort: "Test your memory and challenge your brain by recalling tile sequences",
            projectDescriptionLong: "",
            projectImg: projectImg2,
            projectCode: "https://github.com/constayush/can-you-remember",
            projectLive: "https://can-you-remember.vercel.app/"
        },
    ]
    //navbar effects



    const handleMouseLeave_orgLogo = () => {
        gsap.to(org.current, {
            rotate: "-=360"
        });
    };
    //gsap animation
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(org.current, {
            filter: "blur(20px)",
            x: 100,
            scale: 0.1,
            duration: 1,
            //   ease: Power3.easeInOut,
        })
            .to(org.current, {
                rotate: 360,
                duration: 80,
                repeat: -1,
                ease: "none",
            });


        gsap.from(mainCon.current, {

            y: 150,
            opacity: 0,
            duration: .75,
            stagger: .2
        })

        ScrollTrigger.create({
            trigger: mainCon.current,
            start: "bottom bottom",
            animation: gsap.from(projectCon.current, { y: 20, ease: "easeIn",  opacity: 0,}),
            scrub: true,
        });
        

    }, []);

    return (

        <div className=" hero w-full h-auto bg-grid-[#fff]/[.015] relative px-2">

            <div ref={cursorRef} className="custom-cursor"></div>


            <Navbar />


            <main className="flex justify-center relative w-full min-h-screen pt-[8rem] mb-[1.75rem] md:mb-10 flex-col items-center overflow-x-hidden">

                <div ref={mainCon} className="flex flex-col gap-7 items-center max-w-5xl text-center md:mb-8">



                    <div className="flex text-center">


                        <div ref={mainHeading} className="text-[1.35rem] md:text-[2.2rem] lg:text-[2.8rem] font-semibold text-[#fafafa]">
                            <h1 className='inline'>
                                <TextGenerateEffect className={"inline"} words={headingWords} /></h1>
                            <Link to="/terminal">
                                <img
                                    onMouseLeave={handleMouseLeave_orgLogo}
                                    ref={org}
                                    className="ml-4 inline w-12 md:w-[4.25rem] orgLogo"
                                    src={orange} alt="o" />
                            </Link>
                        </div>


                    </div>


                    <h2 ref={subHeading} className="text-lg md:text-2xl text-[#cecece] font-medium mb-5">

                        — Hi, I’m
                        <a
                            onClick={() => document.querySelector('.about')?.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            })}
                            className=" font-semibold text-[#f6b64f] hover:text-[#ff982a]  cursor-pointer "> Ayush</a>, a web developer from <span className="font-semibold text-[#f6b64f]">India</span>.

                    </h2>

                    <div className="flex space-x-4">

                        <div className="networks flex lg:flex-row-reverse flex-wrap flex-col gap-4 ">

                            <div className="netbox border-[#ffffff] rounded-lg flex gap-4 p-3">

                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/constayush">
                                    <img className="w-10  heroSocialLogos" src={github} alt="GitHub" />
                                </a>

                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ayush0x1/">
                                    <img className="w-10  heroSocialLogos" src={linkedin} alt="LinkedIn" />
                                </a>

                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/maihoonayush/">
                                    <img className="w-10  heroSocialLogos" src={insta} alt="Instagram" />
                                </a>

                                <a target="_blank" rel="noopener noreferrer" href="https://www.x.com/constayush/">
                                    <img className="w-9  heroSocialLogos" src={xIcon} alt="Instagram" />
                                </a>

                                <a target="_blank" rel="noopener noreferrer" href="mailto:ayushcodes@outlook.com">
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

            <div ref={projectCon} className="flex  justify-center w-full h-auto mb-20 ">
                <div className="w-full max-w-5xl projectss flex flex-col gap-20">

                    <h1 className="text-3xl md:text-[2.7rem] font-semibold mb-2">Projects<span className="font-semibold text-[#f6b64f]">.</span></h1>

                    <div className="break-words grid grid-cols-1 md:grid-cols-2 gap-6   place-items-center ">

                        {
                            projects.map((i, a) => {
                                return <ProjectCard  cursorRef={cursorRef.current} key={projects[a].projectName} projectDescriptionShort={projects[a].projectDescriptionShort} projectDescriptionLong={projects[a].projectDescriptionLong} projectImg={projects[a].projectImg} projectLive={projects[a].projectLive} projectCode={projects[a].projectCode} projectName={projects[a].projectName} />
                            })
                        }

                    </div>

                </div>
            </div>

            <div ref={aboutCon} className="about  flex justify-center w-full h-auto mb-8 ">
                <div className="w-full max-w-5xl projectss  flex flex-col gap-8 "  >

                    <h1 className="text-3xl md:text-[2.7rem] font-semibold ">About me<span className="font-semibold text-[#f6b64f]">.</span></h1>

                    <p className='text-[1.15rem] text-[#aeadad] font-medium '>Hi! I’m <span className='font-semibold'>Ayush Srivastava</span>, an <span className='font-semibold'>19-year-old</span> web developer from <span className='font-semibold'>India</span> crafting seamless user experiences. I’m currently working with <span className='font-semibold'>TypeScript, React, and Next.js</span>. When I’m not coding, you’ll usually find me playing <span className='font-semibold'>chess</span> or relaxing with a game of <span className='font-semibold'>Valorant or CS2</span>. </p>

                    <h1 className='font-semibold text-xl text-[#ffffff]'>My Tech Stack</h1>

                    <div className='flex gap-5 flex-wrap'>


                        <div className='w-auto border flex justify-center items-center gap-1 p-2 text-[#d5d5d5]'><img className='w-8 h-8' src={JavascriptIcon} />JavaScript</div>
                        <div className='w-auto border flex justify-center items-center gap-1 p-2 text-[#d5d5d5]'><img className='w-8 h-8' src={TypescriptIcon} />TypeScript</div>
                        <div className='w-auto border flex justify-center items-center gap-1 p-2 text-[#d5d5d5]'><img className='w-8 h-8' src={ReactIcon} />React</div>
                        <div className='w-auto border flex justify-center items-center gap-1 p-2 text-[#d5d5d5]'><img className='w-8 h-8' src={NextjsIcon} />Next.js</div>

                    </div>


                    <hr></hr>

                    <h1 className='font-semibold text-xl text-white'>Contact</h1>


                    <div className='flex flex-wrap gap-8 text-center items-center justify-center md:justify-between '>

                        <div className="  w-fit rounded-lg flex gap-4 flex-wrap justify-center items-center text-[#d5d5d5]">

                            <a className='footerLinks' target="_blank" rel="noopener noreferrer" href="https://github.com/constayush">
                                GitHub
                            </a>

                            <a className='footerLinks' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ayush0x1/">
                                LinkedIn
                            </a>

                            <a className='footerLinks' target="_blank" rel="noopener noreferrer" href="https://www.x.com/constayush/">
                                X / twitter
                            </a>

                            <a className='footerLinks' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/maihoonayush/">
                                Instagram
                            </a>

                            <a className='footerLinks' target="_blank" rel="noopener noreferrer" href="mailto:ayushcodes@outlook.com">
                                
ayushcodes@outlook.com
                            </a>
                            <a download="" className="p-2 flex items-center bg-[#111111] w-auto text-center justify-center hover:bg-white text-white hover:text-[#111111] border border-[#1f1f1f]  rounded transition duration-300">

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


export default Hero;