---
layout: page
title: Performance Profiling
permalink: /chapter/performance/
categories: chapter
visualizations:
---

{% include autoRelativePath.html %}

- general info about performance profiling

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
