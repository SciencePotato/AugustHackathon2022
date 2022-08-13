import { NextPage, NextPageContext} from 'next';

import Link from 'next/link';
import scss from './../../styles/404.module.scss';

interface Error404Props{
    statusCode?: number 
}

const Error: NextPage<Error404Props> =({statusCode}) => {
    return (
        <p>
            {statusCode ? 'An error ${statusCode} occurred'
            : "An error occurred"}

        
        </p>
        
    );
}

Error.getInitialProps = ({res,err}: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {statusCode}
}
<div>
    <Link href={"/home"}> 
        <button>
            Back to the Home Page
        </button>
    </Link>
</div>
export default Error