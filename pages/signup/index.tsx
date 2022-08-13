import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import scss from '../../styles/SignUp.module.scss';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {config} from './../../component/database/config';

const SignUp: NextPage = () => {

  const signup = ()=>{
    const app = initializeApp(config.firebaseConfig);
    const qz_auth = getAuth(app);

    let btnSignUp = document.getElementById('btnSignUp');
    let TextEmail = document.getElementById('txtEmail') as HTMLInputElement;
    let TextPassword = document.getElementById('txtPassword') as HTMLInputElement;
    
    var email = TextEmail?.value;
    var password = TextPassword?.value;

    createUserWithEmailAndPassword(qz_auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("successful");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log("failed to", errorCode, errorMessage);
    });
  }

  return (
    <div>
      <Head>
        <title> Sign up</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={scss.SignUp}>
        <h1> Sign Up </h1>
        <div>
          <div>
            <div>
              <input type="text" placeholder='Email' id="txtEmail" />
              <input type="password" placeholder='Password' id="txtPassword"/>
            </div>
          </div>
          <div>
            <div>
              <div>
                {/*<Link href={"/home"}> */}
                  <button id="btnSignUp" onClick={signup}>
                    Sign Up
                  </button>
                {/*</Link>*/}
                <p>
                  <Link href={"/login"}> Have an account? Login now!</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignUp