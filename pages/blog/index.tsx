import Layout from "@/components/layout"
import { GetStaticProps } from "next";
import Head from "next/head";
import { getSortedPostsData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css'

type PostDataObject = {
    date: string
    title: string
    id: string
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function BlogHome({allPostsData}: {allPostsData: PostDataObject[]}) {
    return (
        <Layout>
            <Head>
                <title>Blog</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}