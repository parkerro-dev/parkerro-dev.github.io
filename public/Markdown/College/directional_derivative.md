Links: [[Vector Calculus]]

# Directional Derivative

Let $\phi : \mathbb{R}^{3} \rightarrow \mathbb{R}$ be a scalar field and $\vec{u} = (a,b,c)$ a unit vector. $\vec{P}_{0} = (x_{0}, y_{0}, z_{0})$ is a fixed point.

**Definition:** The directional derivative of $\phi$ in the direction of $\vec{u}$ at the point $\vec{P}_{0}$ is: $$D_{\vec{u}}\phi(\vec{P _{0}}) = \nabla \phi . \vec{u} $$ where $\nabla \phi$ is evaluated at $\vec{P}_{0}$. This is often written as $\frac{d \phi}{ds} = \nabla \phi.\vec{u}$

$\frac{d \phi}{ds}$ is greatest in the direction of $\nabla \phi$ with a maximum value of $||\nabla \phi||$

---

#### Example:
$\phi(x, y, z) = x^{2}-y^{2}+xyz+2$, Find the directional derivative of $\phi$ in the direction $\vec{i}+2 \vec{j}-2 \vec{k}$ at the point (1, -3, 4).

And in which direction is $\phi$ increasing most rapidly at the point (-1,2, 3)? What is the maximum rate of increase?

- $\nabla \phi = (2x+yz)\vec{i} + (-2y+xz)\vec{j}+xy \vec{k}$ so then we calculate $\nabla \phi | _{(1, -3, 4)} = -10 \vec{i} +10\vec{j}-3\vec{k}$. Along with the unit vector in the direction $\vec{i}+2\vec{j}-2\vec{k}$ which is $\vec{u}=\frac{\vec{i}+2\vec{j}-2\vec{k}}{3}$ . Hence we can calculate the directional derivative $\frac{-10+20+6}{3} = \frac{16}{3}$
- For part 2 we find $\nabla \phi | _{(-1,2,3)}= 4\vec{i}-7\vec{j}-2\vec{k}$. And the maximum rate of increase is $||\nabla \phi||= \sqrt{4 ^{2}+7 ^{2}+ 2 ^{2}} = \sqrt{69}$

