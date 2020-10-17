---
layout: page
title: Wearables for Interaction 
permalink: /chapter/wearableInteraction/
categories: chapter
visualizations:
---

{% include autoRelativePath.html %}

# Wearable Interaction

In this chapter, we give an introduction to the field of Wearable Computing, the practice of inventing, designing, building, or using body-worn computational and sensory devices. We describe both early examples of wearable computers and modern smart accessories, head-mounted displays, and e-textiles. We discuss the functions and applications of wearable computers, design principles, and the underlying materials and technologies. We recommend prototyping techniques and platforms and follow by the technologies that can be used for more serious production. We conclude the lecture by introducing two design and evaluation methodologies that can help to improve the user experience of wearable prototypes and products.

## Contents
- [Part 1. Introduction](#part-1-introduction)
- [Part 2. Rapid Prototyping](#part-2-rapid-prototyping)
- [Part 3. Production](#part-3-production)
- [Part 4. Design and Evaluation](#part-4-design-and-evaluation)

## Part 1. Introduction	{#part-1-introduction}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1XPL93Z7fcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The invention of the first wearable computer is attributed to Edward Thorpe, who - in the 50ies and 60ies - had started to build a wearable roulette predictor (together with Claude Shannon) as a hobby project
[Thorpe (1998)](https://ieeexplore.ieee.org/document/729523). The body worn micro computer would be operated with a flick switch in the shoes to time the moment the croupier sets the ball on the roulette table, predicting its landing position, and communicating the prediction with sounds to the earphones. Thorpe claims the computer worked with an expected gain (of 44% under lab conditions), and that's that. 

The second important milestone in the history of wearable computing is the invention of the first general-purpose wearable computer by Steve Mann in his MIT Wearable Computing Group [Mann (1996)](https://ieeexplore.ieee.org/document/566147).

As with many technology revolutions, the seminal work is often rather system-focused, and aesthetics, scalable production, or user experience are often neglected so as to focus on overcoming the technical problems. And as with other movements, recent years have remediated that, complementing technical progress with design, business and use cases, and manufacturing lines. 

Modern wearable computers fall into three classes: smart accessories, head-mounted displays, and e-textiles. Smart accessories such as FitBits, JawBones, and Apple Watches are widely known now. Head-mounted displays still less, but smart glasses like the Microsoft Hololens or the Magic Leap (or the less well known 50-100 other manufacturers) are coming. E-textiles, however, are less visible, and the biggest progress is yet to come. While there are many arts projects (such as the wearable keyboard) or industry prototypes (such as the [Levis smart jacket](https://youtu.be/yJ-lcdMfziw)), they are not yet a commodity.

We give a definition of smart textiles by Van Langenhove & Hertleer (2004) https://www.emerald.com/insight/content/doi/10.1108/09556220410520360/full/html and describe the three production types of smart textiles.
We describe how context awareness is provided by smart textiles illustrating with an example of the Pivot Yoga dress https://pivot.yoga/

The video continues with examples answering the important question of Why we wear: 
* to express, example: Crying dress https://www.kobakant.at/?p=222
* to communicate, example: Cutecircuit hug shirt https://cutecircuit.com/the-hug-shirt/
* to protect, example: https://diffus.dk/work/project-climate-dress/

We conclude this part of the lecture by discussing other selected functions and applications. As a suggestion for further reading, we recommend the new book Perspectives on Wearable Enhanced Learning by Buchem, Klamma & Wild (2019) https://www.springer.com/gp/book/9783319643007 "

## Part 2. Rapid Prototyping {#part-2-rapid-prototyping}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JN8HdRebf1s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

"In this video, we explain how to get started with rapid prototyping for wearable computing. We suggest the Rapid Prototyping Wearable Technology Band developed by Jessica J. Rajko (2019) https://link.springer.com/chapter/10.1007/978-3-319-64301-4_9 and present several other control boards that can be used for creating wearable computing prototypes, referring to the work of Gonçalves et al (2018) https://www.mdpi.com/2411-5134/3/1/14.

We then briefly describe the basics of programming with Arduino, introducing the structure of a sketch https://www.arduino.cc/en/tutorial/sketch.

We continue by introducing some of the sensors that are accessible and easy to use, such as MPU and heart-rate sensors.

We conclude this part of the lecture by illustrating the rapid prototyping process that was used in the WEKIT project, creating a smart textile that helped to implement the ghost track feature Sharma, Klemke & Wild (2019) https://link.springer.com/chapter/10.1007/978-3-319-64301-4_14."

## Part 3. Production {#part-3-production}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wIgXAylgVwU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

"In this video, we provide recommendations for those who want to take wearable computing to a more serious production after prototyping.

We look at the different types of fabric manufacturing and treatment, referring to by Stoppa & Chiolerio (2014) https://www.mdpi.com/1424-8220/14/7/11957
We then look at the technologies available for the production of conductive threads. We look at scenarios for using fabric-integrated grids, illustrating by the examples of the musical jacket http://www.maggieorth.com/art_Jacket.html.

We continue by describing the technology of conductive ink, referring to MicroFlex project (2012) https://cordis.europa.eu/project/id/211335 and giving an example of printing conductive tracks that are used for creating medical or general-purpose smart textiles. We further give an example of more complex components that can be created, such as stretch and pressure sensors, as in the Eeontex example https://youtu.be/oDBm0aezEvg or in the Stretchable LED display example https://youtu.be/XIXGQR4p5g4.

We also look at the printable batteries, referring to the work of Wang et al (2014) https://doi.org/10.1016/j.jpowsour.2014.06.032 and Kim et al (2015) https://doi.org/10.1088/1742-6596/660/1/012009

We conclude this part of the lecture by looking at interactive embroidery - using conductive threads to create user interface elements. We give examples of such interfaces from a project in the Wearable computing center http://wcc.gatech.edu/, a Jogweel by Zeagler et al (2012) https://doi.org/10.1109/ISWC.2012.29, and a knife-edge pleat by Gilliland et al (2010) https://doi.org/10.1109/ISWC.2010.5665876."

## Part 4. Design and Evaluation {#part-4-design-and-evaluation}

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/a3VkrSGoOl8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

"In this video, we present two specific design and evaluation approaches that can be used in addition to the overall principles applied in Augmented Reality.

First, we describe the participatory design methodology for wearable computing developed in the WEKIT project http://wekit.eu/d5-8-wekit-wearable-design-solutions/. The methodology utilizes feature cards that can be used to run design workshops with end-users. The cards can be combined with using a mannequin where the users can put different garment components where they best fit.

Second, we described an approache introduced by Tomberg & Kotsjuba (2019) https://link.springer.com/chapter/10.1007/978-3-319-64301-4_13. There you can find the design principles for universal design and an evaluation tool for wearable computing."
