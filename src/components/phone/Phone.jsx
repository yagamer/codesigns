

import style from "./phone.module.css";


export const Phone = () => {



  return (
    <>
        <div className={style.container}>
            <img src={`${process.env.PUBLIC_URL}/images/phone.png`} />    
        </div>
    </>
  )
}
