const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("container").appendChild(renderer.domElement);

camera.position.z = 6;


// Cylinder Geometry
const geometry = new THREE.CylinderGeometry(2, 2, 4, 32);

const material = new THREE.MeshBasicMaterial({
color:0x00ffcc,
wireframe:true
});

const cylinder = new THREE.Mesh(geometry, material);

scene.add(cylinder);


// Animation
function animate(){

requestAnimationFrame(animate);

cylinder.rotation.x += 0.01;
cylinder.rotation.y += 0.01;

renderer.render(scene, camera);

}

animate();