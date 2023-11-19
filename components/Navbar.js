"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineGithub } from "react-icons/ai"
import { FaSquareXTwitter } from "react-icons/fa6"
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
export default function Navbar({ setToggle, closeNav, toggle }) {

    return (
        <div>
            <nav className="bg-myprimecolor z-10 h-16 flex justify-between items-center pl-2 md:pl-10 md:pr-10 pr-4 fixed w-full" >
                <div onClick={() => {

                    window.scrollTo(0, 0);
                }}>
                    <Image src={"/images/logo.svg"} width={40} height={40} alt="logo" />
                </div>
                <div className=" gap-10 text-xl hidden md:flex">
                    <a onClick={() => {
                        window.scrollTo(0, 0);

                    }} className="transition ease-in-out   hover:-translate-y-1 hover:scale-110 cursor-pointer">Home</a>
                    <a href="#about" className="transition ease-in-out  hover:-translate-y-1 hover:scale-110   cursor-pointer">About</a>
                    <a href="#projects" className="transition ease-in-out  hover:-translate-y-1 hover:scale-110 cursor-pointer">Projects</a>
                    <a href="#achievements" className="transition ease-in-out  hover:-translate-y-1 hover:scale-110 cursor-pointer">Achievements</a>
                    <a href="#contact" className="transition ease-in-out   hover:-translate-y-1 hover:scale-110 cursor-pointer">Contact</a>
                </div>
                {toggle && <div className=" gap-10 flex flex-col absolute right-0 top-16 text-center text-xl md:hidden bg-myprimecolor p-2 py-5 rounded-bl-xl">
                    <a onClick={() => {
                        window.scrollTo(0, 0);
                        closeNav();
                    }} className="transition ease-in-out   hover:-translate-y-1 hover:scale-110 cursor-pointer">Home</a>
                    <a onClick={() => closeNav()} href="#about" className="transition ease-in-out  hover:-translate-y-1 hover:scale-110   cursor-pointer">About</a>
                    <a onClick={() => closeNav()} href="#projects" className="transition ease-in-out  hover:-translate-y-1 hover:scale-110 cursor-pointer">Projects</a>
                    <a onClick={() => closeNav()} href="#achievements" className="transition ease-in-out  hover:-translate-y-1 hover:scale-110 cursor-pointer">Achievements</a>
                    <a onClick={() => closeNav()} href="#contact" className="transition ease-in-out   hover:-translate-y-1 hover:scale-110 cursor-pointer">Contact</a>
                </div>}
                <div className="hidden lg:flex  absolute right-28 md:relative md:right-auto  text-2xl md:text-4xl gap-5">
                    <Link href={"https://www.linkedin.com/in/shaikh-abdul-sami-879287211/"} className="transition ease-in-out   hover:-translate-y-1 hover:scale-110 cursor-pointer"><AiFillLinkedin /></Link>
                    <Link href={"https://twitter.com/sami73010"} className="transition ease-in-out   hover:-translate-y-1 hover:scale-110 cursor-pointer"><FaSquareXTwitter /></Link>
                    <Link href={"https://github.com/Sami-07"} className="transition ease-in-out   hover:-translate-y-1 hover:scale-110 cursor-pointer"><AiOutlineGithub /></Link>
                </div>
                {!toggle && <RxHamburgerMenu className="text-3xl md:hidden" onClick={() => setToggle(!toggle)} />}
                {toggle && <AiOutlineClose className="text-3xl md:hidden" onClick={() => setToggle(!toggle)} />}

            </nav>
        </div>
    )

}