import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Layout } from '../../components/Layout';
import { Post, PostData } from '../../components/Post/Post';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = (await axios.get(`/api/post/${params.id.toString()}`)).data;
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await axios.get('/api/posts/ids')).data;
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
