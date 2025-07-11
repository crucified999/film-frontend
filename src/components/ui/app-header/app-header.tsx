import { FC } from "react";
import { TAppHeaderUIProps } from "./types";
import styles from './app-header.module.css'
import image from '../../../assets/images/logo.png'

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ counter }) => {
    return (
        <div className={styles.header}>
            <Logo />
            <div className={styles.cartContainer}>
                <CartIcon />
                <span className={styles.counter}>{counter}</span>
            </div>
            
        </div>
    );
}

const Logo = () => {
    return (
        <img src={image} alt="Логотип Film!" />
    )
}

const CartIcon = () => {
    return (
        <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={styles.cart} d="M26.6667 8.49984H23.3333C23.3333 3.89984 19.6 0.166504 15 0.166504C10.4 0.166504 6.66667 3.89984 6.66667 8.49984H3.33333C1.5 8.49984 0.0166667 9.99984 0.0166667 11.8332L0 31.8332C0 33.6665 1.5 35.1665 3.33333 35.1665H26.6667C28.5 35.1665 30 33.6665 30 31.8332V11.8332C30 9.99984 28.5 8.49984 26.6667 8.49984ZM15 3.49984C17.7667 3.49984 20 5.73317 20 8.49984H10C10 5.73317 12.2333 3.49984 15 3.49984ZM15 20.1665C10.4 20.1665 6.66667 16.4332 6.66667 11.8332H10C10 14.5998 12.2333 16.8332 15 16.8332C17.7667 16.8332 20 14.5998 20 11.8332H23.3333C23.3333 16.4332 19.6 20.1665 15 20.1665Z"/>
        </svg>
    );
}