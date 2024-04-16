import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => { 
    return (
    <section className={styles.container} id ="about"> 
        <h2 className={styles.title}>About</h2> 
        <div className={styles.content}>
            <img 
            src={getImageUrl("about/aboutImage.png")} 
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
            /> 
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
                <h3>Undergrad Student</h3>
                <p>
                    I'm currently an undergrad student, studying a Bacherlor Degree of IT 
                    & majoring in Cyber-Security. 
                </p>
            </div>
            </li>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
                <h3>Lorem Ipsum</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nam interdum sodales cursus. Integer ligula magna, consequat eu tellus auctor, tincidunt congue diam. 
                </p>
            </div>
            </li>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Ui icon" />
            <div className={styles.aboutItemText}>
                <h3>Lorem Ipsum</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nam interdum sodales cursus. Integer ligula magna, consequat eu tellus auctor, tincidunt congue diam. 
                </p>
            </div>
            </li>
            </ul>
        </div>
        </section>
    )
} 