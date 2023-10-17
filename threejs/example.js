// reference tutorials: https://www.youtube.com/watch?v=zrwUIS7rj54
// create scene
const scene = new THREE.Scene();

// create camera
const camera = new THREE.PerspectiveCamera(50, 2 / 1, 0.1, 1000);
camera.position.z = 15;

// render scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(750, 450);
document.body.appendChild(renderer.domElement);

// create 3D object(s) -- Cylinder
const geometry = new THREE.CylinderBufferGeometry(2, 2, 7, 50);
const material = new THREE.MeshBasicMaterial({
  color: '#8bc34a',
  wireframe: true
});
const cylinder = new THREE.Mesh(geometry, material);

// Create a capsule
const geometry1 = new THREE.CapsuleGeometry( 4, 4, 4, 8 ); 
// const material1 = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
const capsule1 = new THREE.Mesh( geometry1, material ); 
scene.add( capsule1 );

// Create a cone
const geometry2 = new THREE.ConeGeometry( 1, 2, 32 ); 
// const material2 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone2 = new THREE.Mesh(geometry2, material ); 
scene.add( cone2 );

// Create a cone
const geometry3 = new THREE.BoxGeometry( .5, .5, .5 ); 
// const material3 = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
const cube3 = new THREE.Mesh( geometry3, material ); 
scene.add( cube3 );

// add object(s) to scene
scene.add(cylinder);

// animate object(s)
const animate = () => {
  requestAnimationFrame(animate);

  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;

  capsule1.rotation.x += 0.01;
  capsule1.rotation.y += 0.01;

  cube3.rotation.x += 0.01;
  cube3.rotation.y += 0.01;

  renderer.render(scene, camera);
};

// call animate to display
animate();
