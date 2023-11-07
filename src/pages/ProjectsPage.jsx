
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { Projects } from "../components/projectos/Projects"
import { Title } from "../components/titles/Title"
import { Working } from "../components/working/Working"
import style from "./projects.module.css"
import {useTranslation} from "react-i18next"



export const ProjectsPage = () => {
  let [t, i18n] = useTranslation("global");


  return (
    <>
      <div className={style.module}>
            <Header title={t("title.portfolio")} img="https://images.unsplash.com/photo-1530520960548-0d70a1ad430d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />  
            <Title title={t("title.project")}/>
            <Projects />
            <Footer />
      </div>
    </>
  )
}
