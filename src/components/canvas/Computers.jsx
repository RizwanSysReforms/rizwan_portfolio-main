import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Function to check WebGL support
const isWebGLSupported = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
};

// Computers Component
const Computers = ({ isMobile }) => {
  const { scene, nodes, materials } = useGLTF("./desktop_pc/scene.gltf");

  // Debugging geometry
  useEffect(() => {
    // Iterate through the model's children to find geometry with issues
    scene.traverse((child) => {
      if (child.isMesh) {
        const { geometry } = child;
        if (geometry) {
          console.log('Geometry attributes:', geometry.attributes);
          try {
            geometry.computeBoundingSphere();
          } catch (error) {
            console.error('Error computing bounding sphere:', error);
          }
        }
      }
    });
  }, [scene]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3.5, -2.2] : [0, -4.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// ComputersCanvas Component
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check WebGL support
    if (!isWebGLSupported()) {
      alert("WebGL is not supported on this device.");
      return;
    }

    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={isMobile ? [1, 1.5] : [1, 2]}  // Adjust DPI based on device
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
        antialias: !isMobile, // Disable antialiasing on mobile for performance
        powerPreference: "high-performance", // Prefer high performance
        alpha: true, // Enable alpha channel for transparency
        failIfMajorPerformanceCaveat: true, // Fail if WebGL has major performance caveats
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={2.0}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
