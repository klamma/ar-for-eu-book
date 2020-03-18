---
layout: page
title: Performance Profiling
permalink: /chapter/performance/
categories: chapter
visualizations:
---

{% include autoRelativePath.html %}

# Performance Metrics

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

# Performance Profiling Tools

There are various different tools which allow developers to monitor and analyze the performance of an application.
They are used to identify bottlenecks and narrow down the reason for a restricted performance.

## Unity Performance Profiler

Unity has its own built-in profiler.
It provides detailed information about the caused CPU load and memory consumption.
Additionally, more details are available about the CPU and memory consumption of the rendering pipeline, the physics simulation and the audio sources in the scene.

The Unity profiler can be found in the Unity editor under "*Window > Analysis > Profiler*" or by pressing `Ctrl + 7`.
In the top bar there is a button "Record" which needs to be set to active so that the profiler actually tracks the performance data.
With the window open, press the play button in the Unity editor to start the application.
The profiler window will start filling with statistics while the application runs.
The profiler window only visualizes the data of the last 300 frames.
This number can be increased in the preferences of Unity.
Hence, one should pause or stop the application's execution once interesting data have been generated.
In the top bar of the profiler, there is also an option to save the recorded data in a binary format.
This way, they can be inspected again at a later point by loading the generated log file into the profiler again.

{% include image.html url="/assets/figures/performance_profiling/UnityProfiler.png" base=pathToRoot description="Unity's profiler window with sample data" %}


Further information about the profiler can be found in [Unity's documentation about the profiler window](https://docs.unity3d.com/Manual/ProfilerWindow.html).

By default, Unity evaluates the performance of the application while it is running on the development PC.
Since it most likely does not have the same hardware specifications as the target device, e.g. the HoloLens, this will not give an accurate impression of the performance of the deployed application.
However, it is already helpful to profile on the development PC to analyse which components are computationally expensive.

### Profiling a Deployed Application on a Device Using Unity's Profiler

Unity's profiler is also able to record statistics of a deployed application while it is running on the target device.
A prerequisite for remote profiling is that the application is marked as a *Development Build*.
This option *Development Build* can be checked in the build window under "*File > Build Settings...*".
Once this option is marked, you can also check "Autoconnect Profiler".
It will write the IP address of the development PC into the application.
Once it is executed, the application will search for the profiler and send data to it.

For the Microsoft HoloLens, the UWP app also requires internet capabilities.
It can be set in the player preferences which can be opened in the inspector by clicking the button "Player settings..." in the build window.
In the tab for Universal Windows Platform settings which displays a Windows logo, the capabilities can be set in the section *Publishing Settings*.
Check *InternetClientServer* to allow the application to access network connections and to answer requests by the profiler.

In the top bar of the profiler, there is a dropdown menu which currently says *Editor*.
If you checked "*Autoconnect Profiler*", the running application is available in this dropdown menu.
Otherwise, there is a second option *Enter IP address*.
Here, you can enter the IP address of the device on which the application is running.

## Mixed Reality Toolkit Profiler Window

- how to enable and disable it
- information that it provides

## Visual Studio Profiler

- how to access it
- information that it provides

## HoloLens Device Portal

- how to access it
- information that it provides

## Performance Optimisation

Detailed optimisation of an application starts with identifying the bottlenecks of the application.
After that, a change is conceptualised and realised.
Finally, the altered version is analysed again to make sure that the optimisation did actually improve the performance.
This high-level process is repeated until the application has an acceptable performance.
Apart from this general workflow, there are some general hints how a Unity application can be optimised:

### Scene Optimisation

For HoloLens applications, the Mixed Reality Toolkit provides an optimisation window which automatically optimises the application for AR.
It can be found under "*Mixed Reality Toolkit > Utilities > Optimize Window*".
For the best usage experience, all listed recommondations should be accepted and applied.

Apart from this, the following criteria can be considered for optimisation:

**Avoid computationally intensive shaders**:
Shaders are programs which calculate how the surface of an object should be displayed, e.g. how it is shaded.
Just like scripts, shaders can be written in an inefficient way or provide unnecessary photorealistic results at the cost of performance.
A nice looking visual effect cannot be enjoyed by the user if it slows down the entire application.
Hence, you should check if the shaders slow down the rendering process.
Every material in the scene is based on a shader.
The shader of the material can be changed in its material settings in the inspector using a dropdown at the top:

![Shader Selection in the Material]({{pathToRoot}}/assets/figures/performance_profiling/MaterialShader.png)

By default, materials use the Standard shader.
This shader uses physically-based shading and offers many options but it is not optimsed for mobile devices.
For HoloLens development, it is advisable to restrict the used shaders to the ones which are provided by the Mixed Reality Toolkit.
For mobile platforms, Unity already ships with a series of lightweight shaders.
They can be found in the category "*Mobile*".

**Reduce the amount of polygons on meshes**:

**Reduce the size of textures**:

**Use shaders which combine multiple textures into one**
A PNG texture consists of four channels:
Three channels define colours by mixing fractions of red, green and blue.
The fourth channel stores alpha values, e.g. for transparency.
For textures which define the surface colour and transparency of an object, these channels are actually used.
However, opaque objects do not need the alpha channel because there is no transparency.
Hence, it can be used for something else, e.g. to define the roughness of the surface.
The roughness of the surface is a singular value between zero and one and so it can be encoded by one texture channel.
Similarly, PBR materials can define a value that states which parts of the surface are metallic.
This value can also be encoded in a single texture channel.

In general, whenever a surface property is expressed by one floating point value for each point of the surface, it only requires one texture channel.
If there are four different properties, they can be compressed into the four channels of a texture instead of using four separate textures where three channels are useless.
In particular, monochromatic textures (the value is only written to one channel) and greyscale textures (the same value is written to all channels) can be simplified this way.
However, this is only possible if the shader supports this compression.
The shader must know what information are stored in each channel.

In Unity, some of the shaders support and even require such texture compression.
For instance, the shader "Mixed Reality Toolkit/Standard" which is provided with the Mixed Reality Toolkit uses a "Channel Map" which can be activated by checking the corresponding option.
It stores metallic values in the red channel, ambient occlusion (which simulates shadows in creases) in the green channel, the emission intensity in the blue channel and the surface smoothness in the alpha channel.

![Channel Map in MRTK Standard Shader]({{pathToRoot}}/assets/figures/performance_profiling/MRTKChannelMap.png)

The Mixed Reality Toolkit also provides a tool which compresses multiple textures into the channels of one texture.
It can be found under "*Mixed Reality Toolkit > Utilities > Texture Combiner*".
Here, one can place textures in the slots for each channel.
The "Input Channel" dropdown menus define which channel of the given texture should be written to the new texture.
If you do not have a texture for one of the properties, the tool can also write a constant value to the new texture's channel by dragging the slider.
Although the descriptions guide the creation of channel maps for the Mixed Reality Toolkit's standard shader, one can also use this tool for other shaders which expect other channel combinations.

![MRTK Texture Combiner Tool]({{pathToRoot}}/assets/figures/performance_profiling/MRTKTextureCombiner.png)

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
   - texture quality
   - reduce the vertex count of meshes
   - check audio sources
   - avoid mesh colliders
   - use single pass instanced rendering but check that the used shaders support it (e.g. the standard TextMeshPro shader does not)
   - avoid post-processing effects

### Script Optimisation