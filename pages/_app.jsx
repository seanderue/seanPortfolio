import '../styles/globals.css'

import Footer from '../components/Footer'
// import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Toaster /> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
