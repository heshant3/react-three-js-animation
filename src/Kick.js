/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";

import { useAnimations } from "@react-three/drei/useAnimations";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/kick.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    console.log(actions);
    actions.Armada.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          material={materials.Ch03_Body}
          geometry={nodes.Ch03.geometry}
          skeleton={nodes.Ch03.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/kick.glb");