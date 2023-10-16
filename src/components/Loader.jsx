import { Html, useProgress } from "@react-three/drei"

const CanvasLoader = () => {

  const {progress} = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className='text-center text-[14px] text-white font-[800] mt-[40px]'>Loading { progress.toFixed(2)}%</p>
    </Html>
  )
}

export default CanvasLoader