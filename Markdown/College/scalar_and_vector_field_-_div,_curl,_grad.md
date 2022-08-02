Links: [[Vector Calculus]]

# Scalar and Vector field - Div, Curl, Grad

- **Definition:** Scalar Field. A function $\phi : \mathbb{R}^{3} \rightarrow \mathbb{R}$ is called a scalar field. It associates a real number with every point in space.
	- *Example:* $\phi(x,y,z) = x^{2}yz$
- **Definition:** Vector Field. A function $f : \mathbb{R} \rightarrow \mathbb{R}^{3}$ is called a vector field. It associates a vector with every point in space.
	- $f(x, y, z) = xy \vec{i} + y^{2}z \vec{j} + x z^{2}\vec{k}$
- **Definition:** The <u>gradient</u> of a scalar field $\phi(x,y,z)$ is the vector field grad $\phi = \frac{\delta \phi}{\delta x} \vec{i} + \frac{\delta \phi}{\delta x}\vec{j}+\frac{\delta \phi}{\delta z}\vec{k}$ which can be written as $\nabla \phi$  where $\nabla$ (nabla) is a vector operator: ($\vec{i} \frac{\delta}{\delta x} + \vec{j} \frac{\delta}{\delta y} + \vec{k}\frac{\delta}{\delta z}$)
- **Definition:** The <u>divergence</u> or div is the scalar field: $\nabla . \vec{A} = \text{div}\vec{A} = \frac{\delta A _{1}}{\delta x}+\frac{d A _{2}}{\delta y}+ \frac{\delta A _{3}}{dz}$ 
- **Definition:** The <u>curl</u> of a vector field $\vec{A}$ is defined to be $\nabla \times \vec{A}$ $$  \begin{bmatrix}
  \vec{i} & \vec{j} & \vec{k} \\
  \frac{\delta}{\delta x} & \frac{\delta}{\delta y} & \frac{\delta}{\delta z} \\
  A _{1} & A _{2} & A _{3} \\
  \end{bmatrix}$$
**Note:** $\nabla . (\nabla \phi)$ is written as $\nabla ^{2}\phi$ is called the Laplacain of $\phi$
