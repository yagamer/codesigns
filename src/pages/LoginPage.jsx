

import {signInWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail} from "firebase/auth"
import {Link} from "react-router-dom"
import style from "./login.module.css"
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"
import { authAction } from "../redux/features/authSlide";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { Footer } from "../components/footer/Footer";


export const LoginPage = () => {
    window.scrollTo(0,0);
    //state
    let [ errorMessage , setErrorMessage]  = useState(true);
    let [error , setError] = useState("");
    let [alertMessage , setAlertMessage] = useState(true);
    let [emailAuth , setEmailAuth] = useState(true);
    const [state, setState] = useState({email: "", password: ""})
    const navigate = useNavigate();
    let dispatch = useDispatch();
 
 
    //functions
    function login(e) { 
        e.preventDefault();
        if(errorMessage === false) {
            return;
        }
        if(alertMessage === false) { 
            return;
        }
        if(state.email === "" || state.password === "") { 
            setErrorMessage(false);
            setTimeout(() => {
                setErrorMessage(true);
            }, 3000);
        } else {
            //execute code with no problems
            let auth = getAuth();
            signInWithEmailAndPassword(auth, state.email, state.password)
                .then((userCredential) => {
                    // Signed in 
                    let user = userCredential.user;
                    if(user.emailVerified) { 
                        let credential = JSON.stringify(userCredential.user);
                        dispatch(authAction.login(credential))
                        navigate("/")
                    } else { 
                        setEmailAuth(!emailAuth);
                        setTimeout(() => {
                            setEmailAuth(true);    
                        }, 3000);
                    }

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorMessage);
                    setAlertMessage(false);
                    setTimeout(() => {
                        setAlertMessage(true);
                    }, 3000);
                });
         
    }
    

}

 
  return (
    <>
        <div className={style.container}>
            <div className={style.login}>
                <div className={style.loginContainer}>
                    <form className={style.form} onSubmit={login}>
                        <h2>Login</h2>
                        <label>Email ID</label>
                        <input value={state.email} type="text" placeholder="Digita el Email ID" onChange={(e)=> setState({...state, email: e.target.value})}/> 
                        <label>Password</label>
                        <input value={state.password} type="password" placeholder="Digita el Password" onChange={(e)=> setState({...state, password: e.target.value})} /> 
                        <button type="submit" className={style.button}>
                            Login
                        </button>
                    </form>
                    <div className={style.alertContainer} >
                        <span style={{visibility: alertMessage ? "hidden" : "visible"}} className={style.alert}><i className="fa-solid fa-circle-exclamation"></i>{error}</span>
                        <span style={{visibility: errorMessage ? "hidden" : "visible"}} className={style.error}><i className="fa-solid fa-triangle-exclamation"></i>Campos vacíos no son permitidos. Llena todos los campos son obligatorios.</span>
                        <span style={{visibility: emailAuth ? "hidden" : "visible"}} className={style.error}><i className="fa-solid fa-triangle-exclamation"></i>"Your email has not been verified yet."</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
  )
}
