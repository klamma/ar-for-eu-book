---
layout: reading_chapter
title: Mobile AR
hide: true
permalink: /chapter/development/platforms/mobile/
redirect_from: /chapter/mobile/
categories: chapter
visualizations:
---

## Contents

1. [Techniques](#techniques)
   1. [Image Targets](#image-targets)
   2. [Lenses & AR Filters](#lenses-ar-filters)
   3. [Scene Tracking](#scene-tracking)

## Techniques {#techniques}

Augmented reality on mobile devices can be realized with a variety of techniques.
Each of them has their own advantages, disadvantages and suitable use cases.
To choose a method for mobile AR, the requirements, usage scenarios, target audience and target devices of the AR application should be analysed.

### Image Targets {#image-targets}

Devices with a camera can look for special image targets.
They recognize visual patterns of the image and based on the distortion of the pattern, they can calculate the angle at which the camera is looking at the image.
This way, the virtual camera can be synchronized so that the virtual objects can be rendered in the same perspective.
The virtual content is then overlaid on top of the camera feed.
Libraries which enable this kind of behaviour are Vuforia, ARCore and ARKit.

### Lenses & AR Filters {#lenses-ar-filters}

Social media applications like [Snapchat](https://support.snapchat.com/en-US/article/face-world-lenses) and [Instagram]() provide AR-like digital effects which can be applied to images, videos and the real-time camera preview.
These kinds of effects are especially tailored towards "selfies" since they rely on computer vision techniques like facial detection.
Facial landmarks like the eyes or mouth are detected in real-time in the camera feed.
With this information, the position and orientation of the face can be determined.
Digital content can be placed in relation to the face and it is added to the camera preview for the user.
A range of applied effects can be implemented.
They include animated screen-space 2D overlays, like snow on the screen.
Furthermore, 3D models can be attached to the user's head, e.g. cat ears, jewellery or sunglasses.
Another class of effects are  distortions of the original camera image.
These distortions e.g. allow to increase the size of the eyes to achieve a cartoon effect.
Advanced versions of the filters can also be controlled by facial expressions.
In these cases, blinking or opening the mouth can trigger a transition to a different filter or can trigger an animation.

AR filters can for instance be created with [ARCore](https://developers.google.com/ar/develop/java/augmented-faces), [ARKit](https://developer.apple.com/documentation/arkit/tracking_and_visualizing_faces) or [Spark AR Studio](https://sparkar.facebook.com/ar-studio/).

### Scene Tracking {#scene-tracking}

Libraries like ARCore and ARKit can reconstruct spatial features from the environment based on the phone's movement.
This system uses a mixture of sensor information and optical data.
Based on these data, the device can track the environment and follow the user's movement without visual markers.