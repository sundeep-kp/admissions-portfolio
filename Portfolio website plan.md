Portfolio website plan

General instructions:

 do NOT change my words, I don’t want the content to sound like AI . Add placeholders where information/asset is missing e.g \[description missing, add about 50 words here\], \[project links missing\] , \[Image missing]

Technically just one big scrollable page but has buttons on top for ease of navigation. 

Optimise for mobile first. Relational scaling and positioning instead of hardcoded to 453 px, 35 px, so that multiple phones see a similar easy to read design

Remember ease of reading and clarity is the top most priority

Stack: github pages \+ astro (static page)

## **Design**

structure:  
 I actually think you can make this much more memorable than a typical portfolio.

Instead of stacking sections one after another, think of the homepage as alternating between reading and looking. Admissions officers get a break from reading every few sections.

Overall

──────────────────────────  
Sticky Navigation  
──────────────────────────

Hero

↓

Timeline \+ Ornithopter

↓

About Me

↓

Research Interests

↓

Leadership

↓

Featured Projects

↓

Awards

↓

Technical Skills

↓

Currently Learning

↓

Hobbies

↓

Resume / Contact

Everything is one long page.

Navigation simply scrolls to sections.

\---

1\. Sticky Navigation (5-7% height)

Always visible.

\---------------------------------------------------------  
Logo/Name

About  
Research  
Leadership  
Projects  
Awards  
Skills  
Contact  
\---------------------------------------------------------

Desktop:

centered horizontally

Mobile:

horizontally scrollable pills

\---

2\. Hero (90-100vh)

Split about 55 : 45

\-------------------------------------------------

LEFT (55%)

Name

One-line introduction

Current university

Research interests

Buttons

Resume  
GitHub  
LinkedIn  
Email

RIGHT (45%)

Large portrait  
OR  
Subtle illustration

\-------------------------------------------------

Lots of whitespace.

\---

3\. Timeline \+ Ornithopter

This is the coolest section.

Desktop:

\-------------------------------------------------

35%

Timeline

|

65%

Large looping ornithopter video

\-------------------------------------------------

The video occupies most of the width.

Timeline is narrow.

The timeline should vertically line up roughly with the wings.

\---

Mobile

Timeline

↓

Video

Timeline first.

Video below.

\---

4\. About Me

Keep this readable.

\-------------------------------------------------

Heading

Paragraph

Small quote/highlight box

\-------------------------------------------------

No columns.

Reading should feel effortless.

\---

5\. Research Interests

Heading

3 large cards

Bio-inspired Robotics

Planetary Exploration

Wildlife Observation

Below that:

Currently Reading

Research Directions

Future Topics

\---

6\. Leadership

Instead of paragraphs.

Large cards.

HalfwiredTV

ATL Lab

Rotary

Class Leader

Desktop

2 x 2 grid

Mobile

Single column

\---

7\. Featured Projects

Largest section.

Group them.

Robotics

Project

Project

Project

\-----------------

Machine Learning

Project

Project

\-----------------

Software

Project

Project

Project

Each project

Image

↓

Title

↓

Description

↓

Buttons

GitHub

Report

Video

Images should occupy around 40% of the card height.

\---

8\. Awards

Cards.

Scholarships

Competitions

Academics

Certificates

2 columns desktop.

1 column mobile.

\---

9\. Technical Skills

Instead of a giant list.

Programming

Robotics

CAD

Embedded

Development

Five compact cards.

Each contains chips.

Python

C++

ROS2

Gazebo

...

\---

10\. Currently Learning

Horizontal progression.

Book

↓

Current Project

↓

Research Paper

↓

Next Goal

Shows you're actively growing.

\---

11\. Hobbies

Don't make this text-heavy.

Use icons/images with labels.

Music

Photography

Painting

Film

Psychology

\---

12\. Resume \+ Contact

Simple.

Download Resume

↓

GitHub

LinkedIn

Email

HalfwiredTV

No giant footer.

Just end cleanly.

\---

Relative sizing

Navigation            6%

Hero                 18%

Timeline             12%

About                 8%

Research              8%

Leadership           10%

Projects             24%

Awards                6%

Skills                5%

Learning              4%

Hobbies               4%

Contact               5%

\---

One thing I'd definitely add

Since your ornithopter is your visual identity, keep a thin translucent silhouette of the ornithopter pinned near the top of the page (for example, in the top-right corner of the hero). Then use the full looping animation in the Timeline section. That creates a consistent visual motif without overwhelming the content, and makes the site immediately recognizable as your portfolio rather than a generic engineering website.

general instructions:

White background.

Lots of spacing.

No animations except subtle hover.

No particle backgrounds.

No typing animations.

Theme: Glassmorphism (Frosted Glass), mostly \#fae3f6 with white and blue great accents and \#E723C1, \#6F23E7 for certain features

Something like:   
.glass-card {  
  width: 240px;  
  height: 360px;  
  background: rgba(255, 255, 255, 0.4);  
  backdrop-filter: blur(15px);  
  \-webkit-backdrop-filter: blur(15px);  
  border-radius: 20px;  
  border: 1px solid rgba(255, 255, 255, 0.3);  
  box-shadow:   
    0 8px 32px rgba(0, 0, 0, 0.1),  
    inset 0 1px 0 rgba(255, 255, 255, 0.5),  
    inset 0 \-1px 0 rgba(255, 255, 255, 0.1),  
    inset 0 0 26px 13px rgba(255, 255, 255, 1.3);  
  position: relative;  
  overflow: hidden;  
}

.glass-card::before {  
  content: '';  
  position: absolute;  
  top: 0;  
  left: 0;  
  right: 0;  
  height: 1px;  
  background: linear-gradient(  
    90deg,  
    transparent,  
    rgba(255, 255, 255, 0.8),  
    transparent  
  );  
}

.glass-card::after {  
  content: '';  
  position: absolute;  
  top: 0;  
  left: 0;  
  width: 1px;  
  height: 100%;  
  background: linear-gradient(  
    180deg,  
    rgba(255, 255, 255, 0.8),  
    transparent,  
    rgba(255, 255, 255, 0.3)  
  );  
}

Also special instructions for adding in ornothopter looping video:

White Hero  
↓

White → \#2596be gradient  
(\~250–400 px tall)

↓

\#2596be section

Timeline (left)

Large Ornithopter Video (right)

↓

\#2596be → White gradient

↓  
White About

↓  
Research Interests

## **Website Content**

1\. Hero

Name

One-line introduction

A large, semi-transparent looping ornithopter animation on the right (or behind the text)  
Very slow, no controls, muted, loops forever 

Current university : IIIT, naya raipur

Research interests :  
Bio inspired robotics 

- for Planetary exploration  
- Non-Invasive Wildlife Observation

Buttons

Resume: \[edit the one from hacknation in canva – include ornithopter and current books I am studying, and the ongoing projects: RL based pick n place robotic arm from scratch\]

GitHub: [https://github.com/sundeep-kp/ros2-roadmap-ultralab/](https://github.com/sundeep-kp/ros2-roadmap-ultralab/)

LinkedIn: [https://www.linkedin.com/in/sundeepskp](https://www.linkedin.com/in/sundeepskp)

Email: personal– [panigrahisundeep99@gmail.com](mailto:panigrahisundeep99@gmail.com)  
**Half Wired TV:** halfwiredtv@email... (for project or media inquiries)

Timeline  
Grade 5 — First Leadership Role (Class Leader)

Grade 9 — ATL Lab Lead

Grade 10 — Robotic Prosthetic Hand

Grade 10 — Rotary Club President

2024 — Joined IIIT Naya Raipur

2025 — Reliance Foundation Undergraduate Scholar

2025 — Started ROS2 Roadmap Ultralab

2026 — Founded HalfwiredTV

2026 — Ornithopter Mechanism

2026–Present — RL-Based Pick-and-Place Robotic Arm

Future — Bio-inspired Robotics Research

Detailed information below\! \[keep this line\]

\---  
\[Ornothopter.webm loop towards the right\]  
2\. About Me

Short personal introduction

Why engineering?  
There are two type of joy: creation(lasts longer), consumption(lasts shorter). Engineering provides me with creation joy. 

Why robotics?  
Most multidisciplinary field that allows me to create next to anything.

Current academic focus : pursuing Major in ece  bcz I needed hands-on experience to understand it at a deeper level. Minor in robotics \[books here?-- design of machinery by rl norton, intro to robotics by saeed b niku, modern robotics by lynch and park\]

Long-term goals : PHD in bio-inspired robotics, research scientist in labs/ companies in the bionic learning network (e.g festo)

Why you're transferring (keep this brief; the essay will cover it in depth):

Need more robotics supplies to get hands-on robotics experience . Need mentors and peers with robotics interests . Not many robotics aligned people at current university.

What I hope to contribute to campus:  
Undergraduate robotics research  
Open-source robotics software  
Student mentorship and other lead positions  
Robotics workshops  
Cross-disciplinary collaborative engineering projects

Leadership & Community

Founded HalfwiredTV,  
a community where robotics enthusiasts learn, build, and collaborate on projects together.  
Provide members a platform to present their voice in livestreams regardless of skill level to build proof of work and showcase their interests.  
Recent streams include a member’s 3d scanning workflow using retroreflective trackers, live study sessions, CAD speedruns including my ornithopter  
Ongoing projects include a RL based pick and place robotic arm with collaboration of 6 members (2 of them pursuing masters, one of them is a PHD candidate)  
Future streams include research paper discussions and CAD mechanism tournaments  
Currently sitting at 140+ members across 15+ countries as of july  
https://discord.gg/FcTucKSjC  
\[youtube\]

ATL Lab Lead (taught junior classes, eventually my fingerprint became my teacher’s phone password, made lots of mini projects like a posture detection chair, robotic hand ) \[9th and 10th grade\]

Rotary Club President in 10th grade

Class leader in 5 \+ non consecutive years.

\---

3\. Featured Projects

Robotics

\-Robotic prosthetic hand (10th standard, made using arduino \+ servos+pvc and springs for fingers, flex sensors and EMG for muscle actuation sensing, worked by using rarely used muscles for actuation to replace amputated limb) \[project report attach\]

\-Ornithopter based bird flying simulation (fascinated by flying bird by festo, studied the main mechanism and then added on to it) \[project overview attach\] \[simulation video, linkedin post attach\]

\-OpenManipulatorX based industrial pick and place robotic arm. (prerequisite to larger future project- spider robots with specialised manipulators for planetary exploration)

\-ROS2-roadmap-ultralab: an opensource learning repository which started as a walkthrough for husarion docs with added prerequisite concepts of os fundamentals, advanced c++ and OOP fundamentals, robot kinematics etc, recognised by Rafał Górecki (co-founder of husarion docs) . Expanded into project walkthroughs, other robot fundamentals using intro to robotics by saeed b. Niku and modern robotics by lynch and park

Machine Learning / AI

3d reconstruction of teeth based on intra-oral images : optimisation of work by [ShanghaiTech-IMPACT/TeethDreamer](https://github.com/ShanghaiTech-IMPACT/TeethDreamer) research paper and project to be able to run locally on commercial computers. Motivation: worked with my sister who is a dentist  
\[attach project report, github, reconstruction image\]

\---

Software / Other Engineering:

Tldraw-search Plugin(an infinite canvas plugin for obsidian for detectives and researchers. Motivation: Had to organise over 300 videos and articles on a topic. Ability to search across handwritten text in the canvas, interconnect multiple canvas and reference specific sections using wiki links, add webpages and youtube playlists natively inside the canvas as canvas entities, and other standard features like pressure based pencil)\[attach github link\]

**Security Assessment of College Payment Portal:** Found a vulnerability that let me see others bill payments. Got **recognised by dean(academics)** and 4 other staff members. Can’t share images here for student privacy reasons\[mention this on site\].

Neuro-link (hackathon at iiitnr)

* a web-app for people with dementia, controlled by a **central stt-tts chatbot**  
* calms them down ,shares stories , creates tasks and reminders(bubbles) dynamically when relevant(using RAG)  
* Integrated face recognition to identify family members and provide contextual relationship information.  
* geotracking to prevent wandering

\[attach linkedin post\]

**Invisible-Insight:** A maze game that is equally difficult for the visually impaired and sighted individuals, works on sounds and vibrations. \[attach github \+ apk \]

Autologin-framework(a client for my college wifi portal that automatically logs in as soon as session times out. Motivation: had to use my old pc remotely for days on vacation when I wasn’t able to afford a laptop, lots of people used it especially seniors) \[link– older one with stars\]

Coswatch (Hackathon, IIT bbsr. a webapp to visualise asteroids in 3d from an API by nasa and rank them by threat. Includes a telegram companion bot that messages me about the highest threat asteroids everyday ) \[linkedin post attach\]

\---

Papers I'm reading: Gait Optimisation of legged robotics

7\. Technical Skills

Instead of listing everything, group them.

Programming:

Python

C, C++, Colcon(CMake)

Xml

Html, css, js

Robotics:

ROS2

Gazebo

MoveIt

Linux

CAD

SolidWorks

Arduino

OpenCR

ESP32

Development

Git

Docker

Web basics (worked with cloudflare agents, telegram bots, React)

\---

6\. Awards & Recognition

Include:

Scholarships: Reliance Foundation Undergraduate Scholar 2025, FIITJEE scholarship 2023

Competitions and Exhibitions:2nd prize at robotics hackathon IIIT bbsr D3 fest (save the survivor)  
 ,appeared nationals for MathsExpress in 3rd grade, Silver(hydrogen fuel using sea water and solar panels live demonstration–6th standard), Gold(science behind ram setu, the mythological land mass connecting india and srilanka–7th standard), Gold(robotic prosthetic arm for amputees– 10th standard)

Certificates: \[Matlab, python, EFSET C1 advanced and IEEE english attach\]

Academic achievements: 2nd highest score in 10th standard(92.6), appeared on top scorers display 12th standard (95.3), JEE mains (97.9), cgpa (sem1: 9.47, sem2: 9.03) , 

\---

\---

8\. Coursework & Learning

Not just completed courses—also what you're actively learning.

Examples:

\---

9\. Hobbies & Interests

Music: guitar, tabla, singing, a bit of bass, drums and flute

Digital art and painting, Photography, Film production and storytelling, stopmotion animation, a little bit of Drama

Behavioural Psychology

11\. Resume

\[PDF download link\]  
—-end—--

Future additions:   
Internship experiences

Publications

Research papers

Conference posters

Patents

Media coverage

Teaching materials

New projects

Robotics competition results

