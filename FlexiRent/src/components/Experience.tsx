/* eslint-disable react-hooks/rules-of-hooks */
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

export default function Experience() {
  return (
    <div style={{ width: "60vw", height: "100vh" }}>
      <Canvas
        flat
        linear
        resize={{ scroll: false }}
        camera={{ fov: 75, near: 0.1, far: 100, position: [0, 4, 12] }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

const Scene = () => {
  const model = useMemo(
    () =>
      useLoader(GLTFLoader, "models/ferrari_288_gto/untitled.glb", (loader) => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath("./draco/");
        loader.setDRACOLoader(dracoLoader);
      }),
    []
  );

  const modelRef = useRef<THREE.Object3D | null>(null);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.set(-1, 2, 0);
      modelRef.current.rotation.y = 2.5;
    }
  }, [model]);

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} />
      <directionalLight intensity={10} position={[5, 10, 5]} />

      <primitive ref={modelRef} object={model.scene} scale={0.95} />
    </>
  );
};
