/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/chair.gltf 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/chair.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry} material={materials.Chair} />
      <mesh geometry={nodes.Cushion.geometry} material={materials.Cushion} position={[0, 0.064, 0.045]} />
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} />
      <mesh geometry={nodes.Legs2.geometry} material={materials.Legs} />
    </group>
  )
}

useGLTF.preload('/chair.gltf')
