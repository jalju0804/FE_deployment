import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative bg-slate-200`}
  >
    <div className='absolute w-[50%] inset-0 gradient-01' />
    <div className={`${styles.interWidth} mx-auto flex justify-between gap-8`}>
      <img
        src='/search.svg'
        alt="search"
        className='w-[24px] h-[24px] object-contain'
      />
      {/* 검색 아이콘 추가 */}
      <div className='flex items-center flex-1 justify-center'> {/* 신청하기 버튼을 감싸는 부모 요소 */}
        <h2 className='font-extrabold text-[24px] leading-[30px] text-black'>
          우리야
        </h2>
      </div>
      <a href="https://www.google.com/" className='ml-auto bg-blue-500 text-white py-2 px-4 rounded-md'>
        신청하기
      </a>
      <img
        src='/menu.svg'
        alt='menu'
        className='w-[24px] h-[24px] object-contain'
      />
    </div>
  </motion.nav>
);

export default Navbar;
