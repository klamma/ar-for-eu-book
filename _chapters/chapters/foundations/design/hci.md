---
layout: reading_chapter
title: Human Computer Interaction and User Centered Design
hide: true
permalink: /chapter/foundations/design/hci/
categories: chapter
visualizations:
---

## Contents

1. [The Iterative Cycle of Human-Centered Design](#the-iterative-cycle-of-human-centered-design)
2. [Prototyping AR Applications](#prototyping-ar-applications)
   1. [Low Fidelity Prototypes](#low-fidelity-prototypes)
   2. [Medium Fidelity Prototypes](#medium-fidelity-prototypes)
   3. [High Fidelity Prototypes](#high-fidelity-prototypes)

In the research field of human computer interaction (HCI), the creation of interfaces between machines and humans is explored.
It involves computer science, design, as well as psychology.
By understanding how humans process information, communicate with each other or with a system, user interfaces can be created which provide a better usage experience.

## The Iterative Cycle of Human-Centered Design {#the-iterative-cycle-of-human-centered-design}

The Iterative Cycle of Human-Centered Design (also called DIA Cycle) is a development process in which a system is designed and implemented in many iterations {% cite Norm13 %}.
The process heavily involves the user's feedback by evaluating the results of every iteration and leveraging the findings for the next iteration.
Every iteration consists of three phases which make up the three letters DIA:
- D: Design
- I: Implement
- A: Analyze

The design phase is a brainstorming phase where ideas are collected and a plan is made for the user interface.
In the implementation phase, the idea is realized.
After that, the analysis phase involves an evaluation of the created prototype with a user.
After one iteration, the next iteration starts.

The approach starts by addressing general design questions in the first couple of iterations and gets more and more specific with each iteration.
This also means that the implementation of the prototype gets more detailed and complex with each iteration.
Therefore, the first couple of iterations work with a low fidelity prototype, e.g. a paper prototype.
Their main purpose is to establish the overall structure of the UI and identify the big problems regarding navigating the UI and interacting with the content as early as possible.
Paper prototypes are hand-made and do not feature a fancy design as this would distract from the functionality that should be tested.
After that, medium fidelity prototypes like static mockup images of the UI or semi-interactive presentation slides can be employed.
They give a more detailed impression of the UI and show first visual design aspects.
In later iterations, high fidelity prototypes are created.
These can be developed applications which are still non-functional (horizontal prototype) or a small portion of the application which is already working completely (vertical prototype).
Finally, the full working system is developed.

By following the DIA Cycle, problems with the design are recognized early on as prototypes get exposed to users early on.
This way, big flaws can be rectified early on which saves time and money.
In such early stages, big, fundamental changes can be made much easier than in later stages where the entire application is already implemented.

### Prototyping AR Applications {#prototyping-ar-applications}

AR applications rely heavily on user interaction, so it is advisable to follow a user-centered development approach like the DIA Cycle.
Due to its three-dimensional nature, there are some differences from traditional 2D UI design processes.

#### Low Fidelity Prototypes {#low-fidelity-prototypes}

There are two methods of paper prototypes.
The first are storyboards.
With this method, a series of images for a fixed scenario are drawn and presented to the user.
The storyboards are focused on the UI and show which series of UI states the user would see for the given scenario.
The second method involves drawing a series of UI snapshots that can be shown to the user based their interaction choice.

Storyboards allow testing 3D functionality because the three-dimensional space can be drawn in the storyboard's images.
For the second method, it can make sense to create drawings of menus and show how they would be located in 3D space.
For more involved interactions and 3D models, simple three-dimensional structures could be created using paper or other materials such as cardboard or wood.
The focus here should be on conveying the overall experience with the UI, not on attention to detail.
Depending on the context, complex 3D shapes can be reduced to simple cubes.

#### Medium Fidelity Prototypes {#medium-fidelity-prototypes}

For 2D interfaces, medium fidelity prototypes can be created using image editors or PowerPoint by assembling the 2D interface in these programs and even filling them with some functionality.
For 3D UI, there are also programs available which allow the simulation of 3D UI.
3D modelling programmes such as [Blender](https://www.blender.org/) or [Google SketchUp](https://www.sketchup.com/) can be used to quickly assemble 3D scenes.
To reduce the creation time, they can be filled with primitive shapes which are usually included in such programmes or pre-made 3D models from repositories like [Sketchfab](https://sketchfab.com/) or [TurboSquid](https://www.turbosquid.com/).
For immersive prototypes, [Microsoft Maquette](https://www.maquette.ms/) can be used with a VR device.
It allows designers to assemble static scenes and UI mock-ups in an immersive 3D environment using a visual VR editor.
In evaluations, this VR environment can then be tested out.
The designer can see the participant's view on the connected PC or by streaming the user's view.

#### High Fidelity Prototypes {#high-fidelity-prototypes}

For high fidelity prototypes, the 3D engine [Unity](https://unity.com/) is suitable.
It has a visual 3D editor where 3D scenes can be created.
These scenes can be filled with logic using C# scripts or a [visual scripting language](https://unity.com/products/unity-visual-scripting).
Since Unity handles low-level functionality regarding 3D rendering, physics simulations and has pre-build libraries for creating VR and AR applications, it allows designers to create prototypes which can e.g. be tested in VR or even already in AR.