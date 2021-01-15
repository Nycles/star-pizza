import React from "react"
import ss from "../styles/components/ShopCartBar.module.scss"
import cart from "../assets/svg/cart.svg"

function ShopCartBar(props) {
  return (
    <div className={ss.shop_cart_bar}>
      <div className={ss.total_price}>{props.totalPrice} $</div>

      <div className={ss.stick}></div>

      <div className={ss.count_of_pizzas}>
        <img className={ss.cart} src={cart} alt="cart" />
        {props.countOfProducts}
      </div>
    </div>
  )
}

export default ShopCartBar
