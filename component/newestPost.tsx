import type { NextPage } from 'next';
import Link from 'next/link';
import scss from '../styles/newestPost.module.scss';
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

const NewestPost: NextPage<Props> = ({ data }) => {
  return (
    <div className={scss.newestPost}>
      <h1>Newest Questions</h1>
      <div>
      {data.map(post => 
          (<PostCard post={post} key={post.id}/>)
        )}
      </div>
    </div>
  )
};

export default NewestPost;