import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from 'next/link';
import Nav from '../../../component/navbar';
import scss from '../../../styles/post.module.scss'

const fakeData =  [
    {
      id: 1,
      title: "a",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!"
    },
    {
      id: 2,
      title: "b",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!"
    },
    {
      id: 3,
      title: "c",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!"
    },
    {
      id: 4,
      title: "d",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!"
    },
    {
      id: 5,
      title: "e",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo, commodi tempora quam eveniet nihil. Ad commodi, eum deleniti, reiciendis at dolorem et earum blanditiis incidunt nihil impedit iure ea!"
    },
];

const Post: NextPage = () => {
    
    const router = useRouter();
    const id = router.query;
    const idNum = parseInt(id.ID!.toString());
    
    return (
        <> 
            <Nav num={1}></Nav>
            <h1>
                {
                    id.ID != null && 
                    (<h2> {fakeData[idNum - 1].title} </h2>)
                }
            </h1>
        </>
    );
}

export default Post;