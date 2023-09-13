import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import Box from './components/Box.jsx'
import Experience from './Experience.jsx'
import { KeyboardControls } from '@react-three/drei'
import './App.css'

function App() {
  return (
    <KeyboardControls map={ [{name: 'forward', keys: ['ArrowUp', 'KeyW']}] }>
        <Canvas
            camera={ {
                fov: 45,
                near: 0.1,
                far: 50,
                position: [ - 4, 3, 6 ]
            } }
        >
          <color args={['ivory']} attach='background'/>
          <Physics debug>
            <Experience />
          </Physics>
        </Canvas>
      </KeyboardControls>
    )
}

export default App
