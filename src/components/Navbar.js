"use client"

import {BiChevronDown} from "react-icons/bi"

const Navbar = () => {

  const handleReload = () => {
    window.location.reload()
  }

    return (
        <nav className="flex">
          <div className="p-[5vw] text-white items-center justify-start space-x-6 flex">
            <img src="j-logo-a.svg" className="md:w-24 w-16 hover:scale-110 hover:cursor-pointer md:pr-10 pr-4" onClick={handleReload} />
              <ul className="flex space-x-6 z-20">
                <li className="hover:cursor-pointer hover:scale-110 relative inline-block group/main">
                  <div className="flex space-x-1 items-center font-sourceCodePro">
                    <p className="block">Aesthetics</p>
                    <BiChevronDown size={12} />
                  </div>
                  <ul className="hidden absolute bg-indigo-100 min-w-[100px] group-hover/main:block p-2 rounded-md text-xs whitespace-nowrap space-y-1 font-sourceCodePro">
                    <li className="w-full relative group/new1">
                      <p className="text-stone-700 block hover:text-stone-400">Dermal Fillers</p>
                      <ul className="hidden absolute group-hover/new1:block bg-indigo-300 p-2 rounded-md text-xs z-30 top-0 left-full">
                        <li>Coming Soon!</li>
                      </ul>
                    </li>
                    <li className="w-full relative group/new2">
                      <p className="text-stone-700 block hover:text-stone-400">Neurotoxins</p>
                      <ul className="hidden absolute group-hover/new2:block bg-indigo-300 p-2 rounded-md text-xs z-30 top-0 left-full">
                        <li>Coming Soon!</li>
                      </ul>
                    </li>
                    <li className="w-full relative group/new3">
                      <p className="text-stone-700 block hover:text-stone-400">Kybella</p>
                      <ul className="hidden absolute group-hover/new3:block bg-indigo-300 p-2 rounded-md text-xs z-30 top-0 left-full">
                        <li>Coming Soon!</li>
                      </ul>
                    </li>
                    <li className="w-full relative group/new4">
                      <p className="text-stone-700 block hover:text-stone-400">PDO Threads</p>
                      <ul className="hidden absolute group-hover/new4:block bg-indigo-300 p-2 rounded-md text-xs z-30 top-0 left-full">
                        <li>Coming Soon!</li>
                      </ul>
                    </li>
                    <li className="w-full relative group/new5">
                      <p className="text-stone-700 block hover:text-stone-400">Booty Enhancement</p>
                      <ul className="hidden absolute group-hover/new5:block bg-indigo-300 p-2 rounded-md text-xs z-30 top-0 left-full">
                        <li>Coming Soon!</li>
                      </ul>
                    </li>
                    <li className="w-full relative group/new6">
                      <p className="text-stone-700 block hover:text-stone-400">Hair Restoration</p>
                      <ul className="hidden absolute group-hover/new6:block bg-indigo-300 p-2 rounded-md text-xs z-30 top-0 left-full">
                        <li>Coming Soon!</li>
                      </ul>
                    </li>
                    <li className="w-full relative group/new7">
                      <p className="text-stone-700 block hover:text-stone-400">Stretch Mark Reduction</p>
                      <ul className="hidden absolute group-hover/new7:block bg-indigo-300 p-2 rounded-md text-xs z-30 top-0 left-full">
                        <li>Coming Soon!</li>
                      </ul>
                    </li>
                    <li className="w-full relative group/new8">
                      <p className="text-stone-700 block hover:text-stone-400">Microneedling</p>
                      <ul className="hidden absolute group-hover/new8:block bg-indigo-300 p-2 rounded-md text-xs z-30 top-0 left-full">
                        <li>Coming Soon!</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="hover:cursor-pointer hover:scale-110 relative inline-block group">
                  <div className="flex space-x-1 items-center font-sourceCodePro">
                    <p className="block">Wellness</p>
                    <BiChevronDown size={12} />
                  </div>
                  <ul className="hidden absolute bg-indigo-100 min-w-[100px] group-hover:block p-2 rounded-md text-xs whitespace-nowrap space-y-1 font-sourceCodePro">
                    <li className="w-full relative group/new9">
                      <p className="text-stone-700 block hover:text-stone-400">Medical Weight Loss</p>
                      <ul className="hidden absolute group-hover/new9:block bg-indigo-300 p-2 rounded-md text-xs z-30 top-0 left-full">
                        <li>Coming Soon!</li>
                      </ul>
                    </li>
                    <li className="w-full relative group/new10">
                      <p className="text-stone-700 block hover:text-stone-400">Semaglutide</p>
                      <ul className="hidden absolute group-hover/new10:block bg-indigo-300 p-2 rounded-md text-xs z-30 top-0 left-full">
                        <li>Coming Soon!</li>
                      </ul>
                    </li>
                    <li className="w-full relative group/new11">
                      <p className="text-stone-700 block hover:text-stone-400">B12 Injections</p>
                      <ul className="hidden absolute group-hover/new11:block bg-indigo-300 p-2 rounded-md text-xs z-30 top-0 left-full">
                        <li>Coming Soon!</li>
                      </ul>
                    </li>
                    <li className="w-full relative group/new12">
                      <p className="text-stone-700 block hover:text-stone-400">Kenalog (Allergy) Shot</p>
                      <ul className="hidden absolute group-hover/new12:block bg-indigo-300 p-2 rounded-md text-xs z-30 top-0 left-full">
                        <li>Coming Soon!</li>
                      </ul>
                    </li>
                    <li className="w-full relative group/new13">
                      <p className="text-stone-700 block hover:text-stone-400">IV Vitamin Drip</p>
                      <ul className="hidden absolute group-hover/new13:block bg-indigo-300 p-2 rounded-md text-xs z-30 top-0 left-full">
                        <li>Coming Soon!</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="hover:scale-110 font-sourceCodePro">
                  <a href="#info" data-scroll-to>Location</a>
                </li>
                <li className="hover:scale-110 font-sourceCodePro">
                  <a href="#info" data-scroll-to>Contact</a>
                </li>
              </ul>
          </div>
          <div className="flex justify-end items-center space-x-4 container mx-auto p-[3vw]">
              <a
                href="https://www.facebook.com/people/ARTISAN-in-the-Crossings/61552275120298/?mibextid=9R9pXO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/facebook-logo.svg"
                  className="w-8 h-6 hover:scale-110"
                  alt="facebook logo"
                />
              </a>
              <a
                href="https://www.instagram.com/artisaninthecrossings/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instagrambw-logo.svg"
                  className="w-8 h-8 hover:scale-110"
                  alt="instagram logo"
                />
              </a>
          </div>
        </nav>
    )
}

export default Navbar