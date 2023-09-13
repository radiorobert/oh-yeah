import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useAnimations, useGLTF, useKeyboardControls } from '@react-three/drei'
import { useState, useEffect, useRef } from 'react'
import { RigidBody, Physics, vec3 } from '@react-three/rapier'

function KoolaidMan(props) {
    const gltf = useLoader(GLTFLoader, '/koolaid_run.gltf')
    const animations = useAnimations(gltf.animations, gltf.scene)
    const [ subscribeKeys, getKeys ] = useKeyboardControls()
    const body = useRef()

    const jump = () => {
        body.current.applyImpulse({ x: 0, y: 0.5, z: 0 })
    }

    useEffect(() => {
        const action = animations.actions
        //action.play()
    })

    useFrame((state, delta) => {
        const { forward } = getKeys()

        const impulse = { x: 0, y: 0, z: 0 }
        const torque = { x: 0, y: 0, z: 0 }

        const impulseStrength = 15 * delta
        const torqueStrength = 15 * delta

        if(forward) {
            impulse.z += impulseStrength
            torque.x += torqueStrength
        }

        body.current.applyImpulse(impulse)
        body.current.applyTorqueImpulse(torque)
    })


    /*
    return (
        <RigidBody position={[0, 0, -20]}>
            <primitive
                object={gltf.scene}
            />
        </RigidBody>
    )
    */

    return (
        <RigidBody colliders="ball" ref={ body } canSleep={ false } restitution={ 0.2 } friction={ 1 } position={[0,0,-20]}>
            <mesh castShadow>
                <boxGeometry />
                <meshStandardMaterial color="red" />
            </mesh>
        </RigidBody>
    )

}

export default KoolaidMan
