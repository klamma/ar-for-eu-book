---
layout: page
title: Speech Interaction
permalink: /chapter/speech/
categories: chapter
visualizations:
---

# Speech Interaction: your voice is my command

In recent years, speech interaction has become pretty much ubiquitous. Many different types of speech applications exist and according commercial and free toolkits are plenty: speech output (‘text2speech’), dictation, keyword recognition (“start”), complex keyword recognition with grammar parsing using slots (“turn red”), dialogue understanding with recognised intents (“Maggie, find a train to London that leaves now”), and dialogue management (with story flow) are probably the most important categories.

The HoloToolkit and Unity offer support for various of these, but for here we will focus on the most simple approach: keyword recognition.
While the managers in the HoloToolkit have changed names over time, for the version we are using, two scripts are relevant: we drag and drop “SpeechInputHandler” and “SpeechIn-putSource” from the Project file explorer to the Hierarchy onto the object of choice (to connect to the previous tutorial, this is in our case “ObjectCollection”).

![Speech Handlers]({{pathToRoot}}/assets/figures/speech-1.png)
 
Activate ‘Is Global Listener’ in the Speech Input Handler.

We then create a new keyword in the Speech Input Source first (click ‘+’), adding the keyword ‘explore’. Subsequently, we can select ‘explore’ in the Speech Input Handler and add the func-tion call the keyword shall trigger (drag & drop ObjectCollection, select Popu-lateSpace.ExploreBrain). 

![New keyword]({{pathToRoot}}/assets/figures/speech-2.png)
 
Et voilà!

