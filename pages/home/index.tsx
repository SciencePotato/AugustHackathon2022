import type { NextPage } from 'next';
import Head from 'next/head';
import scss from '../../styles/Home.module.scss';
import Footer from '../../component/footer';
import Nav from '../../component/navbar';
import Trending from '../../component/trending';
import Image from 'next/image';
import image from "../../public/zikunw.jpg";
import { useState } from 'react';
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import {config} from './../../component/database/config';

const fakeData =  [
  {
    id: 1,
    title: "This is the first article",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
  },
  {
    id: 2,
    title: "This is the second article",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
  },
  {
    id: 3,
    title: "This is the third article",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
  },
  {
    id: 4,
    title: "This is the fourth article",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
  },
  {
    id: 5,
    title: "This is the fifth article",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
  },
  {
    id: 6,
    title: "This is the fifth article",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
  },
  {
    id: 7,
    title: "This is the fifth article",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
  },
  {
    id: 8,
    title: "This is the fifth article",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
  },
  {
    id: 9,
    title: "This is the fifth article",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
  },
  {
    id: 10,
    title: "This is the fifth article",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
  },
  {
    id: 11,
    title: "This is the fifth article",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
  },
  {
    id: 12,
    title: "This is the fifth article",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!",
    comments: 10,
    likes: 59,
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
        <title>Create Next App</title>
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
        <Trending data={fakeData}/>
      </section>

      <Footer></Footer>
    </>
  )
}

export default Home
