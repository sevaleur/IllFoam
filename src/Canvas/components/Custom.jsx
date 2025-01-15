import PropTypes from 'prop-types'
import Draggable from 'react-draggable'
import gsap from 'gsap'

import { Collapse } from 'react-collapse'
import { HexColorPicker } from "react-colorful"
import { MdExpandLess, MdDragIndicator } from "react-icons/md"
import { useState, useEffect, useRef } from 'react'
import { useSnapshot } from "valtio"
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const Custom = ({ state: state, materials: materials }) => {

  const [ isOpened, setIsOpened ] = useState(false)
  const [ active, setActive ] = useState(undefined) 
  const [ former, setFormer ] = useState(undefined)

  
  const snap = useSnapshot(state)
  const iconRef = useRef()
  const { contextSafe } = useGSAP({ scope: iconRef })

  useEffect(() => {
    if(former) former.parentElement.classList.remove('active')
    if(active) active.parentElement.classList.add('active')

  }, [active, former] )

  
  const handleExpand = contextSafe((isOpened) => {
    gsap.to(
      iconRef.current, 
      {
        rotation: isOpened ? 0 : 180, 
        duration: 0.8, 
        ease: 'expo.inOut'
      }
    )
  })

  return (
    <Draggable
      handle='.handle'
      positionOffset={{ x: window.innerWidth > 768 ? '-50%' : 0, y: 0 }}
    >
      <div className='absolute bottom-[0rem] left-[0rem] w-full sm:w-fit sm:bottom-[3rem] sm:left-[50%] sm:-translate-x-2/4 bg-black-100/40 sm:rounded-lg p-0.5 z-20 backdrop-filter backdrop-blur-[4px]'>
        <div className="w-full sm:w-fit bg-black-200/40 backdrop-filter backdrop-blur-[4px] sm:rounded-md p-4">
          <div className='flex justify-between items-center'>
            <MdDragIndicator className='handle text-white-100 w-[2rem] h-[2rem] cursor-pointer opacity-0 sm:opacity-[100%]'/> 
            <h3 className=' text-white-100 text-lg uppercase text-center pl-1 pb-1'>
              Customize
            </h3>
            <div 
              className='w-[2rem] h-[2rem] cursor-pointer' 
              ref={iconRef}
              onClick={
                () => { 
                  isOpened === false ? setIsOpened(true) : setIsOpened(false) 
                  handleExpand(isOpened)
                }
              }
            >
              <MdExpandLess 
                className='text-white-100 w-full h-full rotateIcon'  
              /> 
            </div>
          </div>
          <Collapse isOpened={isOpened}>
            <div className='flex flex-wrap justify-center items-center gap-1 h-[10rem] sm:h-[14rem] w-full sm:w-[17rem] overflow-hidden pt-4'
            >
              { 
                Object.keys(materials).map(
                  (m, idx) => (
                    <div 
                      key={idx} 
                      className='colorway bg-black-100 h-[3rem] w-[8rem] flex items-center justify-start rounded-md text-white-100 border border-white-100/[0.1]'  
                      onClick={
                        (e) => (
                          e.stopPropagation(), 
                          (state.current = m), 
                          setFormer(active),
                          setActive(e.target) 
                        )
                      }
                    >
                      <div className='w-full h-full flex items-center justify-between gap-2 px-4'>
                        <p className='capitalize'>
                          {m}
                        </p>
                        <div 
                          className='h-[10px] w-[10px] rounded-lg border border-white-100/[0.2]' 
                          style={{ background: `${snap.colorway[m]}`}} 
                        />
                      </div>
                    </div>
                  )
                )
              }
            </div>
            <HexColorPicker 
              style={{width: '100%', height: window.innerWidth > 768 ? '12rem' : '10rem', paddingTop: '20px', opacity: state.current === null ? '0.2' : '1.0'}} 
              color={snap.colorway[snap.current]} 
              onChange={(color) => (state.colorway[snap.current] = color)} 
            /> 
          </Collapse>
        </div>
      </div>
    </Draggable>
  )
}

Custom.propTypes = {
  state: PropTypes.object, 
  materials: PropTypes.object
}

export default Custom