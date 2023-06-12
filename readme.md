# Three.js Journey: Introduction to Basic Object Movement

This project is a part of a course on [Three.js Journey](https://threejs-journey.xyz/) and provides an introduction to basic object movement and camera control in Three.js.

## Overview

In this project, we create a 3D scene using Three.js, with a box that can be controlled using the arrow keys. The box moves in the scene based on user input, and if the box moves beyond a certain distance from the camera, it is teleported back to its original position.

## Key Concepts

- **Three.js Basics**: How to set up a basic 3D scene using Three.js with a single box object and a camera.
- **Object Movement**: How to use keyboard input to move a 3D object in a scene.
- **Camera Control**: How to control the camera's position in relation to an object.
- **Distance Calculation**: How to calculate the distance between two objects in a 3D space and use this to trigger certain behaviors.

## Setup and Run

To run this project, you will need to have a local server running. If you have Node.js and npm installed, you can use http-server, a simple, zero-configuration command-line HTTP server.

Install necessary dependencies:
```bash
npm install
```

Then you can start the application:
```bash
npm run dev
```



## How to Use

Use the arrow keys to control the box:

- Arrow Up: Moves the box towards the view.
- Arrow Down: Moves the box away from the view.
- Arrow Left: Moves the box to the left.
- Arrow Right: Moves the box to the right.

## Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [Three.js Journey Course](https://threejs-journey.xyz/)
