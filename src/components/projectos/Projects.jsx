


import { Link } from "react-router-dom";
import style from "./projects.module.css";

let portfolio = [
  {id: 1, url: "/images/abraham-website.png", title: "Abraham Website", description: "Pagina Oficial", target: "https://tupaginaenlinea.netlify.app/"}
]

export const Projects = () => {


  return (
    <>
      <div className={style.filterBar}>
        <div className={style.filterContainer}>
          <div className={style.btns}>
            <p>Show All</p>
          </div>
          <div className={style.btns}>
            <p>Website</p>
          </div>
        </div>
      </div>
      <div className={style.projectsContainer}>
        <div className={style.projects}>
          {
            portfolio.map((project)=> (
              <div className={style.cardContainer} key={project.id}>
                  <img src={`${process.env.PUBLIC_URL}${project.url}`} />
                  <Link className={style.slide} to={project.target} target="_blank">
                    <div className={style.content}>
                      <h2>{project.title}</h2>
                      <p>{project.description}</p> 
                    </div>
                  </Link>
                </div> 
            ))
          }
  
        </div>
      </div>
    </>
  )
}
