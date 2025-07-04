import { FC } from "react";
import { TCardListUIProps } from "./types";
import { CardUI } from "../card";
import styles from './card-list.module.css';

export const CardListUI: FC<TCardListUIProps> = ({ cards }) => {
  return (
    <ul className={styles.list}>
      {cards.map((card) => (
        <li key={card.id}>
          <CardUI {...card} />
        </li>
      ))}
    </ul>
  );
}