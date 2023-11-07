import { useEffect, useState } from "react"
import style from "./gallery.module.css"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";




export const Gallery = () => {
 let [counter , setCounter] = useState(0);
 let [t, i18n] = useTranslation("global");
 let [clearComponent , setClearComponent] = useState(true);


useEffect(()=> { 

    const slider = document.querySelector(".slider");
    let sliderSection = document.querySelectorAll(".slide");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    

    const btnLeft = document.querySelector("#btn-left")
    const btnRight = document.querySelector("#btn-right")
    
    let isReadyRight = true;
    let isReadyLeft = true;
 
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    
    let interval = setInterval(() => {
        
        moveRight();
        
    }, 7000);
    
    
    let timeoutID;

    function moveRight() {
        
        if(isReadyRight && isReadyLeft) { 
            
       
                    let firstSlide = document.querySelectorAll(".slide")[0];
                    slider.style.marginLeft = "-200%";
                    slider.style.transition = "1s"
                    isReadyRight = false;
                    clearInterval(interval)                            
                    timeoutID = setTimeout(() => {
                        
                        slider.style.transition = "none"
                        slider.insertAdjacentElement("beforeend", firstSlide);
                        slider.style.marginLeft = "-100%";
                        isReadyRight = true;
                        interval = setInterval(() => {
                            moveRight();
                        }, 7000);
     
                    }, 1000);      
        } 
            
    }
    function moveLeft() { 
        if(isReadyLeft && isReadyRight) { 
            let sliderSection = document.querySelectorAll(".slide");
            let sliderSectionLast = sliderSection[sliderSection.length -1];
            slider.style.marginLeft = "0%";
            slider.style.transition = "1s"
            isReadyLeft = false;
            setTimeout(() => {
                slider.style.transition = "none"
                slider.insertAdjacentElement("afterbegin", sliderSectionLast);
                slider.style.marginLeft = "-100%";
                isReadyLeft = true;
            }, 1000);
        }
        
    }

    btnRight.addEventListener("click", moveRight);
    btnLeft.addEventListener("click", moveLeft);



    return ()=> { 
 
        clearInterval(interval);
        clearTimeout(timeoutID);
    }

}, [])
     
 
  return (
    <>
        <div className={style.container}>
            <div className={`${style.slider} slider`}>
                <div className={`${style.slide} slide`}>
                    <img className={style.img0} src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                    <div className={style.textContainer} >
                        <div className={style.info}>
                            <h2>{t("gallery.welcome")}</h2>
                            <h1>{t("gallery.title")}</h1>
                            <p className={style.subtitle}>{t("gallery.subtitle")}</p>
                            <div className={style.btnContainer}>
                                <Link to="/contact"  className={style.contactBtn}>
                                    
                                        <p>{t("gallery.contact")}</p>
                                   
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.slide} slide`}  >
                    <img className={style.img0} src="https://images.unsplash.com/photo-1606770347238-77fcfd29906c?auto=format&fit=crop&q=80&w=1975&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <div className={style.textContainer} >
                        <div className={style.info}>
                            
                            <h1>{t("gallery1.title")}</h1>
                            <p className={style.subtitle}>{t("gallery1.subtitle")}</p>
                            <div className={style.btnContainer}>
                                <Link to="/contact"  className={style.contactBtn}>
                                    
                                        <p>{t("gallery.contact")}</p>
                                   
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.slide} slide`}>
                    <img className={style.img0} src="https://images.unsplash.com/photo-1602576666092-bf6447a729fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" />
                    <div className={style.textContainer} >
                        <div className={style.info}>
                            
                            <h1>{t("gallery2.title")}</h1>
                            <p className={style.subtitle}>{t("gallery2.subtitle1")}</p>
                            <p className={style.subtitle}>{t("gallery2.subtitle2")}</p>
                            <div className={style.btnContainer}>
                                <Link to="/contact"  className={style.contactBtn}>
                                        <p>{t("gallery.contact")}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.btnLeft} id="btn-left">
                <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className={style.btnRight} id="btn-right">
                <i className="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </>
  )
}
