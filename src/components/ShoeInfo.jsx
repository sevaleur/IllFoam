import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const ShoeInfo = () => {
  gsap.registerPlugin(useGSAP)

  const container = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      duration: 0.8, 
      delay: 0.5, 
      ease: 'power2.inOut'
    })

    tl.fromTo(
      '.header__title',
      {
        opacity: 0, 
      }, 
      {
        opacity: 1
      }
    )

    tl.fromTo(
      window.innerWidth > 768 
        ? ['.header__desc', '.header__details'] 
        : ['.header__details'], 
      {
        opacity: 0, 
      }, 
      {
        opacity: 1
      }
    )

  }, { scope: container })
  
  return (
    <section ref={container} className='flex flex-col justify-between items-center w-full h-full absolute top-0 left-0'>

      <div className='header__title flex flex-col justify-start items-center pt-[10rem] w-fit opacity-0'>
        <div className='flex justify-center gap-5 sm:justify-between w-full'>
          <p className='font-bold text-sm text-black-100'>
            [ 0.01 ]
          </p>
          <p className='font-bold text-sm text-black-100'>
            [ 2024 ]
          </p>
        </div>
        <h1 className='text-4xl sm:text-7xl font-bold uppercase text-black-100 pb-3'>
          Illfoam <span className='text-orange italic'>Velocity</span>
        </h1>
        <p className='self-start w-fit break-words px-6 sm:px-0 sm:text-left text-center text-sm italic'>
          Hitting the gym, running errands, or chasing new records? the Velocity adapts to your every move.
        </p>
      </div>
      <div className='header__desc w-fit absolute sm:bottom-[20rem] sm:right-[8rem] bottom-[4rem] opacity-[0%] sm:opacity-0'>
        <h2 className='font-semibold text-lg py-3 italic'>
          The iconic shoe that put <span className='font-bold text-orange'>IllFoam</span> on the map.
        </h2>
        <p className='sm:text-md text-sm'>
        Step into unparalleled comfort and performance<br/>
        with the IllFoam Velocity, the latest evolution<br/>
        in sports sneakers. Engineered for athletes and<br/> 
        casual wearers alike, this shoe combines<br/>
        cutting-edge design with feather-light support,<br/> 
        ensuring every step feels effortless.<br/><br/>

        The IllFoam Velocity features a revolutionary<br/> 
        dual-density IllFoam™ midsole, offering plush <br/>
        cushioning and responsive energy return for <br/>
        all-day comfort.
        </p>
      </div>

      
      <div className="header__details absolute sm:left-[15rem] bottom-[6rem] sm:bottom-[19rem] opacity-0">
        <h3 className="font-bold text-lg text-center py-5 italic opacity-0 sm:opacity-100 sm:text-left">
          Details
        </h3>
        <ul className="flex flex-wrap items-center justify-center gap-8 w-full px-10 sm:flex-col sm:w-fit sm:px-0 sm:items-start sm:gap-2">
          <li className="listItem sm:text-md text-sm">
            <p>
              Regular fit
            </p>
          </li>
          <li className="listItem sm:text-md text-sm">
            <p>
              Dual-density IllFoam™ midsole
            </p>
          </li>
          <li className="listItem sm:text-md text-sm">
            <p>
              Textile upper
            </p>
          </li>
          <li className="listItem sm:text-md text-sm">
            <p>
              Upper is 50% recycled content
            </p>
          </li>
          <li className="listItem sm:text-md text-sm">
            <p>
              56mph top-speed
            </p>
          </li>
          <li className="listItem sm:text-md text-sm">
            <p>
              Textile lining
            </p>
          </li>
        </ul>
      </div>

      <div className="opacity-0 sm:opacity-100 absolute bottom-2 left-[50%] translate-x-[-50%]">
        <p className="text-md font-light">
          Copyright © 2025 ILLFOAM 
        </p>
      </div>
    </section>
  )
}

export default ShoeInfo