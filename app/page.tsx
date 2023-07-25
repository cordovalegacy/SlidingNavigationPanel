"use client"

// !Components
import SlideNav from "./components/SlideNav"
import Nav from "./components/Nav"

// !Packages
import { useState } from "react"

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  const clickHandler = () => {
    setIsOpen(!isOpen)
}


  return (
    <main className="bg-[#1e1e1e] h-screen w-full">
      <Nav isOpen={isOpen} clickHandler={clickHandler}/>
      <SlideNav isOpen={isOpen} clickHandler={clickHandler}/>
    </main>
  )
}
