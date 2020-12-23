import React from "react"
import ss from "../../styles/pages/ShoppingCart/ShoppingCart.module.scss"

import cart from "../../assets/svg/cart-black.svg"
import trash from "../../assets/svg/trash.svg"
import arrow from "../../assets/svg/arrow-left.svg"

import Logo from "../../components/Logo"
import Product from "./Product"
import { NavLink } from "react-router-dom"
import Empty from "./Empty"
import { useDispatch, useSelector } from "react-redux"
import { removeAllProductsInCart } from "../../actions/cart"

function ShoppingCart(props) {
  const selector = (state) => {
    return state.cart
  }

  const data = useSelector(selector)
  const dispatch = useDispatch()

  const products = data.products.map((p, i) => (
    <Product
      key={i}
      id={p.id}
      index={i}
      img={p.img}
      title={p.title}
      price={p.totalPrice}
      dough={p.selected.dough}
      size={p.selected.sizes}
      amount={p.totalCount}
    />
  ))

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
                  <img src={trash} alt="trash" />
                  Очистить корзину
                </button>
              </div>

              <div className={ss.main_main}>
                <div className={ss.products}>{products}</div>

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
                  <button className={ss.btn_back}>
                    <img src={arrow} alt="array" />
                    Вернуться назад
                  </button>
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
