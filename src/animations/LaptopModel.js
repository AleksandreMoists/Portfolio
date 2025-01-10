import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const LaptopModel = () => {
  const mountRef = useRef(null);
  const laptopRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Use a fixed aspect ratio
    camera.position.set(0, 0, 8.5); // Adjust Z for zoom level

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(400, 400); // Fixed width and height
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 1.5);
    light.position.set(5, 5, 5);
    scene.add(light);

    const spotlight = new THREE.SpotLight(0xffffff, 1);
    spotlight.position.set(10, 10, 10);
    scene.add(spotlight);


    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const loader = new GLTFLoader();
    loader.load(
      "/models/laptop.glb",
      (gltf) => {
        const laptop = gltf.scene;
        laptop.scale.set(0, 0, 0); // Start with the model scaled to 0
        laptop.position.set(0, -1, 0); // Center the model
        scene.add(laptop);
        laptopRef.current = laptop;

        // Add Pop Animation (Scale Up)
        let animationProgress = 0;
        const animationDuration = 1.7; // 2 seconds
        const targetScale = 0.5; // Final scale

        const animateLaptop = () => {
          if (animationProgress < animationDuration) {
            animationProgress += 0.01; // Animation speed
            const easeOut = Math.sin((animationProgress / animationDuration) * (Math.PI / 2)); // Ease-out effect
            const scale = easeOut * targetScale;
            laptop.scale.set(scale, scale, scale); // Smoothly scale the model
          }
        };

        // Add the scale animation into the render loop
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

    // Rotation Logic
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (event) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseMove = (event) => {
      if (isDragging && laptopRef.current) {
        const deltaMove = {
          x: event.clientX - previousMousePosition.x,
          y: event.clientY - previousMousePosition.y,
        };

        // Update rotation based on mouse movement
        const rotationSpeed = 0.01; // Adjust rotation speed
        laptopRef.current.rotation.y += deltaMove.x * rotationSpeed; // Horizontal rotation
        laptopRef.current.rotation.x += deltaMove.y * rotationSpeed; // Vertical rotation

        previousMousePosition = { x: event.clientX, y: event.clientY };
      }
    };

    // Add Event Listeners to the Container
    const container = mountRef.current;
    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);

    // Cleanup
    return () => {
      renderer.dispose();
      container.removeChild(renderer.domElement);
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "400px", height: "400px", overflow: "hidden" }}></div>;
};

export default LaptopModel;
