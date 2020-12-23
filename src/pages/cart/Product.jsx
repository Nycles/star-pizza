import React from "react"
import ss from "../../styles/pages/ShoppingCart/Product.module.scss"

import minus from "../../assets/svg/minus.svg"
import plus from "../../assets/svg/plus.svg"
import cross from "../../assets/svg/cross.svg"
import { useDispatch } from "react-redux"
import { decrementTotalCount, incrementTotalCount, removeProductInCart } from "../../actions/cart"

function Product(props) {
  const dispatch = useDispatch()

  return (
    <div className={ss.product}>
      <div className={ss.info}>
        <img src={props.img} alt="product" />

        <div>
          <h1>{props.title}</h1>
          <h6>
            {props.dough === 0 ? "традиционное" : "тонкое"} тесто, {props.size} см.
          </h6>
        </div>
      </div>

      <div className={ss.settings}>
        <div className={ss.counter}>
          <button
            onClick={() => {
              dispatch(decrementTotalCount(props.index))
            }}
          >
            <img src={minus} alt="minus" />
          </button>
          <span>{props.amount}</span>
          <button
            onClick={() => {
              dispatch(incrementTotalCount(props.index))
            }}
          >
            <img src={plus} alt="plus" />
          </button>
        </div>

        <span>{props.price} $</span>

        <button onClick={() => dispatch(removeProductInCart(props.index))} className={ss.remove}>
          <img src={cross} alt="cross" />
        </button>
      </div>
    </div>
  )
}

export default Product
