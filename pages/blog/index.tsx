import Layout from "../../components/layout"
import { GetStaticProps } from "next";
import Head from "next/head";
import { getSortedPostsData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css'
import { PostData } from '../../lib/types'
import Link from "next/link";
import Date from "../../components/date";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function BlogHome({allPostsData}: {allPostsData: PostData[]}) {
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
                            <Link href={`/blog/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}