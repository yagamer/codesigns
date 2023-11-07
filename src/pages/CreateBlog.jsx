 
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection } from "firebase/firestore"; 
import { Editor } from '@tinymce/tinymce-react';
import style from "./createblog.module.css"
import { useRef, useState } from 'react';
import { db } from "../firebase/app";
import { Title } from '../components/titles/Title';
 
 
export const CreateBlog = () => {
  
  

 
  let [state, setState] = useState({
    title: "", 
    urlImage: "", 
    description: "",
    category: "",
  })

  const editorRef = useRef(null);

  const log = async () => {

    if (editorRef.current) {
      let data = editorRef.current.getContent();

      const docRef = await addDoc(collection(db, "blog"), {
        urlImage: state.urlImage,
        title: state.title, 
        description: state.description, 
        category: state.category,
        by: "Abraham Luna",
        id: uuidv4(),
        html: data,
        date: new Date().toLocaleString(),
     
      });
      console.log(state);
    }  
  };
   
  function category(e) { 
    setState({...state, category: e.target.value})
  }
  return (
    <>
        <div className={style.container}>
          <Title title="New Post" />
          <div className={style.editor}>
            <div className={style.description}>
              <label>Title</label>
              <input type="text" onChange={(e)=> setState({...state, title: e.target.value})} />
              <label>Url Image</label>
              <input type="text" onChange={(e)=> setState({...state, urlImage: e.target.value})} />
              <label>Description</label>
              <input type="text" onChange={(e)=> setState({...state, description: e.target.value})}/>
              <label>Category</label>
              <select name="pets" id="pet-select" onChange={category}>
                <option value="">--Please choose an option--</option>
                <option value="Html">Html</option>
                <option value="Css">Css</option>
                <option value="Javascript">JavaScript</option>
                <option value="React">React</option>
              </select>
              <button onClick={log}>Publish</button>
            </div>
              <Editor
              apiKey='8872k70ztkf1lgyc46kfihgjf3y8kbzfx8zs885834bmxtat'
              onInit={(evt, editor) => editorRef.current = editor}
              initialValue=""
              init={{
                height: "100vh",
                menubar: true,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | blocks | ' +
                  'bold italic forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
            />
            
          </div>  
        </div>
    </>
  )
}
