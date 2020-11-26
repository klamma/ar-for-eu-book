---
layout: reading_chapter
title: AR for the Web (in progress)
hide: true
permalink: /chapter/web/
categories: chapter
visualizations:
---

Augmented Reality for the Web demands compatibility with the major browsers.
To reach this goal, developers needs access to the native device drivers and APIs of the different vendors in JavaScript.

## Enabling Technologies

In recent years, the Web has made a major leap in application maturity.
Almost all desktop applications like office packages, image and video editing have Web versions.
This is due to the availability of HTML5 and its many APIs exposing native device APIs to developers by JavaScript.
Moreover, Web browsers can communicate directly with each other without the need of a server, reducing the latency of many network depending applications like collaborative editing, video and voice chats, and computer games.

- [WebRTC](https://webrtc.org/)
- [Web Assembly](https://webassembly.org/)
- [Web Workers](https://www.w3.org/TR/workers/)
- [WebGL 2.0](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
- [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)


# WebVR

[WebVR](https://immersive-web.github.io/webvr/) provided a developer API to different virtual reality devices on the Web and is now superseded by WebXR.

# WebXR

WebXR (Mixed Reality on the Web) superseded WebVR in 2018.
The [W3c editor's draft] (https://immersive-web.github.io/webxr/)
gives details on the WebXR Device API.
WebXR is an extension of the WebVR API covering augmented reality devices in the JavaScript API.
The new API has two goals.
First, it enhances the possibilities for new input devices like for gesture and speech recognition.
This gives to user new options to navigate and interact in the virtual environment.
Second, it gives a technical platform to create augmented reality content.
Moreover, it tackles incompatibilities of the predecessor with different browsers like Safari and Chrome.
The amount of code needed to create virtual experiences on different devices should be reduced,
A number of browsers is already supporting WebXR.

[//]: # (QRD*19)


# 3D Graphics Frameworks on the Web

A series of graphics frameworks exist which allow the display of 3D models on Web pages.
The presented frameworks introduce increasing levels of abstraction.
Whereas WebGL works with polygon primitives and shaders, three.js abstracts to scenes, objects and materials.
In turn, A-Frame uses three.js to provide an HTML-based description language for 3D scenes which can be executed as a WebXR experience.

## WebGL

[WebGL](https://get.webgl.org/) is a cross-platform, royalty-free API used to create 3D graphics in a Web browser.

## three.js

[three.js](https://threejs.org/) is a popular JavaScript framework for displaying 3D content on the web.

## A-Frame

[A-Frame](https://aframe.io/) is a web framework for building virtual and augmented reality experiences.

**Example of an A-Frame**:

<script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
<script>
    AFRAME.registerComponent('hide-in-ar-mode', {
        // Set this object invisible while in AR mode.
        init: function() {
            this.el.sceneEl.addEventListener('enter-vr', (ev) => {
                this.wasVisible = this.el.getAttribute('visible');
                if (this.el.sceneEl.is('ar-mode')) {
                    this.el.setAttribute('visible', false);
                }
            });
            this.el.sceneEl.addEventListener('exit-vr', (ev) => {
                if (this.wasVisible) this.el.setAttribute('visible', true);
            });
        }
    });
</script>
<a-scene style="width: 500px; height: 500px" embedded>
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow></a-box>
    <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow></a-sphere>
    <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow></a-cylinder>
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow></a-plane>
    <a-camera position="0 1.2 0"></a-camera>
    <a-sky color="#ECECEC" hide-in-ar-mode></a-sky>
</a-scene>

The WebXR demo can be viewed on desktop browsers, as well as mobile browsers.
If a VR device is connected to the PC, it automatically activates once this page is loaded and the view is changed if the user clicks on the VR button.
To return to the view in the browser, press escape.
If no VR device is present, the VR button instead toggles a fullscreen view of the 3D scene.
On smartphones, the VR button also works and switches to a stereoscopic view which can be used e.g. with Google Cardboard.
On newer smartphones which have ARCore or ARKit installed and with Chrome Browser version 79 or higher, an AR button will appear next to the VR button.
If the user clicks on it, the phone's camera will activate and the virtual objects are integrated into the camera stream.
