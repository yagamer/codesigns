//imports
import { getAuth, sendPasswordResetEmail} from "firebase/auth"
import style from "./register.module.css"
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { Footer } from "../components/footer/Footer";
 

export const ResetPasswordPage = () => {
    window.scrollTo(0,0);
    //component state
    let [errorMessage, setErrorMessage] = useState(true);
    let [successMessage, setSuccessMessage] = useState(true);
    const [state, setState] = useState({email: ""})
    //hooks
    const navigate = useNavigate();
 
    //functions
    function resetPassword(e){ 
      e.preventDefault();
        if(errorMessage === false) { 
            return;
        }
        if(successMessage === false ) { 
            return;
        }
        if(state.email === "") { 
            setErrorMessage(!errorMessage);
            setTimeout(() => {
                setErrorMessage(true);
            }, 3000);
        } else {
            //execute code with no problems
            const auth = getAuth();
            sendPasswordResetEmail(auth, state.email)
              .then(() => {
                // Password reset email sent!
                setSuccessMessage(!successMessage);
                setTimeout(() => {
                    setSuccessMessage(false);
                    navigate("/login")
                }, 3000);
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });
        
          }


        setState({...state, email: ""})
    }
 
  return (
    <>
        <div className={style.container}>
            <div className={style.login}>
                <div className={style.loginContainer}>
                    <form className={style.form} onSubmit={resetPassword}>
                        <h2>Reset Password</h2>
                        <label>Email ID</label>
                        <input value={state.email} type="email" placeholder="Digita el Email ID" onChange={(e)=> setState({...state, email: e.target.value})}/> 
                        <button type="submit" className={style.button}>
                            Submit
                        </button>
                        <div >
                            <span style={{visibility: errorMessage ? "hidden" : "visible"}} className={style.alertContainer}><i className="fa-solid fa-triangle-exclamation"></i>Campos vacíos no son permitidos. Llena todos los campos son obligatorios.</span>
                            <span style={{visibility: successMessage ? "hidden" : "visible"}} className={style.successContainer}><i className="fa-solid fa-circle-check"></i>"We've sent an email to reset your password."</span>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    </>
  )
}