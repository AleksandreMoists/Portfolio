import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const LaptopModel = () => {
  const mountRef = useRef(null);
  const laptopRef = useRef(null); // Reference for the laptop model

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 2, 20); // Default camera position

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
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
      "/models/laptop.glb", // Path to the laptop model
      (gltf) => {
        const laptop = gltf.scene;
        laptop.scale.set(1, 1, 1); // Adjust the scale
        laptop.position.set(0, -1, 0); // Center the model
        scene.add(laptop);
        laptopRef.current = laptop; // Save reference to the laptop
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    // Mouse Rotation Variables
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const rotation = { x: 0, y: 0 }; // Track rotation state for X and Y axes

    // Mouse Events for Rotation
    const onMouseDown = () => (isDragging = true);
    const onMouseUp = () => (isDragging = false);
    const onMouseMove = (event) => {
      if (isDragging && laptopRef.current) {
        const deltaMove = {
          x: event.clientX - previousMousePosition.x,
          y: event.clientY - previousMousePosition.y,
        };

        // Update rotation based on mouse movement
        rotation.x += deltaMove.y * 0.01; // Adjust rotation on X-axis
        rotation.y += deltaMove.x * 0.01; // Adjust rotation on Y-axis

        laptopRef.current.rotation.x = rotation.x;
        laptopRef.current.rotation.y = rotation.y;

        previousMousePosition = { x: event.clientX, y: event.clientY };
      }
    };

    // Event Listeners
    window.addEventListener("mousedown", (event) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    });
    window.addEventListener("mouseup", () => (isDragging = false));
    window.addEventListener("mousemove", onMouseMove);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle Cleanup
    return () => {
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }}></div>;
};

export default LaptopModel;
