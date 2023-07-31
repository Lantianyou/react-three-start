import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { type Mesh } from "three";

import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'

function Box(props: ThreeElements["mesh"]) {
  const meshRef = useRef<Mesh>(null!);

  return (
    <mesh
      {...props}
      ref={meshRef}
    >
      <icosahedronGeometry args={[1, 5]} />
      <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
}

export default Box;
