import { Typography } from '@loft/copan-components';
import React, { FC, ReactElement } from 'react';

export type PostData = {
  id: string;
  date: string;
  title: string;
  contentHtml: string;
};

export type PostProps = {
  post: PostData;
};

export const Post: FC<PostProps> = ({ post }: PostProps): ReactElement => {
  return (
    <>
      <Typography variant="h4">{post.title}</Typography>
      <Typography variant="subtitle">{post.date}</Typography>
      <Typography>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </Typography>
    </>
  );
};
