Links: [[Ordinary Differential Equations]]
# Second Order Linear ODEs:
#college/maths 
A second order linear ODE is an equation of the form: $$y''(x) + p(x)y'(x)+q(x)y(x) = r(x)$$
It can be written with y's represented just like y' with no x. But they are still real or complex value functions of x.

It is homogeneous if r(x) = 0.

If we say that $y(x_{0}) = k _{0}$ and $y'(x_{0} = k _{1})$ for some $x_{0}$, where $k _{0}$ and $k _{1}$ are real or complex constants then we get:

### Theorem:
If p(x) and q(x) are continuous on some open interval I and $x_{0} \in I$   then the initial value problem: $$y'' + p(x)y'+q(x)y = 0, y(x_{0})= k _{0}, y'(x_{0})=k _{1}$$
has a unique solution y(x) on I. We can use any method we want to find this unique solution.
Defining the differential operator L by: $$L = \frac{d ^{2}}{d x^{2}}+p(x)\frac{d}{dx}+q(x)$$
gives the equation in the form L(y) = r(x) with L(y)=0 in the homogeneous case. The result is the [[Principle of superposition]]

### Theorem:
If $y_{1}$ and $y_{2}$ satisfy L(y) = 0, then so does $\alpha y_{1} \text{ and } \beta y_{2}$ for any real or complex number $\alpha, \beta$.

### Theorem: 
The solution space of L(y) = 0 on the open interval I is 2 dimensional.

### Proof (also the solution for these ODEs):
Let $x_{0}$ be some point in I. Let $y_{1}(x_{})$ be the unique solution satisfying $y_{1}(x_{0}) = 1$ and $y_{1}'(x_{0}=0)$ and let $y_{2}(x)$ be the unique solution which satisfy $y_{2}(x_{0})=0$ and $y_{2}'(x_{0})=0$, then $y_{1}$ and $y_{2}$ are linearly independent. 

(^ this part is just declaring that y(n) is a unique solution to all parts of the DE)

Suppose that y is any other solution.

><b>This indented part is a bit trivial.</b>
>Let $k _{1} = y(x_{0})$ and $k _{2} = y'(x_{0})$
>
> We get that $y$ and $k _{1}y_{1}+K _{2}y_{2}$ are solutions with the same initial conditions and hence by uniqueness are the <u>same</u>.
> 
> We conclude that $y_{1}$ and $y_{2}$ form a basis for the solution space.

#### Solution:
p(x) = a, q(x) = b where a, b are real constants.

>$y''+ay'+by=0$

(Recall that the for [[ODE First Order Linear]] equation: y' + ky = 0 has a solution $y = e ^{-kx}$)

We try the solution $y=e ^{\lambda x}$ for the second order equation. Substituting into the equation gives $(\lambda ^{2} + a \lambda + b)e ^{\lambda}$ and hence $\lambda ^{2} + a\lambda + b = 0$. 

This is called characteristic equation.

It's roots are $\lambda _{1} = \frac{-a + \sqrt{a ^{2} - 4b}}{2}$ and $\lambda _{2} = \frac{-a - \sqrt{a ^{2} - 4b}}{2}$

So the corresponding solutions are $e ^{\lambda _{1}x}$ and $e ^{\lambda _{2}x}$ 

###### Three cases for solutions:
- $a ^{2} - 4b > 0$ (two <u>real roots</u>) (1) General solution: $y = c _{1} e ^{\lambda _{1}x} + c _{2} e ^{\lambda _{2}x}$
- $a ^{2} - 4b=0$ (one <u>real double root</u>) (2) General solution $y=(c _{1} + c _{2}x)e ^{- \frac{a}{2}x}$
- $a ^{2} - 4b < 0$ (two fully <u>complex roots</u>) (3) General solution $y = e ^{- \frac{a}{2}x}(A\cos \omega x + B \sin \omega x)$

The workings for the solutions are [[ODE Second Order Linear Solution Workings|in these workings]].

##### There are [[Examples of Second Order ODEs]]



