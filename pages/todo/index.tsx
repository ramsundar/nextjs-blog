import Layout from "@/components/layout"
import Head from "next/head";
import utilStyles from '../../styles/utils.module.css'

export default function TodoListHome() {
    return (
        <Layout>
            <Head>
                <title>Todo List</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Todo List</h2>
            </section>
        </Layout>
    )
}