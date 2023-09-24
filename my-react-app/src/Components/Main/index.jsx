import { Products } from './Products'
import styles from '/src/Components/Main/styles.module.scss'

export const Main = () => {
    return (
        <>
            <main className={styles.main__container}>
               <Products/>
            </main>
        </>
    )
}