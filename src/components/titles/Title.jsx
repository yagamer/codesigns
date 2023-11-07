
import style from "./title.module.css"




export const Title = ({title  }) => {


  return (
    <>
        <div className={style.container}>
            <div className={style.titleContainer}>
                <h2 className={style.title}>{title}</h2>
            </div>
        </div>
        
    </>
  )
}
