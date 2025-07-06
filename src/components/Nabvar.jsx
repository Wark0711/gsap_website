import React from 'react'
import { navLinks } from '../lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Nabvar() {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom-top'
            }
        })

        navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '#00000050',
            backdropFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    return (
        <nav>
            <div>
                <a href="#hero" className='flex items-center gap-2'>
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {
                        navLinks.map(nav => (
                            <li key={nav.id}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Nabvar