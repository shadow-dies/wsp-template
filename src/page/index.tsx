import React from "react"
import './index.css'
import Topbannner from "../components/topbannner"
import Navbox from "../components/nav-box"
import Albums from "../components/Albums"
import Card from "../components/card"
import Footer from "../components/Footer"

const Template: React.FC = () => {
    return(
        <>
            <Navbox></Navbox>
            <Topbannner></Topbannner>
            <Albums></Albums>
            <Card></Card>
            <Footer></Footer>
        </>
    )
}

export default Template;