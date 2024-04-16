import React from "react";

import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => { 
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Ryan</h1>
                <p className={styles.description}>
                    I'm a 3rd Year Undergrad studying Cybersecurity at Monash University. 
                </p>
                <a href="mailto:rpir0002@student.monash.edu" className={styles.contactBtn}>Contact Me!</a>
            </div>
            <img src ={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}; 


