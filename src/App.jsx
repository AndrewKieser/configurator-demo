import { useState } from 'react'
import {Canvas} from "@react-three/fiber"
import './App.css'
import Experience from './components/Experience'
import Selector from './components/Selector'
import { CustomizationProvider } from './contexts/Customization'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas>
          <color attach="background" args={['#101010']} />
          <fog attach="fog" args={['#101010', 10, 20]} />
          <Experience />
        </Canvas>
        <Selector />
      </div>
    </CustomizationProvider>
  )
}

export default App
