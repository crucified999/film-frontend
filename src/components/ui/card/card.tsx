import { FC } from "react";
import { TCardUIProps } from "./types";
import styles from './card.module.css';

export const CardUI: FC<TCardUIProps> = ({ title, image }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={title} />
      <p className={styles.title}>{title}</p>
    </div>
  );
};
