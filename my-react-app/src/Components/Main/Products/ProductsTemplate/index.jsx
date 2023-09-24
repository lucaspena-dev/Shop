import styles from '/src/Components/Main/Products/styles.module.scss'

export const ProductsTemplate = () => {
    return (
        <>
            <li className={styles.product}>
                <img src="#" />
                <p>Item 1</p>
                <small>Preço</small>
                <button>Adicionar ao carrinho</button>
            </li>
        </>
    )
}