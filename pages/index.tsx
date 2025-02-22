import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../component/navbar';
import Footer from '../component/footer';
import Trending from '../component/trending';
import scss from '../styles/Welcome.module.scss';

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

const Home: NextPage = () => {
  const flipTableText = "(╯°□°）╯︵ ┻━┻";

  return (
    <>
      <Head>
        <title> Hello! </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav num={1}></Nav>

      <section className={scss.Welcome}>
        <section>
          <div>
            <h1> Welcome to <span>Info</span>Share!</h1>
            <h2>Share your passion and love with the people around the world.</h2>
            <div>
              <button>
                <Link href={"/login"}>
                  Join Us
                </Link>
              </button>
              <button>
                <Link href={"/about"}>
                  About Us
                </Link>
              </button>
            </div>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" opacity="1" d="M0,192L6.2,202.7C12.3,213,25,235,37,218.7C49.2,203,62,149,74,149.3C86.2,149,98,203,111,234.7C123.1,267,135,277,148,282.7C160,288,172,288,185,282.7C196.9,277,209,267,222,245.3C233.8,224,246,192,258,165.3C270.8,139,283,117,295,96C307.7,75,320,53,332,69.3C344.6,85,357,139,369,176C381.5,213,394,235,406,218.7C418.5,203,431,149,443,106.7C455.4,64,468,32,480,42.7C492.3,53,505,107,517,154.7C529.2,203,542,245,554,272C566.2,299,578,309,591,288C603.1,267,615,213,628,170.7C640,128,652,96,665,117.3C676.9,139,689,213,702,245.3C713.8,277,726,267,738,224C750.8,181,763,107,775,90.7C787.7,75,800,117,812,154.7C824.6,192,837,224,849,213.3C861.5,203,874,149,886,149.3C898.5,149,911,203,923,234.7C935.4,267,948,277,960,266.7C972.3,256,985,224,997,176C1009.2,128,1022,64,1034,37.3C1046.2,11,1058,21,1071,58.7C1083.1,96,1095,160,1108,165.3C1120,171,1132,117,1145,117.3C1156.9,117,1169,171,1182,197.3C1193.8,224,1206,224,1218,240C1230.8,256,1243,288,1255,256C1267.7,224,1280,128,1292,85.3C1304.6,43,1317,53,1329,64C1341.5,75,1354,85,1366,101.3C1378.5,117,1391,139,1403,138.7C1415.4,139,1428,117,1434,106.7L1440,96L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path></svg>
            <div>
              <h1> {flipTableText} </h1>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" opacity="1" d="M0,192L6.2,202.7C12.3,213,25,235,37,218.7C49.2,203,62,149,74,149.3C86.2,149,98,203,111,234.7C123.1,267,135,277,148,282.7C160,288,172,288,185,282.7C196.9,277,209,267,222,245.3C233.8,224,246,192,258,165.3C270.8,139,283,117,295,96C307.7,75,320,53,332,69.3C344.6,85,357,139,369,176C381.5,213,394,235,406,218.7C418.5,203,431,149,443,106.7C455.4,64,468,32,480,42.7C492.3,53,505,107,517,154.7C529.2,203,542,245,554,272C566.2,299,578,309,591,288C603.1,267,615,213,628,170.7C640,128,652,96,665,117.3C676.9,139,689,213,702,245.3C713.8,277,726,267,738,224C750.8,181,763,107,775,90.7C787.7,75,800,117,812,154.7C824.6,192,837,224,849,213.3C861.5,203,874,149,886,149.3C898.5,149,911,203,923,234.7C935.4,267,948,277,960,266.7C972.3,256,985,224,997,176C1009.2,128,1022,64,1034,37.3C1046.2,11,1058,21,1071,58.7C1083.1,96,1095,160,1108,165.3C1120,171,1132,117,1145,117.3C1156.9,117,1169,171,1182,197.3C1193.8,224,1206,224,1218,240C1230.8,256,1243,288,1255,256C1267.7,224,1280,128,1292,85.3C1304.6,43,1317,53,1329,64C1341.5,75,1354,85,1366,101.3C1378.5,117,1391,139,1403,138.7C1415.4,139,1428,117,1434,106.7L1440,96L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>
          </div>
        </section>
      </section>

      <Trending data={fakeData}/>

      <Footer></Footer>
    </>
  )
}

export default Home
