Links: [[Vector Calculus]]

# Paths and Curves:

**Definition:** Let I be a closed interval in $\mathbb{R}$. A continuous function $\sigma: I \rightarrow \mathbb{R} ^{2(3)}$ is called a path in $\mathbb{R} ^{2(3)}$. The image of $\sigma, \sigma(I) = \Gamma$ is called a <u>curve</u>. A curve in $\mathbb{R}^{2}$ is a plane curve and a curve in $\mathbb{R}^{3}$ is a space curve.

The function $\sigma$ is called a parametrization of the curve and the variable (usually denoted by t) is called the parameter, i.e. $$\sigma: I \rightarrow \mathbb{R}^{2(3)}$$$$t \rightarrow \sigma(t)$$
A curve may have different parametrizations.

**Definition**: Paths $\sigma : I \rightarrow \mathbb{R}^{3}$ and $\alpha : J \rightarrow \mathbb{R}^{3}$ are equivalent if they represent the same curve $\Gamma$

**Definition**: A curve $\Gamma$ is a <u>simple curve</u> if there exists a 1-1 parametrization of $\sigma : I \rightarrow \mathbb{R}^{3}$ for $\Gamma$, for some interval $I$. In this case $\sigma : I \rightarrow \Gamma$ is a bijection. ![[Pasted image 20220412124417.png]]
**Definition:** Two injective (1-1) parametrizations (see the above definition) $\sigma$ and $\alpha$ for simple curves are equivalent iff there exists a unique bijective mapping $p: I \rightarrow J$ such that $\sigma = \alpha \circ p$
(where the circle represents output, i.e. $\alpha(p(t)) = \sigma$)


**Definition**: $\Gamma$ is a simple <u>closed</u> curve if there exists a parametrization $\sigma : [a,b] \rightarrow \mathbb{R}^{2(3)}$ such that $\sigma$ is 1-1 on the interior of I and $\sigma(a) = \sigma(b)$. Essentially saying it is a closed curve if the first point on the interval equals the last point on the interval.
![[Pasted image 20220412125414.png|500]]

**Definition:** Tangent to a curve. Let $\sigma : I \rightarrow \mathbb{R}^{3}$ be a parametrization of a curve $\Gamma$. Each point on $\Gamma$ is given by $\sigma(t)$ for some $t \in I$. Since $\sigma(t)$ is a vector it can be written as $\vec{\sigma}(t)$.

We define the tangent vector to $\Gamma$ at the point $\vec{\sigma}(t)$ to be $\vec{\sigma}'(t)$.

It is more commonly written as $\vec{r}(t)=(x(t), y(t), z(t))$ for $\vec{\sigma}(t)$ and as $\frac{d \vec{r}}{dt}=(\frac{dx}{dt}, \frac{dy}{dt}, \frac{dz}{dt})$ for $\vec{\sigma}'(t)$
(or $\frac{dx}{dt}\vec{i}+\frac{dy}{dt}\vec{j}+\frac{dz}{dt}\vec{k}$)

**Note:** if t is time then $\frac{d \vec{r}}{dt}$ is velocity and $\frac{d ^{2}\vec{r}}{dt ^{2}}$ is acceleration.

**Definition:** A parametrization is smooth if $\vec{\sigma}(t)$ exists and $\neq 0$ for all $t \in I$.

**Definition:** Orientation. Suppose that $\sigma : [a,b] \rightarrow \mathbb{R}^{3}$ and $\alpha : [c,d] \rightarrow \mathbb{R}^{3}$ are two injective smooth parametrizations for a simple curve $\Gamma$

If $p : [a,b] \rightarrow [c,d]$ is a bijection it is always increasing or always decreasing and so $p'(t)$ is always positive or always negative. Choosing one direction as positive is called <u>choosing the orientation of the curve.</u>
![[Pasted image 20220412132553.png]]

**Definition**: Arc-Length. The arc length between $\sigma(a)$ and $\sigma(b)$ is the integral: $\int\limits_{a}^{b}||\vec{\sigma}'(t)||dt$
