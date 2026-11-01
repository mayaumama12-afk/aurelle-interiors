/**
 * AURELLE Interiors — Luxury Interior Design Studio
 * Interactive Frontend Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. Cache Key DOM Elements ---
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileClose = document.getElementById('mobileMenuClose');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const openConsultationBtn = document.getElementById('openConsultationBtn');
  const mobileConsultationBtn = document.getElementById('mobileConsultationBtn');
  const consultationModal = document.getElementById('consultationModal');
  const closeConsultModal = document.getElementById('closeConsultModal');
  const consultForm = document.getElementById('consultationModalForm');
  const consultSuccessMsg = document.getElementById('consultSuccessMsg');

  const projectModal = document.getElementById('projectModal');
  const closeProjectModal = document.getElementById('closeProjectModal');
  const modalProjectContent = document.getElementById('modalProjectContent');
  const projectCards = document.querySelectorAll('.project-card');
  const filterBtns = document.querySelectorAll('.filter-btn');

  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formNotification = document.getElementById('formNotification');
  const projectTypeSelect = document.getElementById('projectType');
  const toastContainer = document.getElementById('toastContainer');

  // --- 2. Project Portfolio Database ---
  const projectsData = {
    'modern-residence': {
      title: 'The Modern Residence',
      year: '2025',
      location: 'Cotswolds, United Kingdom',
      scope: 'Complete Architectural Renovation & Interior Curation',
      area: '6,200 sq.ft / 576 m²',
      materials: 'Cotswold Limestone, Belgian Smoked Oak, Hand-Washed Linen, Gunmetal Steel',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: 'Nestled in the rolling hills of the Cotswolds, this Grade-II listed property demanded a sensitive dialogue between centuries-old honey limestone masonry and razor-sharp contemporary glass pavilions. AURELLE opened historic cellular rooms into a luminous sequence of interconnected sanctuaries, highlighting sweeping valley vistas through floor-to-ceiling minimal frames. Bespoke millwork in brushed oak anchors the study, while a double-sided fluted hearth unites the grand reception and library.'
    },
    'olive-house': {
      title: 'The Olive House',
      year: '2024',
      location: 'Provence, France',
      scope: 'Historic Bastide Restoration & Landscape Integration',
      area: '4,800 sq.ft / 445 m²',
      materials: 'Hand-Chiseled Travertine, Raw Limewash, Muted Bronze Ironmongery, Reclaimed Terracotta',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      description: 'Surrounded by century-old olive groves, The Olive House is an ode to understated Provencal restraint. Every wall was treated with artisanal chalk limewash to softly diffuse Mediterranean daylight. The studio designed a continuous ground floor of pale travertine, flowing seamlessly onto shaded pergola courtyards. Custom furniture clad in untreated linens and low-sheen walnut pieces provide a tranquil counterweight to the intense summer sun.'
    },
    'contemporary-living': {
      title: 'Contemporary Living',
      year: '2025',
      location: 'Kensington, London',
      scope: 'Victorian Townhouse Full Architectural Overhaul',
      area: '3,900 sq.ft / 362 m²',
      materials: 'Calacatta Paonazzo Marble, Fluted Walnut, Pierre Jeanneret Collectibles, Cashmere Drapery',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      description: 'A grand five-storey Victorian townhouse re-imagined for modern family sanctuary in Central London. High ornate ceilings were preserved and counterbalanced by monolithic architectural volumes in honed Italian marble. Acoustic drapery and concealed shadow gaps create exceptional quietude within the city. The living room features an asymmetric curved sofa commissioned from Parisian ateliers and vintage lighting by Serge Mouille.'
    },
    'minimal-apartment': {
      title: 'The Minimal Apartment',
      year: '2024',
      location: 'Tribeca, New York',
      scope: 'Penthouse Loft Space Planning & Custom Furnishings',
      area: '3,400 sq.ft / 315 m²',
      materials: 'Poured Microcement, Patinated Brass, Heavy Washed Linen, Cast Bronze Sculptures',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      description: 'Stripped of extraneous drywall and decorative excess, this Tribeca corner loft is anchored by sheer volumetric purity. A twenty-foot monolithic island of brushed brass and quartzite forms the social core of the apartment. High acoustic ceilings and bleached pine flooring bounce soft northern daylight, creating a meditative retreat high above Manhattan’s cobbled streets.'
    }
  };

  // --- 3. Sticky Header & Scroll Spy ---
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy for navigation
    const sections = document.querySelectorAll('section[id], header[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- 4. Mobile Menu Drawer Navigation ---
  const openMobileMenu = () => {
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  mobileToggle?.addEventListener('click', openMobileMenu);
  mobileClose?.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // --- 5. Project Filtering ---
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // --- 6. Project Details Lightbox / Modal ---
  const openProjectDetails = (projectId) => {
    const data = projectsData[projectId];
    if (!data) return;

    modalProjectContent.innerHTML = `
      <div class="project-modal-grid">
        <div class="modal-project-media">
          <img src="${data.image}" alt="${data.title} by AURELLE Interiors" class="modal-project-img">
        </div>
        <div class="modal-project-details">
          <div class="section-badge">${data.location}</div>
          <h3 id="modalProjectTitle" class="modal-title">${data.title}</h3>
          
          <div class="modal-project-meta-list">
            <div class="modal-meta-row">
              <span class="modal-meta-label">Completion Year</span>
              <span class="modal-meta-value">${data.year}</span>
            </div>
            <div class="modal-meta-row">
              <span class="modal-meta-label">Project Scope</span>
              <span class="modal-meta-value">${data.scope}</span>
            </div>
            <div class="modal-meta-row">
              <span class="modal-meta-label">Interior Area</span>
              <span class="modal-meta-value">${data.area}</span>
            </div>
            <div class="modal-meta-row">
              <span class="modal-meta-label">Key Materials</span>
              <span class="modal-meta-value">${data.materials}</span>
            </div>
          </div>

          <p class="modal-project-desc">${data.description}</p>

          <div style="margin-top: auto; display: flex; gap: 1rem; flex-wrap: wrap;">
            <button type="button" class="btn btn-primary" id="inquireThisProjectBtn" data-title="${data.title}">
              Inquire About Similar Project
            </button>
            <button type="button" class="btn btn-secondary" id="modalDismissBtn">
              Close Overview
            </button>
          </div>
        </div>
      </div>
    `;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Hook up modal internal CTA
    document.getElementById('inquireThisProjectBtn')?.addEventListener('click', () => {
      closeModal(projectModal);
      if (projectTypeSelect) {
        projectTypeSelect.value = 'Residential Interior Design';
      }
      const messageField = document.getElementById('contactMessage');
      if (messageField) {
        messageField.value = `I am inspired by your work on "${data.title}" and would like to discuss a project with a similar architectural approach...`;
      }
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    });

    document.getElementById('modalDismissBtn')?.addEventListener('click', () => {
      closeModal(projectModal);
    });
  };

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-project-id');
      openProjectDetails(pid);
    });
  });

  // Footer links to projects
  document.querySelectorAll('.footer-project-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const pid = trigger.getAttribute('data-project-id');
      openProjectDetails(pid);
    });
  });

  // --- 7. Consultation Modal Handling ---
  const openConsultation = () => {
    consultationModal.classList.add('open');
    consultationModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeMobileMenu();
  };

  const closeModal = (modal) => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openConsultationBtn?.addEventListener('click', openConsultation);
  mobileConsultationBtn?.addEventListener('click', openConsultation);
  closeConsultModal?.addEventListener('click', () => closeModal(consultationModal));
  closeProjectModal?.addEventListener('click', () => closeModal(projectModal));

  // Close modals on backdrop click
  [consultationModal, projectModal].forEach(modal => {
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (consultationModal.classList.contains('open')) closeModal(consultationModal);
      if (projectModal.classList.contains('open')) closeModal(projectModal);
      if (mobileDrawer.classList.contains('open')) closeMobileMenu();
    }
  });

  // Consultation modal form submission
  consultForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('consultName');
    const name = nameInput.value.trim();

    consultSuccessMsg.style.display = 'block';
    consultSuccessMsg.textContent = `Thank you, ${name}. Your consultation request has been lodged. Our atelier team will confirm availability shortly.`;

    showToast(`Consultation request received for ${name}`);

    setTimeout(() => {
      consultForm.reset();
      consultSuccessMsg.style.display = 'none';
      closeModal(consultationModal);
    }, 2800);
  });

  // --- 8. Service Inquire Link Pre-selection ---
  document.querySelectorAll('.service-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const serviceName = link.getAttribute('data-service');
      if (serviceName && projectTypeSelect) {
        for (let i = 0; i < projectTypeSelect.options.length; i++) {
          if (projectTypeSelect.options[i].value === serviceName) {
            projectTypeSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });

  // --- 9. Contact Form Validation & Submission ---
  if (contactForm) {
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const messageInput = document.getElementById('contactMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const typeError = document.getElementById('typeError');
    const messageError = document.getElementById('messageError');

    const clearErrors = () => {
      nameError.textContent = '';
      emailError.textContent = '';
      typeError.textContent = '';
      messageError.textContent = '';
      formNotification.style.display = 'none';
      formNotification.className = 'form-notification';
    };

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      let isValid = true;
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const projectType = projectTypeSelect.value;
      const message = messageInput.value.trim();

      // Validate Name
      if (!name) {
        nameError.textContent = 'Please provide your full name.';
        isValid = false;
      } else if (name.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters.';
        isValid = false;
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        emailError.textContent = 'Please provide your email address.';
        isValid = false;
      } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email format.';
        isValid = false;
      }

      // Validate Project Type
      if (!projectType) {
        typeError.textContent = 'Please select a project type.';
        isValid = false;
      }

      // Validate Message
      if (!message) {
        messageError.textContent = 'Please share an overview of your project requirements.';
        isValid = false;
      } else if (message.length < 15) {
        messageError.textContent = 'Please provide a brief outline (minimum 15 characters).';
        isValid = false;
      }

      if (!isValid) return;

      // Simulate sending with loading state
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;

        formNotification.className = 'form-notification success';
        formNotification.innerHTML = `
          <strong>Inquiry Successfully Received</strong><br>
          Thank you, ${name}. Your commission request for <em>${projectType}</em> has been securely delivered to our Mayfair and Paris ateliers. Elena Vance or Marcus Thorne will personally review your brief and respond within two business days.
        `;

        contactForm.reset();
        showToast('Inquiry delivered to AURELLE Studio');
      }, 1100);
    });
  }

  // --- 10. Toast Notification Engine ---
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--color-muted-bronze);">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }
});
