import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
const AppComponent = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
const container = document.getElementById("root")
ReactDOM.render(AppComponent, container)

reportWebVitals()
