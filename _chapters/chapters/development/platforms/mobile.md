---
layout: reading_chapter
title: Mobile AR  (started)
hide: true
permalink: /chapter/mobile/
categories: chapter
visualizations:
---

# Mobile AR

## Techniques

Augmented reality on mobile devices can be realized with a variety of techniques.
Each of them has their own advantages, disadvantages and suitable use cases.
To choose a method for mobile AR, the requirements, usage scenarios, target audience and target devices of the AR application should be analysed.

### Image Targets

### Lenses & AR Filters

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

### Scene Tracking

### GPS Integration