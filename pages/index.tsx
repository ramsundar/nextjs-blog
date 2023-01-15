import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from '@/components/layout'
import utilStyles from '../styles/utils.module.css'
import { profileDetails } from '@/lib/content'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>
          {profileDetails.introduction}
        </p>
        <br />
        <p>
          {profileDetails.technologies.join(', ')}
        </p>
        <br />
        <p>
          I have built the following sample applications following {' '}
          <a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">Next.js tutorial</a>
        </p>
        <br />
        <div className={styles.grid}>
          <Link href="/blog">
            <h2 className={inter.className}>
              Blog <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Sample Blog with Static generation. HTML generated at build time and will be reused on each request
            </p>
          </Link>

          <Link
            href="/todo"
          >
            <h2 className={inter.className}>
              Todo <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Sample Todo application using Server-side Rendering. SSR or Dynamic Rendering. HTML is generated on each request
            </p>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
