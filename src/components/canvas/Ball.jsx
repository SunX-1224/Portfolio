import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={.75} rotationIntensity={1}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.024]} />
      <mesh castShadow receiveShadow scale={2.7}>
        <icosahedronGeometry args={[1,1]} />
        <meshStandardMaterial color="#fff8ec" polygonOffset polygonOffsetFactor={-5} flatShading/>
        <Decal position={[0,0,1]} rotation = {[Math.PI*2,0,Math.PI*2]} map={decal} flatShading/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon})=> {
  return (
    <Canvas frameloop='demand' gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default BallCanvas