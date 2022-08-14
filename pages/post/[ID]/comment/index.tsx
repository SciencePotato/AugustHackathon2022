import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import scss from '../../../../styles/comment.module.scss';
import Footer from '../../../../component/footer';
import Nav from '../../../../component/navbar';
import Link from 'next/link';

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

const fakeData: postData[] =  [
  {
    id: 1,
    title: "This is the first article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022-7-30 6:00PM",
    tags: ["programming", "beginner-friendly", "cool project"],
  },
  {
    id: 2,
    title: "This is the second article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022-7-30 6:00PM",
    tags: ["programming", "beginner-friendly", "cool project"],
  },
  {
    id: 3,
    title: "This is the third article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022-7-30 6:00PM",
    tags: ["programming", "beginner-friendly", "cool project"],
  },
  {
    id: 4,
    title: "This is the fourth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022-7-30 6:00PM",
    tags: ["programming", "beginner-friendly", "cool project"],
  },
  {
    id: 5,
    title: "This is the fifth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022-7-30 6:00PM",
    tags: ["programming", "beginner-friendly", "cool project"],
  },
  {
    id: 6,
    title: "This is the fifth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022-7-30 6:00PM",
    tags: ["programming", "beginner-friendly", "cool project"],
  },
  {
    id: 7,
    title: "This is the fifth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022-7-30 6:00PM",
    tags: ["programming", "beginner-friendly", "cool project"],
  },
  {
    id: 8,
    title: "This is the fifth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022-7-30 6:00PM",
    tags: ["programming", "beginner-friendly", "cool project"],
  },
  {
    id: 9,
    title: "This is the fifth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022-7-30 6:00PM",
    tags: ["programming", "beginner-friendly", "cool project"],
  },
  {
    id: 10,
    title: "This is the fifth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022-7-30 6:00PM",
    tags: ["programming", "beginner-friendly", "cool project"],
  },
  {
    id: 11,
    title: "This is the fifth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022-7-30 6:00PM",
    tags: ["programming", "beginner-friendly", "cool project"],
  },
  {
    id: 12,
    title: "This is the fifth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022-7-30 6:00PM",
    tags: ["programming", "beginner-friendly", "cool project"],
  },
];

const Comment: NextPage = () => {
  const router = useRouter();
  let id;
  const [data, setData] = useState(fakeData[0]);
  useEffect(()=>{
      if(!router.isReady) return;
      id = router.query;
      setData(fakeData[parseInt(id.ID!.toString()) - 1]);
  }, [router.isReady]);

  return (
    <>
      <Nav num={1}></Nav>
      <section className={scss.comment}>
        <section>
          <Link href={"/post/ID"} as={`/post/${data.id}`}> 
            <button>
              Back
            </button>
          </Link>
          <section>
            <section>
              <h2> Answer the question: </h2>
              <h1> {data.title} </h1>
              <p> {data.content} </p>
            </section>
            <section>
              <h2> Your Answer: </h2>
              <textarea name="" id="" cols={30} rows={10}></textarea>
            </section>
          </section>
          <Link href={"/post/ID"} as={`/post/${data.id}`}> 
            <button>
              Submit
            </button>
          </Link>
        </section>
      </section>

      <Footer></Footer>
    </>
  )
}

export default Comment
          