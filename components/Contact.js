"use client"
import { SectionWrapper } from "@/hoc"
import { worksans } from "@/constant";
import { useState } from "react";
import { BsSend } from "react-icons/bs"
import emailjs from "@emailjs/browser";
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        const data = { name, email, message };
        e.preventDefault();
        setLoading(true);
        let res = await fetch(`/api/contactmail`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        console.log(res);
        let response = await res.json();
        if (response.ok) {
            console.log("Query Sent Successfully");
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
            setLoading(false);
            setName("");
            setEmail("");
            setMessage("");
        }
        else {
            setFailure(true);
            setTimeout(() => {
                setFailure(false);
            }, 3000);
            setLoading(false);
        }

    };
    return (

        <div className="text-center mt-5">
            <h1  data-aos="fade-up" className={`${worksans.className} text-3xl md:text-5xl`}>Contact<span className='text-5xl text-myprimecolor font-black ml-2'>.</span>
            </h1>
            <div  className="bg-myprimecolor h-fit md:w-2/3 mx-5 md:mx-auto pt-20 pb-10 rounded-xl mt-10">
                <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-10 justify-center">
                    <label htmlFor="name" className="flex px-5 md:px-0 flex-col md:flex-row justify-center md:items-center gap-0 md:gap-5">
                        <span className="text-base md:text-xl w-14 md:w-20">Name</span>
                        <input className="text-black w-full md:w-2/3 h-16 rounded-xl p-2" type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your Name" />
                    </label>
                    <label htmlFor="email" className="flex px-5 md:px-0  flex-col md:flex-row  justify-center md:items-center gap-0 md:gap-5">
                        <span className="text-base md:text-xl w-14 md:w-20">Email</span>
                        <input className="text-black w-full md:w-2/3 h-16 rounded-xl p-2" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your Email" />
                    </label>
                    <label htmlFor="message" className="flex px-5 md:px-0  flex-col md:flex-row  justify-center md:items-center gap-0 md:gap-5">
                        <span className=" text-base md:text-xl w-14 md:w-20">Message</span>
                        <textarea className="text-black w-full md:w-2/3 h-36 rounded-xl p-2" name="message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Enter your Message" />
                    </label>
                    {(!success && !loading) && <button type="submit" className='flex  justify-center items-center  gap-2 border-2 font-medium text-white text-xl md:text-2xl p-2 rounded-md px-3 md:w-1/5 mx-auto hover:-translate-y-2 ease-in-out transition hover:scale-105'><BsSend />Send</button>}

                    {loading && <button disabled type="submit" className='flex  justify-center items-center  gap-2 border-2 font-medium text-white text-xl md:text-2xl p-2 rounded-md px-3 md:w-1/5 mx-auto hover:-translate-y-2 ease-in-out transition hover:scale-105'>Sending...</button>}
                    {success && <button disabled type="submit" className='flex  justify-center items-center  gap-2 border-2 font-medium text-white text-xl md:text-2xl p-2 rounded-md px-3 md:w-1/5 mx-auto hover:-translate-y-2 ease-in-out transition hover:scale-105'>Sent Successfully!</button>}
                    {failure && <button disabled type="submit" className='flex  justify-center items-center  gap-2 border-2 font-medium text-white text-xl md:text-2xl p-2 rounded-md px-3 md:w-1/5 mx-auto hover:-translate-y-2 ease-in-out transition hover:scale-105'>Failed to Send Message.</button>}
                </form>
            </div>
        </div>
    )
}
export default SectionWrapper(Contact, "contact");