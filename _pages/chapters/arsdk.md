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

</div>

#### Bounding Box