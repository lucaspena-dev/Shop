import styles from '/src/Components/Footer/styles.module.scss'

export const Footer = () => {
    return (
        <>
        <footer className={styles.footer__container}>
            
            <h2>Contatos</h2>

            <figure className={styles.footer__figures}>
                <img src="#" alt="Whatsapp Icon"/>
                <img src="#" alt="Instagram Icon"/>
                <img src="#" alt="Discord icon" />
            </figure>

            <p>'Shop' originalmente não se tratava exatamente de uma loja em si como o proprio nome sujere. O projeto teria se desenvolvido no decorrer de poucos dias e estaria pronto para o consumo do publico adulto. Esta mensagem esta aqui para avisar que devorei o cu de quem ta lendo. Beijo Lucas S2.</p>
            
        </footer>
        </>
    )
}