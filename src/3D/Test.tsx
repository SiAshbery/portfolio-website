import * as THREE from 'three';

// geometry
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0x20ff12 });
const cube = new THREE.Mesh(geometry, material);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
const fillLight = new THREE.DirectionalLight(0x1212ff, 5);

const test = (
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
) => {
    camera.position.z = 5;
    scene.add(cube);
    scene.add(directionalLight);
    scene.add(fillLight);
    // animation
    cube.rotation.x += 0.01;
    cube.rotation.y -= 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(() => test(scene, camera, renderer));
};

export default test;
