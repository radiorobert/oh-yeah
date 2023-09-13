import { Stage, useHelper, Html, TransformControls, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useControls } from 'leva'
import * as THREE from 'three'
import Wall from './Components/Wall.jsx'
import Brick from './Components/Brick.jsx'
import Floor from './Components/Floor.jsx'
import KoolaidMan from './components/KoolaidMan.jsx'

export default function Experience() {
    const directionalLight = useRef()
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

    const controls = useControls({ position: - 2 })
    console.log(controls.position)
    const cubeRef = useRef()

    return (
        <>
            <OrbitControls makeDefault />

            <Stage
                shadows={ { type: 'contact', opacity: 0.2, blur: 3} }
                environment="sunset"
                preset="rembrandt"
                intensity={ 2 }
            >
                <Wall/>
                <Floor rotation={[-Math.PI / 2, 0, 0]} />
                <KoolaidMan />
            </Stage>
        </>
    )

}
