### 2D Physics Engine | 26/08/2022 
---
**Goals:**
- Create a UI
- Use Python
- Implement real time physics calculations
- Optimise

---

The aim of this project is to push my ability to code in python and make an application which may serve some use through the course of my studies (even if just to refresh my memory on mechanics). The majority of my time on this project was not spent coding physics into the engine, but actually building the framework for the application.

The program runs using pygame, a low level python package often used in game development. I used this a starting point as it gives easy access to UI features in python which otherwise would have taken even longer to make. A lot of low level features such as Mouse Position for Hovering and Clicking, even drawing things on the screen and keeping track of them require a hefty amount of infrastructure. 

---

#### How it works:

The physics engine is composed of three main "surfaces" inside of the UI, theres the Engine Surface, the Side Panel Surface, and the Console Surface. 
![Physics Engine Example](./Markdown/TwoDimPhysicsEngine/photos/physicsEngineSS.png)

All of these surfaces have their own methods which can be used to interact with the scene. They show different details about the objects and how they are moving during run time.

Currently the simulator is able to run 1-D elastic collisions with bouncing and energy dissipation. This is done during the simulation loop which for 1-D is an okay method but to move into 2-D collisions and motion running it parallel to the simulation loop would be more favourable. However, as it is the simulation runs as expected.

This project is teaching me the how to build a program from the ground up, the struggles that come with making your own UI, and implementing it with the functionality of the program.