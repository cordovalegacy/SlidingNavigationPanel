"use client"

import { useState } from 'react'

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  const clickHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <main className="w-screen h-screen">
      <nav className="w-full h-20">
        <button className={`left-6 min-w-fit px-2 py-3 rounded-lg text-white`} onClick={clickHandler} aria-label="Menu Button">
          <span className={`${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} block transition-transform duration-300 ease-out h-0.5 w-6 rounded-sm`}></span>
          <span className={`${isOpen ? 'opacity-0' : 'opacity-100'} block transition-transform duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5`}></span>
          <span className={`${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} transition-transform duration-300 ease-out block h-0.5 w-6 rounded-sm`}></span>
        </button>
      </nav>
    </main>
  )
}
