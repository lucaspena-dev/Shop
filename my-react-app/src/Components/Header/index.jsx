import styles from '/src/Components/Header/styles.module.scss'

export const Header = () => {

    return (
        <>
            <header className={styles.header__container}>
                <h1>Shop</h1>

                <nav className={styles.header__nav}>

                    <input type="search" name="search__bar" id="search__bar" />
                    
                    <small>Contato</small>
                    <small>Feedback</small>
                    <small>Carrinho</small>

                </nav>
            </header>
        </>
    )
}