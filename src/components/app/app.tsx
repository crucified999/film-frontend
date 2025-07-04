import styles from './app.module.css'
import { AppHeader } from '../app-header/app-header'
import { CardFull } from '../card-full/card-full';
import { Card } from '../card/card';
import { CardList } from '../card-list/card-list';

const App = () => {
    return (
        <>
            <div className={styles.app}>
                <AppHeader />
                <CardFull />
                <CardList />
            </div>
        </>
    )
} 

export default App;