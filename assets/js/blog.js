// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Load blog posts
fetch('data/blogs.json')
    .then(response => response.json())
    .then(blogs => {
        const grid = document.getElementById('blog-grid');
        blogs.forEach(blog => {
            const card = document.createElement('div');
            card.className = 'blog-card';
            
            const tags = blog.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('');
            
            card.innerHTML = `
                <div class="blog-title">${blog.title}</div>
                <div class="blog-meta">${blog.date}</div>
                <div class="blog-summary">${blog.summary}</div>
                <div class="blog-tags">${tags}</div>
                <a href="blog-template.html?slug=${blog.slug}" class="read-more">Read more →</a>
            `;
            
            card.addEventListener('click', (e) => {
                if (e.target.tagName !== 'A') {
                    window.location.href = `blog-template.html?slug=${blog.slug}`;
                }
            });
            
            grid.appendChild(card);
        });
    });
