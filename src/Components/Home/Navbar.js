import React, { useState } from "react";


// Import Image
import Logo from "../../assets/img/logo.png"
import Twitterlogo from "../../assets/img/twitter.png"
import DiscordLogo from "../../assets/img/discord.png"


function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        {/* Header */}
        <nav className="bg-black text-white w-full h-14 shadow-transparent2 flex-col fixed top-0">
            <div className="flex flex-col md:flex-row">
                <div className={`flex justify-between items-center pt-3 md:pt-4 px-8 md:pl-20 xl:pl-32 md:border-none ${isOpen ? 'border-b' : 'none'}`}>
                    <div className="flex">
                        <img src={Logo} className="w-10 md:w-14" alt="Stress Capital"/>
                        <a href="/" className="titleStress font-bold md:text-base py-2 md:py-0"> Stress Capital. </a>
                    </div>
                    <div className="items-center block md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7">
                            <path className={`${!isOpen ? 'block' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            <path className={`${isOpen ? 'block' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row justify-between w-full md:items-center md:border-none mb-2 md:mb-0`}>
                    <div className="flex flex-col md:flex-row mx-auto fontDescription md:text-base">
                        <a href="/psikolog" className="block px-6 py-2 md:mr-7 hover:border-l-8 border-violet-700">home</a>
                        <a href="/#feedback" className="block px-6 py-2 md:mr-7 hover:border-l-8 border-violet-700">about</a>
                        <a href="/tentangkami" className="block px-6 md:mr-7 py-2 hover:border-l-8 border-violet-700">article</a>
                        <a href="/tentangkami" className="block px-6 py-2 bg-violet-700">payment</a>
                    </div>
                    <div className="flex md:flex-row mx-6 md:mx-0">
                        <a href="https://twitter.com/StressCapitals">
                            <img src={Twitterlogo} className="w-5 md:w-5 md:mx-8" alt="Twitter Logo"/>
                        </a>
                        <a href="https://discord.gg/3Msv2HcN">
                            <img src={DiscordLogo} className="w-5 md:w-5 md:mr-20 xl:mr-44" alt="Discord Logo"/>
                        </a>
                    </div>
                </div>
            </div>  
        </nav>
    </div>
  );
}

export default Navbar;
