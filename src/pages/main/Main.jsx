import React from "react"
import ss from "../../styles/pages/Main/Main.module.scss"

import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"

import Logo from "../../components/Logo"
import ShopCartBar from "../../components/ShopCartBar"
import Button from "../../components/Button"
import SortBar from "../../components/SortBar"
import { Products } from "./Products"

import { setActiveFilter } from "../../actions/sort"
import { useShallowEqualSelector } from "../../hooks"

function Main() {
  const filters = ["Все", "Мясная", "Вегетарианская", "Гриль", "Острая", "Закрытая"]

  const dataSelector = (state) => {
    return {
      activeFilter: state.sort.activeFilter,
      activeSort: state.sort.activeSort,

      totalCount: state.cart.totalCount,
      totalPrice: state.cart.totalPrice,
    }
  }

  const data = useShallowEqualSelector(dataSelector)

  const dispatch = useDispatch()

  const filterBar = filters.map((title, index) => (
    <div key={index} className={ss.filterBtn}>
      <Button action={() => dispatch(setActiveFilter(index))} text={title} active={data.activeFilter === index} />
    </div>
  ))

  const filter = filters[data.activeFilter]

  return (
    <div className={ss.main}>
      <div className={ss.wrapper}>
        <header className={ss.header}>
          <Logo />

          <NavLink to={"/shopping-cart"} style={{ textDecoration: "none" }}>
            <ShopCartBar totalPrice={data.totalPrice} countOfProducts={data.totalCount} />
          </NavLink>
        </header>

        <div className={ss.navigation}>
          <div className={ss.filterBar}>{filterBar}</div>
          <div className={ss.sortBar}>
            <SortBar activeSort={data.activeSort} />
          </div>
        </div>
        <h1 className={ss.currentFilter}>{data.activeFilter === 0 ? `${filter} пиццы` : filter}</h1>

        <Products />
      </div>
    </div>
  )
}

export default Main
