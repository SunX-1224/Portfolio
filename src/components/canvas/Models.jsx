import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF} from '@react-three/drei'

import CanvasLoader from "../Loader"

const Model = ({isMobile}) => {

  const model = useGLTF('./logo/logo.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={3} position={[0,0,-4]} color="#AAAAAA"/>
      <primitive object={model.scene} scale={isMobile?1.2:1.5} position={isMobile?[0, -1, 0 ]:[0, -1.5, 0]} rotation={[0.0, 1.57, 0.0]}/>
    </mesh>
  )
}

const ModelCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas frameloop='demand' shadows camera={{position:[20, 3, 5], fov:30, near:0.1, far:200}} gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate={true} enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Model isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ModelCanvas