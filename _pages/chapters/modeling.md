---
layout: page
title: 3D Modeling & Rendering
permalink: /chapter/modeling/
categories: chapter
visualizations:
---

# 3D Modeling

There are several techniques of creating a virtual representation of 3D models.
The surface of an object can be approximated by a graph structure which is called mesh.
An advantage of meshes is that the creator can decide how complex the geometry of an object may become.
Based on this, the performance of the final application can be optimized by reducing the mesh complexity on unimportant objects.
However, a disadvantage is that it is not possible to create perfectly rounded surfaces.
The smoother a curvature should be, the more refined the mesh needs to be.
This will affect the application's performance.
Alternatively, 3D models can be created using Computer-Aided Design (CAD).
The strength of CAD is that is works with exact mathematical definitions of shapes.
This leads to perfectly curved surfaces which are for instance required when designing a car.
Both meshes and CAD focus on the outside hull of an object and disregard its interior.
This is addressed in the volumetric representation of objects.
It stores density values in a three-dimensional grid which provides information about the shape of the object as well as its inside.
Volumetric representations are often used in medicine in order to get a meaningful visualization a patient's body.

## Meshes

A mesh is an undirected graph which approximates the surface of an object.
It consists of individual vertices which are situated at defined points in 3D.
The vertices can be connected with an edge between them.

### Modeling Techniques

It is also possible to use structure from motion photogrammetry to create 3D models {% cite WBGH12 %}.
Photogrammetry is also a 3D scanning technique but it only requires a standard camera.
With this camera, a series of photos are taken from various different angles and positions.
Alternatively, it is also common to use an array of cameras which are all triggered at the same time to take a photo.
The photos are later processed in photogrammetry software in order to generate the 3D model.
The software looks for common feature points in the images and tries to match them.
Because of the fact that the images have been taken at different positions, the feature point is shifted in the other image and so the software can determine the depth of the feature point.
This is similar to the way how humans can perceive depth from parallax motion, e.g. when looking out of the window of a moving train.
Object which are close to the viewer like signal installations at the rails will quickly move through the field of view while distant trees seem to travel through the field of view at a slower speed.

Photogrammetry is capable of producing realistic results since it does not only provide geometry information but can also project the original images onto the 3D model in order to create a texture.
Among other areas of application it is used in aerial photography and archaeology.

The presented modelling techniques of digital sculpting, 3D scanning and photogrammetry typically result in a high-density triangle mesh.
The problem with this mesh is that it is irregular and often bears unnecessary complexity.
For instance, a 3D scanned table consists of many small triangles but its table top could be simplified to one planar shape which only consists of two triangles.
Additionally, it is not possible to animate the high-complexity 3D meshes since any movement results in stretched surfaces.
Due to this, it is possible to retopologize the mesh {% cite PDZR18 %}.
In this technique, the high-density mesh resulting from the sculpting process or 3D scan is used as a base mesh.
Then, a 3D artist creates a new mesh on top of this base mesh.
The new mesh is typically created using quads and it considers the shape of the object and how it might be animated.
As a main idea, the quads form strips which should follow the object's main curves and which should align to any hard edges.
Since the manual creation of such a retopology mesh is tedious, there are algorithms which automate this process {% cite PDZR18 %}.

- Composing basic shapes
- digital sculpting
- 3D scanning
- photogrammetry
- retopology

### Textures

- UV unwrapping

## Computer-Aided Design (CAD)

### CAD Modeling Tools

## Volumetric Representation

# 3D Programs

Several alternatives of programs exist for creating 3D models and rendering them.
All of the programs have an integrated 3D rendering engine and provide further features like animations.
Blender, Maya and 3Ds Max also provide physics simulations.

Blender {% cite Blender %} is a free open-source application.
It is available for Windows, macOS and Linux.


- Blender
- Maya
- 3Ds Max
- SketchUp
- ZBrush
- Cinema 4D