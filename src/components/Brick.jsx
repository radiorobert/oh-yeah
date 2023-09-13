import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RigidBody, Physics } from '@react-three/rapier'

  //const material = new THREE.MeshStandardMaterial({ color: 'orange' })
  //const geometry = new THREE.BoxGeometry(1, 1, 1)
  //
function Brick({colors, number, size, position}) {
  // Brick Setup
  const args = [size, size, size]
  return (
    <RigidBody>
      <mesh receiveShadow castShadow position={ [ position.x, position.y, position.z ] }>
        <boxGeometry args={args}>
        </boxGeometry>
        <meshStandardMaterial color={'orange'}/>
      </mesh>
    </RigidBody>
  )
}

export default Brick
