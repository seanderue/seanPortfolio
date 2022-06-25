import Link from "next/link"

//Top navbar
export default function Navbar() {
    const user = null
    const username = null

    return (
        <nav className="navbar">
            <ul>
                <li data-text="SEANDERUE.DEV" className="logo">
                    <Link  href="/"> SEANDERUE.DEV </Link>
                </li>
            </ul>
        </nav>
    )
}