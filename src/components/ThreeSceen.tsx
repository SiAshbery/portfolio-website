'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

type props = {
    renderScene: Function;
    handleResize?: Function;
    width: number;
    height: number;
    className?: string;
};

const ThreeScene = ({ className, renderScene, handleResize, width, height }: props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(width, height);

            /* 
            This is a bit of hack, useEffect runs twice on initial render
            and so it was appending two canvases.
            this line makes sure it only runs once.
            */
            if (containerRef.current?.childNodes.length === 0) {
                containerRef.current?.appendChild(renderer.domElement);
            }

            // Call the renderScene function to start the animation loop
            renderScene(scene, camera, renderer);
        }
    }, []);

    return <div className={className} ref={containerRef} />;
};

export default ThreeScene;
