import {BrowserRouter, Routes, Route} from "react-router-dom"
import { HomePage } from "./pages/HomePage";
import { MainLayout } from "./layouts/MainLayout";
import { CreateBlog } from "./pages/CreateBlog";
import { Blog } from "./pages/Blog";
import { RenderPost } from "./pages/RenderPost";
import { ContactPage } from "./pages/ContactPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { useSelector } from "react-redux";
import { CursosPage } from "./pages/CursosPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";
import { ProjectsPage } from "./pages/ProjectsPage";


function App() {

  let {user} = useSelector((state)=> state.auth)


 

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<HomePage />} />
            {
              (user === null) ? (
                <Route path="createBlog" element={<LoginPage />} />
              ) : (
                
                <Route path="createBlog" element={<CreateBlog />} />
              )
            }
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<ContactPage />} />
            {
              (user === null) ? (
                <Route path="login" element={<LoginPage />} />
                ) : (
                  <Route path="login" element={<HomePage />} />
                )
            }
            <Route path="register" element={<RegisterPage />} />
            <Route path="courses" element={<CursosPage />} />
            <Route path="resetPassword" element={<ResetPasswordPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="post/:id" element={<RenderPost />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
