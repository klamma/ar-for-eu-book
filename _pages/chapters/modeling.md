---
layout: page
title: 3D Modeling & Rendering
permalink: /chapter/modeling/
categories: chapter
visualizations:
---

{% include autoRelativePath.html %}

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
Vertices and edges form faces which are visible as a surface in a rendered image.

![Mesh]({{pathToRoot}}/assets/figures/modeling/Mesh.png)

### Modeling Techniques

Mesh-based 3D models can be created using a number of techniques.
It is also possible to combine these techniques in one workflow.

#### Compositing Primitives

A beginner-friendly way of manual modeling is to approximate objects by a composition of primitive shapes like cubes or spheres.
Such basic shapes are usually included in 3D programs by default and can directly be added to a scene.
The primitives are moved, rotated, scaled and stretched in order so that they fit the target object as good as possible.
For instance, a table can be approximated by creating five cubes.
One of them is compressed along the vertical axis and represents the tabletop.
The other four cubes are streched into thin and long cuboids and are aligned with the corners of the tabletop.
They act as the legs of the table.

The technique only requires transformations, rotations and scaling operations and therefore, objects can be created without much effort.
Thus, results can be achieved quickly.
However, the basic shapes can only approximate the object.
Intricate shapes and especially organic forms cannot be modeled with this technique.
Primitives are best used to prototype a scene {% cite Simonds2013Blender %}, e.g. to block out the general shapes of an object and to establish its proportions.
Alternatively, primitives can also be used as a starting point, e.g. for subsequent manual modeling or sculpting processes.

#### Manual Modeling

A flexible but also quite advanced technique for creating 3D objects is modeling them by hand.
This means that the 3D artist adds and manipulates individual vertices in order to build the final mesh.
One can either start from scratch or adapt existing primitive shapes.
An example would be the (artistic) modeling process of a car.
(In the production process, cars are usually modeled with CAD shapes since they can define exact and smooth curvatures.
However, for real-time applications like games, cars are modeled as mesh-based objects).
In this example, a 3D artist could start with reference images of the real car which are placed on the top view, front view and side view.
After that, vertices are placed one by one in such a way that they align with all three background images.
When placing the vertices, they are connected to edges and also form faces.
Here, the 3D artist needs to make sure that the edges and face strips follow the major forms of the car's body.
Additionally, the topology of the mesh needs to be managed, e.g. to avoid a mesh that is too dense.
3D programs offer different features to support the modeling process.
Especially a series of generative modifiers like live-mirroring for symmetric shapes or automatically subdividing edges to add more vertices accelerate the process and improve the result {% cite Simonds2013Blender %}.
Creating realistic 3D object using this technique requires training and in-depth knowledge of the supporting features.
A wide range of tutorials exist online which teach how to create different objects and explain different tricks which can be used to maximize the effectiveness of the modeling program's features.

An advantage of manual modeling is the fact a trained 3D artist can create realisic 3D objects only based on a couple of images of the original object.
Additionally, objects which do not exist in the real world can still be modeled.
Another advantage is that the creator has full control of the mesh's complexity and can optimize it, e.g. for the usage in real-time rendering.
Manual modeling can also be performed without additional hardware.
It only requires a computer and a 3D modeling program.
The main disadvantage of this technique is that it is a tedious and slow process.
Similar to drawing, the quality of the result depends on the artistic skills of the creator.
The technique works well for man-made objects since they consist of clear shapes and hard edges which are good reference points in the modeling process.
Creating organic objects by hand this way is tricky and is better done by digital sculpting.

#### Digital Sculpting

Digital sculpting is inspired by real clay sculpting.
Similar to real sculpting, the 3D artist starts with a base shape and can pull and dent the virtal material to create bumps and creases.
These operations are performed in a 3D sculpting program using a mouse or a tracked stylus {% cite Simonds2013Blender %}.
A difference to real sculpting is that is is possible to dynamically add or remove material at any point which enables the sculptor to extend the object in any way.
During the process, the sculpted mass is automatically defined by a mesh which is managed and optimized by the sculpting program.

With digital scupting the 3D artist can focus on forming the shape of the object without worrying about the underlying mesh geometry.
Like manual modeling, it is possible to create real and imaginative objects.
However, just like real sculpting, training is required in order to achieve results with high quality.
Digital scuplting is well suited for creating organic shapes, e.g. for designing characters.
Sometimes, it is also used in a creative way to prototype the shapes of an object with hard edges.

#### 3D Scanning



#### Photogrammetry

It is also possible to use structure-from-motion photogrammetry to create 3D models {% cite WBGH12 %}.
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

3D models from photogrammetry can be created with the commercial software products [Agisoft Metashape](https://www.agisoft.com/), [RealityCapture](https://www.capturingreality.com/) and the open-source tool [Meshroom](https://alicevision.github.io/#meshroom).


#### Retopology

The presented modelling techniques of digital sculpting, 3D scanning and photogrammetry typically result in a high-density triangle mesh.
The problem with this mesh is that it is irregular and often bears unnecessary complexity {% cite Simonds2013Blender %}.
For instance, a 3D scanned table consists of many small triangles but its table top could be simplified to one cuboid shape which only consists of two triangles per side.
Additionally, it is not possible to animate the high-complexity 3D meshes since any movement results in condensed geometry and stretched surfaces.
In real-time rendering, the amount of polygons also has an impact on the runtime of the rendering pipeline.
This means that high-density meshes will take longer to render and therefore the framerate will be lower.
Due to this, complex meshes should be retopologized {% cite PDZR18 %}.
In this technique, the high-density mesh resulting from the sculpting process or 3D scan is used as a base mesh.
Then, a 3D artist or an algorithm creates a new mesh on top of this base mesh.
The new mesh is typically created using quads and it considers the shape of the object and how it might be animated.
As a main idea, the quads form strips which should follow the object's main curves and which should align to any hard edges {% cite Simonds2013Blender %}.
Since the manual creation of such a retopology mesh is tedious and time consuming, there are algorithms which automate this process {% cite PDZR18 %}.

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