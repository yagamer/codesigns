
import { Link } from "react-router-dom"
import style from "./footer.module.css"
import {useTranslation} from "react-i18next"
 
export const Footer = () => {
  let [t, i18n] = useTranslation("global");
 
 
  return (
    <>
        <div className={style.container}>
          <div className={style.img}>

            <div className={style.thankyou}>
              <div>
                <h1 className={style.grats}>{t("thanks.title")}</h1>
                <div className={style.paypalContainer}>
                  <h2>{t("thanks.subtitle")}</h2>
                  <div className={style.donate}>
                    <a className={style.paypal} href="https://www.paypal.com/donate/?hosted_button_id=WZEQVENBM48RL" target="_blank" >
                      <img className={style.paypalImg} src={`${process.env.PUBLIC_URL}/images/donar.png`} />
                    </a>   

                  </div>
                </div>
              
              </div>


            </div>

          </div>
          <div className={style.footer}>
            <div className={style.social}>
              <Link className={style.twitter}  to={`https://twitter.com/tupaginaenlinea`} target="_blank" >
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link className={style.linkedin}  to={`https://www.linkedin.com/in/abraham-jaimes-b1ba7ab4/`} target="_blank" >
                  <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link className={style.github}  to={`https://github.com/yagamer`} target="_blank" >
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
            <div className={style.copyright}>
              <div>
                <p>Copyright © 2023 All Rights Reserved by <strong>Abraham Luna</strong></p>
                <p className={style.email}><i className="fa-regular fa-paper-plane"></i>tupaginaenlinea@gmail.com</p>
              </div>
            </div>
            <div className={style.submenu}>
              <Link to="/">{t("nav.home")}</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/courses">{t("nav.courses")}</Link>
              <Link to="/projects">{t("nav.portfolio")}</Link>
              <Link to="/contact">{t("nav.contact")}</Link>
            </div>
          </div>
        </div>
    </>
  )
}
