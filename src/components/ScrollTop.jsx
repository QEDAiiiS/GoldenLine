import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollTop() {

    const {pathname} = useLocation()


    useEffect(()=>{
        window.scrollTo({
            top: 0,
        behavior: 'smooth'})
        console.log(pathname);
        
    }, [pathname])


  return null
}
