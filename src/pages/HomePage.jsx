 
import { useEffect, useState } from "react"
import { Contact } from "../components/contacto/Contact"
import { Footer } from "../components/footer/Footer"
import { Gallery } from "../components/gallery/Gallery"
import { Phone } from "../components/phone/Phone"
import { Services } from "../components/servicios/Services"
import { Tecnologies } from "../components/tecnologies/Tecnologies"
import { Title } from "../components/titles/Title"
 
 
import style from "./home.module.css"
import { useTranslation } from "react-i18next"
 

export const HomePage = () => {
  window.scrollTo(0,0);
  let [t, i18] = useTranslation("global");
 
  return (
    <>
      <div className={style.container}>
        <Gallery />
        <Phone />
        <Title title={t("title.ourServices")} />
        <Services />
        <Title title={t("title.tecnology")}  />
        <Tecnologies />
        <Title title={t("title.contact")} />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
