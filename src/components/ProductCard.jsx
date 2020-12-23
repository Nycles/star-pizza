import React from "react"
import { useDispatch } from "react-redux"
import { addProductInCart } from "../actions/cart"
import ss from "../styles/components/ProductCard.module.scss"
import Button from "./Button"
import Options from "./Options"

function ProductCard(props) {
  const dispatch = useDispatch()

  return (
    <div className={ss.card}>
      <div className={ss.img_wrapper}>
        <img className={ss.img} alt={props.title} src={props.img} />
      </div>

      <div className={ss.title_wrapper}>
        <h1 className={ss.title}>{props.title}</h1>
      </div>

      <div className={ss.options_wrapper}>
        <Options
          selected={props.selected}
          dough={props.options ? props.options.dough : []}
          sizes={props.options ? props.options.sizes : []}
          id={props.id}
          index={props.index}
        />
      </div>

      <div className={ss.footer}>
        <span className={ss.price}>от {props.price} $</span>

        <Button action={() => dispatch(addProductInCart(props.product))} type="add" />
      </div>
    </div>
  )
}

export default ProductCard
