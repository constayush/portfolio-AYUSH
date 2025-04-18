import github from "../public/github.svg";
import linkedin from "../public/linked-in.svg";
import insta from "../public/instagram.svg";
import mail from "../public/mail.svg";
import xIcon from "../public/x.svg";
import TypescriptIcon from "../public/typescript.svg";
import ReactIcon from "../public/react-2.svg";
import JavascriptIcon from "../public/javascript.svg";
import NextjsIcon from "../public/nextjs.svg";
import projectImg1 from "../public/project-img1.png";
import projectImg2 from "../public/project-img2.png";
import ExpressjsIcon from "../public/express.svg";
import NodejsIcon from "../public/nodejs.svg";
import MongoDBIcon from "../public/mongodb.svg";
import { g } from "framer-motion/client";


export const GISTS_DATA = [{
    gistName: "Navbar Dock",
    gistDescription: "Dock styled navbar which shrinks on scroll, stays at the top of the page", 
    gistId: 1,
    gistTags: ["React", "Tailwind"],
    gistCode: "console.log('comming soon')",   
    gistLanguage: "javascript",
},
{
    gistName: "Card with Shine Effect",
    gistDescription: "Card with shine effect on hover using tailwind",
    gistId: 2,
    gistTags: ["React", "Tailwind"],
    gistCode: "console.log('comming soon')",   
    gistLanguage: "javascript",
},
]

export const SOCIAL_LINKS = [
    { href: "https://github.com/constayush", icon: github, alt: "GitHub" },
    { href: "https://www.linkedin.com/in/ayush0x1/", icon: linkedin, alt: "LinkedIn" },
    { href: "https://www.instagram.com/maihoonayush/", icon: insta, alt: "Instagram" },
    { href: "https://www.x.com/constayush/", icon: xIcon, alt: "X" },
    { href: "mailto:ayushcodes@outlook.com", icon: mail, alt: "Mail" }
];

export const PROJECTS = [
    {
        projectName: "Incognito-Art",
        projectDescriptionShort: "AI Image Gallery is a free AI-powered image generation platform [Under Development, will be completed on April 2025]",
        projectDescriptionLong: "Users can generate AI images and submit them anonymously to a Hall of Fame. No one knows who created the images, making it a fun and open space for creative exploration.",
        projectImg: projectImg1,
        projectCode: "https://github.com/constayush/Incognito-Art",
        projectLive: "https://incognito-art.vercel.app/",
        projectId: 1,
    },
    {
        projectName: "Boxit",
        projectDescriptionShort: "Box'It is a boxing app that helps users learn, practice, and improve, offering valuable resources for all skill levels.",
        projectDescriptionLong: "Box'It is a comprehensive boxing app designed for everyone—from beginners to experienced fighters. It features interactive tutorials, guided training sessions, and personalized workout plans to help users sharpen their skills and track their progress.",
        projectImg: projectImg2,
        projectCode: "https://github.com/constayush/Boxit",
        projectLive: "https://boxit-two.vercel.app/",
        projectId: 2,
    },
];

export const TECH_STACK = [
    { icon: JavascriptIcon, name: "JavaScript" },
    { icon: TypescriptIcon, name: "TypeScript" },
    { icon: ReactIcon, name: "React" },
    { icon: NextjsIcon, name: "Next.js" },
    { icon: NodejsIcon, name: "Node.js" },
    { icon: ExpressjsIcon, name: "Express.js" },
    { icon: MongoDBIcon, name: "MongoDB" },
];