import React, {Fragment} from "react"
import Head from "next/head"
import Home from "../components/Home"

const HomePage = () => {
  return (
    <Fragment>
    <Head>
    <title>Home </title>
    </Head>  
    <Home/>
</Fragment>
   
  )
}

export default HomePage 