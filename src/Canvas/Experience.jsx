import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, OrbitControls, useGLTF } from "@react-three/drei"

import Shoe from "./components/Shoe"
import Custom from './components/Custom'
import state from './components/state'


const Experience = () => {

  const { nodes, materials } = useGLTF("/shoe-draco.glb")

  return (
    <>
      <Canvas className="h-screen w-screen absolute top-0 left-0 z-10" shadows camera={{ position: window.innerWidth > 768 ? [0, 0, 4] : [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Shoe state={ state } nodes={ nodes } materials={ materials } />
        <Environment preset="city" />
        <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
      </Canvas>
      <Custom state={ state } materials={ materials } />
    </>
  )
}

export default Experience