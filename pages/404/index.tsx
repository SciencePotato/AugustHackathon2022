import { NextPage, NextPageContext} from 'next';

import Link from 'next/link';
import scss from './../../styles/404.module.scss';

function Error() {
    return (<> 
    <p className={scss.errorOne}>
       <br></br> 404
    </p>
    <p className={scss.errorZero}>
    An error has occured.
       <br></br>Try again.
    </p>
    
    <p className={scss.errorThree}>
            <Link href={"/home"}> 
                <button className={scss.button}>
                    Back to the Home Page :&#40;
                </button>
            </Link>
    </p>
        
    </>       
    );
}
export default Error

