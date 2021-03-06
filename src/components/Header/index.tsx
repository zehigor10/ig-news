import { useRouter } from 'next/router';
import { SingInButton } from '../SignInButton';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header (){ 

    const { asPath } = useRouter() 

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                    <a>Home</a>
                    </ActiveLink>

                    <ActiveLink activeClassName={styles.active} href="/posts">
                    <a>Post</a>
                    </ActiveLink>
                </nav>
                <SingInButton />
            </div>
        </header>
    );
}