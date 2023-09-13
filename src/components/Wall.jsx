import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Brick from './Brick.jsx'

function Wall(props) {
    const [number] = useState(25)
    const [color] = useState('ivory')
    const [size] = useState(1)

    const buildWall = () => {
        return [...Array(number)].map((item, i) => (
            <Brick {...{ color, number, size, position:{x: i % 5, y: i / 5, z: 0}}}  key={"Brick" + i}/>
        ));
    }

    return (
        <group position={[-2, 0, 0]}>
            {buildWall()}
        </group>
    )
}

export default Wall
