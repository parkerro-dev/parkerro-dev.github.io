Links: [[Vector Calculus]]

# Vector Spaces:

### Vector Space of $\mathbb{R} ^{3}$
**Definition:** $\mathbb{R} ^{3} = {(a, b, c)| a, b, c \in \mathbb{R}}$, the set of ordered triples of real numbers. (This is just defining Three Dimensional Space). We write $\vec{v}=(a, b, c)$ and say the vector (a, b, c).

Two vectors are equal if their corresponding components are equal. (a, b, c) = (d, e, f).

Geometrically, $\mathbb{R} ^{3}$ can be thought of as the set of points in space by taking three mutually perpendicular lines through a chosen point O (origin).
![[Pasted image 20220410123244.png|300]]

#### Vector Rules:
**Definition:** Vector Addition - if $\vec{u} = (x_{1}, y_{1}, z_{1})$ and $\vec{v} = (x_{2}, y_{2}, z_{2})$, then we define $\vec{u}+\vec{v} = (x_{1}+x_{2}, y_{1}+y_{2}, z_{1}+z_{2})$
	- (i) $\vec{u}+\vec{v}=\vec{v}+\vec{u}$ (commutative)
	- (ii) $(\vec{u}+\vec{v})+\vec{w}=\vec{u}+(\vec{v}+\vec{w})$ (associative)
	- (iii) There exists a <u>zero vector</u> $\vec{0}$
	- (iv) There exists a vector $- \vec{u}$ so that $\vec{u}+(-\vec{u}) = \vec{0}$ (additive inverse)#

**Definition:** Scalar Multiplication - if $\vec{u} = (x, y, z) \in \mathbb{R} ^{3}$ and define $\alpha \vec{u} = (\alpha x, \alpha y, \alpha z) \in \mathbb{R} ^{3}$
	- (i) $\alpha (\vec{u}+\vec{v}) = \alpha \vec{u}+ \alpha \vec{v}$  (distributive)
	- (ii)$(\alpha + \beta)\vec{u} = \alpha \vec{u} + \beta \vec{u}$
	- (iii) $\alpha(\beta \vec{u}) =(\alpha \beta)\vec{u}$
	- (iv)$1 \vec{u} = \vec{u}$
	- (v) $0 \vec{u}=\vec{0}$
	- (vi) $\alpha \vec{0}=\vec{0}$

**Definition:** Vector Subtraction - $\vec{u}-\vec{v}=\vec{u}+(-\vec{v})$ 

**Definition:** Scalar (dot) Product on $\mathbb{R} ^{3}$. if $\vec{u} = (x_{1}, y_{1}, z_{1})$ and $\vec{v}=(x_{2}, y_{2}, z_{2})$. Then we define $\vec{u}.\vec{v}= x_{1}x_{2}+y_{1}y_{2}+z_{1}z_{2} \in  \mathbb{R} ^{3}$
	- (i) $\vec{u}.\vec{v}=\vec{v}.\vec{u}$
	- (ii)$\vec{u}(\vec{v}+\vec{w})=\vec{u}.\vec{v}+\vec{u}.\vec{w}$
	- (iii)$(\alpha \vec{u}).\vec{v}= \alpha(\vec{v}.\vec{u})$
	- (iv) if one of the vectors is $\vec{0}$ then the dot product is $\vec{0}$

Note: Angle between two vectors: $\cos \theta = \frac{\vec{a}.\vec{b}}{|\vec{a}||\vec{b}|}$


**Definition:** Perpendicularity. $\vec{u} \perp \vec{v}$ if $\vec{u}.\vec{v}=0$
- Small theorem related to Perpendicularity: [[Schwarz inequality]]

**Definition:** The norm or length of a vector. If $\vec{u}$ is any vector, we define $||\vec{u}|| = \sqrt{\vec{u}.\vec{u}} = \sqrt{x^{2}+y^{2}+z^{2}}$ 
	-(i) $||\alpha \vec{u}|| = |a|||\vec{u}||$
	-(ii) $||\vec{u}+\vec{v}|| \leq ||\vec{u}|| +||\vec{v}||$ (triangle inequality)

**Definition:** Distance between two vectors - If $\vec{u}$ and $\vec{v}$ are any vector define $d(\vec{u}, \vec{v}) = ||\vec{u}-\vec{v}||$
- ![[Pasted image 20220411102046.png]]
	**Definition:** Orthogonal projection. Suppose $\vec{u}, \vec{v} \neq \vec{0}$. Then $\alpha \vec{v}$ is the projection of $\vec{u}$ onto $\vec{v}$ if $(\vec{u}-\alpha \vec{v}) \perp \vec{v}$.
	- ![[Pasted image 20220411102336.png|500]]

**Definition:** Cross product. For convenience, we change our notation and consider vectors $\vec{x} = (x_{1}, x_{2}, x_{3}), \vec{y} = (y_{1}, y_{2}, y_{3})$. Then we define $\vec{x} \times \vec{y} = (x_{2}y_{3}-x_{3}y_{2}, x_{3}y_{1}-x_{1}y_{3}, x_{1}y_{2}-x_{2}y_{1}).$

![[Pasted image 20220411102741.png|600]]



