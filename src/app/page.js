"use client"

import Animation from "../components/Animation"
import Navbar from "../components/Navbar"
import ReviewSlider from "../components/ReviewSlider"
import AWAnimation from "../components/AWAnimation"
import NavIcon from "../components/NavIcon"
import Sidebar from "../components/Sidebar"
import {LocomotiveScrollProvider} from "react-locomotive-scroll"
import {useRef, useState} from "react"
import {LazyMotion, domAnimation} from "framer-motion"
import "locomotive-scroll/dist/locomotive-scroll.css"

export default function Home() {

  const containerRef = useRef(null)

  const [show, setShow] = useState(false)

  return (
    <>
      <LazyMotion features={domAnimation}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <div>
            <div className="h-screen w-full fixed -z-50">
              <img src="statueai2.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="md:pl-[20vw] pl-[4vw] fixed z-[-20] bottom-1/2 md:bottom-24">
              <Animation />
            </div>
            <div data-scroll-container id="scrollContainer" ref={containerRef}>
              <div className="relative z-50" data-scroll data-scroll-sticky data-scroll-target="#scrollContainer">
                <Sidebar show={show} setShow={setShow} />
              </div>
              <div className="relative h-screen flex flex-col">
                <div className="hidden md:block">
                  <Navbar />
                </div>
                <div className="block md:hidden">
                  <NavIcon show={show} setShow={setShow} />
                </div>
                <div className="pl-12 md:pl-28 xl:pl-40 relative">
                  <AWAnimation />
                </div>
                <div className="absolute bottom-0 inset-x-0" data-scroll data-scroll-speed="0.75">
                  <img src="feathertest.svg" className="md:w-36 w-28 mx-auto translate-y-1/2" />
                </div>
              </div>
              <div className="sm:h-96 w-full bg-white text-center flex flex-col justify-center items-center lg:space-y-12 space-y-4 sm:px-24 px-8 py-8">
                <h1 className="sm:text-6xl text-3xl italic text-[#444444] font-cormorantUpright" data-scroll data-scroll-direction="horizontal" data-scroll-speed="0.5">Nurse Jenn is now at this location.</h1>
                <p className="font-sourceCodePro md:text-base text-xs"><i>ARTISAN in the Crossings</i> is a premier med spa offering a variety of aesthetics and wellness services in the Prescott area and providing an unparalleled level of expertise and personal care. We provide access to an expansive range of cutting-edge techniques, treatments, and products to enable you to achieve your aesthetic goals while still maintaining your natural, unique look.</p>
                <img src="greek-column.svg" className="w-16"></img>
              </div>
              <div id="info" className="md:h-[50vh] md:min-h-fit w-full bg-gradient-to-br from-[#8f83a7] to-[#2e2c2f] flex flex-col md:flex-row relative">
                <div className="md:w-1/3 w-full h-[360px] sm:h-[500px] md:h-full flex">
                  <img src="jenn-grey.jpg" className="w-full object-cover object-[50%_25%] p-4" />
                </div>
                <div className="md:w-1/3 h-full items-center flex flex-col mx-4">
                  <img src="artisan1.svg" className="md:w-3/4" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-0.5" />
                  <div className="text-white md:text-sm text-base xl:text-base flex flex-col items-center space-y-2 xl:-translate-y-8 -translate-y-4 pb-2">
                    <div className="flex items-center space-x-2">
                      <img src="phone-icon.svg" className="w-6" />
                      <p>(928)362-7773</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src="email-icon.svg" className="w-6" />
                      <p>Jenn@Artisan-MedSpa.com</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img src="location-icon.svg" className="w-6" />
                      <p>3619 Crossings Dr. Suite A, Prescott, AZ 86305</p>
                    </div>
                  </div> 
                </div>
                <div id="map" className="relative md:w-1/3 w-full md:h-full h-96">
                  <iframe className="absolute top-0 left-0 w-full h-full md:p-4 p-12 z-10"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.314128415816!2d-112.46893492360478!3d34.596217388810764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872d2f23fb80e8df%3A0xa76acc67340c281!2sARTISAN%20in%20the%20Crossings!5e0!3m2!1sen!2sus!4v1700004692982!5m2!1sen!2sus"
                    style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0">
                  </iframe>
                </div>
                <div className="absolute bottom-0 inset-x-0" data-scroll data-scroll-speed="1" >
                  <img src="feathertest.svg" className="md:w-36 w-28 mx-auto translate-y-1/2 -scale-x-100" />
                </div>
              </div>
              <div className="sm:h-64 w-full bg-white">
                <ReviewSlider />
              </div>
              <div className="h-48 w-full bg-gradient-to-br from-[#8f83a7] to-[#2e2c2f] flex flex-col px-8 sm:px-24">
                <div className="flex justify-center items-center space-x-4 container mx-auto pt-8">
                  <a
                    href="https://www.facebook.com/people/ARTISAN-in-the-Crossings/61552275120298/?mibextid=9R9pXO"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/facebook-logo.svg"
                      className="w-8 h-7 sm:w-10 sm:h-8 hover:scale-110"
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
                      className="w-8 h-8 sm:w-10 sm:h-10 hover:scale-110"
                      alt="instagram logo"
                    />
                  </a>
                </div>
                <div className="border-b border-[#9fb4ed] w-full flex h-full"></div>
                  <p className="text-xs py-8">Copyright © 2024 by ARTISAN in the Crossings. All Rights Reserved. Website by&nbsp;&nbsp;<a href="https://stroupz.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 text-[#c2c1c0]">StroupZ</a></p>
                </div>
            </div>
          </div>
        </LocomotiveScrollProvider>
      </LazyMotion>
    </>
  )
}
