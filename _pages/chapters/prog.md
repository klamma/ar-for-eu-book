---
layout: page
title: Programming
permalink: /chapter/prog/
categories: chapter
visualizations:
---

# Programming

Programming techniques

* JavaScript
* C#
* C++

## SOLID Principles of Code

The SOLID principles of code describe a set of five rules and guidelines which should improve the quality of written code {% cite Mart03 %}.
Designed as a general guide, the rules also apply to Unity scripts.
In this special case they help with structuring the application logic into classes.

### S: Single Responsibility
Every class or component should be responsible for only a single part of functionality.
This way, a script only needs to be adapted if the one feature that it realized needs to be changed {% cite Mart03 %}.
This approach leads to readable code.
Instead of a few big classes which are responsible for many different things, the result is a large amount of small, readable classes with defined tasks.
Additionally, such small classes which focus on one subfeature are reusable if this subfeature is also required in another context in the application.
Since the classes have a defined responsibility, it is less cumbersome to create behaviour variants since they can be realized by inheritance or by modifying the corresponding class.

As an example, we assume that we need to build a virtual lift.
It consists of a 3D model of its car and the lift shaft.
The lift car is equipped with animated doors that can open and close, as well as a series of buttons for each floor.
Additionally, a set of floors has been created which also have a button to call the lift.
The Single Responsibility principle is violated if the behaviour for the lift is implemented in one large class which controls the floor selection, movement and door animation.
Instead, for each of these features, a separate class should be created.
For instance, one dedicated class is concerned with moving the lift up and down to the floors.
Another class controls the doors and makes sure that they only open when the lift is stationary at the floors.
For handling the input from a button, a different class can be implemented.
The logic for selecting in which order floors should be served can be implemented in a fourth class.

### O: Open-Closed Principle
