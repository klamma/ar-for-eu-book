---
layout: page
title: Performance Profiling
permalink: /chapter/performance/
categories: chapter
visualizations:
---

{% include autoRelativePath.html %}

Monitoring and optimising the performance of an AR application is important to ensure a pleasant user experience.
Performance profiling of AR applications is not only concerned with the responsiveness of the app.
Instead, developers need to look at further measures like the application's framerate.
The framerate is a number which counts how many images the real-time graphics application can render per second.
Maintaining stable, high framerates is a necessary requirement for a pleasant usage experience.
In AR and VR applications, low framerates can lead to physical discomfort and dizzyiness in the form of cybersickness.

AR applications are mainly deployed to portable devices like the Microsoft HoloLens and smart phones.
Hence, performance profiling also regards the optimisation of the application's power consumption to avoid that the device's battery is drained.
Additionally, developers should monitor the memory footprint of the application.
With real-time graphics applications, an the memory consumption can quickly rise if the developer uses a lot of high-resolution assets like textures or 3D models.

There are various different tools which allow developers to monitor and analyze the performance of an application.
They are used to identify bottlenecks and narrow down the reason for a restricted performance.

# Unity Performance Profiler

- how to find it
- information that it provides
- usage with HoloLens

# Mixed Reality Toolkit Profiler Window

- how to enable and disable it
- information that it provides

# Visual Studio Profiler

- how to access it
- information that it provides

# HoloLens Device Portal

- how to access it
- information that it provides

# Performance Optimisation

- performance guidelines: frames per second to make the user feel comfortable
- the problem with threading in Unity
- hints how performance can be saved
- in programming:
   - do not do blocking operations on the main loop, use Coroutines instead
   - avoid Update(): check if the procedure really needs to run every frame
   - remove empty Start() and Update() calls
   - avoid Camera.main
   - avoid repeated queries to find GameObjects or MonoBehaviours (e.g. GetComponent)
   - do not use SendMessage()
   - avoid Instantiate(), instead use object pooling
   - avoid LINQ
   - do not use boxing
- in scene setup:
   - use Mixed Reality Toolkit materials
   - texture quality
   - reduce the vertex count of meshes
   - check audio sources
   - avoid mesh colliders
   - use single pass instanced rendering but check that the used shaders support it (e.g. the standard TextMeshPro shader does not)
   - avoid post-processing effects
