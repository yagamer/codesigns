 
import { Contact } from "../components/contacto/Contact"
import { Creative } from "../components/creative/Creative"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { Websites } from "../components/websites/Websites"
import {useTranslation} from "react-i18next"

import style from "./contact.module.css"


export const ContactPage = () => {
  window.scrollTo(0,0);
  let [t, i18n] = useTranslation("global");
   

   
  return (
    <>
        <div className={style.container}>
            <Header title={t("title.contact")} img="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
            <Creative />
            <Websites />
            <Contact />
            <Footer />

        </div>
    </>
  )
}
