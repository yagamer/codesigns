

import {Link} from "react-router-dom";
import { onSnapshot, collection, query, limit, getDoc, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from 'react';
import style from "./blog.module.css"
import { db } from "../firebase/app";
import { Header } from '../components/header/Header';
import { Footer } from "../components/footer/Footer";
import { Title } from "../components/titles/Title";
import { useSelector } from "react-redux";
import {useTranslation} from "react-i18next"



export const Blog = () => {
  let [t, i18n] = useTranslation("global");
  let [scroll , setScroll] = useState(false);
  let [state, setState] = useState([]);
  let [queryNumber, setQueryNumber] = useState(10);
  let [totalList, setTotalList] = useState(true);
  let {user} = useSelector((state)=> state.auth) 
  let [html, setHtml] = useState(false);

  if(scroll === false) { 
    window.scrollTo(0,0);
    setScroll(true);
 
  }
  useEffect( ()=> { 
     
    const originalQuery = query(collection(db, "blog"), limit(queryNumber));

    (async function() {
      let games = await getDocs(originalQuery);
      
      let list = games.docs.map((game)=> game.data());

 
      if(queryNumber > list.length) { 
        setTotalList(false);
      }

      setState(list);
       
    })();
      
  }, [queryNumber])
 
 function onQuery() { 
    if(scroll === true) { 
      setQueryNumber(queryNumber + 10);
    }
 }

 //css function
 function cssFn() { 
    const q = query(collection(db, "blog"), where("category", "==", "Css"));
      (async function() {
        const blogs = await getDocs(q);

        let list = blogs.docs.map((blog)=> blog.data());
        setState(list);
      })();
 }
 //html funtion 
 function htmlFn() { 

    const q = query(collection(db, "blog"), where("category", "==", "Html"));
    (async function() {
      const blogs = await getDocs(q);

      let list = blogs.docs.map((blog)=> blog.data());
      setState(list);
    })();
 }

 //all function
 function allFn() { 

    const originalQuery = query(collection(db, "blog"), limit(queryNumber));

    (async function() {
      
      let blogs = await getDocs(originalQuery);
      let list = blogs.docs.map((blog)=> blog.data());

 
      if(queryNumber > list.length) { 
        setTotalList(false);
      }

      setState(list);
       
    })();
}
 //javascript funtion 
 function javascriptFn() { 

  const q = query(collection(db, "blog"), where("category", "==", "Javascript"));
  (async function() {
    const blogs = await getDocs(q);

    let list = blogs.docs.map((blog)=> blog.data());
    setState(list);
  })();
}
 //react funtion 
 function reacttFn() { 

  const q = query(collection(db, "blog"), where("category", "==", "React"));
  (async function() {
    const blogs = await getDocs(q);

    let list = blogs.docs.map((blog)=> blog.data());
    setState(list);
  })();
}
  return (
    <>
        <div className={style.container}>
            <Header title="Blog" img="https://images.unsplash.com/photo-1464865885825-be7cd16fad8d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <Title title={t("title.publications")}/>
            {/* languages */}
            <div className={style.languages}>
              <div className={style.languagesContainer}>
                <div className={style.css} onClick={allFn}>
                  <i className="fa-solid fa-border-all"></i>
                  <p>All</p>
                </div>
                <div className={style.css} onClick={cssFn}>
                  <i className="fa-brands fa-css3-alt"></i>
                  <p>Css</p>
                </div>
                <div className={style.css} onClick={javascriptFn}>
                  <i className="fa-brands fa-square-js"></i>
                  <p>Javascript</p>
                </div>
                <div className={style.css} onClick={reacttFn}>
                  <i className="fa-brands fa-react"></i>
                  <p>React</p>
                </div>
                <div className={style.css} onClick={htmlFn}>
                  <i className="fa-brands fa-html5"></i>
                  {
                    html ? <p style={{color: "blue"}}>Html</p> : <p>Html</p>
                  }
                  
                </div>
              </div>
            </div>

            {
              (user === null) ? (
                null
              ) : (
                <>
                  <div className={style.newPost}>
                    <Link to="/createBlog" className={style.postIcons}>
                      <p>new Post</p>
                      <i className="fa-solid fa-plus"></i>
                    </Link>
                  </div>
                </>
              )
            }
            {
              state.length === 0 ? (
                <div className={style.loading}>
                        <img src={`${process.env.PUBLIC_URL}/images/loading.svg`} />
                </div>

              ) : (
                <div></div>
              )
            }
            <div className={style.blogContainer} >
                {
                  
                  state.length === 0 ? (
                      <div></div>
                  ) : (
                    state.map((post)=> (
                        <Link className={style.post} to={`/post/${post.id}`} key={post.id}>
                            <div className={style.image}>
                              <img src={post.urlImage} /> 
                            </div>
                            <div className={style.description}>
                              <div className={style.notes}>
                                <i className="fa-regular fa-bookmark"></i>
                                <p>{post.category}</p>
                                <i className="fa-regular fa-user"></i>
                                <p>{post.by}</p>
                                <i className="fa-regular fa-clock"></i>
                                <p>{post.date}</p>
                              </div>
                              <h2>{post.title}</h2>
                              <p>{post.description}</p>
                            </div>
                        </Link>
                      
                      ))
                  )
                    
                  }
              </div>
              <div className={style.queryButtons} onClick={onQuery}>
                {
                  totalList ? "Load More" : "Empty"
                }
              </div>
              <Footer />
          </div>
    </>
  )
}
