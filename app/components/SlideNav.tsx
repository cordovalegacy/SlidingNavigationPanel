import Image from "next/image"
import Link from "next/link"

const SlideNav = ({ isOpen, clickHandler }: { isOpen: boolean, clickHandler: () => void }) => {
    return (
        <div className={`nav ${isOpen ? '' : 'showing'} nav-blue`}>
            <div className={`nav ${isOpen ? '' : 'showing'} nav-amber`}>
                <nav className={`nav ${isOpen ? '' : 'showing'} nav-base pl-6 pt-6 text-white relative`}>
                    <button className="absolute right-8 top-6 text-lg" onClick={clickHandler}>
                        <span>✖️</span>
                    </button>
                    <Image src={'/3bx-logo.webp'} width={75} height={75} alt="Logo" />
                    <ul className="list">
                        <li><Link href="/" className="hover:text-amber-500">Home</Link></li>
                        <li><Link href="/about-3bx" className="hover:text-amber-500">About 3BX</Link></li>
                        <ul className="list list-indent">
                            <li><Link href="/about-3bx/independence-for-independents-at-3bx" className="hover:text-amber-500">Indie-pendence</Link></li>
                            <li><Link href="/about-3bx/company-culture-at-3bx" className="hover:text-amber-500">Culture</Link></li>
                            <ul className="list list-indent">
                                <li><Link href="/splash" className="hover:text-amber-500">Careers</Link></li>
                                <li><Link href="/splash" className="hover:text-amber-500">Partners</Link></li>
                                <li><Link href="/splash" className="hover:text-amber-500">Teams</Link></li>
                            </ul>
                        </ul>
                    </ul>
                    <ul className="list">
                        <li><Link href="/splash" className="hover:text-amber-500">Why 3BX</Link></li>
                        <ul className="list list-indent">
                            <li><Link href="/splash" className="hover:text-amber-500">All Indies</Link></li>
                            <ul className="list list-indent">
                                <li><Link href="/splash" className="hover:text-amber-500">Writers</Link></li>
                                <li><Link href="/splash" className="hover:text-amber-500">Musicians</Link></li>
                                <li><Link href="/splash" className="hover:text-amber-500">Artists</Link></li>
                            </ul>
                        </ul>
                    </ul>
                    <ul className="list">
                        <li><Link href="/splash" className="hover:text-amber-500">Campaign</Link></li>
                        <li><Link href="/splash" className="hover:text-amber-500">Market</Link></li>
                        <li><Link href="/splash" className="hover:text-amber-500">Community</Link></li>
                        <li><Link href="/splash" className="hover:text-amber-500">TUTI</Link></li>
                        <li><a href="https://blog.booksbeatsbox.com" className="hover:text-amber-500">Blog</a></li>
                        <li><Link href="/splash" className="hover:text-amber-500">Support</Link></li>
                    </ul>
                    <ul className="list">
                        <li><Link href="/splash" className="hover:text-amber-500">Sign In</Link></li>
                        <li><Link href="/splash" className="hover:text-amber-500">Register</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SlideNav
