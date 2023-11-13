import Image from 'next/image'
import { Imperial_Script } from 'next/font/google'
const impscript = Imperial_Script({ subsets: ['latin'], weight: ['400'] })
import { Work_Sans } from 'next/font/google'
import { BsDownload } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { BsChevronDoubleDown } from "react-icons/bs";
const worksans = Work_Sans({ subsets: ['latin'], weight: ["700"] })

export default function MainHome() {
    return (
        <div className='relative'>
            <Image src={"/images/homepagebg.jpg"} width={2000} height={2000} className='h-screen w-full' alt='homebg' />
            <div className='flex justify-center'>
                <div data-aos="zoom-in" className='absolute top-[30vh] md:top-[40vh] flex flex-col gap-5 justify-center items-center text-black'>
                    <p  className={`md:text-7xl text-6xl ${impscript.className}`}>Hello!</p>
                    <h1  className={`text-center text-5xl md:text-6xl`} >I am <span className={`${worksans.className}`}>Shaikh Abdul Sami</span><span  className='text-4xl md:text-5xl text-myprimecolor font-black ml-2'>.</span></h1>
                    <p  className={`text-xl md:text-4xl text-center`}>I develop <br className='md:hidden' /> <span className='border-2 rounded-lg px-2 border-myprimecolor'> Full Stack Web Applications</span></p>
                    <div  className='flex gap-5 flex-col md:flex-row'>
                        <a  href='#projects' className='hover:-translate-y-2 ease-in-out transition hover:scale-105 flex  justify-center items-center  gap-2 bg-myprimecolor  text-white text-lg md:text-2xl p-2 rounded-md px-3'><BsGrid />My Projects</a>
                        <a href="Resume.pdf" target="_blank" rel="noopener noreferrer"
                            download="Abdul Sami's Resume" className='hover:-translate-y-2 ease-in-out transition hover:scale-105 flex  justify-center items-center  gap-2 bg-myprimecolor  text-white text-lg md:text-2xl p-2 rounded-md px-3'><BsDownload />Download Resume</a>
                    </div>
                </div>
            </div>
            <div className='block md:hidden'>
            {/* <BsChevronDoubleDown className='absolute bottom-[10vh] w-full text-4xl text-black z-10' /> */}
            <svg className="arrows">
							<path className="a1" d="M0 0 L30 32 L60 0"></path>
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
					
						</svg>
            </div>
        </div>
    )
}