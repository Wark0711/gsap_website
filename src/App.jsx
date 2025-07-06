import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Nabvar from './components/Nabvar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import About from './components/About'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
    return (
        <main>
            <Nabvar />
            <Hero />
            <Cocktails />
            <About />
        </main>
    )
}

export default App