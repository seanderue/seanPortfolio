import Link from "next/link"

//Top navbar
export default function Navbar() {
    const user = null
    const username = null

    return (
        <nav className="navbar">
                <ul>
                <li>
                    <Link href="/">
                    SeanDeRue.dev
                    </Link>
                </li>
            </ul>
        </nav>
    )
}