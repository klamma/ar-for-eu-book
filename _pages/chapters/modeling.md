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
An advantages of meshes is that the creator can decide how complex the geometry of an object may become.
Based on this, the performance of the final application can be optimized by reducing the mesh complexity on unimportant objects.
However, a disadvantage is that it is not possible to create perfectly rounded surfaces.
The smoother a curvature should be, the more refined the mesh needs to be.
This will affect the application's performance.
Alternatively, 3D models can be created using Computer Aided Design (CAD).
The strength of CAD is that is works with exact mathematical definitions of shapes.
This leads to perfectly curved surfaces which are for instance required when designing a car.
Both mehses and CAD focus on the outside hull of an object and disregard its interior.
This is addressed in the volumetric representation of objects.
It stores density values in a three-dimensional grid which provides information about the shape of the object as well as its inside.
Volumetric representations are often used in medicine in order to get a meaningful visualization a patient's body.

## Meshes

A mesh is an undirected graph which approximates the surface of an object.
It consists of individual vertices which are situated at defined points in 3D.
The vertices can be connected with an edge in-between them.

### Modeling Techniques

- starting from basic shapes
- digital sculpting
- retopology

### Textures

- UV unwrapping

### Mesh-based Modeling Tools

- Blender
- Maya
- 3Ds Max
- SketchUp
- ZBrush
- Cinema 4D

## Computer Aided Design (CAD)

### CAD Modeling Tools

## Volumetric Representation

# Rendering

## Rendering Pipeline

## Shader Programming

## Physically Based Rendering (PBR)

## Volumetric Rendering