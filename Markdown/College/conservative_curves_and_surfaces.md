Links: [[Vector Calculus]]

# Conservative Curves and Surfaces

**Definition:** A vector field $\vec{F}$ is conservative if there exist a scalar field $\phi$ such that $\vec{F}=\nabla \phi$.
	**Theorem:** $\vec{F}$ is conservative iff the line integral $\int _{C} \vec{F}. d \vec{r}$ between any two points is independent of path C.

**Definition:** A vector field $\vec{F}$ defined over a simply connected region D of $\mathbb{R}^{3}$ is conservative iff $\nabla \times \vec{F} = \vec{0}$ (Simply connected means that every simple closed curve in D has its interior in D).


**Definition**: The scalar potential for $\vec{F}$ is $\phi$ (in the equation $\vec{F}=\nabla \phi$)

>[!Example]
> Part 1: Show that $\vec{F}=(2xy + z^{3})\vec{i}+x^{2}\vec{j}$ is a conservative vector field.
> Part 2: Find a scalar potential.
> Part 3: Find the work done by the $\vec{F}$ in moving an object from (1, -2, 1) to (3, 1, 4)
> For Part 1 we use the second defined theorem from above, where the curl ($\nabla \times \vec{F}$ = 0) to prove that the vector field is conservative.
> For Part 2: we first have to find $\phi$ ($\vec{F} = \nabla \phi$) which is scalar function of $\vec{F}$, to do so follow these steps:
> Step 1: take the partial derivative of x, y, z wrt to $\phi$
> - $\frac{\delta \phi}{\delta x} = 2xy + z^{3}$
> - $\frac{\delta \phi}{\delta y} = x^{2}$
> - $\frac{\delta \phi}{\delta z} = 3xz ^{2}$
> 
>Step 2: now we can find 3 different versions of $\phi(x, y, z)$
> - $\phi (x, y, z) = x^{2}y+xz ^{3} +f(y, z)$
> - $\phi (x, y, z) = x^{2}y+g(x,z)$
> - $\phi (x, y, z) = xz ^{3} + h(x, y)$ 
> 
> Step 3: Find how to make these three expressions agree
> - $f(y, z) = 0$ and $g(x, z) = xz ^{3}$ and $h(x, y) = x^{2}y$
> - so $\phi (x, y, z) = x^{2}y + xz ^{3}+$ any constant
> 
> Part 3: To find the work done by $\vec{F}$ we use the Line integral $\int _{C} \vec{F}.d \vec{r}$ = $\phi(3, 1 ,4) - \phi(1,-2,1)$ for any path between the two points. 
>  

#### Another characteristic of conservative vector fields:
**Theorem**: A vector field $\vec{F}$ defined over some simply connected region D of $\mathbb{R} ^{3}$ is conservative iff $\int _{C} \vec{F}.d \vec{r} = 0$ for all closed paths in D.
