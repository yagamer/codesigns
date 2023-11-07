
//imports
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification} from "firebase/auth"
import style from "./register.module.css"
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { Footer } from "../components/footer/Footer";
 

export const RegisterPage = () => {
    window.scrollTo(0,0);
    //component state
    let [errorMessage, setErrorMessage] = useState(true);
    let [successMessage, setSuccessMessage] = useState(true);
    let [errorAlert, setErrorAlert] = useState({state: true, message: ""});
    const [state, setState] = useState({email: "", password: ""})
    //hooks
    const navigate = useNavigate();
 
    //functions
    function register(e) { 
        e.preventDefault();
        if(errorMessage === false) { 
            return;
        }
        if(successMessage === false ) { 
            return;
        }
        if(state.email === "" || state.password === "") { 
            setErrorMessage(!errorMessage);
            setTimeout(() => {
                setErrorMessage(true);
            }, 3000);
        } else {
            //execute code with no problems
            const auth = getAuth();

            createUserWithEmailAndPassword(auth , state.email, state.password)
                .then((userCredential) => {
                    // Signed up 
                    sendEmailVerification(auth.currentUser)
                    .then(() => {
                      // Email verification sent!
                      // ...
                    });
                    setSuccessMessage(!successMessage);
                    setTimeout(() => {
                        setSuccessMessage(true);
                        navigate("/login")
                    }, 3000);
                })
                .catch((error) => {

                    setErrorAlert({...errorAlert, state: false, message: error.message });
                    setTimeout(() => {
                        setErrorAlert({...errorAlert, state: true });
                    }, 3000);
                });
        
            }


        setState({...state, email: "", password: ""})

    }

 
  return (
    <>
        <div className={style.container}>
            <div className={style.login}>
                <div className={style.loginContainer}>
                    <form className={style.form} onSubmit={register}>
                        <h2>Register</h2>
                        <label>Email ID</label>
                        <input value={state.email} type="email" placeholder="Digita el Email ID" onChange={(e)=> setState({...state, email: e.target.value})}/> 
                        <label>Password</label>
                        <input value={state.password} type="password" placeholder="Digita el Password" onChange={(e)=> setState({...state, password: e.target.value})} /> 
                        <button type="submit" className={style.button}>
                            Register
                        </button>
                        <div >
                            
                            <span style={{visibility: errorAlert.state ? "hidden" : "visible"}} className={style.errorContainer}><i className="fa-solid fa-circle-exclamation"></i>{errorAlert.message}</span>
                            <span style={{visibility: errorMessage ? "hidden" : "visible"}} className={style.alertContainer}><i className="fa-solid fa-triangle-exclamation"></i>Campos vacíos no son permitidos. Llena todos los campos son obligatorios.</span>
                            <span style={{visibility: successMessage ? "hidden" : "visible"}} className={style.successContainer}><i className="fa-solid fa-circle-check"></i> ¡Bienvenido! Por favor, revisa tu bandeja de entrada y completa registro.</span>
                     
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    </>
  )
}