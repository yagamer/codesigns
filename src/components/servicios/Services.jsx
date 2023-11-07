
import style from "./services.module.css"
import { useTranslation } from "react-i18next";




export const Services = () => {

  let [t, i18n] = useTranslation("global");

  return (
    <>
        <div className={style.container}>
             <div className={style.services}>
 
                <div className={style.desarrollo}>
                  <div>
                    <h2 className={style.title}>{t("services.webDevelopment")}</h2>
                    <p className={style.subtitle}>{t("services.webDevelopmentSubtitle")}</p>
                  </div>
                </div>
                <div className={style.img}>
                  <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                </div>
             </div> 
        </div>
        <div className={style.container}>
             <div className={style.services}>
                <div className={style.img}>
                  <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" />
                </div>
                <div className={style.desarrollo}>
                  <div>
                    <h2 className={style.title}>{t("services.designUI")}</h2>
                    <p className={style.subtitle}>{t("services.designUISubtitle")}</p>
                  </div>
                </div>
             </div> 
        </div>
    </>
  )
}
