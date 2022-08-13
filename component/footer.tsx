import type { NextPage } from 'next';
import Link from 'next/link';
import scss from '../styles/footer.module.scss'

const Footer: NextPage = (props) => {
  return (
    <section className={scss.footer}>
      <div>
        <div> 
          <h1>
            Contact Us
          </h1>
        </div>
      </div>
      <div>
          <h1>
            <Link href={"https://github.com/qizongliang"}> 
              @qizongliang: https://github.com/qizongliang
            </Link>
          </h1>
          <h1>
            <Link href={"https://zikunw.github.io"}> 
              @zikunw: https://zikunw.github.io
            </Link>
          </h1>
          <h1>
            <Link href={"https://sciencepotato.github.io/personal-website/"}> 
              @SciencePotato: https://github.com/SciencePotato
            </Link>
          </h1>
          <h1>
            <Link href={"https://github.com/YuZW42"}> 
              @YuZW424: https://github.com/YuZW424
            </Link>
          </h1>
      </div>
    </section>
  )
}

export default Footer
