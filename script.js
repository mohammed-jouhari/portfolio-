// Populate content from cvData (existing logic)
document.addEventListener('DOMContentLoaded', () => {
  // name, title, year
  document.getElementById('name').textContent = cvData.personal.fullName;
  document.getElementById('title').textContent = cvData.personal.title;
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // about
  document.getElementById('about-content').textContent = cvData.personal.summary;

  // contact
  const contactList = document.getElementById('contact-list');
  Object.entries(cvData.personal.contact).forEach(([key, value]) => {
    if (!value) return;
    const li = document.createElement('li');
    const label = key.replace(/([A-Z])/g, ' $1');
    if (typeof value === 'string' && value.startsWith('http')) {
      const a = document.createElement('a');
      a.href = value; a.target = '_blank';
      a.textContent = label.charAt(0).toUpperCase() + label.slice(1);
      li.appendChild(a);
    } else {
      li.innerHTML = `<strong>${label.charAt(0).toUpperCase() + label.slice(1)}:</strong> ${value}`;
    }
    contactList.appendChild(li);
  });

  // helper to build timelines
  function buildTimeline(data, containerId) {
    const container = document.getElementById(containerId);
    if (!Array.isArray(data) || !container) return;
    data.forEach(item => {
      const entry = document.createElement('div');
      entry.className = 'timeline-item';

      const title = item.title || item.degree || '';
      const org = item.organization || item.institution || '';
      const heading = document.createElement('h3');
      heading.textContent = `${title} – ${org}`;
      const dateRange = document.createElement('span');
      dateRange.className = 'date-range';
      dateRange.textContent = `${item.start || ''} – ${item.end || ''}`;

      entry.appendChild(heading);
      entry.appendChild(dateRange);

      // experience vs education details
      if (item.field) {
        const details = document.createElement('p');
        details.innerHTML = `<strong>Field:</strong> ${item.field}`;
        if (item.thesisTitle) details.innerHTML += `<br><strong>Thesis:</strong> ${item.thesisTitle}`;
        if (item.supervisor) details.innerHTML += `<br><strong>Supervisor:</strong> ${item.supervisor}`;
        if (item.distinction) details.innerHTML += `<br><strong>Distinction:</strong> ${item.distinction}`;
        entry.appendChild(details);
      } else if (item.location) {
        const loc = document.createElement('p');
        loc.style.fontStyle = 'italic';
        loc.textContent = item.location;
        entry.appendChild(loc);
      }

      if (Array.isArray(item.details)) {
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

  // publications
  const pubs = document.getElementById('publications-list');
  if (pubs && cvData.publications) {
    if (Array.isArray(cvData.publications.journals) && cvData.publications.journals.length) {
      const section = document.createElement('div');
      const h3 = document.createElement('h3'); h3.textContent = 'International Journals';
      section.appendChild(h3);
      const ul = document.createElement('ul');
      cvData.publications.journals.forEach(a => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${a.authors}</strong>. “${a.title}.” <em>${a.venue}</em> (${a.year}).`;
        const more = [];
        if (a.details?.volume) more.push(`Vol. ${a.details.volume}`);
        if (a.details?.pages) more.push(`pp. ${a.details.pages}`);
        if (a.details?.doi) more.push(`<a href="${a.details.doi}" target="_blank">DOI</a>`);
        if (a.details?.impactFactor) more.push(`Impact Factor: ${a.details.impactFactor}`);
        if (more.length) li.innerHTML += ` ${more.join(', ')}`;
        ul.appendChild(li);
      });
      section.appendChild(ul);
      pubs.appendChild(section);
    }
    if (Array.isArray(cvData.publications.conferences) && cvData.publications.conferences.length) {
      const section = document.createElement('div');
      const h3 = document.createElement('h3'); h3.textContent = 'International Conferences';
      section.appendChild(h3);
      const ul = document.createElement('ul');
      cvData.publications.conferences.forEach(a => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${a.authors}</strong>. “${a.title}.” <em>${a.venue}</em> (${a.year}).`;
        if (a.details?.doi) li.innerHTML += ` <a href="${a.details.doi}" target="_blank">DOI</a>`;
        ul.appendChild(li);
      });
      section.appendChild(ul);
      pubs.appendChild(section);
    }
    // Book Chapters
    if (cvData.publications.bookChapters && cvData.publications.bookChapters.length) {
      const section = document.createElement('div');
      const h3 = document.createElement('h3'); h3.textContent = 'Book Chapters';
      section.appendChild(h3);
    
      const ul = document.createElement('ul');
      cvData.publications.bookChapters.forEach(ch => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${ch.authors}</strong>. “${ch.title}.” In <em>${ch.bookTitle}</em>, ${ch.publisher} (${ch.year}).`;
        const more = [];
        if (ch.series) more.push(ch.series);
        if (ch.volume) more.push(`Vol. ${ch.volume}`);
        if (ch.pages) more.push(`pp. ${ch.pages}`);
        if (ch.details?.doi) more.push(`<a href="${ch.details.doi}" target="_blank">DOI</a>`);
        if (ch.details?.url) more.push(`<a href="${ch.details.url}" target="_blank">Link</a>`);
        if (more.length) li.innerHTML += ` ${more.join(', ')}`;
        ul.appendChild(li);
      });
    
      section.appendChild(ul);
      pubs.appendChild(section);
    }

  }

  // services
  const svc = document.getElementById('service-content');
  if (svc && cvData.services) {
    if (Array.isArray(cvData.services.editorialBoard)) {
      const h3 = document.createElement('h3'); h3.textContent = 'Editorial Board Membership';
      svc.appendChild(h3);
      const ul = document.createElement('ul');
      cvData.services.editorialBoard.forEach(x => {
        const li = document.createElement('li');
        li.textContent = `${x.role}, ${x.publication} (since ${x.since})`;
        ul.appendChild(li);
      });
      svc.appendChild(ul);
    }
    if (Array.isArray(cvData.services.tpc)) {
      const h3 = document.createElement('h3'); h3.textContent = 'Technical Program Committees';
      svc.appendChild(h3);
      const ul = document.createElement('ul');
      cvData.services.tpc.forEach(x => {
        const li = document.createElement('li');
        li.textContent = `${x.event} — ${x.period}`;
        ul.appendChild(li);
      });
      svc.appendChild(ul);
    }
  }

  // teaching
  const teachingList = document.getElementById('teaching-list');
  if (teachingList && Array.isArray(cvData.teaching)) {
    cvData.teaching.forEach(c => {
      const li = document.createElement('li');
      li.textContent = `${c.course} (${c.hours}h) — ${c.program}, ${c.institution} [${c.academicYear}]`;
      teachingList.appendChild(li);
    });
  }

  // bibliometrics
  const bmTable = document.getElementById('bibliometrics-table');
  if (bmTable && cvData.bibliometrics) {
    bmTable.innerHTML = `
      <tr><th>Indicator</th><th>Google Scholar</th><th>Scopus</th></tr>
      <tr><td>Citations</td><td>${cvData.bibliometrics.googleScholar?.citations ?? '-'}</td><td>${cvData.bibliometrics.scopus?.citations ?? '-'}</td></tr>
      <tr><td>h-index</td><td>${cvData.bibliometrics.googleScholar?.hIndex ?? '-'}</td><td>${cvData.bibliometrics.scopus?.hIndex ?? '-'}</td></tr>
      <tr><td>i10-index</td><td>${cvData.bibliometrics.googleScholar?.i10Index ?? '-'}</td><td>–</td></tr>
    `;
  }

  // --- single-section routing ---
  const sections = Array.from(document.querySelectorAll('.section'));
  const navLinks = Array.from(document.querySelectorAll('.navigation a'));

  function setActiveSection(id, pushHash = true) {
    const fallback = sections[0]?.id || null;
    const targetId = id && document.getElementById(id) ? id : fallback;
    if (!targetId) return;

    sections.forEach(sec => {
      const isActive = sec.id === targetId;
      sec.classList.toggle('active', isActive);
      sec.setAttribute('aria-hidden', String(!isActive));
      if (isActive) {
        const h = sec.querySelector('h2, h1, [role="heading"]');
        if (h && h.focus) setTimeout(() => h.focus(), 0);
      }
    });

    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('data-target') === targetId);
    });

    if (pushHash) {
      const newHash = '#' + targetId;
      if (location.hash !== newHash) history.pushState(null, '', newHash);
    }
  }

  navLinks.forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = a.getAttribute('data-target');
      setActiveSection(target, true);
    });
  });

  window.addEventListener('hashchange', () => {
    setActiveSection(location.hash.replace('#', ''), false);
  });

  // Initial render (honor deep link; default to first section)
  setActiveSection(location.hash.replace('#', ''), false);
});
