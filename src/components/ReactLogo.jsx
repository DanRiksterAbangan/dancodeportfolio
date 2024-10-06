import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei';
import { Float } from '@react-three/drei';

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.03} {...props} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.79, 0.191]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[5.39, 5.39, 5.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo