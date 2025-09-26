document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('name').textContent = cvData.personal.fullName;
  document.getElementById('title').textContent = cvData.personal.title;
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // About
  document.getElementById('about-content').textContent = cvData.personal.summary;

  // Contact
  const contactList = document.getElementById('contact-list');
  Object.entries(cvData.personal.contact).forEach(([key, value]) => {
    if (!value) return;
    const li = document.createElement('li');
    const label = key.replace(/([A-Z])/g, ' $1');
    if (value.startsWith('http')) {
      const a = document.createElement('a');
      a.href = value;
      a.target = '_blank';
      a.textContent = label.charAt(0).toUpperCase() + label.slice(1);
      li.appendChild(a);
    } else {
      li.innerHTML = `<strong>${label.charAt(0).toUpperCase() + label.slice(1)}:</strong> ${value}`;
    }
    contactList.appendChild(li);
  });

  // Timeline builder (reused for experience and education)
  function buildTimeline(data, containerId) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
      const entry = document.createElement('div');
      entry.className = 'timeline-item';
      const heading = document.createElement('h3');
      heading.textContent = `${item.title || item.degree} – ${item.organization || item.institution}`;
      const dateRange = document.createElement('span');
      dateRange.className = 'date-range';
      dateRange.textContent = `${item.start} – ${item.end}`;
      entry.appendChild(heading);
      entry.appendChild(dateRange);

      // Additional details
      if (item.field) {
        const details = document.createElement('p');
        details.innerHTML = `<strong>Field:</strong> ${item.field}`;
        if (item.thesisTitle) details.innerHTML += `<br><strong>Thesis:</strong> ${item.thesisTitle}`;
        if (item.supervisor) details.innerHTML += `<br><strong>Supervisor:</strong> ${item.supervisor}`;
        if (item.distinction) details.innerHTML += `<br><strong>Distinction:</strong> ${item.distinction}`;
        entry.appendChild(details);
      } else {
        const loc = document.createElement('p');
        loc.style.fontStyle = 'italic';
        loc.textContent = item.location;
        entry.appendChild(loc);
      }

      // Bullet points
      if (item.details) {
        const ul = document.createElement('ul');
        item.details.forEach(d => {
          const li = document.createElement('li');
          li.textContent = d;
          ul.appendChild(li);
        });
        entry.appendChild(ul);
      }
      container.appendChild(entry);
    });
  }
  buildTimeline(cvData.professionalExperience, 'experience-list');
  buildTimeline(cvData.education, 'education-list');

  // Publications
  const pubs = document.getElementById('publications-list');
  if (cvData.publications.journals.length > 0) {
    const section = document.createElement('div');
    section.className = 'publications-category';
    const heading = document.createElement('h3');
    heading.textContent = 'International Journals';
    section.appendChild(heading);
    const ul = document.createElement('ul');
    cvData.publications.journals.forEach(article => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${article.authors}</strong>. “${article.title}.” <em>${article.venue}</em> (${article.year}).`;
      const details = [];
      if (article.details.volume) details.push(`Vol. ${article.details.volume}`);
      if (article.details.pages) details.push(`pp. ${article.details.pages}`);
      if (article.details.doi) details.push(`<a href="${article.details.doi}" target="_blank">DOI</a>`);
      if (article.details.impactFactor) details.push(`Impact Factor: ${article.details.impactFactor}`);
      if (details.length > 0) li.innerHTML += ` ${details.join(', ')}`;
      ul.appendChild(li);
    });
    section.appendChild(ul);
    pubs.appendChild(section);
  }

  // Conferences (similar logic omitted for brevity)

  // Service, Teaching and Bibliometrics sections use similar loops
});
