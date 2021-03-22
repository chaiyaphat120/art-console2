import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.scss'
import { MainPage } from "./components/MainPage"
import Store from "./store/Stroe"
const App = () => {
    return (
        <Store>
            <Router>
                <Switch>
                    <Route path="/" children={<MainPage />} />
                </Switch>
            </Router>
        </Store>
    )
}
export default App
