import Link from "next/link"

// components
import Nav from "./Nav"
import { Button } from "./ui/button"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">

            <div className="container mx-auto flex items-center justify-between">
                {/* {logo goes here} */}

                <Link href="/">
                    <h1 className="text-4xl font-semibold">Raheel<span className="text-accent">.</span></h1>
                </Link>


                {/* {desktop Nav} */}
                <div className="hidden xl:flex items-center gap-8">


                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>

                </div>

                {/* {mobile navbar} */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>


        </header>
    )
}

export default Header