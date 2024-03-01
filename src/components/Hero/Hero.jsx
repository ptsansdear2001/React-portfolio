import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt';

function Hero() {
    return (
        <div className={styles.hero_wrapper}>
            <div className={styles.container}>
                <div className={styles.hero_con}>
                    <div className={styles.hero_info}>
                        <p className={styles.text_1}> Hi, it's me</p>
                        <h3 className={styles.text_2}>Pattarasorn Sae Law</h3>
                        <p className={styles.text_3}>
                            <span styles={{ marginRight: '10px' }}>I'm a </span>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Software tester',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Web Developer',
                                    1000,

                                ]}

                                speed={50}
                                repeat={Infinity}
                            />

                        </p>
                        <p className={styles.text_4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, culpa consequuntur.
                            <br />Fuga corrupti, fugiat quae quo ipsa nesciunt consectetur perferendis, eos, <br />eveniet quia commodi qui animi assumenda?
                            Molestias, reiciendis illum.</p>
                        <ul className={styles.hero_social}>
                            <li><a href="#"><FaGithub /></a></li>
                            <li><a href="#"><FaLinkedinIn /></a></li>
                            <li><a href="#"><FaFacebookF /></a></li>
                        </ul>
                    </div>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}><div className={styles.hero_img}></div>
                    </Tilt>
                </div>
            </div>
        </div>
    )
}

export default Hero