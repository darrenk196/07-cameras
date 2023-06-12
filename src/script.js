import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

// Initialize object movement
const movement = {
  x: 0,
  y: 0,
  z: 0,
};

// Event Listener for Keydown
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      movement.z -= 0.1; // Move towards the view
      break;
    case "ArrowDown":
      movement.z += 0.1; // Move away from the view
      break;
    case "ArrowLeft":
      movement.x -= 0.1; // Move to the left
      break;
    case "ArrowRight":
      movement.x += 0.1; // Move to the right
      break;
    default:
      break;
  }
  console.log(movement);
});

scene.add(mesh);

// Camera
const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  1,
  1000
);
camera.position.z = 2;

scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animate
const clock = new THREE.Clock();

// Distance threshold
const threshold = 15;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update object position
  mesh.position.x += movement.x;
  mesh.position.y += movement.y;
  mesh.position.z += movement.z;

  // Calculate distance between the box and the camera
  const distance = mesh.position.clone().sub(camera.position).length();

  // If the box is farther than the threshold, reset its position
  if (distance > threshold) {
    mesh.position.set(0, 0, 0); // Reset position to (0, 0, 0)
    movement.x = 0; // Reset movement as well
    movement.y = 0;
    movement.z = 0;
  }

  // Update object rotation
  mesh.rotation.y = elapsedTime;

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
