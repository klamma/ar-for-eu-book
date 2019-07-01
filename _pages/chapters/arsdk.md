---
layout: page
title: AR SDKs
permalink: /chapter/arsdk/
categories: chapter
visualizations:
---

{% include autoRelativePath.html %}

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
    // script for exchanging version-specific content.
    $(document).ready(function () {
        $('.mrtkVersionSpecific').hide();
        $('.mrtk2017').show();
        $('#versionSelectorMRTK').change(function () {
            $('.mrtkVersionSpecific').hide();
            $('.'+$(this).val()).show();
    })
});
</script>

# AR SDKs

## Mixed Reality Toolkit

> Please select your MixedRealityToolkit version:

> <select id="versionSelectorMRTK">
>   <option value="mrtk2017">MRTK (Unity 2017.4)</option>
>   <option value="mrtkvNext">MRTK vNext (Unity 2018, 2019)</option>
> </select>

> {: .mrtkVersionSpecific .mrtk2017}
You have selected the MixedRealityToolkit 2017.
This version targets Unity 2017.4 and works with the HoloLens 1.

> {: .mrtkVersionSpecific .mrtkvNext}
You have selected the MixedRealityToolkit vNext.
This is the most current version.
It targets the Unity versions 2018 and 2019.
It works on the HoloLens 1 and 2, Immersive Windows Mixed Reality Headsets and OpenVR devices.

### UI

#### Creating Buttons

<div class="mrtkVersionSpecific mrtk2017" markdown="1">

The MixedRealityToolkit provides the means to turn any mesh object with a collider into a button.
There are different ways to create such buttons.
One option is to implement the functionality directly in a script, using the interaction interfaces like `IFocusHandler` and `IInputClickHander`.
This alternative is suitable for a complex button logic which depends on the user interaction.

However, another option are the pre-made `CompoundButton` scripts in the MixedRealityToolkit.
These compound scripts which all start with the prefix "CompoundButton" are structured in a modular way:
Each possible feature, e.g. moving when pressing the button, displaying text or reacting to spoken commands, is realized in a separate script.
Developers can add any combination of these scripts to a GameObject.

To set up a button with the compound scripts, a GameObject must be added to the scene.
The GameObject should be a 3D object with a mesh so that the user can see the button's representation.
Additionally, it is necessary to add a collider to the GameObject so that the button becomes a target for the input system.
The collider can also be placed on a child of the GameObject.
With the button GameObject selected, the CompoundButton components can be found in the inspector panel by clicking "Add Component" and typing "CompoundButton" in the opened search bar.
The list of search results shows the available ButtonCompound scripts.
Any one of them can be added to the GameObject by clicking on their entry.

**Compound Button**
The `CompoundButton` is the core class which provides the necessary event handlers for reacting to input.
Other scripts can subscribe to this events by getting a reference to the component and registering for the event.

The following events are available:
- `StateChange`: Event raised if the state of the button is changed.
- `OnButtonPressed`: Event raised if the button is pressed down by a tap gesture.
- `OnButtonReleased`: Event raised if the pressed button is released again.
- `OnButtonClicked`: Event raised if a button is clicked, i.e. pressed and released gain.
- `OnButtonHeld`: Event raised if a button is pressed and held down for a longer period of time.
- `OnButtonCanceled`: Event raised if the interaction with the button was cancelled, e.g. if the button was pressed down and then the hand is not in the tracking area anymore.

The Boolean property `RequireGaze` can be used in order to specify if the interaction with the button should end if it is not in focus anymore.
With `RequireGaze` set to false, the interaction on a button which is pressed and held down will be canceled.

Usually, the `CompoundButton` script is used in combination with one of the other CompoundButton components.
When adding one of them to the button, the `CompoundButton` will automatically be added, too.

**Compound Button Mesh**

The `CompoundButtonMesh` class can be used to change the basic properties of a GameObject with a mesh.
The properties which can be changed include its position, scale and colour.
The `CompoundButtonMesh` script must be added to the GameObject of the button as a component.
This is done in the usual way by selecting the GameObject, clicking "Add Component" in the inspector and selecting the `CompoundButtonMesh`.
This action adds a `CompoundButtonMesh` component and the `CompoundButton`component.
In the `CompoundButtonMesh`, a target transform and a renderer need to be set.
Next to these properties, a dropdown menu can be found which says "(None)" at the moment.
By clicking on it, a selection of the transform and renderers on the GameObject or on any of its children is presented and can be selected.
This means taht the visibile mesh can be separate from the object which slides the button back and forth.
For instance, a cube can be used as a background and text can be placed on the surface of the cube to label the button.
In order to move the cube and the text, they are organized as children of an empty GameObject.
If this empty object is moved back and forth to simulate a button press, the cube and the text will move by the same amount, too.

Underneath the fields for the target transform and the renderer, a button profile can be set up.
This profile is a saveable configuration which can be reused for different buttons.
The section with the stored values can be expanded by clicking on the "PROFILE" container.
There is a button labelled "Create Profile" which creates a new profile in the root assets folder of the project.
Next, the profile needs to be referenced in this section.

**Compound Button Text**

The ```CompoundButtonText``` component can be used to equip a button with text.
The component makes the text settings accessible in one place.
First, the corresponding text mesh needs to be referenced in the component.
This is done in the inspector either by drag-and-drop or by choosing it from the dropdown menu next to the property ```TextMesh```.
In a big text field, the text which should be displayed can be entered.
If the reference to the text mesh is correct, typing text in the component's text field will update the display on the button accordingly.
The ```CompoundButtonText``` can also be used to unify the text appearance on a set of buttons.
In the inspector, a profile can be selected in the part of the inspector which has a purple background.
The profile specifies the font style and size, as well as its color.
By reusing the profile on all buttons in the application, they will all be set up with the same text style.
However, one can also overwrite single properties of the profile with button-specifc values.
To do so, the checkmarks next to "Overwrite Font Style", "Overwrite Anchor", Overwrite Size" can be set.

**Compound Button Icon**

If a button should be equipped with an icon, one can use the ```CompoundButtonIcon``` component.
The component requires a reference to a mesh renderer which can either be set by selecting it from the dropdown menu or by dragging the GameObject from the hierarchy into the reference field.
Often times, quadratic flat geometry is used to display the icon.
In Unity, such a square can be created in the top menu under "GameObject > 3D Object > Quad".
The component requires an icon profile.
This profile contains a collection of textures.
By default, the profile is set up with slots for special purpose textures, e.g. for navigation or actions.
Further down, one can also define custom icons.
Apart from the textures, the profile also provides furhter settings in the "DEFAULTS" section.
Here, one can define a standard icon which is used if the selected icon cannot be found.
In this section, the icon's material can be selected.
The script will apply it to the referenced mesh renderer.
At the bottom of the component, outside of the purple profile area, there is a dropdown menu where one can choose one of the icons by its name.

The material's shader can be set to the standard shader of the MixedRealityToolkit which is not to be confused with Unity's default standard shader.
In order to support icons with transparency, the material's rendering mode should be set to "TransparentCoutout".

**Compound Button Sounds**

```CompoundButtonSounds``` can add sound effects to a button.
The sounds can be configured in a profile and are played if the button enters the according state, e.g. if it is pressed or if it is targeted by the user.
A slide next to the sound configuration can be used to define the sound volume for each of the states separately.
In the component, one can optionally reference a sound source which plays the sounds.
This way, the sound source does not need to be on the button but the audio can also originate from anywhere in the environment.
However, the component also works if no audio source is referenced.
In this case, the object will create a GameObject called "one shot audio" which has an attached sound source.
It will play the correct audio clip once and after that, the auxiliary GameObject is destroyed again.

</div>

#### Bounding Box

<div class="mrtkVersionSpecific mrtk2017" markdown="1">

The MixedRealityToolkit also contains a bounding box which can be added to GameObjects.
One first needs to select the GameObject.
In the inspector, a *Bounding Box Rig* script can be added to the object.
The added component requires a reference to a bounding box prefab.
There is already a prefab included in the MixedRealityToolkit which can be used here.
It can be found in the assets browser under "HoloToolkit > UX > Prefabs > BoundingBoxes" and is called "BoundingBoxBasic.prefab".
With the GameObject selected, one can drag and drop the prefab into the field "Bounding Box Prefab" of the component.

The *Bounding Box Rig* component has further options, e.g. one can choose to flatten the boudning box in one direction.
If the flattened axis is set to something else than "Do Not Flatten", the bounding box will be two-dimensional.
This can be helpful when creating flat menus.
Underneath this option, three customization settings can be applied.
They all concern the materials which are applied to the handles of the bounding box.

In the section below this, the behaviour of the bounding box can be altered.
The scale rate describes how drastic the box's size is changed if the user pulls on the scaling handle.
In other words, if the user moves the scaling gizmo by a fixed distance, high scale rates will change the scale the object more than low rates.
One can also specify a max scale for the object.

The component also holds a reference to an "app bar".
It is a small menu which is shown at the bottom of the object and which can be used to toggle the bounding box.
When the *Bounding Box Rig* component is added, the reference to the app bar is already set up with a default app bar.
However, developers can add their own app bars or extend the exiting one by inserting the reference to the altered prefab of the app bar.

</div>