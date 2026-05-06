import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header className="pt-8 pb-2 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Sachindu<span className="text-green-400">.</span>
                </h1>
                </Link>


                {/* Desktop Nav */}
                <div className="hidden sm:flex items-center gap-8">
                    <Nav />
                    {/* <Link href="/contact">
                    <Button>Hire me</Button>
                    </Link> */}
                </div>

                {/* Mobile Nav  */}
                
                <div className="sm:hidden  ">
                    <MobileNav />
                </div>





            </div>
        </header>
    )
}

export default Header