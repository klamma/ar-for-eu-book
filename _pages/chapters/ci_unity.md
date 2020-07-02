---
layout: page
title: Unit Tests & Continuous Integration for a Unity application
permalink: /chapter/ci_unity/
categories: chapter
visualizations:
---

{% include autoRelativePath.html %}

# Unit Tests

## Unit Tests in Unity

Unity provides a module called "Test Runner".
Until Unity 2018, the test runner is shipped with the Unity editor.
From Unity 2019 onwards, it is a separate package which can be imported using Unity's package manager.
The test runner is based on a early version of NUnit which is a unit testing framework for C#.

### Test Runner Window

The test runner adds a new window which can be found under *Window > General > Test Runner*.
It provides a list of available tests which are grouped by their namespace.

### Play Mode Tests and Edit Mode Tests

Unity's unit tests are divided into play mode tests and edit mode tests.
The difference between the two is that play mode tests are executed in the application's runtime environment where the callback methods of MonoBehaviours are executed.
Editor tests are executed directly in the editor's environment and no callback methods of MonoBehaviours are called.
Hence, test files for editor tests need to be placed in a folder called "Editor".
The folder can be placed anywhere in the project, e.g. under "Assets/Tests/Editor".
However, the two test types do not create a strict division between tests for the application logic and tests for editor tools.
If application logic should be tested which does not involve any callback methods, the test can also be created as an edit mode test.
The advantage of edit mode tests is that take less time to execute because play mode tests have to launch the separate runtime environment.
Moreover, the tools and methods of the Unity editor are also available.
This means that it is possible to access any file in the Assets folder using usual file readers from `System.IO`.
In contrast to this, play mode tests exist in the runtime environment and can even be compiled into a separate application which launches and runs the tests.
Therefore, play mode tests can only access assets by the usual means known from Unity app development, e.g. by using `Resources.Load()` to find files which have been placed in a "Resources" folder.

Hence, a good practise is to use edit mode tests whenever possible, i.e. if no MonoBehaviour callback methods are required.

### Assembly Definition Files

As a prerequisite for creating tests, an assembly definition file has to be created in the folder where the tests are placed.
If a project has both play mode tests and edit mode tests, separate assembly definition files are required.

### Creating a Test Class

### Execution Duration of Tests

Both edit mode and play mode tests can be executed within one frame or can run for multiple frames.


# Continuous Integration

## GitHub Actions

## Gitlab CI