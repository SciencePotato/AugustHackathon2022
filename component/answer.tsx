import type { NextPage } from 'next';
import Link from 'next/link';
import scss from '../styles/answer.module.scss';
import Image from 'next/image';
import image from "../public/zikunw.jpg";

type userAnswer = {
  username: string,
  likes: number,
  date: string,
  content: string
}

type Props = {
  answer: userAnswer
}

const Answer: NextPage<Props> = ({answer}) => {


  return(
    <div className={scss.answer}>
      <div className={scss.userCard}>
        <div className={scss.img}>
          <Image src={image} className={scss.userImage} width={90} height={90}></Image>
        </div>
        <p className={scss.username}>{answer.username}</p>
        <div className={scss.likeContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M35.8 42H13.6V16.4L27.5 2l1.95 1.55q.3.25.45.7.15.45.15 1.1v.5L27.8 16.4h14.95q1.2 0 2.1.9.9.9.9 2.1v4.1q0 .35.075.725t-.075.725l-6.3 14.5q-.45 1.05-1.475 1.8Q36.95 42 35.8 42Zm-19.2-3h19.85l6.3-14.95V19.4H24.1l2.65-12.45-10.15 10.7Zm0-21.35V39Zm-3-1.25v3H6.95V39h6.65v3H3.95V16.4Z"/></svg>
          <p className={scss.likes}>{answer.likes}</p>
        </div>
        
      </div>
      <div className={scss.content}>
        <p className={scss.date}>Answered at {answer.date}</p>
        <p className={scss.text}>{answer.content}</p>
      </div>
    </div>
  )
}

export default Answer;