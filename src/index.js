import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import firebase from "firebase/app"

import "firebase/database"
import "firebase/storage"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA0Fl9TJocaHkH79zk-aBGsfgW4SGRt-P4",
  authDomain: "star-pizza-d9260.firebaseapp.com",
  databaseURL: "https://star-pizza-d9260-default-rtdb.firebaseio.com",
  projectId: "star-pizza-d9260",
  storageBucket: "star-pizza-d9260.appspot.com",
  messagingSenderId: "799220063396",
  appId: "1:799220063396:web:cf43c9954f21a85c2a1a31",
  measurementId: "G-6RYYYX97RE",
}

firebase.initializeApp(firebaseConfig)

export const database = firebase.database()
export const storage = firebase.storage()

ReactDOM.render(<App />, document.getElementById("root"))
