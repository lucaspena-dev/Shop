import { ProductsTemplate } from './ProductsTemplate'
import styles from '/src/Components/Main/Products/styles.module.scss'

export const Products = () => {
    return (
        <>
            <main className={styles.products__main}>
                <h2>Produtos em destaque</h2>
                <div className={styles.products__container}>
                    <ul className={styles.products__list}>
                        {/* Map pra renderizar a lista */}
                        {/* Os produtos vão ser filtrados por preço crescente e decrescente, ordem alfabeticae invertida, e por promoções */}
                        <ProductsTemplate />
                    </ul>
                </div>
            </main>
        </>
    )
}