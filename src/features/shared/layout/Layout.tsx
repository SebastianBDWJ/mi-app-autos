import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
    <Navbar/>

    <main>
        <Outlet/> {/* Para que caigan siempre las cosas pero va a existir el layout y el footer se mantienen. */}
    </main>

    <Footer/>

    </>
  )
}

export default Layout