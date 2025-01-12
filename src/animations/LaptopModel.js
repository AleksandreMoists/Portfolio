import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const LaptopModel = ({ containerWidth = 400, containerHeight = 400 }) => {
  const mountRef = useRef(null);
  const laptopRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Fixed aspect ratio
    camera.position.set(0.5, 0, 6); // Adjusted camera for a better view

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerWidth, containerHeight); // Adjust to container dimensions
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1.5);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Load Laptop Model
    const loader = new GLTFLoader();
loader.load(
  "/models/laptop.glb",
  (gltf) => {
    const laptop = gltf.scene;
    laptop.scale.set(0, 0, 0); // Start with the model scaled to 0
    laptop.position.set(0, -1, 0); // Center the model

    // Set initial rotation to -45 degrees on the Y-axis
    laptop.rotation.y = THREE.MathUtils.degToRad(-45);

    scene.add(laptop);
    laptopRef.current = laptop;

    // Add Pop Animation (Scale Up) and Rotation
    let animationProgress = 0;
    const animationDuration = 1.7; // Duration in seconds
    const targetScale = 0.5; // Final scale

    const animateLaptop = () => {
      if (animationProgress < animationDuration) {
        animationProgress += 0.01;
        const easeOut = Math.sin((animationProgress / animationDuration) * (Math.PI / 2));
        const scale = easeOut * targetScale;
        laptop.scale.set(scale, scale, scale); // Smoothly scale the model

        // Apply smooth rotation during the animation
        const rotationEase = easeOut * THREE.MathUtils.degToRad(45); // Ease-out rotation
        laptop.rotation.y = rotationEase;
      }
    };

    // Add the scale and rotation animation into the render loop
    const animate = () => {
      requestAnimationFrame(animate);
      animateLaptop();
      renderer.render(scene, camera);
    };
    animate();
  },
    undefined,
    (error) => console.error("An error occurred while loading the model:", error)
  );


    // Cleanup
    return () => {
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [containerWidth, containerHeight]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default LaptopModel;
