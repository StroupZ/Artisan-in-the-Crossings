import {BiChevronDown, BiChevronUp} from "react-icons/bi"
import {useState} from "react"

const Sidebar = ({show, setShow}) => {
    
    const [showAesthetics, setShowAesthetics] = useState(false)
    const [showWellness, setShowWellness] = useState(false)
    const [popup, setPopup] = useState(false)
    const [popup2, setPopup2] = useState(false)

    const handleAesthetics = () => {
        setShowAesthetics(!showAesthetics)
    }

    const handleWellness = () => {
        setShowWellness(!showWellness)
    }

    const handlePopup = () => {
        if (popup === false) {
            setPopup(true)
            setTimeout(() => {
                setPopup(false)
            }, 2000)
        }
    }

    const handlePopup2 = () => {
        if (popup2 === false) {
            setPopup2(true)
            setTimeout(() => {
                setPopup2(false)
            }, 2000)
        }
    }

    const handleClose = () => {
        setShow(!show)
    }

    
    return (
        <div  className={`flex flex-col font-sourceCodePro border z-50 shadow w-64 h-screen bg-indigo-300/90 fixed transition-all duration-500 top-0 ${show ? "left-0" : "-left-full"}`}>
            <div className="flex justify-end p-4">
                <img src="close-icon.svg" className="w-12 hover:cursor-pointer hover:scale-110" onClick={handleClose} />
            </div>
            <ul className="flex flex-col ml-8 space-y-8 text-white">
                <li className="inline-block">
                    <div className="flex space-x-1 items-center relative">
                        <p className="block hover:cursor-pointer" onClick={handleAesthetics}>Aesthetics</p>
                        {showAesthetics ? <BiChevronUp /> : <BiChevronDown />}
                        <div className={`flex border rounded-lg bg-white w-auto absolute translate-x-28 ${popup ? "block" : "hidden"}`}>
                            <p className="p-2 text-indigo-300">Coming Soon!</p>
                        </div>
                    </div>
                    <ul className={`text-xs ml-3 mt-2 space-y-1 text-stone-700 ${showAesthetics ? "block" : "hidden"}`}>
                        <li className="hover:cursor-pointer" onClick={handlePopup}>Dermal Fillers</li>
                        <li className="hover:cursor-pointer" onClick={handlePopup}>Neurotoxins</li>
                        <li className="hover:cursor-pointer" onClick={handlePopup}>Kybella</li>
                        <li className="hover:cursor-pointer" onClick={handlePopup}>PDO Threads</li>
                        <li className="hover:cursor-pointer" onClick={handlePopup}>Booty Enhancement</li>
                        <li className="hover:cursor-pointer" onClick={handlePopup}>Hair Restoration</li>
                        <li className="hover:cursor-pointer" onClick={handlePopup}>Stretch Mark Reduction</li>
                        <li className="hover:cursor-pointer" onClick={handlePopup}>Microneedling</li>
                    </ul>
                </li>
                <li className="inline-block">
                    <div className="flex space-x-1 items-center">
                        <p className="block hover:cursor-pointer" onClick={handleWellness}>Wellness</p>
                        {showWellness ? <BiChevronUp /> : <BiChevronDown />}
                        <div className={`flex border rounded-lg bg-white w-auto absolute translate-x-28 ${popup2 ? "block" : "hidden"}`}>
                            <p className="p-2 text-indigo-300">Coming Soon!</p>
                        </div>
                    </div>
                    <ul className={`text-xs ml-3 mt-2 space-y-1 text-stone-700 ${showWellness ? "block" : "hidden"}`}>
                        <li className="hover:cursor-pointer" onClick={handlePopup2}>Medical Weight Loss</li>
                        <li className="hover:cursor-pointer" onClick={handlePopup2}>Semaglutide</li>
                        <li className="hover:cursor-pointer" onClick={handlePopup2}>B12 Injections</li>
                        <li className="hover:cursor-pointer" onClick={handlePopup2}>Kenalog (Allergy) Shot</li>
                        <li className="hover:cursor-pointer" onClick={handlePopup2}>IV Vitamin Drip</li>
                    </ul>
                </li>
                <li>
                    <a href="#map" data-scroll-to onClick={handleClose}>Location</a>
                </li>
                <li className="hover:scale-110 hover:cursor-pointer">
                    <a href="#info" data-scroll-to onClick={handleClose}>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar