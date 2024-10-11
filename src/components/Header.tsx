import Link from "next/link"

export default function Header(){
    return(
        <div className="nav-container">
        <nav className="flex justify-between items-center gap-10 mt-5 h-[60px] text-xl">
            <h1 className="nav-title text-4xl mt-3" data-aos="zoom-in-up">Fast Food</h1>
            <ul className="nav-links flex items-center justify-end gap-10 h-[60px] mt-5 text-2xl">
                <Link href="/">
                    <li className="hover:underline">Home</li>
                </Link>
                <Link href="#contact">
                    <li className="hover:underline">Contact</li>
                </Link>
                <Link href="#box">
                    <li className="hover:underline">Menu</li>
                </Link>
            </ul>
        </nav>
    </div>
    
    )
}