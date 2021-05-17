import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export default function postsIdshandler(req: NextApiRequest, res: NextApiResponse) {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  const response = fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });

  res.status(200).json(response);
}
