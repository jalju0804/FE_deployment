'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="형 우리야!" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-black">우리야는 단체와 기업을 이어주는 서비스야<br/>우리야 가입하면 형들도 쉽게 후원자를 만날 수 있어<br/> 학교, 동호회, 동아리등 단체라면 누구든지 참여 가능해 <br/>만약 후원을 제공하고 싶은 기업이나 회사도 참여 가능해<br/>
     </span><br/> 
        <span className="font-extrabold text-indigo-500">이게 우리야 엄청나지?</span> 
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/iconmonstr-arrow-down-lined.svg"
        alt="arrow down"
        className="w-[30px] h-[40px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;