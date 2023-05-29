import React from "react"
import ReactDOM from "react-dom/client"
import Streamers from "./Streamers"
import Banner from "./Banner"
import Main from "./Main"
import Footer from "./Footer"

export default function App(){
    const main = Streamers.map(buddy => {
      return  (
          
         <Main key = {buddy.id} buddy = {buddy} /> 
      ) 
    })
    
    return (
        <div>
         <Banner />
          {main}
          <Footer />
          
        </div>
    )
}