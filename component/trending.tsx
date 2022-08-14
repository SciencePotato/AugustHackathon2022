import type { NextPage } from 'next';
import Link from 'next/link';
import scss from '../styles/trending.module.scss'
import TrendingCard from './trendingCard';

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

const Trending: NextPage<Props> = (props) => {
  return (
    <div className={scss.trending}>
      <h1 className='trending-title'>Trending Now</h1>
      <div className='trending-card-container'>
        {props.data.map(post =>
            <TrendingCard post={post} />
          )}
      </div>
    </div>
  )
};

export default Trending;