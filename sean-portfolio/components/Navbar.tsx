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
                        <button>FEED</button>
                    </Link>
                </li>

                {/* user is signed in and has username*/}
                {username && (
                    <>
                    <li>
                        <Link href="/admin">
                            <button>Write Posts</button>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${username}`}>
                            <img src={user?.photoURL} />
                        </Link>
                    </li>
                    </>
                )}

                {/* user is not signed in OR has not username*/}
                {!username && (
                    <li>
                        <Link href="/enter">
                            <button className="btn-blue">Log in</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}