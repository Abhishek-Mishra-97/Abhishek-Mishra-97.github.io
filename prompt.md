You are an expert full-stack web developer, UI/UX designer, and static website architect.  
Create a complete, modern portfolio website that will be hosted on GitHub Pages.

## 🔥 OVERALL GOAL
Build a **single-scroll portfolio website** with a **professional, clean, new-age design**, smooth animations, and a **separate blog page**.  
The site should be fully static (HTML/CSS/JS), mobile responsive, and support adding content via structured JSON/YAML files.

## 🧩 TECH STACK
- HTML5 + CSS3 (Tailwind or clean CSS)  
- Vanilla JavaScript  
- No backend  
- All content must load from JSON files to make editing simple  
- Website must work on GitHub Pages

---

# 🎨 DESIGN GUIDELINES
- New-age, minimalistic UI (think: modern portfolio templates + glassmorphism / soft gradients)  
- Smooth scroll with navbar anchor links  
- Nice hover animations for cards/buttons  
- Consistent typography and spacing  
- Use icons (FontAwesome or similar) for social links  
- Light theme preferred  
- Mobile-first design

---

# 📌 WEBSITE STRUCTURE & SECTIONS

## ✔️ 1. Sticky Top Navigation Bar
Tabs that scroll to each section:
- Home
- Experience
- Education
- Projects
- Skills
- Blog
- Contact

Navbar should highlight active section during scroll.

---

## ✔️ 2. **Hero Section (Home)**
A full-width top section containing:
- Large hero title: Name
- Sub-title: Role (ex: Senior AI / ML / MLOps Engineer)
- Circular profile photo on right (or left)
- Short 2–3 line summary
- A “Download Resume” button
- Smooth entrance animation

---

## ✔️ 3. **Experience Section**  
A chronological timeline component.  
Each timeline entry should show:
- Job title  
- Company  
- Duration  
- Description bullets  
- Technologies used  

Load all entries from `data/experience.json`.

---

## ✔️ 4. **Education Section**
Simple cards or list format:
- Degree  
- University  
- Year  
- Description (optional)

Load from `data/education.json`.

---

## ✔️ 5. **Projects Section**
Projects displayed as **tiles/cards** with:
- Title  
- Short description  
- Technologies used (badges)  
- GitHub link button  
- Optional demo link  

Tiles should animate on hover.

Load from:  
`data/projects.json`

---

## ✔️ 6. **Skills Section**
Design skills in a grouped format:

**Categories example:**  
- AI  
- GenAI  
- Vector Databases  
- MLOps  
- Backend Development  
- Cloud  

Inside each category show chips/badges for sub-skills.

Example structure in `data/skills.json`:
{
"AI": ["Neural Networks", "Model Training", "RL"],
"GenAI": ["RAG", "LLMs", "Prompt Engineering"],
"Vector DB": ["FAISS", "Pinecone", "Weaviate"],
"Backend": ["Golang", "C++", "Python"],
...
}

Display skills as:
- Collapsible groups OR  
- Grid with categories → inside category, list of skill badges  

Choose whichever looks more modern.

---

## ✔️ 7. **Blog Listing Page**
This page is separate (`blog.html`) and linked from navbar.

Show blog posts as tiles:
- Title  
- Short summary  
- Tag(s)  
- “Read more” button  
- Smooth hover animation

Pages should fetch metadata from `data/blogs.json`.

Each blog opens a new page:  
`/blog/<slug>.html`

---

## ✔️ 8. **Blog Article Page**
Template should include:
- Blog title  
- Publish date  
- Estimated read time  
- Full article body (Markdown support preferred)  

Articles stored as Markdown in folder:
`/blogs/*.md`

The article page should load markdown and render to HTML using a JS markdown parser.

---

## ✔️ 9. **Contact Section**
Show:
- Phone  
- Email  
- Simple contact form with email “mailto” link  
- Clean layout  

---

## ✔️ 10. **Footer**
Footer should include:
- © YOUR NAME (current year)
- Icons linking to:
  - GitHub
  - LinkedIn
  - Twitter
  - Email

Footer must be minimal and centered.

---

# 📂 FOLDER STRUCTURE
Generate a project like this:

/index.html
/blog.html
/blog-template.html
/assets/
/images/
/css/style.css
/js/main.js
/js/blog.js
/data/
experience.json
education.json
projects.json
skills.json
blogs.json
/blogs/
<slug1>.md
<slug2>.md



---

# 🧠 FUNCTIONAL REQUIREMENTS

### ⭐ Content Loading
All sections except Hero + Contact must load from JSON to make updates simple.

### ⭐ Internal Smooth Scrolling
Anchor links should scroll smoothly to each section.

### ⭐ Responsive Design
Should work properly on:
- Desktop  
- Tablet  
- Mobile  

### ⭐ Animations
- Fade-in when scrolling  
- Hover animations on tiles  
- Smooth navbar transitions  

### ⭐ SEO & Meta Tags
Add default:
- Title  
- Description  
- OpenGraph  
- Favicon  

---

# 📄 WHAT YOU MUST RETURN
You must generate:

1. `index.html`  
2. `blog.html`  
3. `blog-template.html`  
4. `assets/css/style.css`  
5. `assets/js/main.js`  
6. `assets/js/blog.js`  
7. Sample JSON files  
8. Sample blog markdown files  
9. Any additional assets needed  

All code should be clean, modular, and ready for GitHub Pages.


