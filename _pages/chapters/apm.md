---
layout: page
title: AR Agile Project Management (started)
permalink: /chapter/apm/
categories: chapter
visualizations:
---

# AR Agile Project Management

This chapter gives an overview on agile project management, in particular the agile management of software development for mixed reality environments. 
In the traditional waterfall model of software engineering, the different phases of the software engineering process are followed in a sequential manner, 
usually without returning to a phase already finished. The output of the early phases are usually documents while software is only produced in later phases.
With the model design errors can be captured before the implementation phase. 
The technical documentation is part of the plan and because of the structured approach, costs can be estimated quite well.
Customers however find it difficult to state their requirements in an abstract way. 
The waterfall model does not cater for possibility of changing requirements.
The waterfall model was modified after a number of issues identified in practice, but in the end, the agile approach became the dominant one.
Kent Beck wrote in the agile manifesto


 **Individuals and interactions** over processes and tools

 **Working software** over comprehensive documentation

 **Customer collaboration** over contract negotiation

 **Responding to change** over following a plan

Meanwhile to [agile manifesto](https://agilemanifesto.org/) was signed by thousands of people.

## Agile Development Features

Also empirically proven, recent report say that of over 94% of companies today develop software with agile methods.

- Emphasizes incremental updates
- Small design steps by frequent interactions with customers
- Delivers working software frequently
- Motivated people produce better results
- Projects with agile methods have higher proability ot end successfully 

## Scrum 

- Scrum accepts that the development process cannot be forseen
- Scrum does not reduce complexity but structures it into chunks
- No formal contract specification
- Scrum team members have fixed *roles*
- Requirements are collected in *backlogs*
- Development process is organized in *sprints*

## Scrum Roles

- Product Owner
  - Responsible for features and success of product
  - Creates and prioritizes user stories
  - Has last say on Product backlog
- Development Team
  - Self-organized
  - Estimates time complexity of tasks
  - Derives smaller tasks from user stories
  - Independently decides how to fulfil tasks
- Scrum Master
  - Responsible for successful Scrum
  - Moderation of meetings
  - Makes sure developers are fine
- In agile development, (good or bad) results are attributed to the team, not indiviudals.
- Collective Code Ownership
  - Everybody is responsible for all code
  - Everyone may change all parts of the code  
  
## Sprint Activities

- Daily Scrum
  - 15 minutes meeting in the morning
  - Postpone detailed discussions
- Sprint review at the end
  - Sprint team updates Product Backlog
  - Stakeholders are asked
  - Product owner notes down feedback
- Sprint retrospective
  - Self-reflection within team
  - Moderated and organized by Scrum master
  
# Sprint Artifacts

- Product Backlog
  - List of *User Stories*
  - Prioritized by Product Owner
  - Entries should be user-oriented, not technical
- Sprint Backlog
  - Refined chunks out of Product Backlog
  - Defined by developers
  - Doable within a sprint
  
## User Stories

- User stories represent the customer requirements
- Each user story
  - Describes one piece of functionality of the system
  - Is written with customer/user requirements in mind
  - Is given a certain priority in the *Product Backlog*
  - Stands for one or several tasks that are later split into chunks for the *Sprint Backlog*

A typical user story structure: "As a ROLE, I want GOAL/DESIRE, so that BENEFIT"

## Taskboards

- Product Backlog
  The User Stories
- ToDo
  The Sprint Backlog
- In Progress
  All tasks currently in development
- Review
  All finished tasks to be reviewed by a team member
- Done
  All finished and reviewed tasks
  
## Definition of Done

- All the quality criteria
  - Code Style Guides
  - Code Reviews (who, how, ...)
  - Source Control
  - Continuous Integration
  - Test Coverage
  - Documentation
 
 This is your first user story: "*As a developer, I want to settle the Definition of Done to achieve a better overall quality of our software.*"
 