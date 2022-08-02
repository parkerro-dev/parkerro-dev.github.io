Links: [[Vector Calculus]]

# Green's theorem
We say that a closed curve C is positively orientated if the interior of C is on the left as we traverse the curve.

**Theorem:** Let C be a positively oriented piecewise-smooth simple closed curve in the plane bounding the region D. If $\vec{F} = P \vec{i} + Q \vec{j}$ where $P(x, y)$ and $Q(x,y)$ are $C ^{1}$ functions defined on an open simply connected region that contains D, then $$\oint \limits _{C} \vec{F}.d \vec{r}= \oint \limits _{C}(Pdx + Qdy) = \int \int \limits _{D} (\frac{\delta Q}{\delta x}- \frac{\delta P}{\delta y})dxdy $$

**Note:** Type 1 and Type 2 Curves
	A curve is of *type 1* if any parallel line to the y-axis cuts the curve in a maximum of 2 points.
	---
	A curve is of *type 2* if x-axis is replaced with the y-axis

**What does that mean?**:
	![[Pasted image 20220415080905.png]]
	This curve is of type 1, if C is parametrized:
	$\sigma : [t _{0}, t _{1}] \rightarrow \mathbb{R}^{2}$ and $t \mapsto (\sigma _{1}(t), \sigma _{2}(t))$ 
	then $\sigma _{1}$ is a bijection on some interval $[t _{0}, t _{2}]$
	Let $\sigma _{1}(t _{0}) = a$ and $\sigma _{1}(t _{2})=b$. Then $\sigma _{1}^{-1}: [a, b] \rightarrow [t _{0}, t _{2}]$ is a bijection and we can parametrize the bottom half of the curve.
	To put it simply the bottom half of the closed curve is given by $Y _{1}(x)$ for $x \in[a, b]$. Similarly we have a function $Y _{2}(x)$ for $x \in [a, b]$ giving the top half.

---
>[!Example]
>Verify Green's Theorem for $\oint \limits _{C}((xy+y^{2})dx + x^{2}dy)$ where C is the boundary of the region enclosed by the curves $y=x$ and $y=x^{2}$ ![[Pasted image 20220415083326.png]]
>Along $y = x^{2}$ we have $\int \limits _{C _{1}}((xy+y^{2})dx+x^{2}dy)=\int\limits_{0}^{1}(x(x^{2})+(x^{2})^{2}+x^{2}(2x)dx)=\frac{19}{20}$
>And along $y=x, \int \limits _{C _{2}}((xy+y^{2})dx+x^{2}dy)=- \int\limits_{0}^{1}(x(x)+x^{2}+x^{2}(1))dx=-1$
>Hence $\oint \limits _{C}((xy + y^{2})dx+x^{2}dy)=\frac{19}{20}-1= - \frac{1}{20}$
>Now we use green's theorem $\int \int \limits _{D}(\frac{\delta Q}{\delta x}-\frac{\delta P}{\delta y}dxdy)=\int \int \limits _{D}(\frac{\delta}{\delta x}x^{2}-\frac{\delta}{\delta y}(xy ^{2}+y^{2}))dxdy=\int \int \limits _{D}(2x-x-2y)dxdy= \int\limits_{0}^{1} \int\limits_{y=x^{2}}^{y=x}(x-2y)dydx$ and if you do it $= -\frac{1}{20}$
>


