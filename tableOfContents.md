---
layout: page
title: Table of Contents
permalink: /toc/
icon: fa-book-open
order: 3
---

{% include autoRelativePath.html %}

- [Preface](/chapter/preface/) {% include badge.html base=pathToRoot badgeName="complete" %}

## Foundational Chapters

- [History of AR](/chapter/historyar/) {% include badge.html base=pathToRoot badgeName="complete" %}
- [Future of AR](/chapter/futurear/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Perceptual Foundations of AR](/chapter/perceptionar/) {% include badge.html base=pathToRoot badgeName="outline" %}
- [Sensors and Signal Processing](/chapter/sensors/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Computer Graphics](/chapter/cg/) {% include badge.html base=pathToRoot badgeName="outline" %}
- [Programming](/chapter/prog/) {% include badge.html base=pathToRoot badgeName="inProgress" %}
- [Algorithms and Data Structures](/chapter/ads/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Linear and Geometric Algebra](/chapter/math/) {% include badge.html base=pathToRoot badgeName="todo" %}

## Core Chapters

### Core Technologies
- [Display Technologies](/chapter/displaytech/) {% include badge.html base=pathToRoot badgeName="complete" %}
- [Tracking Technologies](/chapter/tracking/) {% include badge.html base=pathToRoot badgeName="inProgress" %}
- [Interaction Technologies](/chapter/interaction/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Hardware Abstraction Layer](/chapter/hal/) {% include badge.html base=pathToRoot badgeName="todo" %}

### AR Development

- [AR SDKs](/chapter/arsdk/) {% include badge.html base=pathToRoot badgeName="inProgress" %}
- [Configuring Windows for Development with Hololens](/chapter/holotoolkit/) {% include badge.html base=pathToRoot badgeName="complete" %}
- [Unity / Unreal Engine](/chapter/engines/) {% include badge.html base=pathToRoot badgeName="inProgress" %}
- [Spatial Audio](/chapter/spatialaudio/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Interactive Graphics and Sound Design](/chapter/intdesign/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Spatial Mapping, Gaze, and Gestures](/chapter/spatialMapping/) {% include badge.html base=pathToRoot badgeName="complete" %}
- [Spatial Understanding](/chapter/spatialUnderstanding/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Speech Interaction](/chapter/speech/) {% include badge.html base=pathToRoot badgeName="complete" %}
- [Dialogue Understanding](/chapter/dialogue-understanding/) {% include badge.html base=pathToRoot badgeName="complete" %}
- [Human Computer Interaction and User Centered Design](/chapter/hci/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Collaboration & Sharing](/chapter/sharing/) {% include badge.html base=pathToRoot badgeName="complete" %}
- [Performance Profiling](/chapter/performance/) {% include badge.html base=pathToRoot badgeName="complete" %}
- [Continuous Integration & Unit Tests](/chapter/ci_unity/) {% include badge.html base=pathToRoot badgeName="inProgress" %}

### Computer Graphics
- [3D Modeling & Rendering](/chapter/modeling/) {% include badge.html base=pathToRoot badgeName="inProgress" %}
- [3D Scanning & Animation](/chapter/3dscanning-animation/) {% include badge.html base=pathToRoot badgeName="complete" %}

### Computer Vision

- [Image Analysis](/chapter/imageanalysis/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Image Processing](/chapter/imageproc/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Object Detection and Recognition](/chapter/odr/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [3D Sensing](/chapter/3Dsensing/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Tracking](/chapter/otracking/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Depth Sensing](/chapter/depthsensing/) {% include badge.html base=pathToRoot badgeName="todo" %}

### Artificial Intelligence

- [Data Mining](/chapter/dm/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Machine Learning, Deep Learning](/chapter/ml/) {% include badge.html base=pathToRoot badgeName="outline" %}
- [Sensor Fusion](/chapter/sf/) {% include badge.html base=pathToRoot badgeName="todo" %}

## Advanced Topics

- [AR Agile Project Management](/chapter/apm/) {% include badge.html base=pathToRoot badgeName="complete" %}
- [AR Game Development, Gamification and Serious Games](/chapter/game/) {% include badge.html base=pathToRoot badgeName="inProgress" %}
- [AR Applications](/chapter/apps/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [AR for the Web](/chapter/web/) {% include badge.html base=pathToRoot badgeName="inProgress" %}
- [Mobile AR](/chapter/mobile/) {% include badge.html base=pathToRoot badgeName="inProgress" %}
- [Hardware Accelerated Computing](/chapter/hac/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Internet of Things, Robots and Wearables](/chapter/iot/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Wearable Interaction](/chapter/wearableInteraction/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Hardware and Optical Design](/chapter/hardware/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [2D/3D Printing](/chapter/printing/) {% include badge.html base=pathToRoot badgeName="todo" %}

## Good Practices and Examples

- [Maker Communities](/chapter/maker/) {% include badge.html base=pathToRoot badgeName="todo" %}
- [Workflows and Company Practices](/chapter/workflows/) {% include badge.html base=pathToRoot badgeName="outline" %}
- [Privacy, Ownership and Intellectual Property](/chapter/privacy/) {% include badge.html base=pathToRoot badgeName="outline" %}
- [Applications, Employments and Careers in AR](/chapter/careers/) {% include badge.html base=pathToRoot badgeName="todo" %}


<!--
<div class="trigger">
<ul class="post-list">
  {% for my_page in site.pages %}
    {% if my_page.title %}
      {% if my_page.categories == 'chapter' %}
      <li>
      <a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title }}</a>
      </li>
      {% endif %}
    {% endif %}
  {% endfor %}
</ul>
</div>
-->
