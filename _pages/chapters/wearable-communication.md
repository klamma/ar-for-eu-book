---
layout: page
title: Wearables Communication (need a rename) 
permalink: /chapter/wearableCommunication/
categories: chapter
visualizations:
---

{% include autoRelativePath.html %}

# Making Things Talk

In this tutorial, we will guide you through the steps to link an Augmented Reality project to microcontroller devices. We will cover the two most common methods of communication WiFI and Bluetooth. And we will demonstrate the full development pipeline from an Arduino sketch to a Unity 3D client that interacts with a HoloLens.

## Contents
- [Part 1. Introduction](#part-1-introduction)
- [Part 2. Microcontroller Sketch](#part-2-microcontroller-sketch)
- [Part 3. WiFi Implementation](#part-wifi-implementation)
- [Part 4. Bluetooth Implementation](#part-4-bluetooth-implementation)


## Part 1. Introduction	{#part-1-introduction}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bdD6QUtWEbA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this part, we provide an overview of the tutorial and start with the selection of the protocol and sensor selection. We introduce the ESP32 microcontroller that is required to work on this tutorial. For this tutorial, you will also need a Motion Controller (for example, MPU9250), four jumper wires for I2C communication, and a Micro USB cable.

We suggest two main areas of consideration that are important to understand the data flow pattern, which should match one of the communication protocols. The first area of consideration is data space (types of data, the amount of data, how long the devices are connected, etc.), while the second consideration is activity space (the environment where the product will work, if the sensors are worn on a body or mounted on tools, and what triggers are used).

We look in detail at the characteristics of WiFi (in particular, at MQTT protocol) and at Bluetooth Low Energy (GATT protocol).

## Part 2. Rapid Prototyping {#part-2-rapid-prototyping}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/uPO-x4DVzgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this part, we introduce code resources that we will use in the tutorial.

- [Making Things Talk repository](https://github.com/willguest/MakingThingsTalk) contains the Arduino sketch and Unity project that we will review later in this tutorial.
- [M2MQTT repository](https://github.com/gpvigano/M2MqttUnity). We will use a modified version to handle the WiFi interface.
- [GATT informer repository](https://github.com/willguest/GattInformer) to explore the Bluetooth Low Energy functions.

We also look in more detail at the Sketch code, using Arduino IDE. We explain the key parts of the code that are important to understand and needed to setup communication over WiFi and Bluetooth.

## Part 3. Production {#part-3-production}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Tt_221xoppM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this part, we give instructions on linking an MQTT WiFi client to Unity and display live data from an inertial measurement unit - IMU.

We first introduce and review the components of the [https://github.com/willguest/MakingThingsTalk](Making Things Talk Unity project). We also look at the project settings and build settings to prepare the environment for the tutorial.

We continue by looking at and reviewing the code that runs the MQTT client. In particular, we look at the subscription and publication to the broker, how the processing of messages is coded, and how the data received via WiFi is converted into the local rotation property of a game object in the Unity scene.

We also go one level down and review how the sensor data handler works to provide the rotation data.

We further test the code, after plugging the IMU to the ESP32, and then to the computer. Running the Unity scene should display the data stream and rotate the game object using the live data from the IMU sensor.

## Part 4. Design and Evaluation {#part-4-design-and-evaluation}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/2OnV3qDdGpU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this part, we give instructions on using the Bluetooth Low Energy protocol to display live data from an inertial measurement unit - IMU - to a game object in a Unity scene.

We start by explaining some of the general limitations for working with Bluetooth in Unity. We continue to work with the [Making Things Talk Unity project](https://github.com/willguest/MakingThingsTalk), reviewing the code that implements a Bluetooth connection. We explain how to find Bluetooth devices, get their names, and display on a UI panel in a Unity scene. We continue by giving instructions on how to connect to Bluetooth Low Energy devices, keep them connected, and receive data from them.

We further test the code, demonstrating a constant stream of data from the IMU.