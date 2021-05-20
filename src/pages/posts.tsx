import axios from 'axios';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Layout } from '../components';
import { PostData } from '../components/Post/Post';
import utilStyles from '../styles/utils.module.scss';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData: any[] = (await axios.get('/api/posts/list')).data;
  return {
    props: {
      allPostsData,
    },
  };
};

type PostPageProps = {
  allPostsData: PostData[];
};

const PostPage = ({ allPostsData }: PostPageProps) => {
  const pageTitle = 'Blog';

  return (
    <Layout withHeader={true} withFooter={true}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{pageTitle}</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default PostPage;
