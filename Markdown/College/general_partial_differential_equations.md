# General Partial differential equations
#college/maths 

A partial differential equation (PDE) is an equation involving partial derivatives. The order of the equation is the highest partial derivative in the equation.

- $\frac{\delta u}{\delta t} = \frac{\delta u}{\delta x}$ is [[PDE First Order Equations|first order]].
- $\frac{\delta ^{2}u}{\delta t ^{2}} - \frac{\delta u}{\delta x} = f(x, t)$ is [[PDE Second Order Equations|second order]].
- A PDE can have any number of variables >= 2.

$u _{t}= u _{xx}$ has two variables (x, t) where the first u is the first partial derivative of u wrt to t and the second u is the second partial derivative of u wrt to x.

A second order PDE is linear if it has the form $Au_{xx}+Bu_{xy}+Cu_{yy}+Du_{x}+Eu_{y}+Fu=G$ Where A, B, C, D, E, F, G are functions of x and y. There exists a linear operator L whereby $Lu = G$. The equation is linear as long as a PD of u is not operated on by u and in the case of Fu that u has no power.

A general linear equation above is homogenous if G=0, otherwise it is inhomogeneous (see [[Ordinary Differential Equations]]).

##### Solutions:
A solution of a PDE in some region R of the space of the variables involved is a function of the variables that has all the partial derivatives appearing in the equation in some domain containing R and satisfies the equation everywhere in R.

There are lots of solutions to that, until you impose conditions that the solution must satisfy on the boundary of R (boundary conditions) or, if one of the variables is time, at t=0 (initial conditions), then we should be able to get a unique solution.

#### Important PDE's from Physics
- $\frac{\delta u}{\delta t} = c \frac{\delta ^{2}u}{\delta x ^{2}}$ (one-dimension [[Heat Equation]])
- $\frac{\delta^{2}u}{\delta t ^{2}} = c ^{2}\frac{\delta ^{2}}{\delta x ^{2}}$ (one-dimension [[Wave Equation]])
- $\frac{\delta ^{2}}{\delta x ^{2}}+\frac{\delta ^{2}}{\delta y ^{2}} = 0$ (two-dimensional [[Laplace Equation]])
- $\nabla ^{2}u = 0$ (three-dimensional Laplace Equation)
- 
