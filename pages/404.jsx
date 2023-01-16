import Layout from '../components/layout'
import Head from 'next/head';

export default function Custom404() {
    return (
        <Layout todo>
            <Head>
                <title>Page not found</title>
            </Head>
            <h1>Page not found!!!</h1>
        </Layout>
    )
}