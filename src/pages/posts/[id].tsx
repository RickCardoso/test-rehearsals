import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Layout } from '../../components/Layout';
import { Post, PostData } from '../../components/Post/Post';
import { getAllPostIds, getPostData } from '../../lib/posts';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id.toString());
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

type PostPageProps = {
  postData: PostData;
};

const PostPage = ({ postData }: PostPageProps) => {
  return (
    <Layout withHeader>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Post post={postData} />
      <Link href="/posts">
        <a>← Back to posts</a>
      </Link>
    </Layout>
  );
};

export default PostPage;
