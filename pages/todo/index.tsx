import Layout from "../../components/layout"
import { GetServerSideProps } from "next";
import Head from "next/head";
import { getSortedTodoListData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css'
import { TodoListData } from '../../lib/types'
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async () => {
  const toListData = await getSortedTodoListData().then((result) => result);
  return {
    props: {
        toListData: toListData.data
    },
  };
}

export default function TodoListHome({toListData}: {toListData: TodoListData[]}) {
    return (
        <Layout>
            <Head>
                <title>Todo List</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Todo List</h2>
                <ul className={utilStyles.list}>
                    {toListData.map(({ id, title, completed }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/todo/${id}`}>{title}</Link>
                            <br />
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}