import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css'
import { siteDetails, profileDetails } from '@/lib/content';

type Layout = {
    children: React.ReactNode,
    home?: Boolean
}

export default function Layout({children, home}: Layout) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{siteDetails.title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta 
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta 
                    property='og:image'
                    content={`https://og-image.vercel.app/${encodeURI(siteDetails.title,)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteDetails.title} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {
                    home ? (
                        <>
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={144}
                                width={144}
                                alt=""
                            />
                            <h1 className={utilStyles.heading2Xl}>{profileDetails.name}</h1>
                        </>
                    ) : (
                        <>
                            <Link href="/">
                                <Image
                                    priority
                                    src="/images/profile.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt=""
                                />
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/" className={utilStyles.colorInherit}>
                                    {profileDetails.name}
                                </Link>
                            </h2>
                        </>
                    )
                }
            </header>
            {children}
            {!home ? (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            ) : null}
        </div>
    )
}