import React from 'react'
import Link from 'next/link'
import Footer from '../../components/Footer'

export default function WIP() {
  return (
    <main
    style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    }}>
    <h1>Working on it!</h1>
    <iframe
        src="https://giphy.com/embed/l2Je8e1UVcWyBURGM"
        width="300"
        height="300"
        frameBorder="0"
        allowFullScreen
        ></iframe>
    <p
        style={{
            width:'40%',
            minWidth: '300px'
            }}
        >
            I'm still in the process of building a page for this project. To follow along with this project, follow my LinkedIn!</p>
    <Link href="/">
        <button>Go home</button>
    </Link>
    <Footer />
    </main>
    )
}
