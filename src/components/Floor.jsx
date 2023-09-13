import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RigidBody, Physics } from '@react-three/rapier'

function Floor(props) {
    return (
        <RigidBody type="fixed">
            <mesh position-y={-0.3}  rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[50, 50]}/>
                <shadowMaterial color="#171717" />
            </mesh>
        </RigidBody>
    )
}

export default Floor
