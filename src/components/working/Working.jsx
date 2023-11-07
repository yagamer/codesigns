
import style from "./working.module.css"


export const Working = () => {

  
   
  return (
    <>
      <div className={style.container}>
        <div className={style.workingImage} >
          <img src={`${process.env.PUBLIC_URL}/images/under.png`} />
        </div>
      </div>

    </>
  )
}
