import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import scss from '../../styles/Home.module.scss';
import Trending from '../../component/trending';
import Nav from '../../component/navbar';
import Footer from '../../component/footer';
import image from "../../public/zikunw.jpg";
import { useState } from 'react';
import NewestPost from "../../component/newestPost";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import {config} from './../../component/database/config';

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
    date: "2022 July 17th 16:00",
    tags: ["computer", "beginner-friendly", "college"],
  },
  {
    id: 2,
    title: "This is the second article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022 July 17th 16:00",
    tags: ["computer", "beginner-friendly", "college"],
  },
  {
    id: 3,
    title: "This is the third article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022 July 17th 16:00",
    tags: ["computer", "beginner-friendly", "college"],
  },
  {
    id: 4,
    title: "This is the fourth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022 July 17th 16:00",
    tags: ["computer", "beginner-friendly", "college"],
  },
  {
    id: 5,
    title: "This is the fifth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022 July 17th 16:00",
    tags: ["computer", "beginner-friendly", "college"],
  },
  {
    id: 6,
    title: "This is the fifth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022 July 17th 16:00",
    tags: ["computer", "beginner-friendly", "college"],
  },
  {
    id: 7,
    title: "This is the fifth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022 July 17th 16:00",
    tags: ["computer", "beginner-friendly", "college"],
  },
  {
    id: 8,
    title: "This is the fifth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022 July 17th 16:00",
    tags: ["computer", "beginner-friendly", "college"],
  },
  {
    id: 9,
    title: "This is the fifth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022 July 17th 16:00",
    tags: ["computer", "beginner-friendly", "college"],
  },
  {
    id: 10,
    title: "This is the fifth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022 July 17th 16:00",
    tags: ["computer", "beginner-friendly", "college"],
  },
  {
    id: 11,
    title: "This is the fifth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022 July 17th 16:00",
    tags: ["computer", "beginner-friendly", "college"],
  },
  {
    id: 12,
    title: "This is the fifth article",
    username: "John Dwen",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
    date: "2022 July 17th 16:00",
    tags: ["computer", "beginner-friendly", "college"],
  },
];

const Home: NextPage = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const getUser = ()=>{
    const app = initializeApp(config.firebaseConfig);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;

    console.log(user);
    // ...
    } else {
    // User is signed out
    // ...
    }
  });
  }
  useEffect(() => {
    getUser();
  }, [])
  return (
    <>
      <Head>
        <title> Homepage </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav num={1}></Nav>
      <section className={scss.home}>
          {
          loggedIn &&
          (
            <div>
              <Image src={image} className={scss.round} width={200} height={200}></Image>
              <h1>Hi, Zikun. Wanna ask a <span>question</span>?</h1>
            </div>
          )
        }
      
        <Trending data={fakeData.slice(1, 12)}/>
      </section>
      
      <Footer></Footer>

    </>
  )
}

export default Home
