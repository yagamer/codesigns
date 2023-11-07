
import emailjs from '@emailjs/browser';
import { useState } from "react";
import style from "./contact.module.css";
import {useTranslation} from "react-i18next"


export const Contact = () => {
    
    let [errorMessage, setErrorMessage] = useState(true);
    let [successMessage, setSuccessMessage] = useState(true);
    let [t, i18n] = useTranslation("global");
    let [sending, setSending] = useState(false);
 
    let [state, setState] = useState({
        name: "", 
        lastName: "",
        email: "",
        number: "",
        message: ""
    })


 

    function onSubmit(e) {
        e.preventDefault();
        if(errorMessage === false) { 
            return
        }
        if(successMessage === false) { 
            return
        }
        if(state.name === "" || state.lastName === "" || state.email === "" || state.number === "" || state.message === "" ) {
             //mostrar mensaje de errror
             setErrorMessage(!errorMessage);  
             setTimeout(() => {
              
                setErrorMessage(true);
             }, 4000);
        } else { 
             //enviar mensaje
             const templateParams = {
                name: state.name,
                lastName: state.lastName,
                email: state.email,
                number: state.number,
                message: state.message
                 
            };
 
            //loading
            setSending(!sending);
            emailjs.send('default_service','template_wa7t4gv', templateParams, 'user_PvRNWqSARBOwski0pGncH')
                .then((response) => {
                   setSending(false);
                   setSuccessMessage(!successMessage)
                   setTimeout(() => {
                    setSuccessMessage(true);
                   }, 4000);
                   setState({
                    name: "", 
                    lastName: "",
                    email: "",
                    number: "",
                    message: ""
                })

                }, (err) => {
                   console.log('FAILED...', err);
                });    
        }
    }
 
 
 
  return (
    <>
        <div className={style.grid}>
             <div className={style.formContainer}>
                <div className={style.form}>
                    <h2 className={style.title}>{t("contact.title")}</h2>
                    <p className={style.subtitle}>{t("contact.subtitle")}</p>
                    <form onSubmit={onSubmit}>
                        <div className={style.inputGrid}>
                            <div className={style.name}>
                                <label>{t("contact.name")}</label>
                                <input value={state.name} name='name' type="text" onChange={(e)=> setState({...state, name: e.target.value})}/>
                            </div>
                            <div className={style.lastName} >
                                <label>{t("contact.lastName")}</label>
                                <input value={state.lastName} name='lastName' type="text" onChange={(e)=> setState({...state, lastName: e.target.value})}/>
                            </div>
                        </div>
                        <div className={style.email}>
                            <label>{t("contact.email")}</label>
                            <input value={state.email} name='email'  type="email" onChange={(e)=> setState({...state, email: e.target.value})}/>
                        </div>
                        <div className={style.email}>
                            <label>{t("contact.phone")}</label>
                            <input value={state.number} name='number' className={style.number} type="number" onChange={(e)=> setState({...state, number: e.target.value})}/>
                        </div>
                        <div className={style.email}>
                            <label>{t("contact.message")}</label>
                            <textarea value={state.message} name='message' onChange={(e)=> setState({...state, message: e.target.value})}/>
                        </div>
                        <button className={style.btn} type="submit"  >{sending ? <img className={style.loading} src={`${process.env.PUBLIC_URL}/images/sending.svg`} /> :  t("contact.btn")}</button>
                        <div className={style.alertContainer}>
                            <span style={{visibility: successMessage ? "hidden" : "visible"}}  className={style.success}><i className="fa-solid fa-circle-check"></i>{t("contact.ready")}</span>
                            <span style={{visibility: errorMessage ? "hidden" : "visible"}} className={style.alert}><i className="fa-solid fa-triangle-exclamation"></i>{t("contact.empty")}</span>
                        </div>
                    </form>
                </div>
             </div>
             <div className={style.imageContainer}>
                <img src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80" />            
             </div>
        </div>
    </>
  )
}
