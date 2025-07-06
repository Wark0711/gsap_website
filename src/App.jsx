import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Nabvar from './components/Nabvar'
import Hero from './components/Hero'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
    return (
        <main>
            <Nabvar />
            <Hero />
            <div className="h-dvh"></div>

        </main>
    )
}

export default App