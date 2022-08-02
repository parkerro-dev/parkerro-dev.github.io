Links: [[Vector Calculus]]

# Surfaces
**Definition:** A parametrized surface is a 1-1 function $\Phi : D$ where D is some domain in $\mathbb{R}^{2}$. We denote the image $\Phi(D)$ by S and say the surface S.
![[Pasted image 20220415091839.png]]

We usually write $\Phi(u, v) = (x, y, z)$ where $x =x(u,v)$ (same with y and z). D is called the parameter space . 

The notes go through a bunch of stuff about finding the tangent vectors and the normal vector, honestly in all the stuff we have done in maths we have never used it. [[Tangent Vectors for Surfaces]].

The main take aways are that $\vec{n}=T _{u} \times T _{v}$ and these following points:
- **Definition**: A surface S is smooth if there exists a non-zero normal $\vec{n}$ at every point on the surface. So there exists a tangent plane at every point on the surface
- **Definition:** An explicit surface is where there exists a function $g(x, y) = z$ , so that $\phi(x, y) = (x, y, g(x, y))$.
	- If the surface is explicit (which it always in this course so far) then the normal vector $\vec{n}$ is given by $\vec{n}= -\frac{\delta g}{\delta x}\vec{i}-\frac{\delta g}{\delta y}\vec{j}+1\vec{k}$ 
- If the surface is implicit you just take the normal as the div of function $f$ (i.e. $\vec{n} = \nabla f$)


**Definition:** Orientation. At each point on a surface S we have two unit normals $\vec{n} _{1}$ and $\vec{n}_{2}$ which are given by $\frac{\vec{T}_{u}\times \vec{T}_{v}}{||\vec{T}_{u}\times \vec{T}_{v}||}$ and $-\frac{\vec{T}_{u}\times \vec{T}_{v}}{||\vec{T}_{u}\times \vec{T}_{v}||}$, each of these normals can be associated with a side of the surface, e.g top or bottom. Choosing one of the normals at each point of the surface is said to orient the surface. For a closed surface (like a sphere) the outward normal is usually called the positive orientation.
![[Pasted image 20220422113912.png|600]]


**Definition:** Surface area. The area of a surface can be found with $A(S) = \int \int \limits _{S} dS = \int \int \limits _{D}||\vec{T}_{u}\times \vec{T}_{v}||dudv$.
This means that for explicit surfaces where $\vec{T}_{u}\times \vec{T}_{v}= -\frac{\delta g}{\delta x}\vec{i}-\frac{\delta g}{\delta y}\vec{j}+1\vec{k}$ The surface area A(S) is $\int \int \limits _{D} \sqrt{1 + \frac{\delta g}{\delta x}^{2}+\frac{\delta g}{\delta y}^{2}}dxdy$
![[Pasted image 20220422115323.png]]