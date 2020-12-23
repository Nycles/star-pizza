import React from "react"
import ss from "../../styles/pages/Main.module.scss"

import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import Logo from "../../components/Logo"
import ShopCartBar from "../../components/ShopCartBar"
import Button from "../../components/Button"
import ProductCard from "../../components/ProductCard"

import { loadProducts } from "../../actions/products"
import { switchActiveFilter } from "../../actions/sort"

function Main() {
  const selector = (state) => {
    return {
      products: state.products.products,
      filters: state.products.allTypes,
      totalCount: state.cart.totalCount,
      totalPrice: state.cart.totalPrice,
      activeFilter: state.sort.activeFilter,
    }
  }

  const data = useSelector(selector)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (products.length === 0) {
      dispatch(loadProducts())
    }
  }, [])

  const filteredProducts = data.products.filter((e) => (data.activeFilter === 0 ? e : e.type === data.activeFilter))

  const products = filteredProducts.map((p, i) => (
    <div className={ss.product_card_wrapper} key={p.id}>
      <ProductCard
        product={p}
        index={i}
        id={p.id}
        img={p.img}
        title={p.title}
        price={p.price}
        options={p.options || false}
        selected={p.selected || false}
      />
    </div>
  ))

  const filterBar = data.filters.map((title, index) => (
    <div key={index} className={ss.filterBtn}>
      <Button action={() => dispatch(switchActiveFilter(index))} text={title} active={data.activeFilter === index} />
    </div>
  ))

  return (
    <div className={ss.main}>
      <div className={ss.wrapper}>
        <header className={ss.header}>
          <Logo />

          <NavLink to={"/shopping-cart"} style={{ textDecoration: "none" }}>
            <ShopCartBar totalPrice={data.totalPrice} countOfPizzas={data.totalCount} />
          </NavLink>
        </header>

        <div className={ss.navigation}>
          <div className={ss.filterBar}>{filterBar}</div>
          <div className={ss.sortBar}></div>
        </div>

        <h1 className={ss.currentFilter}>Все пиццы</h1>

        <div className={ss.products}>{products}</div>
      </div>
    </div>
  )
}

export default Main
