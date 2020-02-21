---
layout: page
title: Tracking Technologies (started)
permalink: /chapter/tracking/
categories: chapter
visualizations:
---

# Tracking Technologies

Tracking technologies are required in order to provide the position and rotation of a real object to the computer system.
With AR systems, tracking technologies are commonly used in two settings:
If the system consists of a head-mounted display, e.g. the Microsoft HoloLens, tracking is required in order to capture the user's head movements.
Advanced systems can also track other body parts like the hands.
In the second use-case, virtual objects should be attached to a real object.
In order to realize this, the position and rotation of the object relative to the camera must be determined.
An example for this is the marker tracking feature of smartphone-based AR, e.g. with Vuforia.
Marker-based tracking can usually be done with one camera.
The described techniques usually apply for more complex object tracking, e.g. of an HMD.

Different techniques and technologies are available for tracking.
Each of them have particular requirements, use-cases as well as advantages and disadvantages.

## Light

One possibility is to use visible or invisible light for tracking objects.

### Opto-Electronical

With opto-electronical tracking, markers are placed on the target.
For detecting the markers, at least two (IR) cameras are placed around the subject.
Computer vision software can isolate the markers on the seen images and track their position on the 2D image {% cite Guer05 %}.
Based on the known static position of the cameras, the 3D position of the marker can be reconstructed.
This is done by an algorithm which shoots virtual rays into the scene.
The rays start at the position of the camera and pass through the detected 2D point in the image.
Ideally, the intersection point of the rays from all cameras determines the 3D position of the marker.
However, due to setup or tracking inaccuracies, the rays will not exact exactly but pass each other with a small gap in-between.
In practice, the midpoint of this gap is calculated and the final position of the marker is determined to be the average of the midpoints between all rays.

Opto-electronical tracking can be found in an active and a passive setup.
Their main difference is the origin of the light which is detected by the camera.
Passive opto-electronical tracking uses markers with a special surface which is highly reflective for infrared light {% cite Guer05 %}.
Infrared lamps placed in the surrounding point towards the target and illuminate the markers.
The reflection of the IR light will reach the cameras and this way, the markers become visible to the cameras.
In contrast to this, the markers in active opto-electronical tracking emit light, e.g. by using small infrared LEDs.
This means that no external light source is necessary.
The advantage of active opto-electronical tracking is that individual trackers can be turned on or off separately.
Leveraging this additional control, an initialization procedure can be developed where the system cannot just detect but also identify the markers.
For instance, with a full-body tracking, markers on the different on the hands can be distinguished.
A disadvantage of active opto-electronical tracking is that the markers require an energy source.
With passive tracking, it suffices to use plastic balls with a special surface paint as markers but with active tracking, cabling needs to be laid out and a battery needs to be mounted on the target.
This way, a passive tracking setup is non-intrusive.
In contrast to this, with active tracking the marker suit can be uncomfortable to wear and it can restrict movements due to the cables and battery.

The high accuracy and a low latency of opto-electronical tracking systems are beneficial.
However, occlusion can create a problem.
Since the technology is light-based, markers can only be tracked if they are visible to at least two cameras at once.
Challenges arise from the fact that one marker alone can only convey positional data but not the orientation of the target.
In order to reconstruct the orientation of an object, at least three markers are required.

One use-case for opto-electronical tracking is motion-tracking for movies or animations.
Actors are equipped with markers and perform movements on a stage which is surrounded by cameras.

### Structured Light

The technique of structured light tracking is for instance used by the Microsoft Kinect.
This technique requires a light source and a camera.
Both are typically operating in the infrared-range of light.
The light is occluded in parts so that it emits a characteristic pattern, e.g. stripes or a random point pattern {% cite ScSz03 %}.
In a calibration procedure, the camera's characteristics are determined regarding its mapping of a 3D point to a pixel in 2D {% cite Geng11 %}.
This is necessary since cameras can distort images.
As an example, wide-angle cameras show straight lines as curves.
Additionally, a calibration of the projector's brightness and emission characteristics is necessary.
In the latter calibration step, the already calibrated camera views the projected pattern on a flat surface.
The position and rotation of the surface is known and by comparing the original pattern to the detected, undistorted pattern, one can calculate distortions which are introduced by the projector.

After that the tracking device can be used to determine the shape of surfaces.
This can be done by determining how the projected pattern is warped by the shape of the surface.
From this disturbance, depth information can be calculated and so 3D coordinates can be determined for all points in the camera image {% cite Geng11 %}.
In combination with shape recognition software, persons can be tracked.
The information can be used to overlay a virtual skeleton over a pose.
Thus, the technique can be used for motion capture.
Additionally, it is also used for 3D scanning, e.g. with the Microsoft HoloLens to create a 3D model of the environment.
An advantage for 3D scanning is that the technique can be combined with a standard camera which captures visible light.
This way, color information can be captured and applied to a scanned model as a texture.

### RGB Cameras

Video tracking uses a standard RGB camera feed as the information source for tracking.
There are two alternative setups possible.
The camera can be used to track another object or person in the video feed or the changes between frames can be used to determine the position and rotation of the camera in the environment.

Camera-based tracking is used for photogrammetry and marker-based AR.
In both cases, the tracking application looks for distinct feature points in the image and tries to locate them in each frame.
If the camera is moved, the depth of these feature points can be determined from the parallax effect between the two frames.

### Time-of-Flight Sensors

Time-of-Flight Sensors use the speed of light to determine how far an object is away from the sensor.
Unlike laser scanning sensors which can only scan single points at once, Time-of-Flight sensors are able to provide a depth map for a (low-resolution) image.
The sensor consists of a light source which emits a pulse of light, e.g. infrared light.
The light is reflected in the environment and captured by an image sensor.
From the difference in time between the emission and the received reflection, the distance to the reflecting surface can be computed.
Due to the high speed of light, the measurement logic needs to be very quick, i.e. in the range of picoseconds.

## Ultra Sound

## Mechanical

With mechanical tracking setups, movements can be tracked by their effect on a mechanical system.
Examples for mechanical tracking systems include exoskeletons.
This tracking technique was also used on the Ultimate Display where the head-mounted display was connected to a series of metal bars.
By moving the head, the bars would be pushed out of the way or pulled along and could rotate in a mechanical construction.
This rotation was registered by the system and from the amount of rotation the head movement could be reconstructed.
In modern systems, mechanical tracking can be found in combination with haptic feedback devices.
One example is the PHANToM haptic device.
It provides a pen-like handle to the user which is attached to a robotic arm.
The user can grab this pen and move it around.
The robotic arm can register the movements and passes the movement data on the application.
Haptic feedback is achieved by moving the robotic arm.
This provides forces on the pen which hinder movements in certain directions.

## Electromagnetic

Another way of tracking uses electromagnetism.
Here, the senors on the tracked object are situated in an alternating electromagnetic field.
A sensor consists of different coils, each of them is wound around one of the three axes.
If the sensor is moved in the field, a current is induced on each of the coils.
By measuring the strength of the current, the rotation and position of the sensor can be derived.

Unlike light-based tracking, electromagnetic tracking is immune to target occlusion, i.e. the tracker does not need to be in the line of sight of some external sensor.
However, the large sensors of 1-2cm are a disadvantage of this technique.
Additionally, the trackers require cabling.
One also needs to be careful with ferromagnetic elements which can influence the magnetic field and can therefore invalidate the tracking results.

## Inertial

An Inertial Measurement Unit (IMU) is a sensor that reports - typically (but sometimes only a subset) - acceleration, rotation speed, and orientation from an accelerometer, gyroscope, and (not always) a magnetometer. Applications of IMUs are for motion capture or as input modality in interaction. The IMU in your mobile phone allows your maps application to function when the GPS signal is not available, for example while driving in a tunnel or when inside of a building. Most modern delivery devices have built in IMUs (smart glasses, mobile phones, tablet computers) or are used in combination with the delivery system (like with pico projectors). All IMUs inevitably suffer of drift, some of them more, some of them less, typically then using on board or software sensor fusion to reduce its amount. The software interface to the inertial measurement unit provides typically a quaternion for orientation (or Euler angles), and vectors for velocity and acceleration. These can be directly mapped in 3D environments to control objects (as a direct-mapping interaction device) or the viewing camera renderer (for scene exploration, think smart glasses). 


# Setups

Tracking systems can be set up in two ways.
On the one hand, the sensors can be placed in the environment and they track markers on a moving object.
On the other hand, the sensors can be mounted to the moving target while the recognizable features are situated in the environment.

## Outside-In Tracking

## Inside-Out Tracking
