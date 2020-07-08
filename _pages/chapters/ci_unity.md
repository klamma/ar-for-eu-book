---
layout: page
title: Continuous Integration & Unit Tests
permalink: /chapter/ci_unity/
categories: chapter
visualizations:
---

{% include autoRelativePath.html %}

# Unit Tests

## Unit Tests in Unity

Unity provides a module called "Unity Test Framework".
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

> Note: The test runner window provides initialization options which can directly generate the folders and necessary assembly definition files.
> The following section is for information purposes so that you understand what these initialization options do and how to set them up manually.
> For the automatic setup of the test folders, take a look at the exercise at the end of this chapter.

Assembly definition files separate the project's scripts into different libraries.
If you do not use assembly definition files, all scripts are compiled into one big *Assembly-CSharp.dll* in the build process.
This dll-file is referenced by the Unity engine so that the custom code can be executed in the final application.
However, if an assembly definition files is created in a folder, all scripts in the folder and all sub-folders are compiled to its own dll-file.
This is useful to manage dependencies between scripts.
For instance, scripts which are managed under other assembly definition files, can only be accessed if they are added to the list of *Assembly Definition References*.
Moreover, is can be defined for which platform the scripts should be included.

In the case of the editor scripts, the assembly definition files should be set up in a way that under *Platforms* only *Editor* is checked.
In addition to this, all test assembly definition files must check *Test Assemblies* in the *Unity References* section.
This way, the NUnit framework becomes accessible.

{% include image.html url="/assets/figures/ci_unity/AssemblyDefinitionTest.png" base=pathToRoot description="Settings for the EditMode tests" %}

### Creating a Test Class

### Execution Duration of Tests

Both edit mode and play mode tests can be executed within one frame or can run for multiple frames.

# Continuous Integration

## GitHub Actions

## Gitlab CI