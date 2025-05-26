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
    answer: 1
  },
  {
    id: 2,
    class: '12',
    subject: 'Chem',
    topic: 't2',
    year: '2011',
    type: 'short',
    content: 'Explain the law of conservation of mass.'
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
  "answer": 3,
  "solution": "",
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
  "answer": 1,
  "solution": "",
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
    "marks": 5
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
    "marks": 5
  },
  {
"id":10014,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
	"year": "2022",
    "type": "long",
    "format": "text",
    "content": "Discuss the continuity of the function \\( f(x) = \\begin{cases} 3, & 0 \\leq x \\leq 1 \\\\ 4, & 1 < x < 3 \\\\ 5, & 3 \\leq x \\leq 10 \\end{cases} \\).",
    "marks": 6
  },
   {
"id":10014,
    "class": "11",
    "subject": "Math",
    "topic": "Continuity",
    "difficulty": "medium",
    "type": "long",
    "format": "text",
    "content": "Discuss the continuity of the function \\( f(x) = \\begin{cases} 3, & 0 \\leq x \\leq 1 \\\\ 4, & 1 < x < 3 \\\\ 5, & 3 \\leq x \\leq 10 \\end{cases} \\).",
    "marks": 6
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
    "marks": 6
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
    "marks": 6
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
    "marks": 6
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
    "marks": 6
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
    "marks": 6
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
    "marks": 5
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
    "marks": 7
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
    "marks": 6
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
    "marks": 5
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
    "marks": 5
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
    "marks": 5
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
    "marks": 5
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
    "marks": 5
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
    "marks": 5
  }
  // Add more questions as needed
];

let selectedQuestions = [];
let currentPage = 1;
const questionsPerPage = 6; // Number of questions to display per page

// Populate filter dropdowns dynamically from questions
function populateFilters() {
  const filterClass = document.getElementById("filter-class");
  const filterSubject = document.getElementById("filter-subject");
  const filterTopic = document.getElementById("filter-topic");
  const filterYear = document.getElementById("filter-year");
  const filterType = document.getElementById("filter-type");

  // Helper to add unique values to select
  function addOptions(select, values) {
    // Clear existing options first (except the "All" option if it exists)
    select.innerHTML = '<option value="">All</option>';
    const unique = [...new Set(values)].sort();
    unique.forEach(val => {
      const opt = document.createElement("option");
      opt.value = val;
      opt.textContent = val;
      select.appendChild(opt);
    });
  }

  addOptions(filterClass, questions.map(q => q.class));
  addOptions(filterSubject, questions.map(q => q.subject));
  addOptions(filterTopic, questions.map(q => q.topic));
  addOptions(filterYear, questions.map(q => q.year));
  addOptions(filterType, questions.map(q => q.type));
}

let currentFilteredQuestions = []; // Store the currently filtered questions

function applyFiltersAndRender() {
  const filterClass = document.getElementById("filter-class").value;
  const filterSubject = document.getElementById("filter-subject").value;
  const filterTopic = document.getElementById("filter-topic").value;
  const filterYear = document.getElementById("filter-year").value;
  const filterType = document.getElementById("filter-type").value;

  currentFilteredQuestions = questions.filter(q => {
    return (filterClass === "" || q.class == filterClass) &&
           (filterSubject === "" || q.subject === filterSubject) &&
           (filterTopic === "" || q.topic === filterTopic) &&
           (filterYear === "" || String(q.year) === filterYear) &&
           (filterType === "" || q.type === filterType);
  });
  currentPage = 1; // Reset to first page after filtering
  renderQuestions();
}

function renderQuestions() {
  const list = document.getElementById("question-list");
  list.innerHTML = "";

  const totalPages = Math.ceil(currentFilteredQuestions.length / questionsPerPage);
  document.getElementById("page-info").textContent = `Page ${currentPage} of ${totalPages}`;

  document.getElementById("prev-page").disabled = currentPage === 1;
  document.getElementById("next-page").disabled = currentPage === totalPages || totalPages === 0;

  if (currentFilteredQuestions.length === 0) {
    list.textContent = "No questions found for selected filters.";
    return;
  }

  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const questionsToDisplay = currentFilteredQuestions.slice(startIndex, endIndex);

  questionsToDisplay.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question-item";
    div.innerHTML = `
      <p><strong>Class:</strong> ${q.class} | <strong>Subject:</strong> ${q.subject} | <strong>Topic:</strong> ${q.topic} | <strong>Year:</strong> ${q.year} | <strong>Type:</strong> ${q.type}</p>
      <p>${q.content}</p>
      ${q.type === "mcq" ? `
        <ul>
          ${q.options.map((opt, i) => `<li><strong>${String.fromCharCode(65 + i)}.</strong> ${opt}</li>`).join("")}
        </ul>` : ""}
      <button onclick="addQuestionById(${q.id})">Add</button>
    `;
    list.appendChild(div);
  });

  if (window.MathJax) MathJax.typesetPromise();
}

function nextPage() {
  const totalPages = Math.ceil(currentFilteredQuestions.length / questionsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderQuestions();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderQuestions();
  }
}


function addQuestionById(id) {
  const q = questions.find(q => q.id === id);
  if (!q) return;

  // Prevent duplicates by id
  if (!selectedQuestions.some(sel => sel.id === id)) {
    // Add default marks if not present
    const questionToAdd = { ...q, marks: q.marks || 1 };
    selectedQuestions.push(questionToAdd);
    updateSelectedQuestions();
  } else {
    alert("This question is already selected.");
  }
}

function removeQuestion(index) {
  selectedQuestions.splice(index, 1);
  updateSelectedQuestions();
}

function updateMarks(index, value) {
  const newMarks = parseInt(value);
  if (!isNaN(newMarks) && newMarks >= 0) { // Ensure it's a non-negative number
    selectedQuestions[index].marks = newMarks;
  } else {
    alert("Please enter a valid non-negative number for marks.");
    updateSelectedQuestions();
  }
}

function updateSelectedQuestions() {
  const container = document.getElementById("selected-questions");
  container.innerHTML = "";

  if (selectedQuestions.length === 0) {
    container.textContent = "No questions selected.";
    return;
  }

  selectedQuestions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question-item";
    div.innerHTML = `
      <p><strong>Q${index + 1}:</strong> ${q.content}</p>
      ${q.type === "mcq" ? `
        <ul>
          ${q.options.map((opt, i) => `<li><strong>${String.fromCharCode(65 + i)}.</strong> ${opt}</li>`).join("")}
        </ul>` : ""}
      <label>Marks:
        <input type="number" min="0" value="${q.marks || ''}" onchange="updateMarks(${index}, this.value)" />
      </label>
      <button onclick="removeQuestion(${index})">Remove</button>
    `;
    container.appendChild(div);
  });

  if (window.MathJax) MathJax.typesetPromise();
}

function generateQuestionPaper() {
  if (selectedQuestions.length === 0) {
    alert("No questions selected to generate paper!");
    return;
  }

  // Get exam details from input fields
  const examName = document.getElementById("exam-name").value;
  const instituteName = document.getElementById("institute-name").value;
  const paperSubject = document.getElementById("paper-subject").value;
  const examDuration = document.getElementById("exam-duration").value;

  let totalMarks = 0;
  selectedQuestions.forEach(q => {
      totalMarks += q.marks || 0;
  });

  let paperHTML = `<div style="text-align: center; margin-bottom: 30px;">`;
  if (instituteName) paperHTML += `<h1>${instituteName}</h1>`;
  if (examName) paperHTML += `<h2>${examName}</h2>`;
  if (paperSubject) paperHTML += `<h3>Subject: ${paperSubject}</h3>`;
  paperHTML += `<p style="display: flex; justify-content: space-between; width: 80%; margin: 0 auto;">`;
  paperHTML += `<span><strong>Total Marks:</strong> ${totalMarks}</span>`;
  if (examDuration) paperHTML += `<span><strong>Duration:</strong> ${examDuration}</span>`;
  paperHTML += `</p>`;
  paperHTML += `<p style="text-align: right; width: 80%; margin: 5px auto 0 auto;"><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>`;
  paperHTML += `</div>`;
  paperHTML += `<hr style="border: 1px dashed #ccc; margin: 20px auto; width: 80%;">`;

  // Sort questions by type
  const mcqQuestions = selectedQuestions.filter(q => q.type === "mcq");
  const nonMcqQuestions = selectedQuestions.filter(q => q.type !== "mcq");

  // Render MCQ questions first
  if (mcqQuestions.length > 0) {
    paperHTML += `<h3 style="margin-top: 30px;">Part A: Multiple Choice Questions</h3>`;
    mcqQuestions.forEach((q, index) => {
      paperHTML += `<div style="margin-bottom: 25px;">`;
      paperHTML += `<p><strong>Q${index + 1} (${q.marks || 0} marks):</strong> ${q.content}</p>`;
      paperHTML += `<ul style="list-style-type: none; padding-left: 20px;">`;
      q.options.forEach((opt, i) => {
        paperHTML += `<li style="margin-bottom: 5px;"><strong>${String.fromCharCode(65 + i)}.</strong> ${opt}</li>`;
      });
      paperHTML += `</ul>`;
      paperHTML += `</div>`;
    });
  }

  // Render Non-MCQ questions next
  if (nonMcqQuestions.length > 0) {
    paperHTML += `<h3 style="margin-top: 30px;">Part B: Subjective Questions</h3>`;
    nonMcqQuestions.forEach((q, index) => {
      paperHTML += `<div style="margin-bottom: 25px;">`;
      paperHTML += `<p><strong>Q${mcqQuestions.length + index + 1} (${q.marks || 0} marks):</strong> ${q.content}</p>`; // Adjust question numbering
      paperHTML += `</div>`;
    });
  }

  // Add the footer
  paperHTML += `<div style="text-align: center; margin-top: 50px; font-size: 0.9em; color: #777;">`;
  paperHTML += `<p>Question paper generated by: <a href="http://Qpapergen.com" target="_blank" style="color: #007bff; text-decoration: none;">Qpapergen.com</a></p>`;
  paperHTML += `</div>`;


  const win = window.open('', '_blank');
  win.document.write(`
    <html>
      <head>
        <title>Generated Question Paper</title>
        <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>
        <style>
          body { font-family: 'Times New Roman', serif; padding: 30px; font-size: 11pt; }
          h1 { text-align: center; margin-bottom: 10px; color: #333; font-size: 1.8em; }
          h2 { text-align: center; margin-bottom: 15px; color: #333; font-size: 1.5em; }
          h3 { text-align: center; margin-bottom: 20px; color: #555; font-size: 1.2em; }
          p { margin-bottom: 10px; }
          strong { font-weight: bold; }
          ul { list-style-type: none; padding-left: 0; margin-top: 10px; }
          li { margin-bottom: 5px; }
          /* MathJax configuration for the new window */
          #MathJax_Message { display: none !important; }
        </style>
      </head>
      <body>
        ${paperHTML}
        <script>
          window.MathJax = {
            tex: {
              inlineMath: [['$', '$'], ['\\\\(', '\\\\)']]
            },
            startup: {
              typeset: true
            }
          };
          if (window.MathJax) {
            MathJax.startup.promise.then(() => {
              console.log('MathJax typeset in new window.');
            }).catch((err) => {
              console.error('MathJax typesetting error in new window:', err);
            });
          }
        <\/script>
      </body>
    </html>
  `);
  win.document.close();
}

window.onload = () => {
  populateFilters();

  ["filter-class", "filter-subject", "filter-topic", "filter-year", "filter-type"].forEach(id => {
    document.getElementById(id).addEventListener("change", applyFiltersAndRender);
  });

  document.getElementById("prev-page").addEventListener("click", prevPage);
  document.getElementById("next-page").addEventListener("click", nextPage);

  applyFiltersAndRender();
  updateSelectedQuestions();
};