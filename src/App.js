import React from "react"
import "./styles/App.scss"

import { Provider } from "react-redux"
import { store } from "./store/store"
import { Routes } from "./pages/Routes"

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
