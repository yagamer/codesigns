import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import style from "./tec.module.css"
import { useEffect } from "react"
import {useTranslation} from "react-i18next" 

export const Tecnologies = () => {
    let [t, i18n] = useTranslation("global");


    useEffect(()=> { 
        var splide = new Splide( '.splide', {
            type   : 'loop',
            padding: '5rem',
            rewind: false,
            perPage: 4,
            perMove: 1,
            padding: '20%',
            autoplay: true,
            arrows: false,
            pagination: false
          } );
          
          splide.mount();
   
   

    }, [])


  return (
    <>
        <div className={style.container }>
            <section className={`${style.splide} splide`} aria-label="Splide Basic HTML Example">
                <div className="splide__track">
                        <ul className="splide__list">
                            <li className={`${style.slide} splide__slide`}>
                                <img className={style.img} src="https://tupaginaenlinea.netlify.app/images/technology/html.svg" />
                            </li>
                            <li className={`${style.slide} splide__slide`}>
                                <img className={style.img} src="https://tupaginaenlinea.netlify.app/images/technology/css.svg" />
                            </li>
                            <li className={`${style.slide} splide__slide`}>
                                <img className={style.img} src="https://tupaginaenlinea.netlify.app/images/technology/js.svg" />
                            </li>
                            <li className={`${style.slide} splide__slide`}>
                                <img className={style.img} src="https://tupaginaenlinea.netlify.app/images/technology/react.svg" />
                            </li>
                            <li className={`${style.slide} splide__slide`}>
                                <img className={style.img} src="https://tupaginaenlinea.netlify.app/images/technology/node.svg" />
                            </li>
                            <li className={`${style.slide} splide__slide`}>
                                <img className={style.img} src="https://tupaginaenlinea.netlify.app/images/technology/sql.svg" />
                            </li>
                            <li className={`${style.slide} splide__slide`}>
                                <img className={style.img} src="https://services.assemblysoft.com/content/images/size/w2000/2020/11/1200px-.NET_Logo.svg.png" />
                            </li>
                            <li className={`${style.slide} splide__slide`}>
                                <img className={style.img} src={`${process.env.PUBLIC_URL}/images/git.png`} />
                            </li>
                            <li className={`${style.slide} splide__slide`}>
                                <img className={style.img} src={`${process.env.PUBLIC_URL}/images/csharp.png`} />
                            </li>
                        </ul>
                </div>
            </section>
            <div className={style.slideTitle}>
                <div>
                    <h2 className={style.title}>{t("languages.title")}</h2>
                    <p className={style.subtitle}>{t("languages.subtitle")}</p>
                    <p className={style.bill}>Bill Gates</p>
                </div>
            </div>
        </div>
    </>
  )
}
