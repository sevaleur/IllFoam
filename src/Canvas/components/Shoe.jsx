import gsap from 'gsap'
import PropTypes from 'prop-types'

import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { useFrame } from "@react-three/fiber"
import { useSnapshot } from "valtio"

gsap.registerPlugin(useGSAP)

const Shoe = ({ 
  state: state, 
  nodes: nodes, 
  materials: materials 
}) => {

  const ref = useRef()
  const snap = useSnapshot(state)

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime()

    ref.current.rotation.set(
      Math.cos(elapsedTime / 4) / 8, 
      Math.sin(elapsedTime / 4) / 8, 
      -0.2 - (1 + Math.sin(elapsedTime / 1.5)) / 20
    )

    ref.current.position.y = (1 + Math.sin(elapsedTime / 1.5)) / 10
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

Shoe.propTypes = {
  state: PropTypes.object, 
  nodes: PropTypes.object, 
  materials: PropTypes.object
}

export default Shoe