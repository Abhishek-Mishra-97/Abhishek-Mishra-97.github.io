// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Load Experience
fetch('data/experience.json')
    .then(response => response.json())
    .then(data => {
        const timeline = document.getElementById('experience-timeline');
        data.forEach(exp => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            
            const description = exp.description.map(d => `<li>${d}</li>`).join('');
            const technologies = exp.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('');
            
            item.innerHTML = `
                <div class="timeline-title">${exp.title}</div>
                <div class="timeline-company">${exp.company}</div>
                <div class="timeline-duration">${exp.duration}</div>
                <ul class="timeline-description">${description}</ul>
                <div class="tech-tags">${technologies}</div>
            `;
            timeline.appendChild(item);
        });
    });

// Load Education
fetch('data/education.json')
    .then(response => response.json())
    .then(data => {
        const grid = document.getElementById('education-cards');
        data.forEach(edu => {
            const card = document.createElement('div');
            card.className = 'education-card';
            card.innerHTML = `
                <div class="education-degree">${edu.degree}</div>
                <div class="education-university">${edu.university}</div>
                <div class="education-year">${edu.year}</div>
                ${edu.description ? `<p style="margin-top: 10px; color: var(--text-light);">${edu.description}</p>` : ''}
            `;
            grid.appendChild(card);
        });
    });

// Load Projects
fetch('data/projects.json')
    .then(response => response.json())
    .then(data => {
        const grid = document.getElementById('projects-grid');
        data.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            
            const technologies = project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('');
            const links = `
                ${project.github ? `<a href="${project.github}" class="project-link" target="_blank"><i class="fab fa-github"></i> GitHub</a>` : ''}
                ${project.demo ? `<a href="${project.demo}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
            `;
            
            card.innerHTML = `
                <div class="project-title">${project.title}</div>
                <div class="project-description">${project.description}</div>
                <div class="tech-tags">${technologies}</div>
                <div class="project-links">${links}</div>
            `;
            grid.appendChild(card);
        });
    });

// Load Skills
fetch('data/skills.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('skills-container');
        Object.keys(data).forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'skill-category';
            
            const skills = data[category].map(skill => `<span class="skill-badge">${skill}</span>`).join('');
            
            categoryDiv.innerHTML = `
                <div class="skill-category-title">${category}</div>
                <div class="skill-items">${skills}</div>
            `;
            container.appendChild(categoryDiv);
        });
    });

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item, .education-card, .project-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
