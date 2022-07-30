Links: [[Vector Calculus]]

# Surface integrals
Suppose that h : $\mathbb{R}^{3} \rightarrow \mathbb{R}$ is a scalar field defined over some region containing the surface S.

The surface integral of h over S is: $$\int \int \limits _{S}hdS = \int \int \limits _{D}h(\phi(u,v))||\vec{T}_{u}\times \vec{T}_{v}||dudv$$
So for explicit surfaces we have an surface integral that looks like: $$\int \int \limits _{D} h(x, y, g(x, y))\sqrt{1 + \frac{\delta g}{\delta x}^{2}+\frac{\delta g}{\delta y}^{2}}dxdy$$
![[Pasted image 20220422121404.png]]
![[Pasted image 20220422121418.png]]


## Flux:
If instead of a scalar field h, we had a vector field $\vec{A}$ defined over some region containing S. We define the integral of $\vec{A}$ over S to be $\int \vec{A}.d \vec{S}=\int \limits _{D} \vec{A}.\vec{n}dxdy$
which is, if you think about it just the surface integral of the scalar function $\vec{A}. \vec{n}$ over the surface for a chosen orientation. This integral is called the flux of $\vec{A}$ through S.

![[Pasted image 20220423130345.png]]![[Pasted image 20220423130354.png]]