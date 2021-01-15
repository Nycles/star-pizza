import React from "react"
import ss from "../../styles/pages/ShoppingCart/Empty.module.scss"

import empty_cart from "../../assets/svg/shopping-cart-empty.svg"
import { NavLink } from "react-router-dom"

export function Empty() {
  console.log("Empty")

  return (
    <div className={ss.wrapper}>
      <h1 className={ss.title}>Корзина пустая &#128533;</h1>

      <div className={ss.sub_title}>
        <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
        <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
      </div>

      <img src={empty_cart} alt="empty cart" />

      <NavLink to="/" style={{ textDecoration: "none" }}>
        <button>Вернуться назад</button>
      </NavLink>
    </div>
  )
}
