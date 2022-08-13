import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {config} from './../../component/database/config';


const app = initializeApp(config.firebaseConfig);


const qz_auth = getAuth(app);

export default qz_auth;