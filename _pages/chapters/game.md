---
layout: page
title: AR Game Development, Gamification and Serious Games
permalink: /chapter/game/
categories: chapter
visualizations:
---

## Gamification

Gamification describes the concept of using elements from game design in other applications to motivate the user {%cite DDKN11 %}.
Its objective is to increase the intristic motivation of a user.
Applications which support long-lasting or ongoing activities benefit from this concept.
Examples include learning applications such as language learning apps and introduction guides to programming.
Other applications increase the user's engagement, e.g. in the administration of data sets where a lot of manual work is required to improve the quality of the data source.

### Elements

Typical elements from game design for gamification include scoring schemes (points, levels), awards (achievements, badges, streaks), competition (highscores, leaderboards, challenges).

#### Points

Points are a basic element to reward a player's performance in games.
Players gain points for the successful completion of tasks.

Points can be integrated with more complex systems as a progress indicator or currency.
For instance, players can use the points as a currency, e.g. to buy virtual items or unlock nodes in skill trees.
Additionally, level systems, leader boards and high scores rely on points to indicate the progress and performance of the player.

An example for point-based systems can be found on the Q&A platform [Stackoverflow](https://stackoverflow.com/help/whats-reputation) or the social network app [Jodel](https://jodel.com/) where users can gain points based on their contributions to the community.
These systems contain a voting mechanism where members of a community can award points or deduct them based on the helpfulness of a post.
Additionally, own actions also affect the points score, e.g. a small amount of points are deducted if a user downvotes a post.
A difference between Stackoverflow and Jodel lies in the fact that the reputation-points of Stackoverflow are visible to all users to establish a status in the community whereas Jodel's Karma-points are private and serve no further purpose.

Another use of the point system can be observed in the language learning app [Duolingo](https://en.duolingo.com/).
Learners can gain experience points (XP) for finishing lessons.
Bonus XP are awarded for successive correct answers within one session.
XP show the amount of dedication which went into learning a language at once glance.

#### Levels

Levels group players based on their success and progress in a game.
Generic levels are labelled numerically, starting at level 1, and increase with the player's progress.
However, levels can also bear names according to the general story of the game, e.g. "Apprentice" or "Master".

Levels act as a form of motivation.
Each level can be seen as a milestone which the user wants to reach.
If the user accumulates points, point thresholds can determine the transition points from one level to next higher level.
Level progression can also be determined based on tasks or other criteria.
If levels are publicly visible, they can also act as a social rank.

In single player games also act as a metric to adapt the difficulty of the player's computer-controlled opponents.
For instance, difficult quests only become available once the player has reached a certain level.
This avoids that an inexperienced user gets frustrated with the game by facing a demanding task early on.
The difficulty of the game can increase while the player levels up based on the assumption that the user got acquainted to the game's mechanics and controls.
In a similar way, multiplayer games can implement a matchmaking logic which avoids that low-level beginners have to play against experienced players on a higher level.

[Todoist](https://get.todoist.help/hc/de/articles/206209959-Karma) is an example of a gamified application which uses levels.
Users earn karma points by completing to-do items and meeting productivity goals.
Points are lost if tasks are overdue.
Based on the number of points, the app classifies users in one of eight levels, ranging from "Beginner" to "Enlightened".

Another example can be found in the Starbucks app which uses a level-based system to increase customer's brand loyalty.
Customers can collect stars and if they reach the number of stars for the next level, they get a reward.


#### Highscores & Leaderboards

Highscores and leaderboards are used in games to create social competition.
Players become aware of each other and can compare their own performance to others.
The highscore describes the best result any player has every achieved.
More player results are available on highscore tables which show the top results of the best *n* players.

In contrast to this, leaderboards are similar to a league system.
There can be multiple tiers in which participants can challenge each other to matches.
If the lower-ranked person wins, the two opponents switch places in the ranking.
Otherwise, the ranking stays as it is and the lower-ranked person may not challenge the same opponent again for some time.
Highscore tables enable passive competition whereas leaderboards create active competition.
With highscores, people play on their own and try to beat the current highscore.
To progress on leaderboards, the participants are actually playing against one another in challenges or matches.

Duolingo implements a [league system](https://forum.duolingo.com/comment/30433123/Leaderboards-now-on-all-Android-devices) with five different levels.
All users start in a bottom league, called Bronze League.
Each league cycle starts on Monday by matching around 50 participants of the same level league.
During the week, learners accumulate experience points from lessons and other learning activities in the app.
All users in the same league are sorted based on the amount of experience points and changes are reflected in real-time.
The app also sends push notifications if a user was overtaken by another competitor.
On Sunday, the final results are evaluated.
The top ten learners, are promoted to the next higher league and the last five participants are demoted to a lower league.


#### Achievements

Achievements are virtual trophies.
They are used in games to credit players with completing special tasks in the game.
Achievements can be issued for finishing parts of the game, for succeeding in optional quests or for collecting special items.
In addition to this, achievements are used to reward players for finding easter eggs, like hidden secrets and jokes in the video game.
Achievements can e.g. be found on the game platforms of Valve (Steam), Microsoft (Xbox), Sony (PlayStation), Apple (iOS) and Google (Android) {% cite BaMi17 %}.
These platforms provide developers with APIs which can be used to integrate these achievements in the games.

#### Badges

Similar to achievements, games can also issue badges to the player.
They are digital property which means that these digital objects are associated with an owner.
Badges certify a success to its owner.
They can be seen as a materialized version of an abstract goal, e.g. to learn a new skill.

There is also a social component to badges since they can be exhibited and are associated to their owner.
A collection of badges can show others the skill set and achieved goals.

#### Progress Bars

Progress bars indicate the general progression of a task or a set of tasks.
Whereas general applications use progress bars to indicate how far a computer has come in a computation or loading process, games apply progress bars to show the player's progression.
The progress bar is influenced and filled by actions which are performed by the user.
This way, it acts as a tool to provide feedback and motivation to the user.
It focuses the user's attention on a goal which can be reached after completing all necessary tasks.

#### Quests

### Gamification Service

### Open Badges

The Open Badges project is a gamified certification system by the Mozilla Foundation.
It allows website developers to issue badges to its visitors for performing certain tasks.
The system is designed in a way that the badges are standardized so that they can be collected on different sites and from different institutions.
Badges are e.g. used by schools, universities or in online MOOCS to certify the attendance to courses or the acquisition of a certain skill.
The badges are added to the user's inventory and can be displayed to others, e.g. in a CV.
Users who view the badge can verify that it is valid due to a certification and credential system.
The badges consist of an image which is stored as a PNG-file.
In addition to this, meta data can be added to ship more information with the badge.

### AR Examples

#### Pokemon Go

#### GaMR

## Serious Games

In contrast to gamification, serious games do not only use single game elements but are complete games.
These games have been designed with a serious goal in mind, e.g. to convey information during the gameplay.

### Examples