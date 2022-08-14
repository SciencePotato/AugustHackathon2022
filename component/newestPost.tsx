import type { NextPage } from 'next';
import Link from 'next/link';
import scss from '../styles/postCard.module.scss';
import PostCard from './postCard';

interface postData {
  id: number,
  title: string,
  username: string,
  content: string,
  comments: number,
  likes: number,
  date: string,
  tags: string[],
}

interface Props {
  data: postData[];
}

const newestPost: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <h1>Newest Questions</h1>
      {data.map(post =>
          <PostCard post={post} />
        )}
    </div>
  )
}