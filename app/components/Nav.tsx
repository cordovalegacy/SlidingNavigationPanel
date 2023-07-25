
const Nav = ({ isOpen, clickHandler }:{isOpen: boolean, clickHandler: () => void}) => {

    return (
        <nav className="w-full bg-[#1e1e1e] py-6">
            <button className={`left-6 min-w-fit px-2 py-3 rounded-lg bg-[#463f3f] ml-6`} onClick={clickHandler} aria-label="Menu Button">
                <span className={`${!isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} bg-white block transition-transform duration-300 ease-out h-0.5 w-6 rounded-sm`}></span>
                <span className={`${!isOpen ? 'opacity-0' : 'opacity-100'} bg-white block transition-transform duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5`}></span>
                <span className={`${!isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} bg-white transition-transform duration-300 ease-out block h-0.5 w-6 rounded-sm`}></span>
            </button>
        </nav>
    )
}

export default Nav
