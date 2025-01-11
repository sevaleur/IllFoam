import { useRef, useState } from 'react'
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { HexColorPicker } from "react-colorful"
import { proxy, useSnapshot } from "valtio"

const colorways = {
  original: { laces: "#cfd7d6", mesh: "#15252d", caps: "#cfd7d6", inner: "#cfd7d6", sole: "#cfd7d6", stripes: "#FC5200", band: "#cfd7d6", patch: "#FC5200" },
  custom: { laces: "#fff", mesh: "#fff", caps: "#fff", inner: "#fff", sole: "#fff", stripes: "#fff", band: "#fff", patch: "#fff" }
}

const state = proxy({
  current: null,
  colorway: { laces: "#cfd7d6", mesh: "#15252d", caps: "#cfd7d6", inner: "#cfd7d6", sole: "#cfd7d6", stripes: "#FC5200", band: "#cfd7d6", patch: "#FC5200" }
})

export function Shoe() {
  const ref = useRef()
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF("./src/assets/shoe-draco.glb")
  const [hovered, set] = useState(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  return (
    <group
      ref={ref}
      /* onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onClick={(e) => (e.stopPropagation(), (state.current = e.object.material.name))} */>
      <mesh receiveShadow castShadow geometry={nodes.shoe.geometry} material={materials.laces} material-color={snap.colorway.laces} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={snap.colorway.mesh} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={snap.colorway.caps} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={snap.colorway.inner} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={snap.colorway.sole} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={snap.colorway.stripes} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_6.geometry} material={materials.band} material-color={snap.colorway.band} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={snap.colorway.patch} />
    </group>
  )
}

export function Picker() {
  const snap = useSnapshot(state)
  return (
    <div className="absolute bottom-[25%] left-[5rem] z-20" style={{ display: snap.current ? "block" : "none" }}>
      <h1 className="font-bold text-7xl text-center uppercase py-5">{snap.current}</h1>
      <HexColorPicker className="picker" color={snap.colorway[snap.current]} onChange={(color) => (state.colorway[snap.current] = color)} />
    </div>
  )
}