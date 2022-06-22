import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Loader from '../components/Loader'

export default function Home() {
  return (
    <div>
      <Loader show />
      <Link href={{
        pathname: '/[project]',
        query: { project: 'katie-order-form'}
      }}>
        <a>Katie Order Form</a>
      </Link>
    </div>
  )
}
