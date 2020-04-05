# AR for EU Book

![Jekyll Build & Deploy](https://github.com/BenediktHensen/ar-for-eu-book/workflows/Jekyll%20Build%20&%20Deploy/badge.svg)

Welcome to the editing environment for the AR-FOR-EU Book.

The latest version is available at [http://magritte.informatik.rwth-aachen.de/ar-for-eu-book/](http://magritte.informatik.rwth-aachen.de/ar-for-eu-book/).

# HowTo Run Locally

## Prepare Development Environment

1. Install [Ruby](https://www.ruby-lang.org) on your machine ([Detailed instructions](https://jekyllrb.com/docs/installation/))

2. Clone this repository and open a terminal / command line

   Check that Ruby is successfully installed and can be accessed from the terminal / command line.
   To do this, run the command "ruby -v".
   It should return the installed version of Ruby.

3. In the terminal/command line, navigate to your main project folder

4. Install bundler

    gem install bundler

5. Use bundler to pull Jekyll

    bundle install
    
    bundle update

## Build & Serve Locally

First, please change the _config.yml "url" parameter to "http://localhost:4000".

Please do not commit this change!
Now build the page locally with

    bundle exec jekyll serve

 Navigate your browser to `http://localhost:4000/ar-for-eu-book/` to check results while you develop.

# Description

Teaching how to create and code Augmented Reality (AR) is an emerging topic in Higher Education.
This should not be confused with the interest of various other subjects to use AR applications and content.
Only a few top-tier universities world-wide currently offer courses that give instruction of how to code AR.
Few have related content and none have a full curriculum on AR.
The goal of this book project is to create the first comprehensive Open Educational Resource (OER) as a foundation for AR curricula in Higher Education.
Every book about high tech risks being outdated already when going into print, so we are planning for a continuously developed and updated online book, working with an open community of contributors, Open Source style.

The book will be available as Open Educational Resource (OER) under the Creative-Commons-License CC-BY-SA.
This allows using figures and texts for own presentations as Attribution-ShareAlike 4.0 International.
The book is planned as a living resource, where chapters can be reworked or added as needed.

The book production is supported by the ERASMUS+ Strategic Alliances Project for Higher Education called “Augmented Reality in Formal European University Education (AR-FOR-EU).
The project AR-FOR-EU establishes and deepens a strategic partnership for teaching Augmented Reality in Higher Education at scale on undergraduate and graduate levels.

# Scope

The book will cover the necessary prerequisites to understand and follow the core concepts of teaching Augmented Reality.
It will have a section for advanced topics that can be covered in curricula.
A section of the book will also be dedicated to a collection of good practices in teaching AR coding.

The book offers a comprehensive and introductory perspective on the topic Augmented Reality.

# Contents

## Foundational Chapters

* History of AR
* Future of AR
* Perceptual Foundations of AR
* Sensors and Signal Processing
* Computer Graphics
* Programming (in progress)
* Algorithms and Data Structures
* Linear and Geometric Algebra

## Core Chapters

### Core Technologies
* Display Technologies (in progress)
* Tracking Technologies (in progress)
* Interaction Technologies
* Hardware Abstraction Layer

### AR Development Skills

* AR SDKs
* Configuring Windows for Development with Hololens (in progress)
* Unity / Unreal Engine (in progress)
* 3D Modeling & Rendering (in progress)
* Spatial Audio
* Interactive Graphics and Sound Design
* Spatial Mapping, Gaze, and Gestures (in progress)
* Speech Interaction (in progress)
* Human Computer Interaction and User Centered Design

### Computer Vision

* Image Analysis
* Image Processing
* Object Detection and Recognition
* 3D Sensing
* Tracking 
* Depth Sensing

### Artificial Intelligence

* Data Mining
* Machine Learning, Deep Learning
* Sensor Fusion

## Advanced Topics

* AR Agile Project Management (in progress)
* AR Game Development, Gamification and Serious Games
* AR Applications
* AR for the Web
* Mobile AR
* Hardware Accelerated Computing
* Internet of Things, Robots and Wearables
* Hardware and Optical Design
* 2D/3D Printing

## Good Practices and Examples

* Maker Communities
* Workflows and Company Practices
* Privacy, Ownership and Intellectual Property
* Applications, Employments and Careers in AR

# Contribution Model and Technical Infrastructure

The book project follows an agile approach differing from the classic development process typical for printed content.
Contributors can play several different roles in the production process.
We are looking for authors, reviewers, agile editors, designers, software developers, visual artists, and testers.
Agile teams are responsible for the generation of chapters and act as product owners. 

* Reviewers will review chapters and communicate with the author teams. 
* Team champions drive forward the agile development of chapters. 
* Designers lay-out the online book and printed versions. 
* Software developers are responsible for interactive Web graphics, application examples, exercises and other dynamic code. 
* Visual artists are responsible for appealing visualizations. 
* Testers will thoroughly try out the final versions of the book.

The book uses Git for version management and a GitHub organization for the creation, hosting, and delivery of the book contents to guarantee agile development.
We use the GitHub-based issue tracking system for the communication between the community members, such as the the authors and the reviewers.
Based on this content sharing and version management platform we use the static site generator Jekyll for rendering the content of the Git repository into a Web site.
With every commit, a new version of the Web site is created automatically.
Formatting of the content is done using a simple markdown language.
Programming and lay-out uses JavaScript and CSS.

The project's [wiki](https://github.com/klamma/ar-for-eu-book/wiki) contains further details about the contribution guidelines and the technical environment.