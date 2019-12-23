---
layout: page
title: AR Agile Project Management (in progress)
permalink: /chapter/apm/
categories: chapter
visualizations:
---
{% include autoRelativePath.html %}

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
- Projects with agile methods have higher probability ot end successfully 

## Scrum 

Official documentation in [https://scrumguides.org/](https://scrumguides.org/)

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
  
## Sprint Artifacts

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
 
 This is your first user story: *"As a developer, I want to settle the Definition of Done to achieve a better overall quality of our software."*
 
 Text 
 
### Code Style Guides
 
 - Coding standards define ...
   - Naming conventions
   - Indentation
   - Documentation
   - Encoding
 - Helpful for *Collective Code Ownership* within small teams, indispensable for open source
 - E.g. Google's Java style guide
   - [https://google-styleguide.googlecode.com/svn/trunk/javaguide.html]
   
### Corde Review

- Improve communication in teams
- Goal: team members understand each other's code
- Individual improvements

### Source Control

- Central code hosting and revision control system 
  - What file changed?
  - Who made changes?
  - When were the changes done?
  - How do the changed files differ?
  - Why were they changed?
- Keeps history graph, allow to revert modifications
- Allows branching and merging
  - Branching: Duplication of code so that modifications can happen in parallel
  - Merging: When bringing together two branches
  
### Continuous Integration

- How to deliver working software at any time?
- Running automatic nightly builds
- Automated test runs
- Prevents **Integration Hell**

- Continuous Integration Software
  - Jenkins: Open source self-hosted
  - Travis CI: Hosted solution
  
Integration Hell: Integration problems because of missing early testing.
There is even more than that. If you ever wondered why you have Facebook app updates multiple times a day, here is the answer.

### Continuous Delivery and Continuous Deployment

Continuous Delivery is about removing stress at the *last mile*.

- Continuous Integration is just the first steps
- Continuous Delivery
  - Software always production ready
  - Releasing automatically at the end of development and test pipeline
- Continuous Deployment
  - Deploying released software automatically
  - Post deploy tests to ensure integrity with service landscape
  
## Scrum in a Nutshell
 
### At the Beginning
 
- Chose the *Scrum Master* of your team
- Clarify the role of the *Product Owner* with your customer: **Make them aware of their role!**
- Talk with your customer and write down *User Stories*
 
### Per Sprint
 
- Break up some of the user stories from the *Product Backlog* to realistic tasks for the *Sprint Backlog*
- Define/Refine your *Definition of Done*
- Develop!
- Finish with the *Sprint Review*
  - Talk with the customer
  - Refine the *Product Backlog* for the next Sprint
 
# Market Analysis

**Market analysis** is the process of analyzing data to help you understand which products and services are in demand, 
and  how to be competitive.

**Market segmentation** is the strategy of dividing broad market into subsets of consumers who have common needs 
and characteristics.
Types of market segmentation are:
- Behavioural 
  - Knowledge of the product 
  - Attitude
  - Benefits
- Psychographic
  -Studying : activities, interests and opinions (luxury car)
- Demographic
  - Age, gender, occupation, education level, etc.
- Geographic
  - Country, cities, postal codes (swimming suits)
- Occasional
  -Independent of the customer (Coca Cola campaign – being thirsty)
- Cultural

How to best segment a market?

- Choose a segment that is accessible to you
  - University, friends, colleagues
  - Short selling cycle
  - In B2B – contact direct decision makers 
  - Segments with less competitors

Understanding a user helps you to decide what product features to build next.
Talk to potential users and find out about their needs.
A persona is a representation of a user, typically based off user research and incorporating user goals, needs, and interests. 
See more on [http://www.uxbooth.com/articles/creating-personas/](http://www.uxbooth.com/articles/creating-personas/)

Analyse your competitors. Ask your (potential) users
- Do they have any concerns about the idea?
- Why they use your services?
- Key points to focus on:
  - Quality
  - Price
  - Advantages & disadvantages 

Analyse your competitive advantages and disadvantages.
Five P‘s of marketing

| Product | Price | Promotion | Place | People |
| :-----: | :---: | :-------: | :---: | :----: |
| Do you have features others do not have | Same value but lower price | Unique channels | Unique place to sell the product | Strength of the team |


Without customers, your business does not exist!
- Who are the users?
- How much they will pay?
- Are there any competitors?
- Why your service is better?

# DevOps
 
We have a look at the emerging industry DevOps approach.
 
Main question is how to design and develop innovative software artefacts in a large-scale project?
Observation from industry: A culture of communication between developers and operations
 
| Developers         | Operations                   |
| ------------------ | ---------------------------- |
| New features       | Stability                    |
| Specific tools     | Managing systems             |
| Needs to work fast | Need to keep systems running |
 

Integration, automation, and monitoring scales.
Rapidly producing software artifacts in an agile way.

## Requirements Engineering

What is a requirement? 

What is requirements engineering?

The [Requirements Bazaar](https://requirements-bazaar.org/) is a Web-based open continuous innovation platform.
It is easy to use for end users. 
Social features like *likes* and *comments* enable the communication between end users and developers.
Open APIs to embed it into apps. 

## DevOpsUse

- Scalable and sustainable methodology for integration
  - Software development
  - Operations
  - End-user participation
- Strong commitment to participatory design and evaluation activities carried out in communities of practice

# Wrap-Up

- You heard about the Agile Manifesto
- You know that Scrum follows agile principles
- You know what Taskboards are
- You will look into a Code Style Guidelines
- You already knew about source control systems
- And finally you probably know what Continuous Integration is good for

# Templates and Examples for your own Mixed Reality Classes

## Review Specifications 

The following specs are for a 12-week course on Mixed Reality with teams of 4-6 people working on a prototype.
Four reviews are planned for the course, so that every three weeks there can be a review. 
The first review is for exercising the agile software development process, for technology and market research as well as for first DevOps activities.
The second review should report on the first one or two sprints of the team and how they have started the development process.
The third review should cover more DevOps activities like testing and documenting the prototype.
The last review is planned as business pitch with a strong focus on selling a product.

### Review 1

- **Prioritized Product Backlog**: Compile the initial version of your Product Backlog by ordering the user stories based on their priority (most important on top)
- **Definition of Done**: List the initial quality criteria for your code and explain shortly
- **Market Analysis**: Provide a concise analysis of the market for your product; use a suitable subset of elements that were presented during the tutorial days
- **Technology Survey**: List and briefly describe existing technologies, tools and techniques that are relevant for your project
- **Reflection**: Provide a short written reflection of your teamwork process and progress as a community of practice 
- **Running Skeleton**: A basic development project that should be buildable and reflect your current development state 
- **Presentation Slides**: Prepare a 10 min presentation for the first review and for a discussion afterwards. As a guideline, the presentation slides should contain key information contained in the above documents:
  - Agenda/overview
  - Project info and objectives
  - Market analysis
  - Technology survey
  - Scrum: Your roles, compressed info on the last sprint, like Product/Sprint Backlog
  - Reflection on team process
  - Conclusion and next steps

### Review 2

- **Prioritized Project Backlog**: Compile a new version of your Project Backlog for the second release.
- **Definition of Done**: Update the quality criteria for your code and explain.
- **Running mock-up** of the interface and/or a set of tested (automatically) classes/functions with the core system functionality of your prototype.
- **Documentation**: Build instructions to run your mock-up and/or tests. Also provide sufficient API/code documentation and an end-user guide.​
- A reflection of your group process as community of practice.
- Presentation Slides. Please prepare a 10 min presentation and prepare for discussion afterwards. As a guideline, the following bits of info are expected in your presentation:
  - Agenda
  - Project Backlog and Definition of Done
  - Running mock-up and/or system functionality/tests
  - Reflection
  - Conclusion and further Steps
-You may adjust the order and focus depending on your project, of course.

### Review 3

- **Run​​ning system demo** (e.g. link, video). Please note, that your system already needs to include all must-haves, 
so that you can use the remaining weeks to polish it and fix the last bugs.
- Running automatic test cases (e.g. link).
- **Detailed documentation** of your system for further development. 
Also provide sufficient API/code documentation and an end-user guide.
- Reflection of your agile development and group process as community of practice.
- Presentation Slides. Please prepare for a 10 minutes presentation, including demo(!), 
plus discussion. As a guideline, the following bits of info are expected in your presentation:
  - Agenda
  - Product description
  - System demo
  - CI/CD
  - Reflection (agile and group process)
  - Conclusion and further steps
- You may adjust the order and focus depending on your project, of course.

### Review 4

- **Running system demo** (e.g. link, video).
- Running automatic test cases (e.g. link, screenshots).
- **Detailed documentation** of your system for further development. Also provide comprehensive API/code documentation and an end-user guide.
- A reflection of your group process as community of practice (1 page)
- Presentation slides. Please prepare a 5 min. business oriented presentation of your project plus a 5 min demo of your 
system and prepare for a short discussion afterwards. The following five slides are expected to be shown by you
  - What is the PROBLEM solved by the product or service you plan to provide? 
  - What is the quantifiable economic benefit of solving that problem?
  - Who, specifically, is your customer? Do they have money? How do they pay you?
  - What is your, your teams, or your company's distinct competitive advantage in providing this product or service to the customer?
  - What is the PRODUCT or service you plan to provide?
- Please act as a company or a start-up presenting to possible customers. Do not present a technology but a product. If you have questions concerning the documents and/or the presentation please contact us.
