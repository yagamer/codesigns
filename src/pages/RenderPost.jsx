
import Disqus from "disqus-react"
import ReactHtmlParser from 'html-react-parser';
import {  collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom"
import { Header } from "../components/header/Header"
import style from "./renderpost.module.css"
import { useEffect, useState } from 'react';
import { db } from '../firebase/app';
import { Footer } from '../components/footer/Footer';


export const RenderPost = () => {
  window.scrollTo(0,0);
  let [state, setState] = useState("");
  let [config , setConfig] = useState({url: "", id: "", title: "", date: "", category: "", by: ""});
  

  let {id} = useParams();
  let html = ReactHtmlParser(state);
  
  useEffect(()=> { 

    (async () => {

      try {
        // Realiza operaciones asíncronas aquí
        const blogRef = collection(db, "blog");
        const q = query(blogRef, where("id", "==", id));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          
          let data = doc.data().html;
          let con = doc.data();
          setState(data);
          
          setConfig({...config, url: document.URL, id: con.id, title: con.title, date: con.date, category: con.category, by: con.by});

        });
      // Actualiza el estado o realiza otras acciones con el resultado
       
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir
      console.error('Error:', error);
    }
  })();

 }, [])
 
 const disqusShortname = "abrahamluna"
 const disqusConfig = {
   url: config.url,
   identifier: config.id,
   title: config.title
 }
  return (
    <>
        <div className={style.container}>
          <Header title="Blog" img="https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1987&q=80"/>
              <div className={style.postContainer}>
   
                  <div className={style.description}>
                      <i className="fa-regular fa-bookmark"></i>
                      <p>{config.category}</p>
                      <i className="fa-regular fa-user"></i>
                      <p>{config.by}</p>
                      <i className="fa-regular fa-clock"></i>
                      <p>{config.date}</p>
                  </div>
 
                {html}
                <div className={style.disquss}>
                <Disqus.DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
                </div>
              </div>
          <Footer /> 
        </div>
    </>
  )
}
