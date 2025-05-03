import React from 'react'
import HeroSlider from '../../components/header/HeroSlider'
import './slider.css'
import SlideProduct from '../../components/slideProducts/SlideProd'

export default function Home() {

  return (
    <>
    <HeroSlider/>
    <SlideProduct title={"Mobile"}/>
    <SlideProduct title={"Labtop"}/>
    <SlideProduct title={"Watches"}/>
    <SlideProduct title={"Cars"}/>
    </>

  )
}
