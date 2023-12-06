/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/Cycle_Glb.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three';
import { useCustomization } from '../contexts/Customization';

export function Model(props){
  const {material, cycleColor, cycleProps} = useCustomization();
  const { nodes, materials } = useGLTF('./models/Cycle_Glb.glb')
  const leatherProps = useTexture({
    normalMap: './textures/leather/Leather_005_normal.jpg',
    roughnessMap: './textures/leather/Leather_005_roughness.jpg',
    aoMap: './textures/leather/Leather_005_ambientOcclusion.jpg',
  })
  leatherProps.normalMap.repeat.set(3,3);
  leatherProps.roughnessMap.repeat.set(3,3);
  leatherProps.aoMap.repeat.set(3,3);
  leatherProps.normalMap.wrapS =
  leatherProps.normalMap.wrapT =
  leatherProps.roughnessMap.wrapS =
  leatherProps.roughnessMap.wrapT =
  leatherProps.aoMap.wrapS =
  leatherProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  const marbleProps = useTexture({
    normalMap: './textures/marble/Marble_Tiles_001_normal.jpg',
    roughnessMap: './textures/marble/Marble_Tiles_001_roughness.jpg',
    aoMap: './textures/marble/Marble_Tiles_001_ambientOcclusion.jpg',
  })
  marbleProps.normalMap.repeat.set(3,3);
  marbleProps.roughnessMap.repeat.set(3,3);
  marbleProps.aoMap.repeat.set(3,3);
  marbleProps.normalMap.wrapS =
  marbleProps.normalMap.wrapT =
  marbleProps.roughnessMap.wrapS =
  marbleProps.roughnessMap.wrapT =
  marbleProps.aoMap.wrapS =
  marbleProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  const metalProps = useTexture({
    normalMap: './textures/metal/Metal_Rusted_010_normal.jpg',
    roughnessMap: './textures/metal/Metal_Rusted_010_roughness.jpg',
    metalnessMap: './textures/metal/Metal_Rusted_010_metallic.jpg',
    aoMap: './textures/metal/Metal_Rusted_010_ambientOcclusion.jpg',
  })
  metalProps.normalMap.repeat.set(3,3);
  metalProps.roughnessMap.repeat.set(3,3);
  metalProps.aoMap.repeat.set(3,3);
  metalProps.normalMap.wrapS =
  metalProps.normalMap.wrapT =
  metalProps.roughnessMap.wrapS =
  metalProps.roughnessMap.wrapT =
  metalProps.aoMap.wrapS =
  metalProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane060.geometry} position={[0, 0, 0]} scale={6.681} castShadow>
        <meshStandardMaterial 
          {...(material === "metal"
          ? metalProps
          : leatherProps)}
          color={cycleColor.color}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Cycle_Glb.glb')