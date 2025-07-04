import { FC, useEffect, useRef } from "react";
import { TCardFullUIProps } from "./types";
import star from '../../../assets/images/star.svg'
import circle from '../../../assets/images/circle.svg'
import styles from './card-full.module.css'

export const CardFullUI: FC<TCardFullUIProps> = ({ rating, author, genre, title, description, image }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        containerRef.current!.style.backgroundImage = ` linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%),
                                                        url('${image}')`;
    }, []);

    return (
        <div className={styles.container} ref={containerRef}>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <img src={star} aria-hidden="true"/>
                    <span>{rating}</span>
                </li>
                <li className={styles.listItem}>
                    <span>{author}</span>
                </li>
                <li className={styles.listItem}>
                    <img src={circle} aria-hidden="true"/>
                    <span>{genre}</span>
                </li>
            </ul>
            <div className={styles.text}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
            </div>
            <button className={styles.button}>Купить билет</button>
        </div>
    );
}