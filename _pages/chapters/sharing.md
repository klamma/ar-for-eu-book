---
layout: page
title: Collaboration & Sharing
permalink: /chapter/sharing/
categories: chapter
visualizations:
---

{% include autoRelativePath.html %}

## Collaboration in a Shared Virtual Environment

Synchronous collaboration in Mixed Reality is possible in a shared virtual environment.
This means that the shown 3D objects are synchronised between the participants and changes are broadcast in real-time.
As an example, if one participant picks up an object and moves it around, the other members of the shared environment should be able to perceive the motion of the object acurately and with a low latency.
As simple as this sounds, there are a few considerations that need to be made in order to successfully realise such a system.

### Common Challenges of Networking

A series of common challenges can occur in the implementation of a shared environment.

- **Network traffic**:
- **Unreliable connection**: 
- **Broadcast of Changes**:
- **Session & User management**:
- **Permissions**:
- **Conflict handling**: 
- **Movement smoothing**: To save network traffic, the position of an object is not broadcast every single frame but in larger intervals.
  If the receiving client just updates the position of the object to the values given in the latest package, the user will see the object teleport along the path instead of a smooth movement.
  To solve this, the implementation should interpolate between the received positions.
  There is a trade-off between the smoothness and the latency.
  If a package is received, this means that the object should be at the received position.
  But with a naive interpolation between the last position and the most-recently received position, the object can only start moving towards this position now.
  This means that the object is always one package behind.
  A more advanced solution is to also broadcast the velocity vector of the object.
  With the direction and speed that the object is currently moving, the receiving client can anticipate the next position by extrapolating the object's position along this trajectory.
  When the next package arrives, the position is corrected.

With poor connection, networked applications can show a series of common effects.
Developers need to be aware of them and know how they are produced.

- **Teleporting**:
- **Rubber-banding**: With the described interpolation method which also works with the velocity vector of the object, an effect can occur called "rubber-banding".
  It means that objects do not immediately react to large accelerations or decelerations but instead keep moving, before bounding back to their true position.
  We will look at this effect in a 1D example:
  There is an object which can only move left or right.
  It is moved on sender S and there is a receiver R.
  We assume one-way communication where the sender tells R about the updated positions.
  We will ignore the connection architecture and any network delay.
  This means that we can simply assume that an object which is sent at time point t by the sender is also received by the receiver at point t.
  At time point 0, a package is sent.
  It describes that the object is currently at position 0 and has a speed of 5.
  The package is received by r.
  It places the object at position 0 and starts moving it so that it will be at position 5 at time step 1.
  At time step one, S tells R that the object has actually moved to position 5 and still has a velocity of 5.
  R now gradually moves the object from position 5 to position 5 + 6 = 11 in a way that it will arrive at 11 at time point 2.
  At time step 2.5, the object comes to an abrupt halt on S at position 8.
  However, this is not immediately told R because packages are only sent at full time steps.
  So, at time step 3, S sends that the object is at position 8 with a speed of 0.
  But R has already moved the object to position 11 and now has to move it back to 8 in the next time interval.
  To the user which views the object on R this seems like a rubber-band effect since the object overshoots the target position before being pulled back to the point where it came to a halt.

### Unity Networking Libraries

#### Photon

- General Introduction
- Presentation of Sharing Possibilities

#### Mirror

- General Introduction
- Presentation of Sharing Possibilities

### Example Application: VIAProMa

- Reference of agile project management (there is the entire)
- Highlight of 
- Owner manager
- When to use RPCs

### Exercise: Creating a Shared Application in Photon

In this exercise, we will create the game [Draughts](https://en.wikipedia.org/wiki/Draughts) (also known as Checkers).
This sample app will provide a way for two remote users to move playing stones on a board so that both participants can see each other's moves.
We will not implement the rules of the game in this exercise.
Instead, the app provides the shared pieces and relies on players to move them according to the rules.
If you want, you can implement rules, e.g. move restrictions once you completed the exercise.

This exercise is split into five sections.
The first part will demonstrate how the Unity project is created and how the necessary libraries can be imported.
After that, the base logic of the draughts game is created.
The third part demonstrates the setup of a shared environmnent for remote players.
It will demonstrate how to set up a room system where content is only shared between users in one room and where multiple rooms can exist in parallel.
In the fourth part, we will look at a basic way of implementing the shared logic using serialisers.
The last part presents an alternative way for sending data over the network using Remote Procedure Calls (RPCs).

#### 1 - Setting up the Project

1. Create a new Unity project with the name "SharedDraughts" which uses the default *3D* template.
   In this exercise, we are using Unity 2018.3 because it is the current long-term support version that is compatible with the Mixed Reality Toolkit.
   If you are using the Unity Hub, you can select which Unity version should create the project by clicking on the down arrow on the *New* button.

   ![Create Project]({{pathToRoot}}/assets/figures/sharing/sharingExercise/CreateProject.png)
   ![Project Name Menu]({{pathToRoot}}/assets/figures/sharing/sharingExercise/ProjectName.png)
2. Download the Mixed Reality Toolkit.
   Go to the [releases](https://github.com/microsoft/MixedRealityToolkit-Unity/releases) of the Mixed Realtiy Toolkit on GitHub and scroll to the latest version which is not marked as a pre-release.
   We are using the release *Microsoft Mixed Reality Toolkit v2.3.0*.
   In the Assets section of the release, download the Unity-package which has *Foundation* in its name as this is the base package.
   In our case, it is called * Microsoft.MixedReality.Toolkit.Unity.Foundation.2.3.0.unitypackage*.

   [![Download Mixed Reality Toolkit]({{pathToRoot}}/assets/figures/sharing/sharingExercise/DownloadMRTK.png)](https://github.com/microsoft/MixedRealityToolkit-Unity/releases)
3. Import the Mixed Reality Toolkit.
   To do this, perform a right-click in Unity's Asset Browser and select *Import Package > Custom Package* from the context menu.

   ![Import Custom Package]({{pathToRoot}}/assets/figures/sharing/sharingExercise/ImportCustomPackage.png)

   After that select the Unity-package that you just downloaded in the opened file explorer and click *Open*.
   Unity will prepare the Unity-package for the import.
   Next, a dialog will be shown which allows you select which content should be imported.
   Click *All* to make sure that everythin is selected and then press *Import*.

   ![Import Package Selection Menu]({{pathToRoot}}/assets/figures/sharing/sharingExercise/ImportPackage.png)

   Once the import has finished, you will find the new folders of the Mixed Reality Toolkit in your assets.
4. After the import, a configuration window will automatically open.
   It states that the Mixed Reality Toolkit would like to apply some settings to prepare the Unity project for Mixed Reality development.
   Make sure that every recommendation in the list is checked and then click *Apply*.

   ![MRTK Configure Project Settings]({{pathToRoot}}/assets/figures/sharing/sharingExercise/MRTKConfiguration.png)

5. The next step is to prepare the import of the Photon library.
   Each application that uses Photon needs an AppId which is coupled with an account.
   Go to [Photon's homepage](https://www.photonengine.com/pun) and create an account by clicking *Sign in* in the top right and then selecting *Don't have an account? Create one...*.
6. After the registration you are on a dashboard where you can administer your Photon applications.
   Click on the button *CREATE A NEW APP*.
   
   ![Create New Photon App]({{pathToRoot}}/assets/figures/sharing/sharingExercise/CreatePhotonApp.png)
   
7. On the next screen, you will be asked to enter the information about the new application.
   Set the type to Photon PUN since we will work with Photon's PUN library.
   Additionally, give the app a descriptive name, e.g. *SharedDraughts*.
   You can also add a description if you want so that it becomes easier to identify the app later.
   When you are done, click the *CREATE* button.

   ![Photon App Settings]({{pathToRoot}}/assets/figures/sharing/sharingExercise/PhotonAppSettings.png)

8. You will now be directed back to the Photon dashboard where a new panel has appeared with the name of your application.
   Here, you can get the AppID of the application and look at its usage statistics.

   ![Photon Dashboard]({{pathToRoot}}/assets/figures/sharing/sharingExercise/PhotonDashboard.png)

9. Next, we are going to import the Photon library so that we can create a networed application.
   Go to *Window > Asset Store* or press `Ctrl + 9` to open the asset store window in Unity.
   Make sure that you are signed in with a Unity account so that you can download resources from the asset store.
   If you are not signed in, there is a *Sign in* button at the top right of the asset store panel.
   Search for *Pun 2 - FREE* and select it.
   Click on the blue *Add to My Assets* button.
   Once this is done, the button's caption will change to *Import* and you can click the button again to import the asset.
   Just like the Unity-package of the Mixed Reality Toolkit, Unity now displays a dialogue window where you can select which resources you want to import.
   Select everything and click the *Import* button in the dialogue.
10. Once the import has finished, PUN will automatically open a pop-up window where you can enter the AppID that we generated previously.
    To do so, go back to the browser and copy your full AppID that we generated.
    The dashboard only shows a cut-off preview of the AppID.
    Click on the shown preview and the full ID will be shown and is automatically highlighted so that you can copy it.
    Enter the ID in the text field of the opened window in Unity.

    ![PUN Setup]({{pathToRoot}}/assets/figures/sharing/sharingExercise/PUNSetup.png)

    If you have accidentally closed the window or pressed *Skip*, you go to *Window > Photon Unity Networking > Highlight Server Settings*.
    In the inspector, you can enter the AppID in the *Settings* section under *AppID Realtime*

    ![PUN Server Settings]({{pathToRoot}}/assets/figures/sharing/sharingExercise/PUNServerSettings.png)

#### 2 - Creating the Draughts Game Elements

We have finished the project setup and can now start with setting up the pieces of the Draughts game.

1. First, we need to create the scene.
   To keep things organized, go to the *Scenes* folder in the assets browser, perform a right-click and choose *Create > Scene*.
   Name the scene "MainScene".
   
   ![Create Unity Scene]({{pathToRoot}}/assets/figures/sharing/sharingExercise/CreateScene.png)

   Perform a double click on the new scene to open it in the 3D view.
   You can confirm that the scene was opened by looking at the title bar of the Unity window.
   It includes the name of the open scene.

2. In the top menu select *Mixed Reality Toolkit > Add to Scene and Configure*

   ![Add to Scene and Configure]({{pathToRoot}}/assets/figures/sharing/sharingExercise/MRTKAddConfigure.png)

   This adds a *MixedRealityToolkit* GameObject and a *MixedRealityPlayspace* GameObject to the scene's hierarchy.

3. Add a cube to the scene by choosing *GameObject > 3D Object > Cube* from the top menu.
   It will act as the playing field.
   Rename it in the inspector to *Playing Field*.
   There, you can also move the cube to the position (0, 0, 2) so that it is two meter in front of the user at the application start.
   Scale it to the measurements (0.8, 0.02, 0.8) so that it is a flat playing field.

   ![Playing Field]({{pathToRoot}}/assets/figures/sharing/sharingExercise/PlayingField.png)
   
4. We will now import the checkerboard texture for the playing field.
   To keep your project organised, create a new folder with the name *Textures* in the assets folder.
   You can do this by performing a right-click in Unity's asset browser and choosing *Create > Folder*.
   Download the given checkerboard texture by right-clicking on [this link]({{pathToRoot}}/assets/figures/sharing/sharingExercise/CheckerboardTexture.png) and choosing *Save target as...*.
   Place the texture in the new texture folder.
   Simply navigate in the file browser dialog to the place where you saved your Unity project.
   It contains the asset folder and within it the textures folder.
   If you return to Unity, the texture will show up in the asset browser.

5. Next, we create a new material.
   Go to the assets folder in Unity and create a folder *Materials* (right-click, *Create > Folder*).
   With the folder opened in Unity's asset browser, right-click and select *Create > Material* to create a new material.
   Enter the name *Checkerboard* and confirm with enter.

   ![Create Material]({{pathToRoot}}/assets/figures/sharing/sharingExercise/CreateMaterial.png)

6. Select the material in the asset browser so that it can be configured in the inspector.
   First, we will change the material's shader to the optimised shader of the Mixed Reality Toolkit.
   Click on the *Shader* dropdown at the top of the inspector and change it to *Mixed Reality Toolkit > Standard*.
   Next, we will assign the texture to the material.
   There is an *Albedo* property underneath *Main Maps*.
   Click on the icon with the small circle with a dot in the middle left of the *Albedo* text to choose a texture.
   A dialog with all textures in the project opens.
   Search for *Checkerboard* (the name of the texture) and select it.
   After that you can close the dialog window again.

   ![Assign Texture]({{pathToRoot}}/assets/figures/sharing/sharingExercise/AssignTexture.png)

7. Apply the material to the playing field object by dragging and dropping it from the asset browser onto the GameObject.

   ![Assign Material]({{pathToRoot}}/assets/figures/sharing/sharingExercise/AssignMaterial.png)

8. Draughts is played on a chess board which has 8 by 8 fields.
   At the moment we only have a 2 by 2 board.
   We can change this by increasing the texture's tiling factor in the material's settings to 4 for X and Y.
   
   ![Change Tiling Factor]({{pathToRoot}}/assets/figures/sharing/sharingExercise/ChangeTilingFactor.png)

9. We now have a playing field but we still need the game pieces.
   They can be created with cylinders.
   In the top menu, select *GameObject > 3D Object > Cylinder*.
   Scale the cylinder to (0.08, 0.01, 0.08) so that it fits onto one field of the playing field.

#### 3 - Setting up the Shared Environment

#### 4 - Synchronising Data with Serialisers

#### 5 - Synchronising Data with Remote Procedure Calls

Section two presents an alternative way of synchronizing the play stones.
Both

### World Anchors

- Concept of Spatial Anchors

#### Azure Spatial Anchors

#### ARCore World Anchors

## Cross-Platform Support

### Mixed Reality Toolkit

- Setting up the Mixed Reality Toolkit for cross-platform support

### AR Foundation