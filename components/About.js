import { SectionWrapper } from "@/hoc"
import { aboutData } from "@/constant"
import { tech } from "@/constant"
import Image from "next/image"
import { worksans } from "@/constant"
function About() {
    return (
        <div>
            <div className="text-center mt-10 md:mt-20 ">
                <h1 data-aos="fade-up" className={`${worksans.className} text-3xl md:text-5xl`}>ABOUT ME<span className='text-5xl text-myprimecolor font-black ml-2'>.</span>
                </h1>
                <p data-aos="fade-up" className="max-w-4xl mt-5 md:mt-10 mx-auto text-base md:text-xl">{aboutData}</p>
            </div>
            <div className="text-center mt-10 md:mt-16">
                <h1 data-aos="fade-up" className={`${worksans.className} text-3xl md:text-5xl`}>TECHNOLOGIES<span className='text-5xl text-myprimecolor font-black ml-2'>.</span>
                </h1>
                <p data-aos="fade-up" className="text-base md:text-xl my-5 mb-10 md:w-2/3 mx-auto">The following are the technologies that I have expertise in and have built my projects using them from scratch.</p>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-7 gap-5 md:gap-10 px-12 ">
                    {tech.map((eachTech, index) => {
                        return (
                            <div data-aos="zoom-in" key={eachTech.name} className="hover:-translate-y-2 ease-in-out transition hover:scale-125 duration-200 flex flex-col justify-center items-center gap-2">
                                <Image   className="hidden md:block hover:-translate-y-2 ease-in-out transition hover:scale-110" src={eachTech.icon} width={100} height={100} alt="techicon" />
                                <Image className="w-16 h-16 md:hidden hover:-translate-y-2 ease-in-out transition hover:scale-110" src={eachTech.icon} width={100} height={100} alt="techicon" />
                                <p  className="">{eachTech.name}</p>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
export default SectionWrapper(About, "about")