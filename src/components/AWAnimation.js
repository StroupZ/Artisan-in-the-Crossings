import {motion} from "framer-motion"

const AWAnimation = () => {
        
    return (
        <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 6, delay: 1.6 }}
              className="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl text-white z-[1] font-cormorantUpright italic mt-[60vh] md:mt-10"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="1"
            >
            Aesthetics and
            </motion.p> 
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 6, delay: 2.4 }}
              className="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl text-white z-[1] font-cormorantUpright italic 2xl:pl-36"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-1"
            >
            Wellness Services
            </motion.p> 
        </div>
    )
}

export default AWAnimation