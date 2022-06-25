import Link from 'next/link'
import Footer from '../components/Footer'

export default function Custom404() {
    return (
        <main
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
        <h1>404 - That page does not seem to exist...</h1>
        <iframe
          src="https://giphy.com/embed/l2JehQ2GitHGdVG9y"
          width="480"
          height="362"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <Link href="/">
          <button> Go home</button>
        </Link>
        <Footer />
      </main>
    )
  }