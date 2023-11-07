

import style from "./creative.module.css"
import {useTranslation} from "react-i18next"


export const Creative = () => {
    let [t, i18n] = useTranslation("global");


  return (
    <>
        <div className={style.creativeContainer}>
            <div className={style.creative}>
                <div className={style.title}>
                    <h2>{t("creative.title")}</h2>
                </div>  
                <div className={style.cards}>
                    <div className={style.web}>
                        <div className={style.imgContainer}>
                            <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" />
                        </div>
                        <div className={style.description}>
                            <h3>{t("creative.subTitle1")}</h3>
                            <p>{t("creative.sub1")}</p>
                        </div>
                    </div>
                    <div className={style.web}>
                        <div className={style.imgContainer}>
                            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                        </div>
                        <div className={style.description}>
                            <h3>{t("creative.subTitle2")}</h3>
                            <p>{t("creative.sub2")}</p>
                        </div>
                    </div>
                    <div className={style.web}>
                        <div className={style.imgContainer}>
                            <img src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" />
                        </div>
                        <div className={style.description}>
                            <h3>{t("creative.subTitle3")}</h3>
                            <p>{t("creative.sub3")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
