import Layout from "@/components/layout";
import Head from "next/head";
import utilStyles from '../styles/utils.module.css'

export default function MyProfile () {
    return (
        <Layout>
            <Head>
                <title>My Profile</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    I have done my degree in KLN College of Engineering, Madurai
                </p>
            </section>
        </Layout>
    )
}