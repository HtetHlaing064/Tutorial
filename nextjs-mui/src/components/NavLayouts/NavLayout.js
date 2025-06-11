"use client"
import Navbar from "./Navbar"
import Footer from "./Footer"

import { Container } from "@mui/material"
import { Children } from "react"


export default function NavLayout({children}){
    return(
        <>
        <Navbar/>
        <Container sx={{mt:4}}>{children}</Container>
        <Footer/>
        </>
    )
}