import html from "@/public/images/tech/html.png"
import css from "@/public/images/tech/css.png"
import javascript from "@/public/images/tech/javascript.png"
import nodejs from "@/public/images/tech/nodejs.png"
import mongodb from "@/public/images/tech/mongodb.png"
import firebase from "@/public/images/tech/firebase.svg"
import postgresql from "@/public/images/tech/postgresql.png"
import reactjs from "@/public/images/tech/reactjs.png"
import tailwind from "@/public/images/tech/tailwind.png"
import next from "@/public/images/tech/next.png"
import figma from "@/public/images/tech/figma.png"
import git from "@/public/images/tech/git.png"
import redux from "@/public/images/tech/redux.png"
import { Work_Sans } from 'next/font/google'
import xstore from "@/public/images/xstore.png"
import chaikathela from "@/public/images/chaikathela.png"
import ahs from "@/public/images/ahs.png"
import codeburst from "@/public/images/codeburst.jpg"
import NPTELpython from "@/public/images/NPTELpython.jpeg"
import forge from "@/public/images/forge.png"
import AICTE from "@/public/images/AICTE.jpg"
import portfolioHomePage from "@/public/images/portfolioHomePage.png"
const worksans = Work_Sans({ subsets: ['latin'], weight: ["500"] })

const aboutData = "I am a skilled Full Stack Web Developer with expertise in various trending technologies such as React.js, Next.js, MongoDB, etc. I have built projects which showcases the skillset I have in these technologies. I am really good in adapting to the various technological trends and working with the latest technologies. I am open to work as a freelance web developer and help you start or boost your online business with the help of tech."

const tech = [
    {
        name: "HTML",
        icon: html
    },
    {
        name: "CSS",
        icon: css
    },
    {
        name: "JavaScript",
        icon: javascript
    },
    {
        name: "Node.js",
        icon: nodejs
    },
    {
        name: "MongoDB",
        icon: mongodb
    },
    {
        name: "Firebase",
        icon: firebase
    },
    {
        name: "PostgreSQL",
        icon: postgresql
    },
    {
        name: "React.js",
        icon: reactjs
    },
    {
        name: "Redux Toolkit",
        icon: redux
    },
    {
        name: "Tailwind",
        icon: tailwind
    },
    {
        name: "Next.js",
        icon: next
    },
    {
        name: "Git & GitHub",
        icon: git
    },
    {
        name: "Figma",
        icon: figma
    },

]

const projects = [
    {
        thumbnail: xstore,
        title: "X Store (E Commerce Web App)",
        desc: "X Store is a full stack E Commerce Website built using the latest Next.js 13, next-auth, MongoDB, tailwind CSS. This web app is a ready-to-go in production with all the necessary features which an E Commerce website is supposed to have.",
        techUsed: ["Next.js", "MongoDB", "Next-Auth", "Tailwind CSS"],
        github: "https://github.com/Sami-07/XStore",
        webapp: "https://x-store.vercel.app/"
    },
    {
        thumbnail: chaikathela,
        title: "Chai ka Thela",
        desc: "Chai ka Thela is an Online Beverage Selling web app built using React.js, Firebase. It uses Firebase Authentication for user authentication and Firebase firestore Database for storing the data.",
        techUsed: ["React.js", "Firebase", "CSS"],
        github: "https://github.com/Sami-07/ChaiKaThela",
        webapp: "https://chaikathela7.web.app/"
    },
    {
        thumbnail: portfolioHomePage,
        title: "Personal Portfolio Website",
        desc: "This is my Portfolio Website built using Nextjs and Tailwind. This website is SEO optimized as this is built using Next.js server-side rendering. This Professional Portfolio Website displays all the info. ,projects and Achievements with a Contact Section integrated with Nodemailer for mail service.",
        techUsed: ["Next.js", "Tailwind"],
        github: "https://github.com/Sami-07/abdulsami",
        webapp: "https://abdulsami-sami-07.vercel.app/"
    },
]
const achievements = [

    {
        title: "Placed 1st in Code Burst Hackathon",
        organiser: "Sreyas Institute of Engg. & Tech.",
        date: "October 2023",
        points: ["Code Burst is a Coding Contest Organised at Sreyas Institute of Engineering and Technology.", "Me and my Team showcased our problem solving skills to come up with the optimal solutions to the problem statements."],
        img: codeburst

    },
    {
        title: "Graded as Elite + Silver in Python and DSA",
        organiser: "IIT Madras",
        date: "October 2023",
        points: ["Programming, Data Structures and Algorithms using Python is an NPTEL Exam Conducted by IIT Madras.", "I am graded as Elite + Silver in Programming, Data Structures and Algorithms using Python."],
        img: NPTELpython

    },
    {
        title: "Placed Third in Code-a-Thon",
        organiser: "Forge Alumnus",
        date: "March 2023",
        points: ["Code-a-Thon is a Technical Contest for Web Development hosted at our College by FORGE Alumnus.", "I was responsible for building the front-end of the website using EJS, CSS, JavaScript & Bootstrap", "We were placed third in this Code-a-Thon."],
        img: forge

    },
    {
        title: "Innovate India Coding Championship",
        organiser: "AICTE",
        date: "July 2022",
        points: ["Innovate India Coding Championship is an All India Coding Contest.", "This Contest was organised by AICTE in collaboration with Coding Ninjas.", "I Qualified for Round 2 of 3 in this Coding Contest.", "This coding Contest Consisted of Aptitude Questions and Problem Solving Coding Questions."],
        img: AICTE

    }
]

export { aboutData, tech, worksans, projects, achievements }