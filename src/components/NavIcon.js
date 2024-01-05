const NavIcon = ({show, setShow}) => {

    const handleReload = () => {
      window.location.reload()
    }

    const handleSidebar = () => {
        setShow(!show)
    }

    return (
        <nav className="flex">
            <div className="p-[5vw] text-white items-center justify-start space-x-6 flex">
                <img src="j-logo-a.svg" className="w-16 hover:scale-110 hover:cursor-pointer" onClick={handleReload} />
            </div>
            <div className="flex justify-end mx-auto container py-[3vw] px-[5vw]">
                <img src="menu-hb.svg" className="w-14 hover:scale-110 hover:cursor-pointer" onClick={handleSidebar} />
            </div> 
        </nav>
    )
}

export default NavIcon