import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/png/logo.png"
import ss from "../styles/components/Logo.module.scss"

function Logo() {
  return (
    <NavLink to={"/"} style={{ textDecoration: "none" }}>
      <div className={ss.logo}>
        <div>
          <img className={ss.img} src={logo} alt="logo" />
        </div>

        <div>
          <h1 className={ss.title}>STAR PIZZA</h1>
          <h3 className={ss.subtitle}>быстро и вкусно</h3>
        </div>
      </div>
    </NavLink>
  )
}

export default Logo
