---
layout: page
title: AR for the Web (in progress)
permalink: /chapter/web/
categories: chapter
visualizations:
---

Augmented Reality for the Web demands compatibility with the major browsers. To reach this goal, developers needs access to the native device drivers and APIs of the different vendors in JavaScript.

## Enabling Technologies

In recent years, the Web has made a major leap in application maturity. Almost all desktop applications like office packages, image and video editing have Web versions. This is due to the availability of HTML5 and its many APIs exposing native device APIs to developers by JavaScript.
Moreover, Web browsers can communicate directly with each other without the need of a server, reducing the latency of many network depending applications like collaborative editing, video and voice chats, and computer games.

- [WebRTC](https://webrtc.org/)
- [Web Assembly](https://webassembly.org/)
- [Web Workers](https://www.w3.org/TR/workers/)
- [WebGL 2.0](https://www.khronos.org/registry/webgl/specs/latest/2.0/)
- [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)


# WebVR

[WebVR](https://immersive-web.github.io/webvr/) provided a developer API to different virtual reality devices on the Web and is now superseded by WebXR.

# WebXR

WebXR (Mixed Reality on the Web) superseded WebVR in 2018. The [W3c editor's draft] (https://immersive-web.github.io/webxr/)
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

## three.js

## A-Frame