import React, { useRef, useState } from 'react'
import { allCocktails } from '../lib/utils'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Menu() {

    const contentRef = useRef();
    const [activeCocktailIndex, setActiveCocktailIndex] = useState(0)
    const totalCocktails = allCocktails.length;
    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

    function getCocktailAt(indexOffset) {
        return allCocktails[(activeCocktailIndex + indexOffset + totalCocktails) % totalCocktails]
    }

    function goToSlide(index) {
        const newIndex = (index + totalCocktails) % totalCocktails;
        setActiveCocktailIndex(newIndex);
    }

    useGSAP(() => {
        gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
            xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
        })
        gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
            yPercent: 0, opacity: 100, ease: 'power1.inOut'
        })
        gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
            yPercent: 0, opacity: 100, ease: 'power1.inOut'
        })
    }, [activeCocktailIndex]);

    return (
        <section id='menu' aria-labelledby='menu-heading'>
            <div id="menu">
                <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
                <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

                <h2 id="menu-heading" className='sr-only'>Cocktail Menu</h2>
                <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
                    {
                        allCocktails.map((cocktail, index) => {
                            let isActive = index === activeCocktailIndex

                            return (
                                <button key={cocktail.id} onClick={() => goToSlide(index)} className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`}>{cocktail.name}</button>
                            )
                        })
                    }
                </nav>

                <div className="content">
                    <div className="arrows">
                        <button className='text-left' onClick={() => goToSlide(activeCocktailIndex - 1)}>
                            <span>{prevCocktail.name}</span>
                            <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                        </button>

                        <button className='text-left' onClick={() => goToSlide(activeCocktailIndex + 1)}>
                            <span>{nextCocktail.name}</span>
                            <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="cocktail">
                        <img src={currentCocktail.image} className="object-contain" />
                    </div>

                    <div className="recipe">
                        <div ref={contentRef} className="info">
                            <p>Recipe for:</p>
                            <p id="title">{currentCocktail.name}</p>
                        </div>

                        <div className="details">
                            <h2>{currentCocktail.title}</h2>
                            <p>{currentCocktail.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu