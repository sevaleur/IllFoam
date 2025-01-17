import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const Header = () => {
  gsap.registerPlugin(useGSAP)

  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      '.header__logo', 
      {
        scale: 0,
        opacity: 0
      }, 
      {
        opacity: 1,
        scale: 1, 
        duration: 0.8, 
        delay: 0.5, 
        ease: 'power2.inOut'
      }
    )
  }, {scope: ref})

  return (
    <header ref={ref} className='absolute top-0 left-0 w-full h-[5rem] flex justify-center items-center z-20'> 
      <div className='w-[5rem] h-full pt-5'>
        <figure className='h-[5rem] w-full'>
          <img 
            className='header__logo h-full w-full object-cover opacity-0'
            src='/logo.png'
            alt='logo'
          /> 
        </figure>
      </div>
    </header>
  )
}

export default Header