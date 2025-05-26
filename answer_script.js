const questions = [
{
    id: 1,
    class: '12',
    subject: 'Math',
    topic: 't1',
    year: '2010',
    type: 'mcq',
    content: 'What is the derivative of x^2?',
    options: ['x', '2x', 'x^2', 'None'],
    answer: 1, // index of the correct option (0-indexed)
    solution: 'The derivative of $x^2$ is $2x$.'
  },
  {
    id: 2,
    class: '12',
    subject: 'Chem',
    topic: 't2',
    year: '2011',
    type: 'short',
    content: 'Explain the law of conservation of mass.',
    solution: 'The law of conservation of mass states that mass in an isolated system is neither created nor destroyed by chemical reactions or physical transformations. The mass of the products in a chemical reaction must equal the mass of the reactants.'
  },
  {
  "id": 2024001,
  "class": "12",
  "subject": "Math",
  "topic": "Matrices",
  "difficulty": "easy",
  "year": "2024",
  "type": "mcq",
  "format": "text",
  content: 'Evaluate $\\int_0^1 x^2 dx$',
  options: ['$\\frac{1}{3}$', '$1$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
  "answer": 0, // Corrected answer index to 0 for '1/3'
  "solution": "The integral of $x^2$ is $\\frac{x^3}{3}$. Evaluating from 0 to 1 gives $\\frac{1^3}{3} - \\frac{0^3}{3} = \\frac{1}{3}$.",
  "marks": 1
},

{
  "id": 2024002,
  "class": "12",
  "subject": "Math",
  "topic": "Vector Algebra",
  "difficulty": "medium",
  "year": "2024",
  "type": "mcq",
  "format": "text",
  content:"If vector \\( \\vec{a}=3\\hat{i}+2\\hat{j}-\\hat{k} \\) and vector \\( \\vec{b}=\\hat{i}-\\hat{j}+\\hat{k} \\), then which of the following is correct?",
  "options": ["\\( \\vec{a}||\\vec{b} \\)", "\\( \\vec{a}\\perp\\vec{b} \\)", "\\( |\\vec{b}|>|\\vec{a}| \\)", "\\( |\\vec{a}|=|\\vec{b}| \\)"],
  "answer": 1, // Corrected answer index to 1 for perpendicular
  "solution": "To check for perpendicularity, we compute the dot product: $\\vec{a} \\cdot \\vec{b} = (3)(1) + (2)(-1) + (-1)(1) = 3 - 2 - 1 = 0$. Since the dot product is 0, the vectors are perpendicular ($\\vec{a}\\perp\\vec{b}$).",
  "marks": 1
},
{
"id":10012,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
	"year": "2024",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "Find all points of discontinuity of \\( f(x) = \\begin{cases} x^{10} - 1, & x \\leq 1 \\\\ x^{2}, & x > 1 \\end{cases} \\).",
    "marks": 5,
    "solution": "For $x \\leq 1$, $f(x) = x^{10} - 1$ is a polynomial, so it's continuous. For $x > 1$, $f(x) = x^{2}$ is a polynomial, so it's continuous. We need to check continuity at $x = 1$.<br>LHL at $x=1$: $\\lim_{x \\to 1^-} (x^{10} - 1) = 1^{10} - 1 = 0$.<br>RHL at $x=1$: $\\lim_{x \\to 1^+} x^2 = 1^2 = 1$.<br>Since LHL $\\neq$ RHL, $f(x)$ is discontinuous at $x = 1$. There are no other points of discontinuity."
  },
  {
"id":10013,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "Is the function \\( f(x) = \\begin{cases} x + 5, & x \\leq 1 \\\\ x - 5, & x > 1 \\end{cases} \\) continuous?",
    "marks": 5,
    "solution": "We check continuity at $x = 1$.<br>LHL at $x=1$: $\\lim_{x \\to 1^-} (x + 5) = 1 + 5 = 6$.<br>RHL at $x=1$: $\\lim_{x \\to 1^+} (x - 5) = 1 - 5 = -4$.<br>Since LHL $\\neq$ RHL, the function is discontinuous at $x = 1$."
  },
  {
"id":10014,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
	"year": "2022",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "Discuss the continuity of the function \\( f(x) = \\begin{cases} 3, & 0 \\leq x \\leq 1 \\\\ 4, & 1 < x < 3 \\\\ 5, & 3 \\leq x \\leq 10 \\end{cases} \\).",
    "marks": 6,
    "solution": "We need to check continuity at $x=1$ and $x=3$.<br>At $x=1$: LHL = $\\lim_{x \\to 1^-} 3 = 3$. RHL = $\\lim_{x \\to 1^+} 4 = 4$. Since LHL $\\neq$ RHL, $f(x)$ is discontinuous at $x=1$.<br>At $x=3$: LHL = $\\lim_{x \\to 3^-} 4 = 4$. RHL = $\\lim_{x \\to 3^+} 5 = 5$. Since LHL $\\neq$ RHL, $f(x)$ is discontinuous at $x=3$.<br>The function is continuous on $(0, 1)$, $(1, 3)$, and $(3, 10)$ as it's a constant function in these intervals. Thus, the function is discontinuous at $x=1$ and $x=3$."
  },
   {
"id":10015,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "Discuss the continuity of the function \\( f(x) = \\begin{cases} 2x, & x < 0 \\\\ 0, & 0 \\leq x \\leq 1 \\\\ 4x, & x > 1 \\end{cases} \\).",
    "marks": 6,
    "solution": "We need to check continuity at $x=0$ and $x=1$.<br>At $x=0$: LHL = $\\lim_{x \\to 0^-} 2x = 0$. RHL = $\\lim_{x \\to 0^+} 0 = 0$. $f(0) = 0$. Since LHL = RHL = $f(0)$, $f(x)$ is continuous at $x=0$.<br>At $x=1$: LHL = $\\lim_{x \\to 1^-} 0 = 0$. RHL = $\\lim_{x \\to 1^+} 4x = 4$. Since LHL $\\neq$ RHL, $f(x)$ is discontinuous at $x=1$.<br>The function is continuous on $(-\\infty, 0)$, $(0, 1)$, and $(1, \\infty)$ as it's a polynomial or constant function in these intervals. Thus, the function is discontinuous at $x=1$."
  },
  {
"id":10016,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "Discuss the continuity of the function \\( f(x) = \\begin{cases} -2, & x \\leq -1 \\\\ 2x, & -1 < x \\leq 1 \\\\ 2, & x > 1 \\end{cases} \\).",
    "marks": 6,
    "solution": "We need to check continuity at $x=-1$ and $x=1$.<br>At $x=-1$: LHL = $\\lim_{x \\to -1^-} -2 = -2$. RHL = $\\lim_{x \\to -1^+} 2x = 2(-1) = -2$. $f(-1) = -2$. Since LHL = RHL = $f(-1)$, $f(x)$ is continuous at $x=-1$.<br>At $x=1$: LHL = $\\lim_{x \\to 1^-} 2x = 2(1) = 2$. RHL = $\\lim_{x \\to 1^+} 2 = 2$. $f(1) = 2$. Since LHL = RHL = $f(1)$, $f(x)$ is continuous at $x=1$.<br>The function is continuous on $(-\\infty, -1)$, $(-1, 1)$, and $(1, \\infty)$ as it's a constant or polynomial function in these intervals. Thus, the function is continuous everywhere."
  },
  {
"id":10017,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "Find the relationship between \\( a \\) and \\( b \\) so that the function \\( f(x) = \\begin{cases} ax + 1, & x \\leq 3 \\\\ bx + 3, & x > 3 \\end{cases} \\) is continuous at \\( x = 3 \\).",
    "marks": 6,
    "solution": "For continuity at $x=3$, we need LHL = RHL = $f(3)$.<br>LHL at $x=3$: $\\lim_{x \\to 3^-} (ax + 1) = 3a + 1$.<br>RHL at $x=3$: $\\lim_{x \\to 3^+} (bx + 3) = 3b + 3$.<br>$f(3) = a(3) + 1 = 3a + 1$.<br>For continuity, $3a + 1 = 3b + 3$.<br>Subtracting 1 from both sides: $3a = 3b + 2$.<br>So, the relationship is $3a = 3b + 2$ or $a = b + \\frac{2}{3}$."
  },
  {
"id":10018,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "For what value of \\( \\lambda \\) is the function \\( f(x) = \\begin{cases} \\lambda (x^{2} - 2x), & x \\leq 0 \\\\ 4x + 1, & x > 0 \\end{cases} \\) continuous at \\( x = 0 \\)? Also discuss continuity at \\( x = 1 \\).",
    "marks": 6,
    "solution": "For continuity at $x=0$: LHL = RHL = $f(0)$.<br>LHL at $x=0$: $\\lim_{x \\to 0^-} \\lambda (x^{2} - 2x) = \\lambda (0 - 0) = 0$.<br>RHL at $x=0$: $\\lim_{x \\to 0^+} (4x + 1) = 4(0) + 1 = 1$.<br>$f(0) = \\lambda (0^2 - 2(0)) = 0$.<br>For continuity at $x=0$, we need LHL = RHL, which means $0 = 1$. This is a contradiction. Therefore, there is no value of $\\lambda$ for which the function is continuous at $x=0$.<br><br>Continuity at $x=1$:<br>Since $x=1 > 0$, $f(x) = 4x + 1$. This is a polynomial function, which is continuous for all real numbers. Thus, $f(x)$ is continuous at $x=1$ for any value of $\\lambda$."
  },
  {
"id":10019,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "Show that the function \\( g(x) = x - [x] \\) is discontinuous at all integral points, where \\( [x] \\) denotes the greatest integer less than or equal to \\( x \\).",
    "marks": 6,
    "solution": "Let $c$ be an integer. We need to check the continuity of $g(x)$ at $x=c$.<br>LHL at $x=c$: $\\lim_{x \\to c^-} (x - [x])$. As $x \\to c^-$ (e.g., 2.9, 2.99 for $c=3$), $[x]$ will be $c-1$. So, $\\lim_{x \\to c^-} (x - (c-1)) = c - (c-1) = 1$.<br>RHL at $x=c$: $\\lim_{x \\to c^+} (x - [x])$. As $x \\to c^+$ (e.g., 3.1, 3.01 for $c=3$), $[x]$ will be $c$. So, $\\lim_{x \\to c^+} (x - c) = c - c = 0$.<br>$g(c) = c - [c] = c - c = 0$.<br>Since LHL (1) $\\neq$ RHL (0), the function $g(x) = x - [x]$ is discontinuous at all integral points."
  },
  {
"id":10020,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "Is the function \\( f(x) = x^{2} - \\sin x + 5 \\) continuous at \\( x = \\pi \\)?",
    "marks": 5,
    "solution": "The function $f(x) = x^{2} - \\sin x + 5$ is a combination of elementary continuous functions: $x^2$ is a polynomial (continuous everywhere), $\\sin x$ is a trigonometric function (continuous everywhere), and 5 is a constant (continuous everywhere).<br>The sum and difference of continuous functions are continuous. Therefore, $f(x)$ is continuous for all real numbers. Specifically, it is continuous at $x = \\pi$.<br>Alternatively, we can check the limit at $x=\\pi$:<br>$\\lim_{x \\to \\pi} (x^2 - \\sin x + 5) = \\pi^2 - \\sin \\pi + 5 = \\pi^2 - 0 + 5 = \\pi^2 + 5$.<br>$f(\\pi) = \\pi^2 - \\sin \\pi + 5 = \\pi^2 - 0 + 5 = \\pi^2 + 5$.<br>Since $\\lim_{x \\to \\pi} f(x) = f(\\pi)$, the function is continuous at $x = \\pi$."
  },
  {
"id":10021,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "(a) Discuss the continuity of the function \\( f(x) = \\sin x + \\cos x \\). (b) Discuss the continuity of \\( f(x) = \\sin x - \\cos x \\). (c) Discuss the continuity of \\( f(x) = \\sin x \\cdot \\cos x \\).",
    "marks": 7,
    "solution": "(a) Continuity of $f(x) = \\sin x + \\cos x$: Both $\\sin x$ and $\\cos x$ are continuous functions for all real numbers. The sum of two continuous functions is also continuous. Therefore, $f(x) = \\sin x + \\cos x$ is continuous for all real numbers.<br>(b) Continuity of $f(x) = \\sin x - \\cos x$: Similar to (a), the difference of two continuous functions ($\\sin x$ and $\\cos x$) is continuous. Therefore, $f(x) = \\sin x - \\cos x$ is continuous for all real numbers.<br>(c) Continuity of $f(x) = \\sin x \\cdot \\cos x$: The product of two continuous functions ($\\sin x$ and $\\cos x$) is continuous. Therefore, $f(x) = \\sin x \\cdot \\cos x$ is continuous for all real numbers."
  },
  {
"id":10022,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "Discuss the continuity of the cosine, cosecant, secant, and cotangent functions.",
    "marks": 6,
    "solution": "1. **Cosine function ($f(x) = \\cos x$):** The cosine function is continuous for all real numbers. Its graph is a smooth, unbroken curve.<br>2. **Cosecant function ($f(x) = \\csc x = \\frac{1}{\\sin x}$):** The cosecant function is continuous everywhere except where $\\sin x = 0$. This occurs at $x = n\\pi$, where $n$ is an integer. So, $f(x)$ is continuous for all $x \\in \\mathbb{R} \\setminus \\{n\\pi \\mid n \\in \\mathbb{Z}\}\}$.<br>3. **Secant function ($f(x) = \\sec x = \\frac{1}{\\cos x}$):** The secant function is continuous everywhere except where $\\cos x = 0$. This occurs at $x = (2n+1)\\frac{\\pi}{2}$, where $n$ is an integer. So, $f(x)$ is continuous for all $x \\in \\mathbb{R} \\setminus \\{(2n+1)\\frac{\\pi}{2} \\mid n \\in \\mathbb{Z}\}\}$.<br>4. **Cotangent function ($f(x) = \\cot x = \\frac{\\cos x}{\\sin x}$):** The cotangent function is continuous everywhere except where $\\sin x = 0$. This occurs at $x = n\\pi$, where $n$ is an integer. So, $f(x)$ is continuous for all $x \\in \\mathbb{R} \\setminus \\{n\\pi \\mid n \\in \\mathbb{Z}\}\}$."
  },
  {
"id":10023,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "Find all points of discontinuity of \\( f(x) = \\begin{cases} \\frac{\\sin x}{x}, & x < 0 \\\\ x + 1, & x \\geq 0 \\end{cases} \\).",
    "marks": 5,
    "solution": "For $x < 0$, $f(x) = \\frac{\\sin x}{x}$. This function is continuous for all $x \\neq 0$. Since we are considering $x < 0$, there are no discontinuities here.<br>For $x \\geq 0$, $f(x) = x + 1$, which is a polynomial and continuous everywhere.<br>We need to check continuity at the boundary point $x = 0$.<br>LHL at $x=0$: $\\lim_{x \\to 0^-} \\frac{\\sin x}{x} = 1$ (standard limit).<br>RHL at $x=0$: $\\lim_{x \\to 0^+} (x + 1) = 0 + 1 = 1$.<br>$f(0) = 0 + 1 = 1$.<br>Since LHL = RHL = $f(0)$, the function is continuous at $x=0$. Therefore, there are no points of discontinuity for this function."
  },
  {
"id":10024,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "Determine if \\( f(x) = \\begin{cases} x^{2} \\sin \\frac{1}{x}, & x \\neq 0 \\\\ 0, & x = 0 \\end{cases} \\) is a continuous function.",
    "marks": 5,
    "solution": "For $x \\neq 0$, $f(x) = x^2 \\sin \\frac{1}{x}$. We know that $x^2$ is continuous and $\\sin \\frac{1}{x}$ is continuous for $x \\neq 0$. The product of continuous functions is continuous. So, $f(x)$ is continuous for all $x \\neq 0$.<br>We need to check continuity at $x = 0$.<br>$f(0) = 0$.<br>LHL and RHL at $x=0$: $\\lim_{x \\to 0} x^{2} \\sin \\frac{1}{x}$.<br>We know that $-1 \\leq \\sin \\frac{1}{x} \\leq 1$.<br>Multiplying by $x^2$ (which is non-negative): $-x^2 \\leq x^2 \\sin \\frac{1}{x} \\leq x^2$.<br>As $x \\to 0$, $\\lim_{x \\to 0} (-x^2) = 0$ and $\\lim_{x \\to 0} (x^2) = 0$.<br>By the Squeeze Theorem, $\\lim_{x \\to 0} x^{2} \\sin \\frac{1}{x} = 0$.<br>Since $\\lim_{x \\to 0} f(x) = f(0) = 0$, the function is continuous at $x=0$.<br>Therefore, the function is continuous for all real numbers."
  },
  {
"id":10025,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "Examine the continuity of \\( f(x) = \\begin{cases} \\sin x - \\cos x, & x \\neq 0 \\\\ 1, & x = 0 \\end{cases} \\).",
    "marks": 5,
    "solution": "For $x \\neq 0$, $f(x) = \\sin x - \\cos x$. Both $\\sin x$ and $\\cos x$ are continuous for all real numbers, so their difference is also continuous for $x \\neq 0$.<br>We need to check continuity at $x = 0$.<br>$f(0) = 1$.<br>LHL and RHL at $x=0$: $\\lim_{x \\to 0} (\\sin x - \\cos x) = \\sin 0 - \\cos 0 = 0 - 1 = -1$.<br>Since $\\lim_{x \\to 0} f(x) = -1$ and $f(0) = 1$, we have $\\lim_{x \\to 0} f(x) \\neq f(0)$.<br>Therefore, the function is discontinuous at $x=0$."
  },
{
"id":10026,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "Find the values of \\( k \\) so that the function \\( f(x) = \\begin{cases} \\frac{k \\cos x}{\\pi - 2x}, & x \\neq \\frac{\\pi}{2} \\\\ 3, & x = \\frac{\\pi}{2} \\end{cases} \\) is continuous at \\( x = \\frac{\\pi}{2} \\).",
    "marks": 5,
    "solution": "For continuity at $x = \\frac{\\pi}{2}$, we need $\\lim_{x \\to \\frac{\\pi}{2}} f(x) = f(\\frac{\\pi}{2})$.<br>$f(\\frac{\\pi}{2}) = 3$.<br>Now, consider the limit: $\\lim_{x \\to \\frac{\\pi}{2}} \\frac{k \\cos x}{\\pi - 2x}$.<br>Let $y = x - \\frac{\\pi}{2}$. As $x \\to \\frac{\\pi}{2}$, $y \\to 0$. So $x = y + \\frac{\\pi}{2}$.<br>The limit becomes $\\lim_{y \\to 0} \\frac{k \\cos (y + \\frac{\\pi}{2})}{\\pi - 2(y + \\frac{\\pi}{2})} = \\lim_{y \\to 0} \\frac{k (-\\sin y)}{\\pi - 2y - \\pi} = \\lim_{y \\to 0} \\frac{-k \\sin y}{-2y} = \\lim_{y \\to 0} \\frac{k}{2} \\frac{\\sin y}{y}$.<br>We know that $\\lim_{y \\to 0} \\frac{\\sin y}{y} = 1$.<br>So, the limit is $\\frac{k}{2} \\cdot 1 = \\frac{k}{2}$.<br>For continuity, $\\frac{k}{2} = 3$.<br>Therefore, $k = 6$."
  },
  {
"id":10027,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "Find the values of \\( k \\) so that the function \\( f(x) = \\begin{cases} k x^2, & x \\le 2 \\\\ 3, & x > 2 \\end{cases} \\) is continuous at \\( x = 2 \\).",
    "marks": 5,
    "solution": "For continuity at $x=2$, we need LHL = RHL = $f(2)$.<br>LHL at $x=2$: $\\lim_{x \\to 2^-} kx^2 = k(2^2) = 4k$.<br>RHL at $x=2$: $\\lim_{x \\to 2^+} 3 = 3$.<br>$f(2) = k(2^2) = 4k$.<br>For continuity, $4k = 3$.<br>Therefore, $k = \\frac{3}{4}$."
  },
  {
"id":10028,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "Find the values of \\( k \\) so that the function \\( f(x) = \\begin{cases} kx + 1, & x \\le \\pi \\\\ \\cos x, & x > \\pi \\end{cases} \\) is continuous at \\( x = \\pi \\).",
    "marks": 5,
    "solution": "For continuity at $x=\\pi$, we need LHL = RHL = $f(\\pi)$.<br>LHL at $x=\\pi$: $\\lim_{x \\to \\pi^-} (kx + 1) = k\\pi + 1$.<br>RHL at $x=\\pi$: $\\lim_{x \\to \\pi^+} \\cos x = \\cos \\pi = -1$.<br>$f(\\pi) = k\\pi + 1$.<br>For continuity, $k\\pi + 1 = -1$.<br>$k\\pi = -2$.<br>Therefore, $k = -\\frac{2}{\\pi}$."
  }
  // Add more questions and their solutions here
];

function toggleSolution(questionId) {
  const solutionDiv = document.getElementById(`solution-${questionId}`);
  const toggleButton = document.getElementById(`toggle-button-${questionId}`);
  if (solutionDiv.style.display === "none" || solutionDiv.style.display === "") {
    solutionDiv.style.display = "block";
    toggleButton.textContent = "Hide Solution";
  } else {
    solutionDiv.style.display = "none";
    toggleButton.textContent = "Show Solution";
  }
  if (window.MathJax) MathJax.typesetPromise(solutionDiv); // Typeset MathJax if content becomes visible
}

function populateFilters() {
  const classes = [...new Set(questions.map(q => q.class))].sort();
  const subjects = [...new Set(questions.map(q => q.subject))].sort();
  const topics = [...new Set(questions.map(q => q.topic))].sort();
  const years = [...new Set(questions.map(q => q.year))].sort();
  const types = [...new Set(questions.map(q => q.type))].sort();

  const classFilter = document.getElementById('class-filter');
  const subjectFilter = document.getElementById('subject-filter');
  const topicFilter = document.getElementById('topic-filter');
  const yearFilter = document.getElementById('year-filter');
  const typeFilter = document.getElementById('type-filter');

  classes.forEach(c => {
    const option = document.createElement('option');
    option.value = c;
    option.textContent = c;
    classFilter.appendChild(option);
  });

  subjects.forEach(s => {
    const option = document.createElement('option');
    option.value = s;
    option.textContent = s;
    subjectFilter.appendChild(option);
  });

  topics.forEach(t => {
    const option = document.createElement('option');
    option.value = t;
    option.textContent = t;
    topicFilter.appendChild(option);
  });

  years.forEach(y => {
    const option = document.createElement('option');
    option.value = y;
    option.textContent = y;
    yearFilter.appendChild(option);
  });

  types.forEach(ty => {
    const option = document.createElement('option');
    option.value = ty;
    option.textContent = ty;
    typeFilter.appendChild(option);
  });
}


function renderSolutions(filteredQuestions = questions) {
  const solutionList = document.getElementById("solution-list");
  solutionList.innerHTML = "";

  if (filteredQuestions.length === 0) {
    solutionList.textContent = "No questions found matching your search.";
    return;
  }

  filteredQuestions.forEach((q) => { // Removed index here as it's not needed for unique IDs
    const div = document.createElement("div");
    div.className = "question-item";
    let optionsHtml = '';
    if (q.type === "mcq" && q.options) {
      optionsHtml = `<ul>${q.options.map((opt, i) => `<li><strong>${String.fromCharCode(65 + i)}.</strong> ${opt}</li>`).join("")}</ul>`;
    }

    div.innerHTML = `
      <p><strong>Question:</strong> ${q.content}</p>
      ${optionsHtml}
      <button id="toggle-button-${q.id}" onclick="toggleSolution(${q.id})" class="solution-toggle-btn">Show Solution</button>
      <div id="solution-${q.id}" class="solution-content" style="display: none;">
        ${q.type === "mcq" && q.options && q.answer !== undefined ? 
          `<p><strong>Correct Answer:</strong> ${String.fromCharCode(65 + q.answer)} - ${q.options[q.answer]}</p>` : ''}
        <p><strong>Solution:</strong> ${q.solution || 'Solution not available.'}</p>
      </div>
      <hr style="border-top: 1px dashed #eee; margin: 20px 0;">
    `;
    solutionList.appendChild(div);
  });

  if (window.MathJax) MathJax.typesetPromise(); // Initial typeset for questions
}

function searchSolutions() {
  const searchTerm = document.getElementById("solution-search-input").value.toLowerCase();
  const classFilter = document.getElementById('class-filter').value;
  const subjectFilter = document.getElementById('subject-filter').value;
  const topicFilter = document.getElementById('topic-filter').value;
  const yearFilter = document.getElementById('year-filter').value;
  const typeFilter = document.getElementById('type-filter').value;


  const filteredQuestions = questions.filter(q => {
    const matchesSearchTerm = q.content.toLowerCase().includes(searchTerm) ||
                              (q.solution && q.solution.toLowerCase().includes(searchTerm)) ||
                              (q.topic && q.topic.toLowerCase().includes(searchTerm)) ||
                              (q.subject && q.subject.toLowerCase().includes(searchTerm));

    const matchesClass = !classFilter || q.class === classFilter;
    const matchesSubject = !subjectFilter || q.subject === subjectFilter;
    const matchesTopic = !topicFilter || q.topic === topicFilter;
    const matchesYear = !yearFilter || q.year === yearFilter;
    const matchesType = !typeFilter || q.type === typeFilter;

    return matchesSearchTerm && matchesClass && matchesSubject && matchesTopic && matchesYear && matchesType;
  });
  renderSolutions(filteredQuestions);
}

window.onload = () => {
    populateFilters();
    renderSolutions();
};