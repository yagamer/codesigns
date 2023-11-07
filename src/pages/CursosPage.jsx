import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { Working } from "../components/working/Working"
import {useTranslation} from "react-i18next"
 

import style from "./cursos.module.css"
import { useEffect, useState } from "react"
 
 

 
 export const CursosPage = () => {
  let [t, i18n] = useTranslation("global");
 
   
 
   return (
     <>
        <div className={style.container}>
            <Header title={t("title.courses")} img="https://images.unsplash.com/photo-1554902843-260acd0993f8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />  
            <Working />
            <Footer />
        </div>
     </>
   )
 }
 