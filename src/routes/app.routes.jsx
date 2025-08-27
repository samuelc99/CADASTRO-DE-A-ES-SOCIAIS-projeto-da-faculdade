import { Routes, Route } from "react-router-dom"

import { Home } from "../Pages/Home"
import { AddAction } from "../Pages/AddAction"
import { Details } from "../Pages/Details"


export function AppRoutes() {
    return(
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/AddAction" element={<AddAction />}/>  
          <Route path="/details" element={<Details />}/>  
        </Routes>
    )
}