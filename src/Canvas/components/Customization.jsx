import gsap from 'gsap'
import Draggable from 'react-draggable'

import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { HexColorPicker } from "react-colorful"
import { proxy, useSnapshot } from "valtio"
import { Collapse } from 'react-collapse'

import { MdExpandLess } from "react-icons/md"

gsap.registerPlugin(useGSAP)

const state = proxy({
  current: null,
  colorway: { laces: "#cfd7d6", mesh: "#15252d", caps: "#cfd7d6", inner: "#cfd7d6", sole: "#cfd7d6", stripes: "#FC5200", band: "#cfd7d6", patch: "#FC5200" }
})

export function Shoe() {
  const ref = useRef()
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF("./src/assets/shoe-draco.glb")

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  return (
    <>
      <group ref={ref}>
        <mesh receiveShadow castShadow geometry={nodes.shoe.geometry} material={materials.laces} material-color={snap.colorway.laces} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={snap.colorway.mesh} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={snap.colorway.caps} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={snap.colorway.inner} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={snap.colorway.sole} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={snap.colorway.stripes} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_6.geometry} material={materials.band} material-color={snap.colorway.band} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={snap.colorway.patch} />
      </group>
    </>
  )
}

export function Picker() {
  const { materials } = useGLTF("./src/assets/shoe-draco.glb")
  const [ isOpened, setIsOpened ] = useState(false)
  const snap = useSnapshot(state)

  const container = useRef()
  const { contextSafe } = useGSAP({scope: container})

  const btns = document.querySelectorAll('.colorway')
  const removeClass = () => 
  {
    btns.forEach(btn => { if(btn.classList.contains('active')) btn.classList.remove('active')})
  }


  return (
    <div className="absolute bottom-[0rem] left-[0rem] w-full sm:w-fit sm:bottom-[2rem] sm:left-[2rem] bg-black-100 sm:rounded-xl px-4 py-4 z-20 sm:opacity-[80%] backdrop-filter backdrop-blur-md">
      <div ref={container} className='cursor-pointer flex justify-between items-center' onClick={() => { isOpened === false ? setIsOpened(true) : setIsOpened(false) }}>
        <h3 className='font-bold text-white-100 text-xl uppercase text-center pl-1 pb-1'>
          Customize
        </h3>
        <MdExpandLess className='rotate text-white-100 w-[2rem] h-[2rem]' /> 
      </div>
      <Collapse isOpened={isOpened}>
        <div className='flex flex-wrap justify-center items-center gap-1 h-[10rem] sm:h-[15rem] w-full sm:w-[17rem] overflow-hidden'>
          { Object.keys(materials).map((m, idx) => (
            <div 
              key={idx} 
              className='colorway bg-black-200 h-[3rem] w-[8rem] flex items-center justify-start rounded-md text-white-100' 
              onClick={(e) => (e.stopPropagation(), removeClass(), (state.current = m), e.target.parentElement.classList.add('active'))}
            >
              <div className='w-full h-full flex items-center justify-between gap-2 px-4'>
                <p className='capitalize'>
                  {m}
                </p>
                <div className='h-[10px] w-[10px] rounded-lg' style={{ background: `${snap.colorway[m]}`}} />
              </div>
            </div>
          ))}
        </div>
        <HexColorPicker style={{width: '100%', height: window.innerWidth > 768 ? '12rem' : '10rem', paddingTop: '20px', opacity: state.current === null ? '0.2' : '1.0'}} color={snap.colorway[snap.current]} onChange={(color) => (state.colorway[snap.current] = color)} /> 
      </Collapse>
    </div>
  )
}