
 
import {Link, NavLink, useNavigate} from "react-router-dom"
import style from "./nav.module.css";
import {useTranslation} from "react-i18next"
import {getAuth, signOut} from "firebase/auth"
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../redux/features/authSlide";
import { useEffect, useState } from "react";
import "./active.css"
 



export const Nav = () => {

    let [windowWidth, setWindowWidth] = useState(window.outerWidth);
    let [subMenu , setSubMenu] = useState(false);
    let [t, i18n] = useTranslation("global");
    let [state, setState] = useState(false);
    let [flag, setFlag] = useState(true);
    let [switchBtn, setSwitchBtn] = useState(true);

    let {user} = useSelector((state)=> state.auth)
    let dispatch = useDispatch();
    let navigate = useNavigate();

 
    function logOut(){

        let auth = getAuth();
        signOut(auth).then(() => {
            dispatch(authAction.logout());
            navigate("/")
          }).catch((error) => {
             console.log(error);
          });
    }
    
    function changeLanguage() { 
       
        setFlag(!flag);
        setState(false)

         
    }
    //lisen to @query
    useEffect(()=> { 
       
        if(windowWidth > 1251 ) { 
            setSubMenu(false);
        }
    }, [windowWidth])
    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.outerWidth);
        };
    
        // Agregar un event listener para manejar el cambio de tamaño de la ventana
        window.addEventListener('resize', handleResize);
    
        // Limpieza del event listener cuando el componente se desmonta
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    function switchLanguage(){ 
        setSwitchBtn(!switchBtn);
        setFlag(!flag);
        setState(false)
        if(flag === true) { 
            i18n.changeLanguage("en")
        } else { 
            i18n.changeLanguage("es")
        }
    }
 
    //manage scroll 
    useEffect(() => {
         if(subMenu) { 
            document.body.style.overflow = 'hidden';
         } else { 
            document.body.style.overflow = 'visible';
         }
      }, [subMenu]);
  return (
    <>
        <header>
            <nav className={style.nav}>
                <div className={style.logoContainer}>
                    <Link to="/" className={style.logo}>
                        <img   src={`${process.env.PUBLIC_URL}/images/logo.svg`} />
                        <p>CODesigns</p>
                    </Link>
                </div>
                <div className={style.menu}>
                    <NavLink to="/" className={style.link}>
                        <i className="fa-solid fa-house"></i>
                        <p>{t("nav.home")}</p>
                    </NavLink>
                
                    <NavLink to="/blog" className={style.link}>
                        <i className="fa-solid fa-blog"></i>
                        <p>Blog</p>
                    </NavLink>
                    <NavLink to="/courses" className={style.link}>
                        <i className="fa-solid fa-landmark"></i>
                        <p>{t("nav.courses")}</p>
                    </NavLink>
                    <NavLink to="/projects" className={style.link}>
                        <i className="fa-solid fa-diagram-project"></i>
                        <p>{t("nav.portfolio")}</p>
                    </NavLink>  
                    <NavLink to="/contact" className={style.link}>
                        <i className="fa-solid fa-user"></i>
                        <p>{t("nav.contact")}</p>
                    </NavLink>  
                </div>  
                {/* submenu hamMenu */}
                <div style={{height: subMenu ? "100vh" : "0"}} className={style.subMenu}>
                    <div style={{visibility: subMenu ? "visible" : "hidden", opacity: subMenu ? "1" : "0"}} className={style.subMenuIcons}>
                        <Link to="/" className={style.homeNav} onClick={(e)=> setSubMenu(!subMenu)}>
                                <i className="fa-solid fa-house"></i>
                                <p>{t("nav.home")}</p>
                        </Link>
                        <Link to="/blog" className={style.homeNav} onClick={(e)=> setSubMenu(!subMenu)}>
                            <i className="fa-solid fa-blog"></i>
                            <p>Blog</p>
                        </Link>
                        <Link to="/courses" className={style.homeNav} onClick={(e)=> setSubMenu(!subMenu)}>
                            <i className="fa-solid fa-landmark"></i>
                            <p>{t("nav.courses")}</p>
                        </Link>
                        <Link to="/projects" className={style.homeNav} onClick={(e)=> setSubMenu(!subMenu)}>
                            <i className="fa-solid fa-diagram-project"></i>
                            <p>{t("nav.portfolio")}</p>
                        </Link>
                        <Link to="/contact" className={style.homeNav} onClick={(e)=> setSubMenu(!subMenu)}>
                            <i className="fa-solid fa-user"></i>
                            <p>{t("nav.contact")}</p>
                        </Link> 
                    </div>
                    <div className={style.languageSubmenu} style={{visibility: subMenu ? "visible" : "hidden", opacity: subMenu ? "1" : "0"}} >
                        <div>
                            <p>Language</p>
                            <div className={style.switchBtn}>
                                <p>ES</p>
                                <div style={{justifyContent: switchBtn ? "start" : "end" }} className={style.switch} onClick={switchLanguage}>
                                    <div  className={style.circle}></div>
                                </div>    
                                <p>EN</p>    
                            </div>
                            <div  className={style.socialSub}>
                                <div className={style.navSocial}>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.socialContainer}>
                    <div  className={style.languageContainer}>
                  
                         <div  onClick={(e)=> setState(!state)}  className={style.desIcon}>
                            {
                                flag ? (
                                    <img className={style.defaultIcon} src={`${process.env.PUBLIC_URL}/images/spainflag.png`} />

                                        ) : (
                                    <img className={style.defaultIcon} src={`${process.env.PUBLIC_URL}/images/usaflag.png`} />
                                )
                            }
                            {
                                flag ? (
                                    <p>ES</p>

                                ) : (
                                    <p>EN</p>

                                )
                            }
                            <i style={{transform: state ? "rotate(180deg)" : "rotate(0deg)"}} id={style.arrow} className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div  style={{height: state ? "50px" : "0", visibility: state ? "visible" : "hidden"}} className={style.selectLanguage}>
                            <div >
                                <div onClick={changeLanguage} className={style.iconsContainer}>
                                    {
                                        flag ? (
                                            <div className={style.subContainer} onClick={(e)=> i18n.changeLanguage("en")}>
                                                <img className={style.defaultIcon} src={`${process.env.PUBLIC_URL}/images/usaflag.png`} />
                                                <p>EN</p>
                                            </div>

                                        ) : (
                                            <div className={style.subContainer} onClick={(e)=> i18n.changeLanguage("es")}>
                                                <img className={style.defaultIcon} src={`${process.env.PUBLIC_URL}/images/spainflag.png`} />
                                                <p>ES</p>
                                            </div>
                                        )
                                    }
                                </div>
                 
                            </div>
                        </div>
                    </div>                                                         
                    <div className={style.social}>
                    <div className={style.navSocial}>
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
                    </div>
                    <div className={style.hamMenu}>
                        <div className={style.hamMenuIcon} onClick={(e)=> setSubMenu(!subMenu)}>
                            <i className="fa-solid fa-bars"></i>       
                        </div>
                    </div>
                </div>
            </nav>
            <div className={style.subNav}>
                <div className={style.logoContainer}>
                    <Link to="/" className={style.logo}>
                        <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} />
                        <p>CODesign</p>
                    </Link>
                </div>
                <div className={style.codeTitle}>
                    <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                </div>
                <div onClick={(e)=> setSubMenu(!subMenu)}>
                    <i id={style.subMenuHam} className="fa-solid fa-bars"></i>       
                </div>
            </div>
        </header>
 
    </>
  )
}
