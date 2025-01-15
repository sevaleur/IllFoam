
import { Collapse } from 'react-collapse'
import { HexColorPicker } from "react-colorful"
import { MdExpandLess, MdDragIndicator } from "react-icons/md"
import { useState, useEffect, useRef } from 'react'
import { useSnapshot } from "valtio"

import PropTypes from 'prop-types'
import Draggable from 'react-draggable'

const Custom = ({ state: state, materials: materials }) => {

  const [ isOpened, setIsOpened ] = useState(false)
  const [ active, setActive ] = useState(undefined) 

  const snap = useSnapshot(state)

  const btns = useRef(null)

  useEffect(() => {
    if(btns.current) {
      const children = [...btns.current.children]
      children.map(btn => { if(btn !== active) btn.classList.remove('active')})
    }

    if(active) active.parentElement.classList.add('active')

  }, [active] )


  return (
    <Draggable
      handle='.handle'
    >
      <div className='absolute bottom-[0rem] left-[0rem] w-full sm:w-fit sm:bottom-[6rem] sm:left-[6rem] bg-black-100/40 sm:rounded-lg p-0.5 z-20 backdrop-filter backdrop-blur-[4px]'>
        <div className="w-full sm:w-fit bg-black-200/40 backdrop-filter backdrop-blur-[4px] sm:rounded-md px-4 py-4">
          <div className='flex justify-between items-center'>
            <MdDragIndicator className='handle text-white-100 w-[2rem] h-[2rem] cursor-pointer opacity-0 sm:opacity-[100%]'/> 
            <h3 className=' text-white-100 text-lg uppercase text-center pl-1 pb-1'>
              Customize
            </h3>
            <MdExpandLess 
              className='rotate text-white-100 w-[2rem] h-[2rem] cursor-pointer '  
              onClick={
                () => { 
                  isOpened === false ? setIsOpened(true) : setIsOpened(false) 
                }
              }
            /> 
          </div>
          <Collapse isOpened={isOpened}>
            <div 
              ref={btns} 
              className='flex flex-wrap justify-center items-center gap-1 h-[10rem] sm:h-[14rem] w-full sm:w-[17rem] overflow-hidden pt-4'
            >
              { 
                Object.keys(materials).map(
                  (m, idx) => (
                    <div 
                      key={idx} 
                      className='colorway bg-black-100 h-[3rem] w-[8rem] flex items-center justify-start rounded-md text-white-100 border border-white-100/[0.4]'  
                      onClick={
                        (e) => (
                          e.stopPropagation(), 
                          (state.current = m), 
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
              ))}
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