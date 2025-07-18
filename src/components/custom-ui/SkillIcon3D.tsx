"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Icosahedron } from "@react-three/drei";
import type { Mesh } from "three";

interface SkillIcon3DProps {
  icon: React.ReactNode;
}

function SceneContent({ icon }: SkillIcon3DProps) {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={ 1.5 } />
      <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.2 } />

      <Icosahedron ref={ meshRef } args={ [ 1, 1 ] }>
        <meshStandardMaterial color="#1f2937" flatShading />

        <Html center>
          <div className="text-4xl text-white select-none pointer-events-none">
            { icon }
          </div>
        </Html>
      </Icosahedron>
    </>
  );
}


export default function SkillIcon3D({ icon }: SkillIcon3DProps) {
  return (
    <Canvas camera={ { position: [ 0, 0, 3 ], fov: 25 } }>
      <SceneContent icon={ icon } />
    </Canvas>
  );
}
