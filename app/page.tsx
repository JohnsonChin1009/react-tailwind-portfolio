'use client';

import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Image2 from 'next/legacy/image';
import Image from 'next/image';
import ctnjohnson from '../public/cartoon-johnson.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import React, { useState } from 'react';

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from 'react-icons/ai';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Johnson Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-200 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen" >
          <nav className="py-10 mb-12 flex justify-between  dark:text-white">
            <h1 className="text-xl font-burtons">Developed by JC</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl hover:text-orange-600" />
              </li>
              <li>
                <button onClick={()=> setDarkMode(!darkMode)} className="bg-gradient-to-r from-orange-400 to-orange-600 hover:text-white md:font-bold text-black px-4 py-2 rounded-md ml-8 dark:text-white dark:hover:text-black">Dark Mode</button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10  dark:text-white">
            <h2 className="text-5xl py-2 text-orange-600 font-medium md:text-6xl">
              Johnson Chin
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Making of a Full-Stack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto  dark:text-white">
              Diploma in Software Engineering Student looking for internship opportunities
              Feel free to contact me for interviews or project collaborations!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-700  dark:text-white">
            <a href="https://www.instagram.com/johnsonchin1009/" className="hover:text-orange-600 hover:scale-110"><AiFillInstagram /></a>
            <a href="https://github.com/JohnsonChin1009" className="hover:text-orange-600 hover:scale-110"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/johnson-chin-70b865224/" className="hover:text-orange-600 hover:scale-110"><AiFillLinkedin /></a>
            
          </div>
          <div className="flex justify-center">
            <div className="relative mx-auto bg-gradient-to-b from-orange-400 rounded-full overflow-hidden w-80 h-80 mt-20 md:h-96 md:w-96">
              <Image2 alt="Johnson" src={ctnjohnson} layout="fill" objectFit="cover" className="md:object-center" />
            </div>
          </div>
        </section>
        {/* Page 2*/}
        <section>
          <div className=" dark:text-white">
            <h3 className="text-3xl py-1">A little about me...</h3>
            <p className="text-md py-2 leading-8 text-gray-800  dark:text-white">
              Johnson here, a student from Asia Pacific University. The reason I want to become a full-stack developer is because I want to help more and more communities to join in the digital era. I am also volunteering in NGOs such as St. John Ambulans Malaysia, actively joining in public duties and managing a school of members.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image alt="design-icon" className="mx-auto" src={design} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Frameworks</h3>
              <p>
                During my time doing projects, I have picked up some frameworks that enabled me
                to create applications on a more faster and effective pace.
              </p>
              <h4 className="py-4 text-orange-600 font-bold">Frameworks</h4>
              <p className="text-gray-800 py-1">Laravel</p>
              <p className="text-gray-800 py-1">ReactJS</p>
              <p className="text-gray-800 py-1">TailwindCSS</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white">
              <Image alt="design-icon" className="mx-auto" src={code} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Languages</h3>
              <p>
                On top of English, Chinese and Malay, I also know some languages that
                help me solve daily problems
              </p>
              <h4 className="py-4 text-orange-600 font-bold">Languages</h4>
              <p className="text-gray-800 py-1">PHP</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Java</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white">
              <Image alt="design-icon" className="mx-auto" src={consulting} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Personality</h3>
              <p>
                I love solving problems, no matter how complex they may be.
                It gives me the sense of accomplishment when that bug its fixed!
              </p>
              <h4 className="py-4 text-orange-600 font-bold">What I like</h4>
              <p className="text-gray-800 py-1">Coffee☕</p>
              <p className="text-gray-800 py-1">Coding💻</p>
              <p className="text-gray-800 py-1">Hackathons🚀</p>
            </div>
          </div>
        </section>

        <section>
          <div id="portfolio" className="dark:text-white">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Below are some projects, assignments, fun-ideas I have created since I stepped into the tech world!
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Ranging from mobile app designs, web applications and also standalone GUI, I try to expose myself more to different technologies and stepping out of my comfort zone.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} alt="web1" className="rounded-lg object-cover w-full h-full" layout="responsive" />
              <p className="flex justify-center text-md mt-2 dark:text-white">APU Central Club Web Application (APUCC)</p>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} alt='web2' className="rounded-lg object-cover w-full h-full" layout="responsive" />
              <p className="flex justify-center text-md mt-2 dark:text-white">Hotel Room Booking Management System</p>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} alt='web3' className="rounded-lg object-cover w-full h-full" layout="responsive" />
              <p className="flex justify-center text-md mt-2 dark:text-white">QRTect Mobile App Design</p>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} alt='web4' className="rounded-lg object-cover w-full h-full" layout="responsive" />
              <p className="flex justify-center text-md mt-2 dark:text-white">HoneyBee Physiotherapy Clinic Web Design</p>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} alt='web5' className="rounded-lg object-cover w-full h-full" layout="responsive" />
              <p className="flex justify-center text-md mt-2 dark:text-white">Asia Pacific Final Year Project Centre Fully Functioning Web App (ApFYPCentre)</p>
            </div>
          </div>
        </section>
      </main>
      </div>
  )
}
