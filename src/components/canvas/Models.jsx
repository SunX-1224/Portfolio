import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader"

const Model = ({isMobile}) => {

  const model = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={2.5}
      groundColor="black"/>
      <pointLight intensity={2}/>
      <primitive object={model.scene} scale={isMobile?0.68:0.75} position={isMobile?[0, -3, -1.8 ]:[0, -3.5, -1.5]} rotation={[-0.01, -0.2, -0.1]}/>
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
    <Canvas frameloop='demand' shadows camera={{position:[20, 3, 5], fov:30}} gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Model isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ModelCanvas