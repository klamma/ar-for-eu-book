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
Based on this, the performance of the final application can be optimised by reducing the mesh complexity on unimportant objects.
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

{% include image.html url="/assets/figures/modeling/Mesh.png" base=pathToRoot description="Structure of a Mesh" %}

## Modeling Techniques

Mesh-based 3D models can be created using a number of techniques.
It is also possible to combine these techniques in one workflow.

### Compositing Primitives

A beginner-friendly way of manual modeling is to approximate objects by a composition of primitive shapes like cubes or spheres.
Such basic shapes are usually included in 3D programs by default and can directly be added to a scene.
The primitives are moved, rotated, scaled and stretched in order so that they fit the target object as good as possible.
For instance, a table can be approximated by creating five cubes.
One of them is compressed along the vertical axis and represents the tabletop.
The other four cubes are streched into thin and long cuboids and are aligned with the corners of the tabletop.
They act as the legs of the table.

{% include image.html url="/assets/figures/modeling/ModelingTechnique_CompositingPrimitiveShapes.png" base=pathToRoot description="Example Workflow for Compositing Primitives" %}

This technique only requires transformations, rotations and scaling operations and therefore, objects can be created without much effort.
Thus, results can be achieved quickly.
However, the basic shapes can only approximate the object.
Intricate shapes and especially organic forms cannot be modeled with this technique.
Primitives are best used to prototype a scene {% cite Simonds2013Blender %}, e.g. to block out the general shapes of objects and to establish its proportions.
Additionally, primitives can also be used as a starting point, e.g. for subsequent manual modeling or sculpting processes.

### Boolean Operations

One can also use Boolean operations in order to create complex 3D shapes from multiple base meshes.
Boolean operations are heavily used in CAD where they are defined on volumes.
The volumes are combined using operations known from Boolean algebra, e.g. OR, AND or XOR.

Intuitively, the for every point in space and every base volume, a truth value is determined.
It states if the point is part of the volume.
By combining the truth values for this point using a Boolean operator, one can determine if the point is part of the resulting volume.
For instance, the union operation combines the points of the base volumes using the OR-operator.
Therefore, a point is part of the resulting volume if it is part of any of the starting volumes.
For the AND-operator, a point is only part of the resulting volume if it is part of all base volumes.
This corresponds to the intersection of the objects.
The substraction operation can be achieved by the NOT operator.
Here, the result volume consists of all points which are part of the first volume but are not inside the other volumes.
The substraction is not symmetric, i.e. it yields different results with different volume orders.

{% include image.html url="/assets/figures/modeling/BooleanOperations.png" base=pathToRoot description="Overview of the Boolean operations in 2D" %}

Boolean operations also work on meshes.
Here, the volume is regarded which are encapsulated by a mesh.
The expected result is a mesh which encapsulates the resulting volume.
To achieve this, special algorithms are used to clip the individual meshes, e.g. the Greiner-Hormann clipping algorithm {% cite GreinerHormannClipping98 %} or the Vatti clipping algorithm {% cite VattiClipping92 %}.
The trimmed meshes are combined into one resulting mesh.

### Digital Sculpting

Digital sculpting is inspired by real clay sculpting.
Similar to real sculpting, the 3D artist starts with a base shape and can pull and dent the virtal material to create bumps and creases.
Usually, the large shapes are defined first and then progress is made on smaller details.
These operations are performed in a 3D sculpting program using a mouse or a tracked stylus {% cite Simonds2013Blender %}.
A difference to real sculpting is that is is possible to dynamically add or remove volume at any point which enables the sculptor to extend the object in any way.
During the process, the sculpted mass is automatically defined by a mesh which is managed and optimised by the sculpting program.

With digital scupting the 3D artist can focus on forming the shape of the object without worrying about the underlying mesh geometry.
Like manual modeling, it is possible to create real and imaginative objects.
However, just like real sculpting, training is required in order to achieve results with high quality.
Digital scuplting is well suited for creating organic shapes, e.g. for designing characters.
Sometimes, it is also used in a creative way to prototype the shapes of an object with hard edges.

### Sketch-Based Modeling


### 3D Scanning


### Photogrammetry

It is also possible to use structure-from-motion photogrammetry to create 3D models {% cite WBGH12 %}.
Photogrammetry is also a 3D scanning technique but it only requires a standard camera.
With this camera, a series of photos is taken from various different angles and positions.
Alternatively, it is also common to use an array of cameras which are all triggered at the same time to take a photo.
The photos are later processed in photogrammetry software in order to generate the 3D model.
The software looks for common feature points in the images and tries to match them.
Because of the fact that the images have been taken at different positions, the feature point is shifted in the other image and so the software can determine the depth of the feature point.
This is similar to the way how humans can perceive depth from parallax motion, e.g. when looking out of the window of a moving train.
Objects which are close to the viewer like signal installations at the rails will quickly move through the field of view while distant trees seem to travel through the field of view at a slower speed.

Photogrammetry is capable of producing realistic results since it does not only provide geometry information but can also project the original images onto the 3D model in order to create a texture.
Among other areas of application it is used in aerial photography and archaeology.

3D models from photogrammetry can be created with the commercial software products [Agisoft Metashape](https://www.agisoft.com/), [RealityCapture](https://www.capturingreality.com/), [Autodesk ReCap](https://www.autodesk.com/solutions/photogrammetry-software) and the open-source tool [Meshroom](https://alicevision.github.io/#meshroom).


### Manual Mesh Creation

The previous methods all work on an object-level where the modeler is only concerned with the shape of the object while the computer constructs the according mesh data.
However, it is also possible to manually construct the mesh.
This means that the 3D artist adds and manipulates individual vertices and defines edges and faces in order to build the final mesh.
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

With mesh creation, the creator has full control over the mesh's complexity and topology.
This is helpful for optimizations, e.g. if the model should be used in real-time rendering.
Additionally, a clean topology helps in managing the amount of detail which is portrayed in the mesh.
It it also helpful for animatable objects since the topology can be laid out in a way that it supports the movements.
The main disadvantage of this technique is that it is a tedious and slow process.
Similar to drawing, the quality of the result depends on the artistic skills of the creator.
Apart from defining the shape of the object, the modeler also has to think about a suitable topology to repesent the shape as a mesh.
The technique works well for man-made objects since they consist of clear shapes and hard edges which are good reference points in the modeling process.
Creating organic objects by hand this way is tricky.

### Box Modeling

Box modelling describes a method in which faces of a polygon cube are extruded and manipulated to create a complex model. 
The process generally utilises a simple iterative method where extruded faces are moved, scaled and rotated to represent an object.
The name box modelling refers to the use of a cube as a starting point and often has a very angular result.
Final stages of the project may work with smoothing functions to provide a more organic look, however during development it is optimal to retain a low polygon count.

### Retopology

The presented modeling techniques of digital sculpting, 3D scanning and photogrammetry typically result in a high-density triangle mesh.
The problem with this mesh is that it is irregular and often bears unnecessary complexity {% cite Simonds2013Blender %}.
For instance, a 3D scanned table consists of many small triangles but its table top could be simplified to one cuboid shape which only consists of two triangles per side.
Additionally, it is not possible to animate the high-complexity 3D meshes since any movement results in condensed geometry and stretched surfaces.
In real-time rendering, the amount of polygons also has an impact on the runtime of the rendering pipeline.
This means that high-density meshes will take longer to render and therefore the framerate will be lower.
Due to this, complex meshes should be retopologised {% cite PDZR18 %}.
In this technique, the high-density mesh resulting from the sculpting process or 3D scan is used as a base mesh.
After that, a new mesh is created on top of this base mesh.
This can be done manually or by an algorithm.
The new mesh is typically created using quads and it considers the shape of the object and how it might be animated.
As a main idea, the quads form strips which should follow the object's main curves and which should align to any hard edges {% cite Simonds2013Blender %}.
Since the manual creation of such a retopology mesh is tedious and time consuming, there are algorithms which automate this process {% cite PDZR18 %}.
The result of the retopology is a mesh which describes almost the same shape as the original high-density mesh but it is more lightweight and optimised.
However, the retopology process may lose some details which were captured by the high vertex-density of the original mesh.
To solve this, the difference between the two meshes can be "baked" into a displacement or normal texture.
This way, small details can be captured in the texture and are shown by the shader.
Details on this displacement and normal maps are described in the "Textures" section.

{% include image.html url="/assets/figures/modeling/MeshTopologyExample.png" base=pathToRoot description="a: Mesh as a result of a sculpting or 3D scanning process.<br/>b: Cutout of (a) showing the geometry.<br/>c: Manually retopologised mesh using quads.<br/>d: Cutout of (c) showing the geometry. A selection of important face loops is highlighted in green." %}

### Subdivision Surface Modeling

A technique which is used for creating smooth, organic surfaces is called Subdivision Surface Modeling {% cite DKTr98 %}.
The modeler constructs a guide mesh.
After that, an algorithm constructs a smooth version of the modeled shape.
It achieves this by subdividing the faces of the guide mesh and by calculating the vertex positions of the resulting mesh with regard to the vertex positions of the guide mesh.
There are different algorithms which differ concerning the position calculation rules.
Once the algorithm has been applied, the resulting mesh can act as a new guide mesh for the next iteration of the algorithm.
Thus, the geometry can be smoothed further by applying the subdivision surface algorithm recursively.
However, this also yields a mesh with more vertices {% cite CaCl78 %}.

{% include image.html url="/assets/figures/modeling/Subsurf.png" base=pathToRoot description="Different iteration amounts of the subdivision surface algorithm as it is implemented in Blender" %}

## Textures

Textures are images which are applied to the 3D object's faces, e.g. to give colour to the surface.
More details about textures are described in the chapter about [Computer Graphics]({{pathToRoot}}/chapter/cg).

### UV-Unwrapping

Since image textures are two-dimensional data, a mapping is needed from the 3D room with the object to the 2D space with the texture.
It defines which texture pixel, also called "texel", is displayed on the mesh's face.
The process of creating this mapping is called UV-unwrapping.
Intuitively, the mesh is cut open at some edges so that its 3D shape can be unfolded into a flat form.
The image texture is applied to this flat representation.

More technical, each vertex of the mesh is mapped to a 2D vertex in the space of the texture and with new connectivity data.
The 2D texture space is also called UV-space, the two axes are labelled with U and V instead of X and Y.
This distinguishes the UV-coordinates which are associated with a texture with points in the 3D room.
UV-coordinates range from 0 to 1 with the point (0,0) at the left bottom of the image and (1,1) at the top right.
This also means that UV-points are independent of the texture resolution and are scaled with the image.
When UV-unwrapping an object, its faces are laid out on the texture.
Good UV-unwrappings minimise the amount of stretching.
Stretching occurs if the shape of a face is distorted in the UV-space.
Especially curved surfaces like a sphere are difficult to UV-unwrapping without stretched textures.

{% include image.html url="/assets/figures/modeling/UVCubeMap1.png" base=pathToRoot description="A UV map which projects a cube to a texture." %}
{% include image.html url="/assets/figures/modeling/UVCubeMap2.png" base=pathToRoot description="Another UV map which also projects the cube to a texture. In the UV map, the faces do not have the same shape as in 3D. This leads to a stretched texture on the cube." %}

To minimize the stretched textures, edges of the mesh can be marked as seams.
This means that the faces which are not connected in the texture space.
Subsequently, a vertex in the 3D space can be mapped to multiple vertices in the UV-space if the adjacent edges are seams.
The problem of seams is that they create discontinuities in the texture on the faces.
For instance, if a brick wall texture is applied to a cube, it can happen that the "lines" of brickwork do not match up at the seams.
Hence, a 3D artist has to do manual corrections by moving the unwrapped face on the texture until the seams match.
For this reason, seams are often placed in areas which are less visible to the virtual camera.

{% include image.html url="/assets/figures/modeling/UVSeam1.png" base=pathToRoot description="Example showing texture discontinuities at a seam." %}
{% include image.html url="/assets/figures/modeling/UVSeam2.png" base=pathToRoot description="The discontinuities caused by the seam can be fixed by manually aligning the adjacent faces in the UV layout or by placing seams on less visible edges." %}

### Texture Resources

There are various online repositories which offer photo textures for varying purposes and with different qualities, prices and licenses.
A large amount of these online resources offers PBR-compatible textures which means that it does not only provide image textures but also other data like normal maps, metallic maps, roughness/smoothness maps and ambient occlusion maps.

Here is a list of such texture repositories:

| Name | Web address | Price | License | PBR | Number of textures |
| --- | --- | --- | --- | --- |
| CC0 Textures | [https://cc0textures.com/](https://cc0textures.com/) | Free | CC0 | yes | > 700 |
| Poliigon | [https://www.poliigon.com/](https://www.poliigon.com/search?type=texture) | Annual or monthly subscription ($12 - $47 per month) | Based on the subscription plan | yes | > 3100 |
| Texture Haven | [https://texturehaven.com/textures/](https://texturehaven.com/textures/) | Free | CC0 | yes | > 140 |
| textures.com | [https://www.textures.com/](https://www.textures.com/) | Per texture (low resolutions are free; requires registration) | Per texture | mostly | > 7500 |

Apart from downloading online resources, it is also possible to create textures from photos, procedural logic, photoscans and by hand-painting them.

### Texture Painting

Textures can be created in photo editing and drawing applications such as Adobe Photoshop or GIMP.
However, it is difficult to paint details on the texture which should appear at a certain position on the model because the UV-layout needs to be considered.
Therefore, 3D programs provide a texture painting mode which allows the user to directly paint on the 3D model.
Pen strokes are transferred onto the underlying image texture with respect to the UV-layout.
Apart from manually painting the colour, one can also use a clone tool to blend different photorealistic textures into each other.
This way, small details can be set up quickly and obvious tiling patterns can be hidden.
For instance, a mud material can be set up separately of a water material.
After that, the two materials can be blended together by hand-painting a mask which defines puddles on a muddy ground.

Another technique is projection painting.
A 2D texture is shown as a semi-transparent overlay on the screen.
Behind the texture, the 3D object can be seen.
When painting, the texture is projected onto the 3D object based on the current viewpoint.

The following table contains a list of tools which can be used for texture painting:

| Name | Web address | Price |
| --- | --- | --- |
| 3D Coat | [https://3dcoat.com/](https://3dcoat.com/) | $99 - $568 |
| Armorpaint | [https://armorpaint.org/](https://armorpaint.org/) | 16 Euro, optional subscription to support developers (Open-Source) |
| Blender | [https://www.blender.org/](https://www.blender.org/) | Free (Open-Source) |
| Substance Painter | [https://www.substance3d.com/products/substance-painter/](https://www.substance3d.com/products/substance-painter/) | Monthly Subscription ($19.90 - $99.90) |

#### Exercise: Texture Painting in Blender

### Texture Baking

## Computer-Aided Design (CAD)

### CAD Modeling Tools

## Volumetric Representation