---
layout: reading_chapter
title: Display Technologies (started)
hide: true
permalink: /chapter/foundations/hardware/displaytech/
redirect_from: /chapter/displaytech/
categories: chapter
visualizations:
---

{% include autoRelativePath.html %}

# Display Technologies 
Displays can be classified according to their technology used.
In the sense of AR, display systems can be divided into immersive systems, where the user is placed in the middle of the scene, and non-immersive devices, which place the user outside the visual scene.
Video displays can be 2D, such as a computer screen, or stereoscopic, such as 3D {% cite Stan15 %}.

## Imaging technologies

Several common 2D display technologies that form the basis for most 2D and 3D displays used in AR applications are presented below.

### CRT

Cathode ray tubes (CRT), also called picture tubes, consist of a black vacuum glass bulb.
When the monitor is switched on, an electron beam is generated at the rear end of the tube.
A luminous point is created on the mat screen.
The electron beam from the electron gun can be directed with electromagnets.
Colour displays have three cathodes, one each for the colours red, green and blue (basic colours).
At the point where these three colours meet the screen, they merge to form a mixed colour.
So that no colour chaos occurs on the screen, there is a shadow mask[^1] directly behind the screen, so that each electron beam only illuminates its colour point.
CRTs can work either in random scan mode (vector displays) or in raster scan mode, as known from TVs.

Cathode ray tubes have been used in televisions, computer monitors, arcade machines and radar equipment.
The latter are so-called Vector Displays, which are based on Random Scan System.
In contrast to the Raster Scan System, which is the basis for televisions and computer screens and uses pixels along scan lines to draw an image, Random Scan Systems, such as Vector Displays, are designed for line drawing applications and use various mathematical functions for drawing {% cite Java20 %}.

{% include figure.html url='/assets/figures/display/VectorDisplay.jpg' description='Vector display' %}

A few years ago even projectors were realized with the help of CRTs to expose large canvases.
On the other hand there were also tiny Cathode ray tubes, which were used as viewfinders for camcorders.
These small CRTs are the starting point for the first Head-Mounted Display, developed in 1968 (more on this later).
Today, CRT technology no longer plays a role.

### PDP

Plasma Display Panels (PDP) were first used in laptops as monochrome flat screens.
This type of displays uses the principle of gas discharge.
Plasma Displays consist of a series of small chambers filled with ionized gas.
This technology offers a very large contrast range and a very short pixel latency.
The individual pixels are large, so plasma displays are more likely to be used for large displays such as televisions and large advertising display panels, not least because of the large weight compared to LC displays.
Plasma displays deliver a very high contrast value, but have the disadvantage that images that remain the same for some time are burned into the display.
Plasma screens have almost completely disappeared from the market in recent years.

### LCD

A liquid crystal display (LCD) is composed of several layers, including polarization filters.
By applying a voltage to the liquid crystals, the polarization direction is influenced by light and partially blocked by the filters {% cite Stan15 %}.
LC displays require backlighting whose light is absorbed to varying degrees by the individually controlled liquid crystal cells, creating the impression of a self-luminous image.
In the past, cold cathode fluorescent tubes were used for backlighting.
Today, much more efficient light-emitting diodes (LEDs) are used here.
Due to the fact that the display is constantly and completely backlit, LC displays have a lower contrast than plasma screens, for example.
When using LEDs evenly distributed over the entire surface, each of the LEDs can also be controlled separately and their luminosity controlled or even switched off (local dimming), so a much higher contrast ratio can be achieved.

LCD is one of the most widely used display technologies and is used for screens of various shapes and sizes, ranging from computer monitors and televisions to mobile devices such as smartphones and tablets.
Most projectors in use an LC display to generate an image.

### DLP Microdisplays

DLP (Digital Light Processing) was developed by Texas Instruments.
It is a chip consisting of  millions of individually controlled micro mirrors, each capable of representing a single pixel.
The principle is based on the fact that the retina of the eye itself is the display surface of such displays.
Light is reflected by the mirrors, which are constantly realigned, and hits the retina.
Due to their small size and the resulting very high resolution (approx. 2 cm diagonal at a resolution of 1920x1080), they are ideal as head-mounted displays {% cite Horn97 %}  {% cite BZL*06 %}.
Texas Instruments has even produced a chip that can produce a Full HD resolution on only about 6 mm diagonal {% cite Texa20 %}.

DLPs have long been used in projectors.
Compared to LCD projectors they offer a higher contrast and therefore a better black level, because here no panel is illuminated by the light, but DLP has the disadvantage that when you blink your eyes or wander quickly over the projected image, unpleasant rainbow artefacts hit your eyes.

### OLED

OLED is currently the latest display technology on the market.
Organic light-emitting diodes (OLEDs) use organic electroluminescent molecules to display an image.
OLED displays are characterized by their high contrast ratio, high viewing angle and low weight.
Compared to LC displays, OLED displays are still relatively expensive.
The latest manufacturing methods not only allow a curved mounted design, but also allow an OLED display to be bent and buckled during operation, as for example known from the Samsung Galaxy Fold.

With so-called AMOLED displays it is possible to switch off individual pixels completely, which enables deeper blacks and higher contrast.
These displays are therefore ideal suited for applications close to the eyes, such as VR and AR devices.

### Quantum Dot

Quantum Dot Displays are built like LC-Displays.
However, here millions of semiconductor nanocrystals are applied to a film which can produce purely monochromatic[^2] red, green and blue light.
Blue LEDs are used here as background lighting.
When the photons of the blue LED hit the semiconductor nanocrystals, they emit light in a different colour depending on the size of the crystals.
Since no white light penetrates here, because only the required colours are generated ad-hoc, Quantum Dot Displays have a higher contrast than LC displays, but still a lower contrast than OLED displays.
These screens have a similar colour brilliance to OLED screens.

## Application taxonomy

The display technologies presented in the upper section can be used in different ways to implement augmented reality applications.
Here, possibilities are shown how AR displays can be divided according to their interaction possibilities.

### 3D

3D displays, also called stereoscopic video displays, create the illusion of depth perception by displaying slightly different images on both eyes.
The most common screens are those that require special glasses.
These can be divided into active systems using shutter glasses and passive systems based on polarization or colour filters in the glasses {% cite Stan15 %}.

### Immersive

Immersion describes the effect caused by an artificial environment, which describes how much a user perceives the virtual environment as real.
If the degree of immersion is particularly high, the term "presence" is also used.
Immersion can occur not only mentally, but also physically, which is then called physical immersion.
A high physical immersion occurs when input and output devices are used that address as many of the user's senses as possible in a real way.
 
#### CAVE 
  
Fully immersive virtual reality experiences can be realistically realized using a CAVE environment (Cave Automatic Virtual Environment).
Projectors or multiple LCD screens (CAVE2) form a virtual space by surrounding the walls around the user.
Users can also wear 3D glasses to facilitate immersion.
With a CAVE environment, multiple users can interact simultaneously in the same virtual space and share the same experiences {% cite MSB*14 %}.



{% include figure.html url='/assets/figures/display/aixCAVE.jpg' description='aixCAVE at RWTH Aachen' %}
<br>
{% include figure.html url='/assets/figures/display/CAVE2.jpg' description='CAVE2TM at Monash University, Melbourne' %}
<br>



#### Head Mounted Displays (HMD)

To achieve a Virtual World experience, Head Mounted Displays using two CRT's (one for each eye) were developed {% cite Suth68 %}.
These displays are designed to be worn on the head.
With HMD, objects can be displayed next to or behind the user when he turns around.
HMDs support a high physical immersion because they hide reality and ensure that the user only perceives the virtual world.
In recent years, head-mounted display technology has been major improved.
So-called VR headsets as Oculus Rift, HTC Vive, Samsung Gear VR, etc. make virtual reality available to the public {% cite SSEb17 %}.
Head Mounted Displays are divided into optical see-through and video see-through.
Optical see-through HMDs can extend the environment with augmented reality with the help of optically transparent displays by making these models visible in the user's field of vision.
Video see-through HMDs, on the other hand, are not transparent.
A camera records videos and plays them back on the display, overlaid with virtual elements.

### Handheld Display (HHD)

Handheld displays are displays that are part of a portable device, such as a smartphone.
This offers the advantage that such devices are also equipped with multiple cameras, GPS, data connection, microphone and great computing power.
Usually LC displays or OLED displays are used, as is common today.
Plasma displays are out of the question here because they cannot be produced with such a low pixel density, and they would also significantly increase power consumption.
These mobile devices are mainly powered by rechargeable batteries, which can lead to bottlenecks when using GPS and high computing power.
The most prominent example of the use of HHD is the APP Pokémon Go, which was a hype in the summer of 2016.


[^1]: The company SONY developed a stripe mask which is used instead of the hole mask and marketed devices with stripe mask under the name "Trinitron"

[^2]: Monochromatic colour: light with only one wavelength; a single colour without other colour components
