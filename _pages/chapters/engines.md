---
layout: page
title: Unity / Unreal Engine
permalink: /chapter/engines/
categories: chapter
visualizations:
---

{% include autoRelativePath.html %}

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
    // script for exchanging version-specific content.
    $(document).ready(function () {
        $('.unityVersionSpecific').hide();
        $('.unity2017-4').show();
        $('#versionSelectorUnity').change(function () {
            $('.unityVersionSpecific').hide();
            $('.'+$(this).val()).show();
    })
});
</script>

> Please select your Unity version:

> <select id="versionSelectorUnity">
>   <option value="unity2017-4">Unity 2017.4</option>
>   <option value="unity2018-3">Unity 2018.3</option>
> </select>

> {: .unityVersionSpecific .unity2017-4}
You have selected Version 2017.4.
This is the long term support version.

> {: .unityVersionSpecific .unity2018-3}
You have selected Version 2018.3
This is the most current version.


Developers of AR applications do not have to start from scratch and (re-)implement the complete graphics pipeline and physics simulations.
Instead, 3D engines like Unity {% cite Unity %} or the Unreal Engine {% cite UnrealEngine %} already offer this functionality as a foundation for the development of real-time graphics applications.

# Unity

Unity is a real-time graphics engine by Unity Technologies which developers can utilize to create 2D and 3D applications {% cite Unity %}.
This means that Unity’s graphics can be adapted to different graphic qualities, performances and visual styles.
Applications can be deployed on more than 25 platforms, including Android, iOS, Windows Standalone and Universal Windows Platform.
Unity is available in different pricing levels ranging from a free personal edition to a Pro version with additional support for larger companies.
The required license level depends on the annual revenue.
Many of the presented AR SDKs can be added to Unity projects so that their functionality is available directly in the 3D engine.

## Project Structure and Project Setup

Once a new Unity project has been created, the project's folder contains a subfolder called "Assets".
Here, all resources for the project, e.g. 3D model files, textures, scripts, etc. can be placed.
Everything in this Assets folder and its subfolders is automatically imported into the project and can be integrated into the application.
It makes sense to keep the Assets folder organized so that all developers know where resources are stored.
One recommended way of setting up an Assets folder is to create individual folders for each type of resource, e.g. "Animations", "Models", "Textures", "Scripts", etc.

Some folder names are special since they are treated in a particular way by Unity {% cite UnitySpecialFolders %}.
For instance, a folder called "Plugins" will be searched for C/C++ DLLs which are integrated into Unity.
Another example is a folder named "Resources".
Any file which is placed in this folder can be accessed by application scripts using the command ```Resources.Load```.

A Unity project consists of different scenes.
Each scene is a virtual space which can be populated with 3D objects and user interface elements.
In the application, scenes can be loaded and unloaded individually or they can replace an opened scene.
Unity's WYSIWYG editor allows developers to graphically set up the 3D scene and arrange the 3D models accordingly.

## User Interface

*The following description of the panel positions refers to Unity's default layout.
The layout can be changed under Window > Layouts > Default.*

![Unity UI]({{pathToRoot}}/assets/figures/engines/UnityUIOverview.png)

The user interface of Unity's editor consists of different panels.
The most important panel is the 3D view (B).
The view direction can be changed by right-clicking and dragging at the same time.
Similar to games, the viewport can be moved by the WASD keys.
Additionally, certain preset perspectives like a view from the left side or top side can be selected in a widget in right top corner.
When clicking on the small cube in the middle of the widget, one can toggle between perspective and orthographic viewports.

The 3D view displays the content of one or more scenes.
A scene consists of objects which can be ordered in a hierarchical manner.
This scene hierarchy is displayed in a separate panel.
Here, each entry corresponds to one object.
To select an object, one can left click on the entry in the hierarchy or click on its geometry in the 3D view.

## Play Mode & Debugging



## Importing and Placing 3D Models

In order to import a 3D model, its file needs to be placed in Unity's Assets folder.
After this, it can be created in the 3D scene by dragging and dropping it into the 3D view of the editor.
Unity supports popular and application independent file formats like .fbx, .dae, .3ds, .dxf, .obj and .skp {%cite UnityFileFormats %}.
Additionally, Unity is also capable of reading application-specific files from Autodesk 3ds Max, Autodesk Maya, Blender, Cinema4D, Modo, LightWave and Cheetah3D.
Both application-independent and application-specific formats enable different workflows for the object import.
The application-specific format requires less work when the 3D model is modified regularly.
Any saved changes made in the 3D modelling application are immediately propagated to Unity.
This enables 3D artists to view the 3D model in parallel in the modelling application and a preview in the developed application.
However, Unity is only able to import such files if the corresponding application is actually installed.
When working in a team with assigned roles, this can complicate the development setup because not only the team members working on the 3D models have to install the 3D application but also all other team members, e.g. developers who are focusing on implementing the code and do not modify the 3D files.
This is especially problematic when working with a 3D modelling program which requires paid licenses for each device.
Another drawback concerns the flexibility of the 3D model creation.
The produced file may only contain the final 3D model.
Any further auxiliary 3D models or copies must not be included in the same file.
In contrast to this, when exporting a file to a generic 3D format, it is possible to choose which 3D objects will be included in the export.
This allows for a finer control and separation between editing and import.
The exported 3D formats are also directly supported by Unity.
Therefore, the project can be opened without installing additional software.
The disadvantage of the exported 3D formats is that every time a change is applied to the 3D model in the modelling application, the model needs to be exported again by hand.
This means that there are two versions of each 3D model where one is contained in the modelling application and one is used by Unity.
The creators have to make sure that the two versions match.

## Components

Objects in a scene in Unity can be extended or modified by components.
In the inspector panel, one can select such components and attach them to an object.
Objects always contain a Transform component.
In the inspector, developers can use this component to specify the position, rotation in Euler angles and scale of the object.
Additionally, developers can add further components, e.g. to enable the physics simulation on an object or add a scripted behavior to the object.

## Physics Simulation

The physics simulation is handled by a *Rigidbody* component.
When it is added to a 3D object, the object will be considered in the physics simulation.
Once the play mode is entered, it will be affected by gravity and starts falling down.
Another part of the physics simulation is the collision detection.
An object should have a collider or else it will pass through other objects like the floor and fall down infinitely.
By default, Unity's primitive objects like the cube or sphere are already equipped with a collider by default.
For imported 3D models, the colliders need to be set up manually.
This can be achieved by adding one or more collider components to the object.
The available colliders also have primitive shapes like cuboids, spheres or capsules.
There is also a *Mesh Collider* component which directly uses the object's geometry as a collider.
It is recommended to avoid using a Mesh Collider and instead approximate the object by a composition of primitive collider shapes.
This improves performance since the collision detection for primitives can be calculated quicker than for any arbitrary shaped geometry.

## Programming in Unity

The Assets folder also stores the application logic which is defined by C# scripts.
These scripts can react to events like the user input and can change properties on objects in a scene.
It is possible to change most values from the inspector panel like the position, rotation, scale or material.
In order to execute a script’s functionality, it needs to be added to a 3D object as a component.
First, the target object has to be selected.
After that, the component can be added in the inspector panel.
One can either drag the script from the Assets-browser onto the inspector panel or click on "Add Component" and search for the script's name.
Scripts can only be added in such a way to objects of a scene if they inherit from the MonoBehavior class.
Once a script is attached to an object, Unity calls special functions in the script if certain events happened.
For instance, developers can implement an Update() function which is called once for every frame which is rendered.
Similarly, different callback-methods can be implemented which are raised at different points in the application’s or object’s lifecycle, e.g. `Awake()`, `Start()` and `OnDestroy()`.
Details on available callback methods and the data structures which can manipulate an object’s properties can be found in Unity’s documentation {% cite UnityUserManual %}.

If the script contains public variables, the values of the variables will be displayed in the editor.
They are shown on the component's panel in the inspector and can also be edited.
This way, developers can configure initial values directly in Unity's editor on a UI without touching the script again.
For instance, public variables can be used to fine-tune the scripted behavior.
If an object should move along one axis over time, one can expose a public variable which determines the speed of the object.
In this case, the public variable is never assigned to in the script and the script only reads their value, e.g. to calculate the next position from the given speed.
Since the speed value is shown in the editor on the component, developers can now tweak it so that it fits their expectations.
Such input fields on the components are created for primitive variable types but also for all GameObjects, Transforms and MonoBehavior scripts.
For these complex variable types, a box on the component's UI is created which holds the reference.
One can directly drag an object from the hierarchy view into the given box to establish the reference to the dragged object.
The box will automatically be filled with the matching type which is attached to the object.

## Prefabs

Once an object is fully set up in Unity's editor, e.g. by importing the 3D model, setting its material and attaching components to it, it can be saved as a prefab.
The prefab saved the object's instance on the hard drive and it stores the configuration of the object.
This way, the object becomes reusable so that developers can quickly place the same object with the same configurations in other scenes.
Additionally, it is possible to instantiate prefabs by scripts.
To do so, the object can be set up in the scene and is saved as a prefab.
Then, the object can be deleted from the scene since it should only appear at a certain moment.
A reference to the prefab is handed to the script which determines when to create the object in the scene.
The reference can be set by dragging the prefab file from the Assets browser onto the corresponding field of the component.
The script creates a GameObject from this reference by calling `GameObject.Instantiate()`.

## Supporting Material

For exploring Unity and its functionality, one can take a look at its user manual {% cite UnityUserManual %}.
It also contains explanations and examples for the implementation of application logic using Unity's API.
Unity also provides an Asset Store {% cite UnityAssetStore %} which contains scripts, 3D models and usage examples which have been created by other developers.
It contains a mixture of free and paid content which can be downloaded for the own project to save development time.

## Exercise: Importing a 3D Model in Unity and Moving It by Script

> If you follow this exercise in order to deploy the project to the Microsoft HoloLens in the next exercise, please use Unity 2017.4.

The goal of this exercise is to get used to Unity's user interface, scripting in Unity and the general project workflow.
We will import a 3D model into Unity and write a script which will control the 3D model's position.

1. Start Unity.
   You will be greeted by a window showing previously opened projects.
   Click on "New" in the top right of the window.
2. Enter a project name and set its location.
   Make sure that a 3D template is used and that Unity Analytics is turned off.
   When logged in with an account, Unity Analytics gives developers a real-time insight into data about how users interact with their application.
   It is not required in this example.

    ![Project Creation]({{pathToRoot}}/assets/figures/engines/Exercise_IntroductionToUnity/CreateProject.png)

3. Once the project has been created, the 3D model can be imported.
   To do so, open a file browser and navigate to the project's folder.
   Here, create a folder called "3D Models" and copy the 3D model there.
   You can use any compatible 3D model format.
   In the example we use the Stanford bunny in the .obj file format.
   It can be downloaded in the [supplementary material]({{pathToRoot}}/assets/supplementary_material/Unity/Bunny.obj)).
4. Return to Unity's editor.
   In the Assets browser you will now find the "3D Models" folder and inside of it the 3D model.
   You can create an instance of the 3D model in the scene by dragging and dropping the 3D model file from the assets browser onto the 3D view or the scene hierarchy.
   In order to quickly move the viewport to the 3D model, double click the object's entry in the hierarchy view.

    ![Drag And Drop Model]({{pathToRoot}}/assets/figures/engines/Exercise_IntroductionToUnity/DragAndDropModel.png)

5. With the 3D object selected in the scene, in the inspector panel, the attributes of the 3D model can be changed.
   Under "Transform", its position, rotation and size can be adapted to fit the scene.
   Set the position to (0, 0, 0) so that the object is situated in the origin of the coordinate system.

    ![Adjust Transform]({{pathToRoot}}/assets/figures/engines/Exercise_IntroductionToUnity/AdjustTransform.png)

6. It is also possible to add a material to the bunny which can be used to add color to the object's surface.
   In order to do this, create a new folder called "Materials" in the root directory of the assets browser.
   Then right click on the assets browser and choose "Create > Material".
   Give the material a descriptive name, e.g. "BunnyMaterial".
7. We will now change the material's color.
   Select the material in the assets browser.
   Its properties can now be edited in the inspector panel.
   By default, the material is setup as a Physically Based Rendering (PBR) material, so its surface color can be changed in the "*Albedo*" option.
   Click once on the white box next to "*Albedo*" to open a color picker dialog.
   Select a color and simply close the color dialog again to apply the selected color to the material.

    ![Material Setup]({{pathToRoot}}/assets/figures/engines/Exercise_IntroductionToUnity/MaterialSetup.png)

8. In the inspector view, the color on the sphere in the material preview window has been changed accordingly.
   However, the color does not appear on the 3D model yet.
   In order to view the material on the model, the material must be applied to it.
   The simplest way to do this is to drag and drop the material file from the assets browser onto the object in the 3D view.

    ![Drag And Drop Material]({{pathToRoot}}/assets/figures/engines/Exercise_IntroductionToUnity/DragAndDropMaterial.png)

9. Make sure that the object is also visible in the game view since it provides a preview of the final application.
   If the object is not visible, go back to the 3D view and select the camera.
   Move and rotate the camera so that the object is visible from its perspective.
   This can also be done by the widgets or by entering values in the transform component in the inspector.
   When the camera is selected, a small preview window will appear in the right bottom of the 3D view which shows what the camera sees.
   In the example scene, we used the positional values (0, 1, 3) and rotation angles of (20, 180, 0).
10. We are now ready to create the script which will handle the movement of the 3D object.
   Similar to the creation of the other files, first create a folder called "Scripts" and then create a C# script called "ObjectMover" by right-clicking and selecting "Create > C# Script".
   The created script is automatically set up as a C# class which is also called `ObjectMover`.
   It is important that the name of the file always matches up with the name of the class.
   The script is also set up so that it inherits from `MonoBehavior` which means that the script can be attached to game objects and that it can implement special callback functions.
   Double click on the file in the assets browser in order to edit it in a development environment, e.g. Visual Studio.
11. With `Start` and `Update` two of these callback methods have already been defined in the class.
   We will first modify the update-function to implement the actual movement:
    ```[C#]
    // Update is called once per frame
    void Update()
    {
        float xAxisMovement = Mathf.Sin(Time.time);
        gameObject.transform.position = new Vector3(xAxisMovement, 0, 0);
    }
    ```
    The given code segment makes the object go back and forth between the -1 and 1 coordinates on the X axis.
    We can move an object in such a periodical manner by using the time as an input for the sine function.
    This is done in the first line in the `Update` method.
    The sine function is implemented in the `Mathf` namespace.
    Next, we only require a way to access the time.
    If we look at Unity's documentation, we can see that `Time.time` is exactly what we are looking for since it provides the time in seconds since application-startup.
    The second line handles the actual movement of the object.
    The local variable `gameobject` is defined in the MonoBehavior parent class and it refers to the object instance to which the script is attached.
    By accessing its `transform` variable, one can edit its position.
    If we assign values to the position, it will apply the values to the exact same Transform component that we previously changed manually in the inspector view to set its position.
    Since the `Update` function is called once per frame, the object's position will be updated in every frame step.
    Thus, the changes will appear as one continuous movement.

12. If you start Unity's play mode now, the object will still not move since the script is not yet attached to the object.
   In order to fix this, navigate to the script in the assets browser.
   Then select the object in the 3D view or scene hierarchy.
   Drag and drop the script file onto some free space on the inspector panel.
   This will create a new component with the name "ObjectMover" - the name which we defined for our script.
13. Now, we can enter play mode by hitting the play button.
   The editor will automatically change to game view and you should now see the object moving back and forth.
14. Finally, we can also adapt the movement speed.
   Go back to the script and create a public float variable speed and assign it the value 1.
   Any public variables of a MonoBehavior are exposed in the inspector panel as configurable values.
   In the case of our float variable `speed`, this means, that Unity will automatically create a numeric text field on the MoveObject component where we can enter values.
   Multiply the `speed` variable with the time.

    ```[C#]
    using System.Collections;
    using System.Collections.Generic;
    using UnityEngine;
    
    public class ObjectMover : MonoBehaviour
    {
        public float speed = 1f;
    
        // Start is called before the first frame update
        void Start()
        {
            
        }
    
        // Update is called once per frame
        void Update()
        {
            float xAxisMovement = Mathf.Sin(speed * Time.time);
            gameObject.transform.position = new Vector3(xAxisMovement, 0, 0);
        }
    }
    ```
15. In the editor, it is now possible to edit the speed.
   This also works while in play mode so that changes to such properties can be previewed in real-time.
   However, any changes while in play mode will be reset once play mode is exited again.
   This way, developers can experiment with various configurations in play mode and go back to the state which was active when entering play mode.
   For instance, you can now enter the play mode by click the play button.
   Select the object and change the speed value on the ObjectMover component.
   The speed of the object in the preview will also adapt.


# Exercise: Developing a Unity Project For the Microsoft HoloLens

> At the moment, Unity 2017.4 should be used since this version which is currently supported by the stable release of the MixedRealityToolkit.

The goal of this exercise is to develop an AR project with Unity so that it can run on the Microsoft HoloLens.
We will start with the result of the last exercise but the shown procedure also applies to any project which is created from scratch.

1. We will use the MixedRealityToolkit as a supporting library in Unity.
   It provides access to some HoloLens-specific functionality, e.g. to the spatial mapping mesh.
   The MixedRealityToolkit is open-source and it can be found on [GitHub](https://github.com/Microsoft/MixedRealityToolkit-Unity).
   Under [releases](https://github.com/Microsoft/MixedRealityToolkit-Unity/releases) it can be downloaded.
   Please make sure to choose the version which is labelled with *Latest release* (not the versions which are tagged as *Pre-release*).
   Usually, the release notes also mention the targeted Unity version, so you can check if you chose a compatible release.
   The release provides some packaged assets.
   Download the file with the ending *.unitypackage* without *Examples* or *Preview* in the name.
   You can save this Unitypackage anywhere on your computer, just remember the file path.
2. In Unity, perform a right-click on a free space in the assets-browser panel and choose "Import Package > Custom Package...".
   In the opened dialog, navigate to the path where the downloaded unitypackage was stored and import it.
   
    ![Import Package]({{pathToRoot}}/assets/figures/engines/Exercise_DeployToHoloLens/ImportPackage.png)

3. The imported package will create a new folder in your assets, called HoloToolkit, and copy the content there.
   Additionally, a new menu entry "Mixed Reality Toolkit" can be found in the top menu bar.
   It contains quick ways to set the project up for Mixed Reality.
   Click on the MixedRealityToolkit entry in the menu and choose "Configure > Apply Mixed Reality Project Settings".
   
    ![Apply Project Settings Menu]({{pathToRoot}}/assets/figures/engines/Exercise_DeployToHoloLens/MenuApplyMixedRealityProjectSettings.png)

4. The following dialog gives detailed options about specific project settings.
   Among others, the checked points set up the Unity project for UWP development which is required for the HoloLens.
   Additionally, XR support is activated which tells Unity that the build application should run on a head-mounted display.
   For a collaborative experience which uses the networking system which is provided by the MixedRealityToolkit, one can enable the sharing settings.
   However, for this demo this won't be necessary.
   Hit "*Apply*" to finish the process.
   
    ![Apply Project Settings]({{pathToRoot}}/assets/figures/engines/Exercise_DeployToHoloLens/ApplyMixedRealityProjectSettings.png)

5. Next up, we need to prepare the scene for Mixed Reality.
   This can be achieved with the next menu entry.
   As before, go to the top menu bar entry "Mixed Reality Toolkit" and choose "Configure > Apply Mixed Reality Scene Settings".
   A similar dialog will open up where you can specify how the scene should be altered.
   For instance, the camera will be exchanged for a prepared version which can react to the user's head movements.
   It is also a good idea to make the script reset the camera's position to the origin.
   This way, when the application starts or the scene is loaded again, the view always starts there and the developer can account for this in the scene design.
   The script will also import some prefabs from the Mixed Reality Toolkit which are able to detect input gestures.
   The gaze cursor which is a small ring in the centre of the user's vision helps the user in focusing objects for interaction.
   In order to use this cursor in own applications, the prefab needs to be placed in the scene.
   If you want to access the 3D scan of the environment, which is continuously created by the HoloLens, please check *Add the Spatial Mapping Prefab*.
   It places an empty GameObject in the scene with a Spatial Mapping Manager attached to it.
   During runtime, this manager will create and update the mesh of the 3D scanned environment in this scene.
   Hit "*Apply*" in the dialog box to adapt the currently open scene for Mixed Reality.

    ![Apply Scene Settings]({{pathToRoot}}/assets/figures/engines/Exercise_DeployToHoloLens/ApplyMixedRealitySceneSettings.png)

6. Again, click on the "Mixed Reality Toolkit" menu entry and this time select "Apply UWP Capability Settings".
   It opens another dialog window with checkboxes for common permissions.
   Some functionality of the Mixed Reality Toolkit, but also from own scripts, e.g. accessing the microphone, the internet or the spatial mapping, require explicit permission by the user.
   In this dialog, developers can state that they require this permission.
   If users open the app for the first time, they will be asked to agree to these permissions.
   If you checked the *Spatial Mapping* option in the previous step, you need to check *Spatial Mapping* here, too.

7. In the top menu, go to "File > Build Settings".
   In the opened dialog window, make sure that on the left, the platform is set to Universal Windows Platform.
   This should already be the case because this is one of the settings which were automatically changed in step 4.
   The active platform is indicated by the Unity logo next to it.
   
8. To include the currently opened scene in the build, click on the "Add Open Scenes" button.
   After that, the scene should appear in the list above the button.

   ![Build Settings]({{pathToRoot}}/assets/figures/engines/Exercise_DeployToHoloLens/BuildSettings.png)

9. You can also check the "Unity C# Projects" option.
   This is not really required but it is helpful:
   The build will generate a Visual Studio solution and if this option is checked, the C# scripts are available in the solution.
   In the solution, the C# scripts can be changed without going back to Unity and re-building the project.
   A re-build is only necessary in Unity if a project setting or anything in the scene was altered.

10. Click on "Build" to generate the Visual Studio solution.
   It will ask for a folder where the solution should be saved.
   In order to keep the project tidy, create a folder "App" and select it.
   The build will be generated in this folder.

11. Once the build is finished, navigate into the folder that you just created and which now contains the build.
    You will find a Visual studio solution (with the ending .sln) and the same name as the project.
    Please, open it.

12. In the Visual Studio solution, change the configuration to "Release" and the target architecture to "x86".
    Select the HoloLens as the deploy target by changing the entry next to the green play button to "Device".
    The entry can be changed by clicking on the small black triangle next to the text on the button.

    ![Visual Studio Solution]({{pathToRoot}}/assets/figures/engines/Exercise_DeployToHoloLens/VisualStudio.png)

13. Make sure that the HoloLens is connected to the development PC by USB.
    Click the green play button in Visual Studio to start the installation of the app on the HoloLens.

14. If this is the first time that you are building an app for the HoloLens, it will probably ask you for a PIN.
    You can find this dynamically generated code in the developer settings on the HoloLens.

    ![PinRequest]({{pathToRoot}}/assets/figures/engines/Exercise_DeployToHoloLens/PinRequest.png)

    ![Pairing Step 1]({{pathToRoot}}/assets/figures/engines/Exercise_DeployToHoloLens/Pair1.jpg)

    ![Pairing Step 2]({{pathToRoot}}/assets/figures/engines/Exercise_DeployToHoloLens/Pair2.jpg)

    ![Pairing Step 3]({{pathToRoot}}/assets/figures/engines/Exercise_DeployToHoloLens/Pair3.jpg)

15. To stop the application again, you can click on the red box which has appeared roughly at the same place where the green play button was.
    This only stops the execution.
    The application is still installed on the HoloLens and can now be started directly through the start menu on the HoloLens.

# Unreal Engine