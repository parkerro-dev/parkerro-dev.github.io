Links: [[Vector Calculus]]

# Stokes' Theorem

Let S be an open piecewise smooth orientated surface in $\mathbb{R}^{3}$ and let the boundary of S be a piece wise smooth simple closed curve C. Let $\vec{A}(x, y, z)$ be a $C ^{1}$ vector field defined on some domain containing S. (where $C ^{1}$ means type 1 surface, see Green's theorem).

Then $$\oint _{C} \vec{A}.d \vec{r}= \int \int _{S}(\nabla \times \vec{A}).\vec{n}dS$$where the orientation on C is the direction such that the observer traversing C with the surface on their left has their head pointing in the direction of the chosen normal on S.

#### Important Concept:
In words, the line integral of $\vec{A}$ around a simple closed curve is equal to the surface integral of curl $\vec{A}$ over any surface S having C as its boundary providing the orientations match as stated.

#### Notes:
- If $\vec{A}$ and C are in the xy-plane, then stokes' theorem is just Green's theorem.
- IF $\vec{A}$ is conservative, then both sides are equal to 0.

## Examples:
#### Example 1:
![[Pasted image 20220423132345.png]]![[Pasted image 20220423132354.png]]
Note: that at the end here he says that using K as the Normal in stead of the thing he got would have been easier and it is permissable to do so through Stokes' theorem.
#### Example 2:
![[Pasted image 20220423132507.png]]![[Pasted image 20220423132515.png]]

#### Example 3:
![[Pasted image 20220423132534.png]]


#### Example 4:
![[Pasted image 20220423132602.png]]![[Pasted image 20220423132610.png]]
#### Example 5:
![[Pasted image 20220423132632.png]]![[Pasted image 20220423132639.png]]