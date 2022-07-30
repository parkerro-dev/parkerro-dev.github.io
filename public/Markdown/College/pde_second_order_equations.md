Links: [[Differential Equations]]

# Second Order PDEs: Separation of Variables:

### Heat Equation:
The temperature u(x,t) of a slender metal bar of length L satisfies the diffusion equation: $$ \frac{\delta u}{\delta t} = c \frac{\delta ^{2} u}{\delta x ^{2}}$$
where c is a positive constant. The bar is embedded in a perfect insulator so that the boundary conditions are given by u(0, t) = 0 and u(L, t) = 0. Initially the temperature of the bar is given by u(x, 0) = f(x). for some function $f(x)$. Find the temperature at a distance x from one end of the bar at any time t.

This situation also applies to an infinite vertical slab:![[Pasted image 20220423165411.png]]

### How to solve:
We use the separation of variables method:

We try for a solution of the form $u(x, t) = F(x)G(t)$
Then: 
![[Pasted image 20220423165631.png]]
where ' means differentiate with respect to the relevant variables. Now the left hand of this equation is a function of t only while the right side is a function of x only so both sides must be constant. So $\frac{G'}{cG}=\frac{F''}{F}=k$ for some constant k. **We get two ODEs:**
$\frac{dG}{dt}=ckG$ and $\frac{\delta ^{2}F}{d x ^{2}} = k F$
or $\frac{dG}{dt}-ckG=0$ and $\frac{\delta ^{2}F}{d x ^{2}} -k F= 0$

Now u(0, t) = 0 implies that F(0)G(t)=0 for all t so F(0)=0 or G(t)= 0 for all t. If G(t) = 0 for all t, then u = 0, the trivial solution. Hence F(0) = 0, in the same way we get F(L) = 0.

**We now have the second order ODE:**
$\frac{d ^{2} F}{d x^{2}}-kF=0$ with F(0)=0 and F(L)=0.