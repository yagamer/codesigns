import { Outlet } from "react-router-dom"
import { Nav } from "../components/nav/Nav"







export const MainLayout = () => {



  return (
    <>
        <Nav />
        <Outlet />
    </>
  )
}
