import { NextPage, NextPageContext} from 'next';

import Link from 'next/link';
import scss from './../../styles/404.module.scss';

function Error() {
    return (<> 
    <p className={scss.error0}>
    An error has occured.
       <br></br>Try again.
    </p>
    <p className={scss.errorOne}>
       <br></br> 404
    </p>
    
        <p className={scss.error}>
            <Link href={"/home"}> 
                <button>
                    Back to the Home Page
                </button>
            </Link>
        </p>
    
        
    </>       
    );
}
export default Error

