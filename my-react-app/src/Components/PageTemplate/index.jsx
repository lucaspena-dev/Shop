import { Footer } from "../Footer";
import { Header } from "../Header";

export const PageTemplat = ({ children }) => {
    return (
        <>
        <Header/>
            { children }
        <Footer/>
        </>
    )
}