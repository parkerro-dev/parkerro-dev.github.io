Links: [[Vector Calculus]]

# Line (Path) Integrals

Let $\sigma : [a, b]  \rightarrow \mathbb{R}^{3}$ be a parametrization of a curve $\Gamma$ and let $\phi  (x, y, z)$ be a scalar field defined on some domain containing $\Gamma$. If s is arc-length along $\Gamma$, then there is a parametrization $\alpha : [0, l(\Gamma)]  \rightarrow \mathbb{R}^{3}$ for $\Gamma$. Now $\alpha(s) =  (x(s), y(s), z(s))$ is a function of s, so $\phi$ is a function of s along $\Gamma$. Hence we can define $\int\limits_{0}^{l(\Gamma)}(\phi \circ \alpha)(s)ds$ or for short, $\int\limits_{0}^{l(\Gamma)}\phi ds$.

Now $s(t) = \int\limits_{a}^{t}||\vec{\sigma}'(u)||du$ and$\frac{ds}{dt}=||\vec{\sigma}'(t)||$, so $\int\limits_{0}^{l(\Gamma)}(\phi \circ \alpha)(s)ds = \int\limits_{a}^{b}(\phi(\alpha(s(t))))s'(t)dt=\int\limits_{a}^{b}\phi(\sigma(t))||\vec{\sigma}'(t)||dt$
which is more commonly written $$\int\limits_{b}^{a}(\phi||\vec{\sigma}'(t)||)dt $$This is the line integral of $\phi$ along $\Gamma$.

---
>[!Example]
>If $\vec{A}=(3x^{2}+6y)\vec{i} - 14yz \vec{j}+20x z^{2} \vec{k}$, find $\int _{C} \vec{A}.d \vec{r}$  along the following curves:
>- (i) $\sigma : [0, 1] \rightarrow \mathbb{R}^{3}$, $t \mapsto (t, t ^{2}, t ^{3})$
>	-  Straight Line from (0, 0, 0) to (1, 1, 1)
>	- $\int _{C} \vec{A}.d \vec{r} = \int\limits_{0}^{1}((3t ^{2}+6 t ^{2})1 +(-14t ^{2}.t ^{3})2t+(20t.t ^{6})3t ^{2})dt = 5$
>- (ii) $\sigma : [0,1] \rightarrow \mathbb{R}^{3}$, $t \mapsto (t, 0 ,0)$
>	- (0,0,0) $\rightarrow$ (1, 0, 0)
>	- $\int _{c}\vec{A}.d \vec{r} = \int\limits_{0}^{1}3t ^{2}.1dt = 1$
---

