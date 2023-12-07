import { SectionWrapper } from "@/hoc"
import { achievements } from "@/constant";
import { worksans } from "@/constant";
import Image from "next/image";
function Achievements() {
    return (
        <div className="text-center mt-10 md:mt-20">
            <h1  data-aos="fade-up" className={`${worksans.className} text-3xl md:text-5xl`}>{"Achievements & Certifications"}<span className='text-5xl text-myprimecolor font-black ml-2'>.</span>
            </h1>
            <div  className="mt-6 md:mt-16 flex flex-col gap-10 md:gap-16 px-2">
                {achievements.map(achievement => {
                    return (
                        <div key={achievement.title} className="flex items-center lg:items-start flex-col-reverse lg:flex-row justify-center text-left gap-0 lg:gap-8">
                            <div className="w-full  lg:w-1/2 mt-5">
                                <h1  className="text-2xl md:text-4xl mb-3 ">{achievement.title}</h1>
                                <p className="mb-3"><span className="underline decoration-myprimecolor underline-offset-4">{achievement.organiser}</span> - {achievement.date}</p>
                                <ul className="text-base md:text-xl list-disc">
                                    {achievement.points.map(point => {
                                        return (
                                            <li key={point} className="mb-3">{point}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <Image  className="hidden md:block rounded-sm border-2 border-white hover:-translate-y-5 hover:scale-105 ease-in-out transition duration-300" src={achievement.img} width={500} height={500} alt="achievementimg" />
                            <Image  className="block md:hidden rounded-sm border-2 border-white hover:-translate-y-5 hover:scale-105 ease-in-out transition duration-300" src={achievement.img} width={300} height={300} alt="achievementimg" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default SectionWrapper(Achievements, "achievements");