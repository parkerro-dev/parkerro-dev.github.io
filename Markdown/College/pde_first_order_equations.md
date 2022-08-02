Links: [[Differential Equations]]
# First Order PD Equations: Method of Characteristics

A first order equation of the form $a(x,y)\frac{\delta u}{\delta x}+b(x, y)\frac{\delta u}{\delta y} = c(x,y,u)$ is semi-linear, if c = c(x, y) then it is linear.

---

### Concept:
Suppose that u(x, y) is a solution of the equation above in some domain D in $\mathbb{R}^{2}$ . The equation z = u(x, y) defines an explicit surface S in $\mathbb{R}^{3}$ given by $\Phi(x,y)=(x,y,u(x,y))$. 
![[Pasted image 20220407112636.png]]

The normal to S at any point (x, y, z) in S is $(-\frac{\delta u}{\delta x}, -\frac{\delta u}{\delta y}, 1)$. Consider the vector field given by (a(x, y), b(x, y), c(x, y)). 

Then we have $\left(-\frac{\delta u}{\delta x}, -\frac{\delta u}{\delta y}, 1\right)*(a,b,c)=-a \frac{\delta u}{\delta x} - b \frac{\delta u}{\delta y} + c = 0$, so (a, b, c) is perpendicular to the normal to S at every point of S or **(a, b, c) lies in the tangent plane** to S at every point on S.

==Therefore, solving the differential equation is the same as finding a surface S given by z = u(x, y) such that (a, b, c) lies in the tangent plane at every point (x, y, z) on S.== Such a surface is called a **characteristic surface**.

---

### How to solve:
We begin by finding the [[Characteristic Curve|characteristic curve]]. 

#### Theorem:
Suppose that C, given by X(s), Y(s) and Z(s) is the unique characteristic curve through the point $(x _{0}, y _{0}, z _{0})$ of S. Then C is contained in S.

###### Proof:
Let $Z _{1} = u(X(s), Y(s))$

Then $\frac{dZ _{1}}{ds} = \frac{\delta u}{\delta x}\frac{dX}{ds} +  \frac{\delta u}{\delta y}\frac{dY}{ds} = a(X(s),Y(s))\frac{\delta u}{\delta x} + b(X(s), Y(s)) \frac{\delta u}{\delta y} = c(X(s), Y(s), Z _{1}(s))$
Also $X(s _{0}) = x _{0}$ and $Y(s _{0}) = y _{0}$ so then $Z _{1} = u(X(s _{0}), Y(s _{0})) = u(x _{0}, y _{0}) = z _{0}$.

If $C _{1}$ is the curve given by X(s), Y(s), $Z _{1}$(s) then $C _{1}$ is contained in S and by uniqueness of solutions, Z = $Z _{1}$ and so C = $C _{1}$.

#### Main solution:
Our problem is to find such a surface S. Notation will change from x, y to x, t.
We want a solution of: $$a(x, t)\frac{\delta u}{\delta x} + b(x, t) \frac{\delta u}{\delta t} = c(x, t, u)$$
subject to boundary condition of the form u(x, 0) = $\phi(x)$, for some $C ^{1}$ function of $\phi$. This is called an initial values problem (or Cauchy problem). 

So:
S is given by $\phi  (x, t) = (x, 0, u  (x, t))$, so that taking t = 0 gives $\phi(x,0) = (x, 0, u(x,0)) = (x, 0, \phi(x))$ which is a curve in the xz-plane.

- Parametrize this curve by x = r, t = 0 and z = $\phi(x)$ and call it $\Gamma$.
- Specifying initial conditions u(x,0) = $\phi(x)$ is = to saying $\Gamma$ must lie on the required surface
- For each r we have a unique characteristic curve through the point (x(r), t(r), z(r)) = (r, 0, $\phi(r)$)
![[Pasted image 20220407122616.png]]

We get a surface S defined on some domain of the r and s by $\phi (r, s)$ = (x(r,s), t(r,s), z(r, s)) where for each r: (x(r), t(r), z(r)) = (r, 0, $\phi(r)$) and $\frac{dx}{ds} = a, \frac{dt}{ds} = b, \frac{dz}{ds} = c$.

The Inverse Function theorem tells us that $\frac{\delta  (x, t)}{\delta (r, s)} \neq 0 \text{ on } \Gamma$ 

Then we can solve to get r and s in terms of x and t and hence z = u(x, t) for some function u.

Then finally:

this u(x, t) satisfies the initial value problem since $\Gamma$ lies in the surface (for s = 0) and along each characteristic curve we have: $$c = \frac{dz}{ds} = \frac{d}{ds}u(x(s), t(s)) = \frac{\delta u}{\delta x}\frac{dx}{ds} +  \frac{\delta u}{\delta t}\frac{dt}{ds}= a \frac{\delta u}{\delta x}+b  \frac{\delta u}{\delta t}$$
[[Examples of First Order PDE]]


