import type { NextPage } from 'next';
import Link from 'next/link';
import scss from '../styles/trendingCard.module.scss';
import Image from 'next/image';

import image1 from  '../public/stock-photos/stock-photo-00001.jpg';
import image2 from  '../public/stock-photos/stock-photo-00002.jpg';
import image3 from  '../public/stock-photos/stock-photo-00003.jpg';
import image4 from  '../public/stock-photos/stock-photo-00004.jpg';
import image5 from  '../public/stock-photos/stock-photo-00005.jpg';
import image6 from  '../public/stock-photos/stock-photo-00006.jpg';

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
  post: postData;
}

const imgs = [image1, image2, image3, image4, image5, image6];

const TrendingCard: NextPage<Props> = ({ post }) => {
  return (
    <Link href={"/post/ID"} as={`/post/${post.id}`}>
      <div className={scss.trendingCard}>
        <div className={scss.img}>
         <Image src={imgs[post.id % 6]} className={scss.round} width={298} height={200}></Image>
        </div>
        <div className={scss.info}>
          <div className={scss.text}>
            <h2 className={scss.title}>{post.title}</h2>
            <p className={scss.description}>{post.content}</p>
          </div>
          <div className={scss.stats}>
            <svg className={scss.statsElement} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="20" width="20"><path d="M12 28.05h15.65v-3H12Zm0-6.5h24v-3H12Zm0-6.5h24v-3H12ZM4 44V7q0-1.15.9-2.075Q5.8 4 7 4h34q1.15 0 2.075.925Q44 5.85 44 7v26q0 1.15-.925 2.075Q42.15 36 41 36H12Zm3-7.25L10.75 33H41V7H7ZM7 7v29.75Z"/></svg>
            <p className={scss.statsElement}>{post.comments}</p>
            <svg className={scss.statsElement} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="20" width="20"><path d="m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1ZM24 38q5.05-4.65 8.325-7.975 3.275-3.325 5.2-5.825 1.925-2.5 2.7-4.45.775-1.95.775-3.9 0-3.3-2.1-5.425T33.5 8.3q-2.55 0-4.75 1.575T25.2 14.3h-2.45q-1.3-2.8-3.5-4.4-2.2-1.6-4.75-1.6-3.3 0-5.4 2.125Q7 12.55 7 15.85q0 1.95.775 3.925.775 1.975 2.7 4.5Q12.4 26.8 15.7 30.1 19 33.4 24 38Zm0-14.85Z"/></svg>
            <p className={scss.statsElement}>{post.likes}</p>
          </div>
        </div>
      </div>
    </Link>
  )
};

export default TrendingCard;