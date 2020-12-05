---
layout: tutorial
title: Speech Interaction
hide: true
permalink: /chapter/speech/
categories: chapter
visualizations:
---

{% include autoRelativePath.html %}

# Speech Interaction: your voice is my command

In recent years, speech interaction has become pretty much ubiquitous.
Many different types of speech applications exist and according commercial and free toolkits are plenty:
speech output (`text2speech`), dictation, keyword recognition (“start”), complex keyword recognition with grammar parsing using slots (“turn red”), dialogue understanding with recognized intents (“Maggie, find a train to London that leaves now”), and dialogue management (with story flow) are probably the most important categories.

The HoloToolkit and Unity offer support for various of these, but for here we will focus on the most simple approach: keyword recognition.
While the managers in the HoloToolkit have changed names over time, for the version we are using, two scripts are relevant:
we drag and drop `SpeechInputHandler` and `SpeechIn-putSource` from the Project file explorer to the Hierarchy onto the object of choice (to connect to the previous tutorial, this is in our case `ObjectCollection`).

<figure>
    <img src="{{pathToRoot}}/assets/figures/speech/speech-1.png" style="align:left; width: 40%; height: 40%; border: 15px solid;
  border-image-slice: 1;
  border-width: 10px; border-image-source: linear-gradient(to left, #0092b6, #154676);" alt="" />
    <figcaption>Speech Handlers</figcaption>
</figure>
 
Activate *Is Global Listener* in the Speech Input Handler.

We then create a new keyword in the Speech Input Source first (click ‘+’), adding the keyword "explore".
Subsequently, we can select "explore" in the Speech Input Handler and add the function call the keyword shall trigger (drag & drop `ObjectCollection`, select `PopulateSpace.ExploreBrain`).

<figure>
    <img src="{{pathToRoot}}/assets/figures/speech/speech-2.png" style="align:left; width: 40%; height: 40%; border: 15px solid;
  border-image-slice: 1;
  border-width: 10px; border-image-source: linear-gradient(to left, #0092b6, #154676);" alt="" />
    <figcaption>New keyword</figcaption>
</figure>
 
Et voilà!

