# Examples of First order PDEs
#college/maths 

Examples taken from Prof. Joe Hogans notes with some additional notes from myself for further readability and understanding. The examples after Example 2 are just straight screenshots from his notes, as they follow the same principles and concepts.

##### Example 1:

$a \frac{\delta u}{\delta x} +  \frac{\delta u}{\delta t} = 0$  where a is a constant and initial conditions are u(x,0) = $\phi(x)$

The curve $\Gamma$ is $x \rightarrow (x, 0, \\phi(x))$. Then we follow the steps, so we parametrize $\Gamma$ by r, and we get x = r, t = 0 and z = $\phi(r)$.

We then parametrize the [[Characteristic Curve| characteristic curves]] by s.

What does this mean? A surface s is just a series of curves, so what we are doing is finding one of the curves (a characteristic curve), this is easier to see in the diagram after the proof in [[PDE First Order Equations]].

So we get: x(r, s), t(r, s), z(r, s) with x(r, 0) = r, t(r, 0) = 0, z(r, 0) = $\phi(r)$

We then have $\frac{d x}{d s}= a$ with x(r, 0) = r, $\frac{dt}{ds} = 1$ with t(r, 0) = 0, and finally $\frac{dt}{ds}=0$ with z(r, 0) = $\phi(r)$.


Then he says "solving we get" which doesn't help to understand how to get to the answer so:

With $\frac{d x}{d s}=a$ we rearrange to get $dx = ads$ and then we $\int dx = \int ads$ which leads on to x = as.

We know that at x(r, 0) = r, so we can say that with x(r, s) $\rightarrow$ we can get x = as + r.

Knowing this, we get x= as + r, t = s and z = $\phi (r)$

then by using algebraic substitution we can find r = x - at because s = t, then furthermore
$z = \phi(x-at)$ which is the solution.


##### Example 2:
$x \frac{\delta u}{\delta x} +  \frac{\delta u}{\delta t} = 0$, u(x,0) = $\phi(x)$

Curve $\Gamma$ is $x \rightarrow (x, 0, \phi(x))$

parametrize with r: x= r, t = 0, z = $\phi(r)$
parametrize the characteristic curve by s: x(r,s), t(r,s), z(r,s) and x(r, 0) = r, t(r, 0) = 0, z(r, 0) = $\phi (r)$

Then we have: $\frac{d x}{d s} = x$ with x(r, 0) = r, $\frac{dt}{ds} = 1$ with t(r, 0) = 0 and $\frac{dt}{ds}=0$ with z(r, 0) = $\phi(r)$.

Solving we get t = s, lnx = s + ln r and **x = $re ^{s}$** and z = $\phi(r)$ it becomes $x = re ^{s}$ because of the log rules. ln(x) - ln(r) = ln(x/r)

So the solution is z = $\phi(xe ^{-t})$ 

(note it becomes -t because taking the equation of x above and rearranging to find r we have r = xe$^{-s}$ because it's the inverse.)

##### Example 3 & 4:
![[Pasted image 20220407133519.png]]
![[Pasted image 20220407133535.png]]
##### Example 5 & 6:
![[Pasted image 20220407133635.png]]
![[Pasted image 20220407133645.png]]
##### Example 7 & 8:
![[Pasted image 20220407133710.png]]
![[Pasted image 20220407133716.png]]

