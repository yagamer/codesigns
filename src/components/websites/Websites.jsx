

import { Title } from "../titles/Title"
import style from "./websites.module.css"
import {useTranslation} from "react-i18next"



export const Websites = () => {
  let [t, i18n] = useTranslation("global");


  return (
    <>
        <div className={style.websitesContainer}>
            <img src={`${process.env.PUBLIC_URL}/images/website.gif`} />
            <div className={style.titleContainer}>
                <h2 className={style.title}>{t("websites.title")}</h2>
                <h2 className={style.title}>{t("websites.title2")}</h2>
                <h2 className={style.title}>{t("websites.title3")}</h2>
            </div>
        </div>
        <Title title={t("title.contact")}/>
    </>
  )
}
