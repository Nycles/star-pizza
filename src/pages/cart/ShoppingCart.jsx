import React from "react"
import ss from "../../styles/pages/ShoppingCart/ShoppingCart.module.scss"
import { useDispatch } from "react-redux"

import cart from "../../assets/svg/cart-black.svg"
import trash from "../../assets/svg/trash.svg"
import arrow from "../../assets/svg/arrow-left.svg"

import { NavLink } from "react-router-dom"

import Logo from "../../components/Logo"
import { Empty } from "./Empty"

import { removeAllProductsInCart } from "../../actions/cart"
import { Products } from "./Products"
import { useShallowEqualSelector } from "../../hooks"

function ShoppingCart() {
  const selector = (state) => {
    return {
      totalCount: state.cart.totalCount,
      totalPrice: state.cart.totalPrice,
    }
  }

  const data = useShallowEqualSelector(selector)
  const dispatch = useDispatch()

  console.log("Cart")

  return (
    <div className={ss.shopping_cart}>
      <div className={ss.wrapper}>
        <header className={ss.header}>
          <Logo />
        </header>

        <main>
          {data.totalCount === 0 ? (
            <Empty />
          ) : (
            <div className={ss.main_wrapper}>
              <div className={ss.main_header}>
                <div className={ss.title_wrapper}>
                  <img src={cart} alt="cart" />

                  <h1>Корзина</h1>
                </div>

                <button onClick={() => dispatch(removeAllProductsInCart())} className={ss.btn_remove_all}>
                  Очистить корзину
                </button>
              </div>

              <div className={ss.main_main}>
                <div className={ss.products}>
                  <Products />
                </div>

                <div className={ss.order_data}>
                  <h6>
                    Всего пицц: <span>{data.totalCount} шт.</span>
                  </h6>
                  <h6>
                    Сумма заказа: <span className={ss.price}>{data.totalPrice} $</span>
                  </h6>
                </div>
              </div>

              <div className={ss.main_footer}>
                <NavLink to={"/"} style={{ textDecoration: "none" }}>
                  <button className={ss.btn_back}>Вернуться назад</button>
                </NavLink>

                <button className={ss.btn_pay}>Оплатить сейчас</button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default ShoppingCart
