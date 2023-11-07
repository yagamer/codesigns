


import style from "./header.module.css"
 

export const Header = ({img, title}) => {

  let css = {
     backgroundImage: `url(${img})`
  }
 
 
  return (
    <>
        <div style={css} className={style.container}  >
              <div className={style.blog}>

                 <h1 className={style.title}>{title}</h1>
              </div>
        </div>
    </>
  )
}
