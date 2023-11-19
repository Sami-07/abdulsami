import { SectionWrapper } from "@/hoc"
import Image from "next/image";
import { worksans } from "@/constant"
import { projects } from "@/constant";
import { AiOutlineGithub } from "react-icons/ai"
import { HiExternalLink } from "react-icons/hi"
import Link from "next/link";
function Projects() {
    return (
        <div className="text-center mt-10 md:mt-20">
            <h1  data-aos="fade-up" className={`${worksans.className} text-3xl md:text-5xl`}>MY PROJECTS<span className='text-5xl text-myprimecolor font-black ml-2'>.</span>
            </h1>
            <div  data-aos="fade-up">
                {projects.map(project => {
                    return (
                        <div key={project.title} className="flex flex-col xl:flex-row  items-center">
                            <div>
                                <div  className="hidden md:block relative hover:-translate-y-2 ease-in-out transition hover:scale-105">
                                    <Image className="absolute w-[355px] rounded-sm h-56 top-20 left-[120px]" src={project.thumbnail} width={1000} height={1000} alt="thumbnail" />
                                    <Image src={"/images/lappy.png"} width={600} height={600} alt="laptop" />
                                </div>
                                <div   className="block md:hidden relative hover:-translate-y-2 ease-in-out transition hover:scale-105">
                                    <Image className="absolute w-[224px]  rounded-sm h-[141px]  top-[50px]   left-[77px] " src={project.thumbnail} width={1000} height={1000} alt="thumbnail" />
                                    <Image src={"/images/lappy.png"} className="w-[380px] max-w-[1000px]" width={600} height={600} alt="laptop" />
                                </div>
                                <div className='flex justify-center items-center gap-5'>
                                    <Link href={project.github} className='hover:-translate-y-2 ease-in-out transition hover:scale-105 flex  justify-center items-center  gap-2  bg-white text-black font-medium text-lg md:text-2xl p-2 rounded-md px-3'><AiOutlineGithub />Repository</Link>
                                    <Link  href={project.webapp} className='hover:-translate-y-2 ease-in-out transition hover:scale-105 flex  justify-center items-center  gap-2 bg-myprimecolor font-medium text-white  text-lg md:text-2xl p-2 rounded-md px-3'><HiExternalLink />Web App</Link>
                                </div>
                            </div>
                            <div   className="flex md:text-lg text-base text-left flex-col    lg:w-1/2 mt-10 md:mt-0">
                                <h1 className=" text-xl text-left  md:text-left md:mt-5  md:text-3xl mb-3 md:mb-0 ">{project.title}</h1>
                                <p className="text-base md:text-lg text-left">{project.desc}</p>
                                <h3 className="text-base md:text-xl  mt-5">Tech <span className="underline decoration-myprimecolor underline-offset-4 decoration-4 rounded-lg">Stack</span>  Used:</h3>
                                <div  className="flex flex-wrap ">
                                    {project.techUsed.map((tech, index) => {
                                        if (index != project.techUsed.length - 1) {
                                            tech = tech + " · "

                                        }
                                        return (
                                            <p key={tech} className="mr-1 text-base">{tech}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default SectionWrapper(Projects, "projects");